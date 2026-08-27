import { ArrowDown01Icon, Bookmark02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DIFFICULTY_LEVELS,
  SUBJECTS,
} from "@/features/questions-dashboard/data/questions";
import type {
  Difficulty,
  Subject,
} from "@/features/questions-dashboard/types/question";

type SubjectBookmarkDificultyFilterFilterProps = {
  selectedSubjects: Subject[];
  onSubjectsChange: (subjects: Subject[]) => void;
  selectedDifficulties: Difficulty[];
  onDifficultiesChange: (difficulties: Difficulty[]) => void;
  bookmarksOnly: boolean;
  onBookmarksOnlyChange: (bookmarksOnly: boolean) => void;
  hasBookmarks: boolean;
};

export default function SubjectBookmarkDificultyFilter({
  selectedSubjects,
  onSubjectsChange,
  selectedDifficulties,
  onDifficultiesChange,
  bookmarksOnly,
  onBookmarksOnlyChange,
  hasBookmarks,
}: SubjectBookmarkDificultyFilterFilterProps) {
  const isSubjectSelected = selectedSubjects.length > 0;
  const isDifficultySelected = selectedDifficulties.length > 0;

  const handleSubjectToggle = (subject: Subject) => {
    if (selectedSubjects.includes(subject)) {
      onSubjectsChange(selectedSubjects.filter((s) => s !== subject));
    } else {
      onSubjectsChange([...selectedSubjects, subject]);
    }
  };

  const handleDifficultyToggle = (difficulty: Difficulty) => {
    if (selectedDifficulties.includes(difficulty)) {
      onDifficultiesChange(
        selectedDifficulties.filter((d) => d !== difficulty),
      );
    } else {
      onDifficultiesChange([...selectedDifficulties, difficulty]);
    }
  };

  return (
    <>
      {hasBookmarks && (
        <Button
          variant="outline"
          onClick={() => onBookmarksOnlyChange(!bookmarksOnly)}
          className={cn(
            "w-fit text-xs transition-all sm:h-10 sm:px-4 sm:text-sm",
            bookmarksOnly && "ring-primary text-primary font-medium ring",
          )}
        >
          <HugeiconsIcon
            strokeWidth={2}
            icon={Bookmark02Icon}
            className={cn(bookmarksOnly && "text-primary fill-current")}
          />
          Bookmarks Only
        </Button>
      )}

      {/* Subject Filter Popover */}
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "w-fit text-xs sm:h-10 sm:px-4 sm:text-sm",
                isSubjectSelected && "ring-primary text-accent-foreground ring",
              )}
            >
              {isSubjectSelected && (
                <span className="bg-primary/70 text-primary-foreground text-2xs mr-1 flex size-4 items-center justify-center rounded-full font-semibold">
                  {selectedSubjects.length}
                </span>
              )}
              Subject
              <HugeiconsIcon strokeWidth={2} icon={ArrowDown01Icon} />
            </Button>
          }
        />
        <PopoverContent
          align="start"
          className="max-h-72 w-52 overflow-y-auto p-1.5"
        >
          <FieldGroup className="gap-1">
            {SUBJECTS.map((subject) => {
              const isChecked = selectedSubjects.includes(subject);

              return (
                <Field
                  key={subject}
                  orientation="horizontal"
                  className="hover:bg-accent cursor-pointer rounded-md p-2"
                >
                  <Checkbox
                    id={`subject-filter-${subject}`}
                    checked={isChecked}
                    onCheckedChange={() => handleSubjectToggle(subject)}
                  />
                  <FieldLabel
                    htmlFor={`subject-filter-${subject}`}
                    className="cursor-pointer font-normal capitalize"
                  >
                    {subject}
                  </FieldLabel>
                </Field>
              );
            })}
          </FieldGroup>
        </PopoverContent>
      </Popover>

      {/* Difficulty Filter Popover */}
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className={cn(
                "w-fit text-xs sm:h-10 sm:px-4 sm:text-sm",
                isDifficultySelected &&
                  "ring-primary text-accent-foreground ring",
              )}
            >
              {isDifficultySelected && (
                <span className="bg-primary/70 text-primary-foreground text-2xs mr-1 flex size-4 items-center justify-center rounded-full font-semibold">
                  {selectedDifficulties.length}
                </span>
              )}
              Difficulty
              <HugeiconsIcon strokeWidth={2} icon={ArrowDown01Icon} />
            </Button>
          }
        />
        <PopoverContent align="start" className="w-48 p-1.5">
          <FieldGroup className="gap-1">
            {DIFFICULTY_LEVELS.map((level) => {
              const isChecked = selectedDifficulties.includes(level);

              return (
                <Field
                  key={level}
                  orientation="horizontal"
                  className="hover:bg-accent cursor-pointer rounded-md p-2"
                >
                  <Checkbox
                    id={`difficulty-filter-${level}`}
                    checked={isChecked}
                    onCheckedChange={() => handleDifficultyToggle(level)}
                  />
                  <FieldLabel
                    htmlFor={`difficulty-filter-${level}`}
                    className="cursor-pointer font-normal capitalize"
                  >
                    {level}
                  </FieldLabel>
                </Field>
              );
            })}
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  );
}
