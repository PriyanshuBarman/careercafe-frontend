import { CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { FORM_STEPS } from "../constants/form";
import { useChallengeStore } from "../store/challenge-store";

export default function FormStepperTimeline() {
  const currentStep = useChallengeStore((state) => state.currentStep);
  const maxStepReached = useChallengeStore((state) => state.maxStepReached);
  const setCurrentStep = useChallengeStore((state) => state.setCurrentStep);

  const effectiveMaxStep = Math.max(currentStep, maxStepReached);

  return (
    <div className="relative w-full border-b px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="relative flex justify-between gap-3 sm:gap-6">
        {/* Horizontal timeline connector line */}
        <div className="bg-border absolute top-4 right-4 left-4 h-px sm:top-6 sm:right-6 sm:left-6">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{
              width: `${(effectiveMaxStep / (FORM_STEPS.length - 1)) * 100}%`,
            }}
          />
        </div>

        {FORM_STEPS.map((item, index) => {
          const isCurrent = currentStep === index;
          const isCompleted = index < effectiveMaxStep;
          const isFilled = index <= effectiveMaxStep;
          const isClickable = isFilled;

          return (
            <div
              key={item.step}
              onClick={() => {
                if (isClickable) {
                  setCurrentStep(index);
                }
              }}
              role={isClickable ? "button" : undefined}
              className={cn(
                "z-10 flex flex-1 flex-col items-center gap-3 sm:gap-4",
                isClickable && "group cursor-pointer",
              )}
            >
              <div
                className={cn(
                  "text-2xs flex size-8 items-center justify-center rounded-full border font-semibold tabular-nums transition-all sm:size-12 sm:text-sm",
                  isFilled &&
                    "bg-primary text-primary-foreground border-primary shadow-sm",
                  isCurrent &&
                    "ring-primary/25 dark:ring-primary/30 scale-105 ring-4 sm:ring-5",
                  isClickable &&
                    !isCurrent &&
                    "group-hover:scale-105 group-hover:opacity-90",
                  !isFilled && "bg-accent text-muted-foreground border-border",
                )}
              >
                {isCompleted ? (
                  <HugeiconsIcon
                    icon={CheckIcon}
                    strokeWidth={2}
                    className="size-4 sm:size-6"
                  />
                ) : (
                  item.step
                )}
              </div>
              <h3
                className={cn(
                  "text-2xs font-medium transition-colors sm:text-sm",
                  isCurrent
                    ? "text-foreground font-semibold"
                    : isFilled
                      ? "text-foreground group-hover:text-primary font-medium"
                      : "text-muted-foreground",
                )}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
