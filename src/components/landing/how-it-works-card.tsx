import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HowItWorksStep } from "@/constants/how-it-works";

export default function HowItWorksCard({ step }: { step: HowItWorksStep }) {
  const isSage = step.variant === "sage";

  return (
    <Card
      className={cn(
        "rounded-2xl bg-linear-to-b p-6 sm:p-8",
        isSage
          ? "ring-cc-sage-900/30 dark:ring-cc-sage-900/50"
          : "ring-primary/50",
      )}
    >
      <CardHeader className="px-0">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "mb-auto flex size-8 items-center justify-center rounded-lg text-sm font-medium tabular-nums",
              isSage
                ? "bg-cc-sage-100 text-cc-sage-900 dark:bg-cc-sage-900/20"
                : "bg-primary/10 text-primary",
            )}
          >
            {step.step}
          </div>

          <div
            className={cn(
              "w-fit rounded-xl p-3",
              isSage
                ? "bg-cc-sage-100 dark:bg-cc-sage-900/20"
                : "bg-primary/10",
            )}
          >
            <HugeiconsIcon
              icon={step.icon}
              className={cn(
                "size-7 sm:size-8",
                isSage ? "text-cc-sage-900" : "text-primary",
              )}
            />
          </div>

          <div className="flex flex-col gap-1">
            <CardTitle className="text-md sm:text-base sm:font-[550]">
              {step.title}
            </CardTitle>
            <CardDescription
              className={cn(
                "text-xs font-[450] sm:font-medium",
                isSage
                  ? "text-cc-sage-900 dark:text-cc-sage-500"
                  : "text-primary",
              )}
            >
              {step.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0">
        <ul className="mt-6 space-y-3 md:space-y-4">
          {step.features.map((feature, idx) => (
            <li
              key={idx}
              className="md:text-md flex items-center gap-3 text-sm sm:gap-4"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                strokeWidth={1.75}
                className={cn(
                  "size-4.5 shrink-0 md:size-5",
                  isSage ? "text-cc-sage-900" : "text-primary",
                )}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="bg-accent mt-8 aspect-video rounded-xl md:mt-10" />
      </CardContent>
    </Card>
  );
}
