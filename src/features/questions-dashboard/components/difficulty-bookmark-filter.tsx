import { Bookmark02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Toggle } from "@/components/ui/toggle";
import SelectPopover from "@/components/select-popover";
import { DIFFICULTY_LEVELS } from "../constants/questions";
import type { Difficulty } from "../types/question";

type DifficultyBookmarkFilterProps = {
  selectedDifficulties: Difficulty[];
  onDifficultiesChange: (difficulties: Difficulty[]) => void;
  bookmarksOnly: boolean;
  onBookmarksOnlyChange: (bookmarksOnly: boolean) => void;
  hasBookmarks: boolean;
};

export default function DifficultyBookmarkFilter({
  selectedDifficulties,
  onDifficultiesChange,
  bookmarksOnly,
  onBookmarksOnlyChange,
  hasBookmarks,
}: DifficultyBookmarkFilterProps) {
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
        <Toggle
          variant="outline"
          pressed={bookmarksOnly}
          onPressedChange={onBookmarksOnlyChange}
          className="aria-pressed:ring-primary aria-pressed:text-primary aria-pressed:bg-primary/5 h-9 w-fit gap-2 text-xs aria-pressed:ring sm:h-10 sm:px-4 sm:text-sm"
        >
          <HugeiconsIcon
            strokeWidth={2}
            icon={Bookmark02Icon}
            className="group-aria-pressed/toggle:fill-current"
          />
          Bookmarks Only
        </Toggle>
      )}

      <SelectPopover
        buttonLabel="Difficulty"
        options={DIFFICULTY_LEVELS}
        selectedItems={selectedDifficulties}
        onCheckedChange={handleDifficultyToggle}
      />
    </>
  );
}
