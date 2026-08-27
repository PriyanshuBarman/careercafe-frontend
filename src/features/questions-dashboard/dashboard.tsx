"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterRemoveIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { useDebounce } from "@/hooks/use-debounce";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Button } from "@/components/ui/button";
import ChangeDirectionCard from "./components/change-direction-card";
import PaginationButtons from "./components/pagination-buttons";
import QuestionsTable from "./components/questions-table";
import SearchBar from "./components/searchbar";
import SubjectBookmarkDificultyFilter from "./components/subject-bookmark-dificulty-filter";
import TypeAndTopicFilter, {
  type QuestionTypeFilter,
} from "./components/type-and-topic-filter";
import { QUESTIONS } from "./data/questions";
import type { AnalystDirection, Difficulty, Subject } from "./types/question";
import { filterQuestions } from "./utils/filter-questions";

const QUESTIONS_PER_PAGE = 10;

type Filters = Record<string, string | string[]>;

export function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const initialSubjects = searchParams.getAll("subject") as Subject[];
  const initialDifficulties = searchParams.getAll("difficulty") as Difficulty[];
  const initialTopics = searchParams.getAll("topic");
  const initialType =
    (searchParams.get("type") as QuestionTypeFilter) || "All Types";
  const initialDirection =
    (searchParams.get("direction") as AnalystDirection) || "Data & BI";
  const initialBookmarksOnly = searchParams.get("bookmarks") === "true";
  const initialPage = Math.max(1, Number(searchParams.get("page")) || 1);

  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query);
  const [selectedSubjects, setSelectedSubjects] =
    useState<Subject[]>(initialSubjects);
  const [selectedDifficulties, setSelectedDifficulties] =
    useState<Difficulty[]>(initialDifficulties);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(initialTopics);
  const [selectedType, setSelectedType] =
    useState<QuestionTypeFilter>(initialType);
  const [selectedDirection, setSelectedDirection] =
    useState<AnalystDirection>(initialDirection);
  const [bookmarksOnly, setBookmarksOnly] =
    useState<boolean>(initialBookmarksOnly);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>(
    "bookmarks-ids",
    [],
  );

  const hasActiveFilters = Boolean(
    query.trim() ||
    selectedSubjects.length > 0 ||
    selectedDifficulties.length > 0 ||
    selectedTopics.length > 0 ||
    selectedType !== "All Types" ||
    bookmarksOnly,
  );

  const handleClearFilters = () => {
    setQuery("");
    setSelectedSubjects([]);
    setSelectedDifficulties([]);
    setSelectedTopics([]);
    setSelectedType("All Types");
    setBookmarksOnly(false);
    setCurrentPage(1);
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev = []) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleTopicToggle = (topic: string) => {
    setCurrentPage(1);
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleTypeChange = (type: QuestionTypeFilter) => {
    setCurrentPage(1);
    setSelectedType(type);
  };

  const handleDirectionChange = (direction: AnalystDirection) => {
    setCurrentPage(1);
    setSelectedDirection(direction);
  };

  const handleSubjectsChange = (subjects: Subject[]) => {
    setCurrentPage(1);
    setSelectedSubjects(subjects);
  };

  const handleDifficultiesChange = (difficulties: Difficulty[]) => {
    setCurrentPage(1);
    setSelectedDifficulties(difficulties);
  };

  const handleQueryChange = (newQuery: string) => {
    setCurrentPage(1);
    setQuery(newQuery);
  };

  const updateUrlParams = useCallback(
    (filters: Filters) => {
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (!value) return;

        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (item) params.append(key, String(item));
          });
        } else if (typeof value === "string" && value.trim()) {
          params.set(key, value.trim());
        }
      });

      const queryString = params.toString();
      const newParams = queryString ? `${pathname}?${queryString}` : pathname;
      router.replace(newParams, { scroll: false });
    },
    [pathname, router],
  );

  const filteredQuestions = filterQuestions({
    questions: QUESTIONS,
    direction: selectedDirection,
    query: debouncedQuery,
    subjects: selectedSubjects,
    difficulties: selectedDifficulties,
    type: selectedType,
    topics: selectedTopics,
    bookmarksOnly,
    bookmarkedIds,
  });

  const totalQuestions = filteredQuestions.length;
  const totalPages = Math.ceil(totalQuestions / QUESTIONS_PER_PAGE);
  const safeCurrentPage =
    totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const paginatedQuestions = filteredQuestions.slice(
    (safeCurrentPage - 1) * QUESTIONS_PER_PAGE,
    safeCurrentPage * QUESTIONS_PER_PAGE,
  );

  useEffect(() => {
    updateUrlParams({
      direction: selectedDirection,
      query: debouncedQuery,
      subject: selectedSubjects,
      difficulty: selectedDifficulties,
      type: selectedType !== "All Types" ? selectedType : "",
      topic: selectedTopics,
      bookmarks: bookmarksOnly ? "true" : "",
      page: safeCurrentPage > 1 ? String(safeCurrentPage) : "",
    });
  }, [
    selectedDirection,
    debouncedQuery,
    selectedSubjects,
    selectedDifficulties,
    selectedType,
    selectedTopics,
    bookmarksOnly,
    safeCurrentPage,
    updateUrlParams,
  ]);

  return (
    <div className="mt-12 flex w-full flex-col-reverse gap-8 lg:flex-row">
      {/* 1st Column: 75% on desktop, 100% on mobile */}
      <div className="w-full space-y-4 sm:space-y-8 lg:w-3/4">
        <TypeAndTopicFilter
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          selectedTopics={selectedTopics}
          onTopicToggle={handleTopicToggle}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SearchBar query={query} onQueryChange={handleQueryChange} />
          <div className="flex items-center gap-2 overflow-x-auto p-0.5">
            <SubjectBookmarkDificultyFilter
              selectedSubjects={selectedSubjects}
              onSubjectsChange={handleSubjectsChange}
              selectedDifficulties={selectedDifficulties}
              onDifficultiesChange={handleDifficultiesChange}
              hasBookmarks={bookmarkedIds.length > 0}
              bookmarksOnly={bookmarksOnly}
              onBookmarksOnlyChange={(val) => {
                setCurrentPage(1);
                setBookmarksOnly(val);
              }}
            />
            <Button
              variant="outline"
              disabled={!hasActiveFilters}
              onClick={handleClearFilters}
              className="text-xs sm:h-10 sm:text-sm"
            >
              <HugeiconsIcon icon={FilterRemoveIcon} strokeWidth={2} /> Clear
            </Button>
          </div>
        </div>

        <QuestionsTable
          questions={paginatedQuestions}
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        <PaginationButtons
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          totalQuestions={totalQuestions}
          questionsPerPage={QUESTIONS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* 2nd Column: 25% on desktop, 100% on mobile */}
      <div className="w-full lg:w-1/4">
        <ChangeDirectionCard
          selectedDirection={selectedDirection}
          onDirectionChange={handleDirectionChange}
        />
      </div>
    </div>
  );
}
