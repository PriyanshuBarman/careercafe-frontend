import { ArrowRight01Icon, CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Programme } from "@/constants/programmes";

export default function ProgrammeCard({ programme }: { programme: Programme }) {
  const isSage = programme.variant === "sage";

  return (
    <Card
      className={cn(
        "gap-8 rounded-3xl bg-linear-to-b p-4 md:gap-8 md:p-6",
        isSage
          ? "from-cc-sage-100/40 ring-cc-sage-900/30 dark:ring-cc-sage-900/50 via-card to-card dark:from-cc-sage-900/20 dark:via-card dark:to-card"
          : "from-cc-orange/5 via-card ring-primary/30 to-card dark:from-cc-orange/10 dark:via-card dark:to-card",
      )}
    >
      <CardHeader className="px-0">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "w-fit rounded-full p-4",
              isSage
                ? "bg-cc-sage-100 dark:bg-cc-sage-900/50"
                : "bg-primary/20",
            )}
          >
            <HugeiconsIcon
              icon={programme.icon}
              strokeWidth={1.25}
              className={cn(
                "size-9 md:size-14",
                isSage ? "text-cc-sage-700" : "text-primary",
              )}
            />
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <CardTitle className="text-md sm:ml-1 sm:text-lg md:font-[550] lg:text-xl">
              {programme.title}
            </CardTitle>
            <span
              className={cn(
                "rounded-lg p-0 text-xs leading-tight font-[450] whitespace-normal sm:px-4 sm:py-2 sm:font-medium",
                isSage
                  ? "sm:bg-cc-sage-100 sm:text-cc-sage-900 sm:dark:text-cc-sage-500 sm:dark:bg-cc-sage-900/30"
                  : "sm:bg-primary/10 sm:text-primary",
              )}
            >
              {programme.badge}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2">
        <ul className="space-y-2 md:space-y-4">
          {programme.features.map((item, index) => (
            <li
              key={index}
              className="md:text-md flex items-center gap-4 text-sm"
            >
              <div
                className={cn(
                  "rounded-full p-1",
                  isSage ? "bg-cc-sage-700" : "bg-primary",
                )}
              >
                <HugeiconsIcon
                  icon={CheckIcon}
                  strokeWidth={2.5}
                  className="text-background dark:text-foreground size-2.5 md:size-3"
                />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="bg-card mt-auto border-none px-0 pb-4 md:pb-6">
        <Button
          variant={isSage ? "ghost" : "default"}
          className={cn(
            "w-full p-5 text-xs sm:p-6 sm:text-sm",
            isSage
              ? "border-cc-sage-700 dark:text-cc-sage-500 hover:bg-cc-sage-100 text-cc-sage-900 border"
              : "dark:bg-primary/50 dark:text-foreground",
          )}
        >
          {programme.buttonLabel}
          <HugeiconsIcon
            strokeWidth={2}
            icon={ArrowRight01Icon}
            className="size-4 sm:size-5"
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
