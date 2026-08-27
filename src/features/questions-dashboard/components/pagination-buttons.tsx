"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type PaginationButtonsProps = {
  currentPage?: number;
  totalPages?: number;
  totalQuestions?: number;
  questionsPerPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
};

export default function PaginationButtons({
  currentPage = 1,
  totalPages = 1,
  totalQuestions = 0,
  questionsPerPage = 20,
  onPageChange,
  className,
}: PaginationButtonsProps) {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  const startItem =
    totalQuestions === 0 ? 0 : (currentPage - 1) * questionsPerPage + 1;
  const endItem = Math.min(currentPage * questionsPerPage, totalQuestions);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-2 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className="text-muted-foreground text-xs sm:text-sm">
        Showing {startItem}–{endItem} of {totalQuestions} questions
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <span className="sr-only">Previous page</span>
          <HugeiconsIcon icon={ChevronLeftIcon} className="size-4" />
        </Button>

        {/* Direct Page Buttons */}
        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            className={cn("size-8 rounded-lg text-xs font-medium")}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages || totalPages === 0}
        >
          <span className="sr-only">Next page</span>
          <HugeiconsIcon icon={ChevronRightIcon} className="size-4" />
        </Button>
      </div>
    </div>
  );
}
