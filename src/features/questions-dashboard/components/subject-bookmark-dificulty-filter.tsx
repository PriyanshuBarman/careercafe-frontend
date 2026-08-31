import { Bookmark02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SelectPopover from "@/components/select-popover";
import { DIFFICULTY_LEVELS, SUBJECTS } from "../constants/questions";
import type { Difficulty, Subject } from "../types/question";

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

      <SelectPopover
        buttonLabel="Subject"
        options={SUBJECTS}
        selectedItems={selectedSubjects}
        onCheckedChange={handleSubjectToggle}
      />

      <SelectPopover
        buttonLabel="Difficulty"
        options={DIFFICULTY_LEVELS}
        selectedItems={selectedDifficulties}
        onCheckedChange={handleDifficultyToggle}
      />
    </>
  );
}
