"use client";

import React from "react";
import { Bookmark02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Button, type buttonVariants } from "@/components/ui/button";

type QuestionBookmarkButtonProps = {
  questionId: string;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export default function QuestionBookmarkButton({
  questionId,
  className,
  variant = "outline",
  size = "icon",
  ...props
}: QuestionBookmarkButtonProps) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>(
    "bookmark-ids",
    [],
  );

  const isBookmarked = bookmarkedIds.includes(questionId);

  const handleToggleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setBookmarkedIds((prev = []) =>
      prev.includes(questionId)
        ? prev.filter((item) => item !== questionId)
        : [...prev, questionId],
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleBookmark}
      aria-label={isBookmarked ? "Remove bookmark" : "Bookmark question"}
      className={cn(
        "hover:text-primary shrink-0 rounded-full",
        isBookmarked && "bg-primary/10 dark:bg-primary/10",
        className,
      )}
      {...props}
    >
      <HugeiconsIcon
        icon={Bookmark02Icon}
        strokeWidth={2}
        className={cn(isBookmarked && "text-primary fill-current")}
      />
    </Button>
  );
}
