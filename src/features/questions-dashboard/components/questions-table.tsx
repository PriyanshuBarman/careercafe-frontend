import Link from "next/link";
import {
  Bookmark02Icon,
  LockKeyholeIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { QUESTIONS } from "../data/questions";
import type { Difficulty, Question } from "../types/question";

export const difficultyStyles: Record<Difficulty, string> = {
  easy: "bg-green-500/20 text-green-500",
  medium: "bg-amber-500/20 text-amber-500",
  hard: "bg-red-500/20 text-red-500",
};

type QuestionsTableProps = {
  questions: Question[];
  bookmarkedIds: string[];
  onToggleBookmark: (questionId: string) => void;
};

export default function QuestionsTable({
  questions = QUESTIONS,
  bookmarkedIds,
  onToggleBookmark,
}: QuestionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-md border">
      <Table className="w-full min-w-162 table-fixed">
        <TableHeader className="bg-accent text-xs sm:text-sm">
          <TableRow>
            <TableHead className="w-[55%] p-4 pl-6 text-start font-medium sm:pl-8">
              Question
            </TableHead>
            <TableHead className="w-[20%] p-4 text-center font-medium">
              Topic
            </TableHead>
            <TableHead className="w-[13%] p-4 text-center font-medium">
              Difficulty
            </TableHead>
            <TableHead className="w-[12%] p-4 text-center font-medium">
              Access
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {questions.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-muted-foreground bg-background h-64 p-8 text-center"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    strokeWidth={2}
                    className="size-6"
                  />
                  <p className="text-sm">
                    No questions found matching your criteria.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            questions.map((question) => {
              const isBookmarked = bookmarkedIds.includes(question.id);

              return (
                <TableRow
                  key={question.id}
                  className="hover:bg-background text-2xs cursor-pointer sm:text-xs"
                >
                  {/* Question */}
                  <TableCell className="p-4 sm:pl-8">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon-lg"
                        aria-label={
                          isBookmarked ? "Remove bookmark" : "Bookmark question"
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(question.id);
                        }}
                        className={cn(
                          "hover:text-primary rounded-full sm:[&_svg]:size-4.5!",
                          isBookmarked && "bg-primary/10 dark:bg-primary/10",
                        )}
                      >
                        <HugeiconsIcon
                          icon={Bookmark02Icon}
                          strokeWidth={2}
                          className={cn(
                            isBookmarked && "text-primary fill-current",
                          )}
                        />
                      </Button>
                      <div className="flex flex-col gap-1">
                        <Link
                          href={`/questions/${question.slug}`}
                          className="text-xs font-medium text-wrap hover:underline sm:text-sm sm:font-normal"
                        >
                          {question.question}
                        </Link>
                        <div className="text-muted-foreground">
                          {question.subject} • {question.type}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  {/* Topic */}
                  <TableCell className="p-4 text-center">
                    <div className="bg-accent mx-auto w-fit max-w-full truncate rounded-sm px-3 py-1.5 text-center font-medium capitalize">
                      {question.topic}
                    </div>
                  </TableCell>

                  {/* Difficulty */}
                  <TableCell className="p-4 text-center">
                    <div
                      className={cn(
                        "mx-auto w-fit rounded-sm px-3 py-1.5 font-medium capitalize",
                        difficultyStyles[question.difficulty],
                      )}
                    >
                      {question.difficulty}
                    </div>
                  </TableCell>

                  {/* Access */}
                  <TableCell className="p-4 text-center">
                    {question.access === "paid" ? (
                      <HugeiconsIcon
                        icon={LockKeyholeIcon}
                        strokeWidth={2}
                        className="mx-auto size-5"
                      />
                    ) : (
                      <span className="font-medium text-emerald-500 capitalize">
                        Free
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
