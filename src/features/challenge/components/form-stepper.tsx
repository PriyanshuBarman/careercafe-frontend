import { Button } from "@/components/ui/button";
import { FORM_STEPS } from "../../challenge/constants/right-column";

type FormStepperProps = {
  currentStep: number;
  onSelectStep: (stepIndex: number) => void;
};

export default function FormStepper({
  currentStep,
  onSelectStep,
}: FormStepperProps) {
  return (
    <div className="no-scrollbar flex w-full gap-2 overflow-x-auto">
      {FORM_STEPS.map((step, idx) => {
        const isActive = currentStep === idx;
        const isPast = currentStep > idx;

        return (
          <Button
            key={step.step}
            variant={isActive ? "default" : isPast ? "secondary" : "outline"}
            size="sm"
            onClick={() => onSelectStep(idx)}
            className="flex items-center gap-1.5 text-xs font-medium"
          >
            <span
              className={
                isActive
                  ? "text-primary-foreground font-semibold"
                  : "text-muted-foreground font-mono"
              }
            >
              {step.step}
            </span>
            <span>{step.title}</span>
          </Button>
        );
      })}
    </div>
  );
}
