import { cn } from "@/lib/utils";
import { FORM_STEPS } from "../constants/right-column";

type FormStepperProps = {
  currentStep: number;
  maxStepReached: number;
  onSelectStep: (stepIndex: number) => void;
};

export default function FormStepper({
  currentStep,
  maxStepReached = currentStep,
  onSelectStep,
}: FormStepperProps) {
  const effectiveMaxStep = Math.max(currentStep, maxStepReached);

  return (
    <div className="relative w-full border-b px-4 py-6 sm:px-8 sm:py-10 lg:px-10">
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

        {FORM_STEPS.map((item, idx) => {
          const isCurrent = currentStep === idx;
          const isFilled = idx <= effectiveMaxStep;
          const isClickable = isFilled && onSelectStep !== undefined;

          return (
            <div
              key={item.step}
              onClick={() => {
                if (isClickable) {
                  onSelectStep(idx);
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
                  isCurrent && "ring-primary/25 scale-105 ring-4",
                  isClickable &&
                    !isCurrent &&
                    "group-hover:scale-105 group-hover:opacity-90",
                  !isFilled && "bg-accent text-muted-foreground border-border",
                )}
              >
                {item.step}
              </div>
              <div className="space-y-1 text-center sm:space-y-2">
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
                {/* <p className="text-2xs text-muted-foreground max-sm:hidden sm:text-xs">
                  {item.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
