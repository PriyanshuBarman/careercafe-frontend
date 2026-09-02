"use client";

import { useEffect, useState } from "react";
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
import TypeAndTopicFilter from "./components/type-and-topic-filter";
import { DIRECTION_CONFIG } from "./constants/directions";
import { QUESTIONS } from "./data/questions";
import type {
  AnalystDirection,
  Difficulty,
  QuestionType,
  Subject,
  Topic,
} from "./types/question";
import { createUrlParams } from "./utils/create-url-params";
import { filterQuestions } from "./utils/filter-questions";
import { getAvailableTopics } from "./utils/get-available-topics";
import { getInitialStateFromUrl } from "./utils/get-initial-state-from-params";

const QUESTIONS_PER_PAGE = 20;
export const DEFAULT_PAGE = 1;
export const DEFAULT_ANALYST_DIRECTION: AnalystDirection = "Data & BI";

export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = getInitialStateFromUrl(searchParams);

  const [query, setQuery] = useState(initial.query);
  const debouncedQuery = useDebounce(query);
  const [selectedDirection, setSelectedDirection] = useState<AnalystDirection>(
    initial.direction,
  );
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>(
    initial.subjects,
  );
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>(initial.topics);
  const [selectedType, setSelectedType] = useState<QuestionType | null>(
    initial.type,
  );
  const [selectedDifficulties, setSelectedDifficulties] = useState<
    Difficulty[]
  >(initial.difficulties);
  const [bookmarksOnly, setBookmarksOnly] = useState(initial.bookmarksOnly);
  const [currentPage, setCurrentPage] = useState(initial.page);

  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>(
    "bookmark-ids",
    [],
  );

  const directionConfig =
    DIRECTION_CONFIG[selectedDirection] ??
    DIRECTION_CONFIG[DEFAULT_ANALYST_DIRECTION];

  const availableTypes = directionConfig.types;
  const availableSubjects = Object.keys(directionConfig.subjects) as Subject[];
  const availableTopics = getAvailableTopics(
    selectedDirection,
    selectedSubjects,
  );

  const handleToggleBookmark = (questionId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId],
    );
  };

  const hasActiveFilters = Boolean(
    query.trim() ||
    selectedSubjects.length > 0 ||
    selectedDifficulties.length > 0 ||
    selectedTopics.length > 0 ||
    selectedType !== null ||
    bookmarksOnly,
  );

  const handleClearFilters = () => {
    setQuery("");
    setSelectedSubjects([]);
    setSelectedDifficulties([]);
    setSelectedTopics([]);
    setSelectedType(null);
    setBookmarksOnly(false);
    setCurrentPage(DEFAULT_PAGE);
  };

  const handleTopicToggle = (topic: Topic) => {
    setCurrentPage(DEFAULT_PAGE);
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const handleTypeChange = (type: QuestionType | null) => {
    setCurrentPage(DEFAULT_PAGE);
    setSelectedType(type);
  };

  const handleDirectionChange = (direction: AnalystDirection) => {
    setCurrentPage(DEFAULT_PAGE);
    setSelectedDirection(direction);
    setSelectedType(null);
    setSelectedSubjects([]);
    setSelectedTopics([]);
    setSelectedDifficulties([]);
    setQuery("");
  };

  const handleSubjectsChange = (subjects: Subject[]) => {
    setCurrentPage(DEFAULT_PAGE);
    setSelectedSubjects(subjects);

    // Remove selected topics that don't belong to the new subjects
    const newAvailableTopics = getAvailableTopics(selectedDirection, subjects);
    setSelectedTopics((prev) =>
      prev.filter((topic) => newAvailableTopics.includes(topic)),
    );
  };

  const handleDifficultiesChange = (difficulties: Difficulty[]) => {
    setCurrentPage(DEFAULT_PAGE);
    setSelectedDifficulties(difficulties);
  };

  const handleQueryChange = (newQuery: string) => {
    setCurrentPage(DEFAULT_PAGE);
    setQuery(newQuery);
  };

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
    totalPages > 0 ? Math.min(currentPage, totalPages) : DEFAULT_PAGE;

  const paginatedQuestions = filteredQuestions.slice(
    (safeCurrentPage - 1) * QUESTIONS_PER_PAGE,
    safeCurrentPage * QUESTIONS_PER_PAGE,
  );

  // Sync filter state with URL
  useEffect(() => {
    const params = createUrlParams({
      query: debouncedQuery,
      direction: selectedDirection,
      type: selectedType,
      subjects: selectedSubjects,
      difficulties: selectedDifficulties,
      topics: selectedTopics,
      bookmarksOnly,
      page: safeCurrentPage > DEFAULT_PAGE ? safeCurrentPage : null,
    });

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newUrl, { scroll: false });
  }, [
    debouncedQuery,
    selectedDirection,
    selectedType,
    selectedSubjects,
    selectedDifficulties,
    selectedTopics,
    bookmarksOnly,
    safeCurrentPage,
    pathname,
    router,
  ]);

  return (
    <div className="flex w-full flex-col-reverse gap-8 lg:flex-row">
      {/* 1st Column: 75% on desktop, 100% on mobile */}
      <div className="w-full space-y-4 sm:space-y-8 lg:w-3/4">
        <TypeAndTopicFilter
          types={availableTypes}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          topics={availableTopics}
          selectedTopics={selectedTopics}
          onTopicToggle={handleTopicToggle}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SearchBar query={query} onQueryChange={handleQueryChange} />
          <div className="flex items-center gap-2 overflow-x-auto p-1">
            <SubjectBookmarkDificultyFilter
              availableSubjects={availableSubjects}
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
          itemsPerPage={QUESTIONS_PER_PAGE}
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
