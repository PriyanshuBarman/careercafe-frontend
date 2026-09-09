"use client";

import { useLocalStorage } from "@/hooks/use-localstorage";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import FormStepper from "./form-stepper";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";

export default function ChallengeContainer() {
  const [currentStep, setCurrentStep] = useLocalStorage("challenge_step_v1", 0);
  const [maxStepReached, setMaxStepReached] = useLocalStorage(
    "challenge_max_step_v1",
    0,
  );
  const isMobile = useIsMobile("lg");

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    if (step > maxStepReached) {
      setMaxStepReached(step);
    }
  };

  const handleResetSteps = () => {
    setCurrentStep(0);
    setMaxStepReached(0);
  };

  return (
    <div className="bg-background mx-auto flex max-w-350 flex-col pb-6">
      {/* Top Stepper Timeline */}
      <FormStepper
        currentStep={currentStep}
        maxStepReached={maxStepReached}
        onSelectStep={handleStepChange}
      />

      {/* Main Two Column Area */}
      <div className="flex flex-1 flex-col-reverse pt-6 lg:flex-row lg:overflow-hidden lg:pt-8">
        <LeftColumn currentStep={currentStep} />

        <Separator
          orientation={isMobile ? "horizontal" : "vertical"}
          className="bg-ring/50 max-lg:my-12 lg:mx-4"
        />

        <RightColumn
          currentStep={currentStep}
          setCurrentStep={handleStepChange}
          onResetSteps={handleResetSteps}
        />
      </div>
    </div>
  );
}
