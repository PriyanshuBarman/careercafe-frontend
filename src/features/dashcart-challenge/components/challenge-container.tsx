"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeftIcon, EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";

import { useLocalStorage } from "@/hooks/use-localstorage";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CHALLENGE_FORM_DEFAULT_VALUES,
  FORM_STEP_FIELDS,
  FORM_STEPS,
} from "../constants/form";
import { useFormAutoSave } from "../hooks/use-form-auto-save";
import { formSchema, type ChallengeFormData } from "../schemas/form-schema";
import { getNextButtonConfig } from "../utils/step-navigation";
import FormPreviewDialog from "./form-preview-dialog";
import FormStepperTimeline from "./form-stepper-timeline";
import Step1Fields from "./steps/step-1/fields";
import Step1Info from "./steps/step-1/info";
import Step2Fields from "./steps/step-2/fields";
import Step2Info from "./steps/step-2/info";
import Step3Fields from "./steps/step-3/fields";
import Step3Info from "./steps/step-3/info";
import Step4Fields from "./steps/step-4/fields";
import Step4Info from "./steps/step-4/info";
import Step5Fields from "./steps/step-5/fields";
import Step5Info from "./steps/step-5/info";

const CHALLENGE_STORAGE_KEYS = {
  CURRENT_STEP: "dashcart_challenge_current_step",
  MAX_STEP: "dashcart_challenge_max_step",
  FORM_DRAFT: "dashcart_challenge_form_draft",
} as const;

export default function ChallengeContainer() {
  const router = useRouter();
  const isMobile = useIsMobile("lg");
  const [currentStep, setCurrentStep] = useLocalStorage(
    CHALLENGE_STORAGE_KEYS.CURRENT_STEP,
    0,
  );
  const [maxStepReached, setMaxStepReached] = useLocalStorage(
    CHALLENGE_STORAGE_KEYS.MAX_STEP,
    0,
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<ChallengeFormData | null>(
    null,
  );

  const form = useForm<ChallengeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: CHALLENGE_FORM_DEFAULT_VALUES,
    mode: "onChange",
  });

  const { saveDraft, clearDraft } = useFormAutoSave({
    key: CHALLENGE_STORAGE_KEYS.FORM_DRAFT,
    form,
  });

  const isStepOneLocked = maxStepReached > 0;
  const isStepThreeLocked = maxStepReached > 2;
  const activeStep = FORM_STEPS[currentStep];

  const nextButton = getNextButtonConfig({
    currentStep,
    maxStepReached,
  });

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

  const handleNext = async () => {
    const currentFields = FORM_STEP_FIELDS[currentStep];
    const isStepValid = await form.trigger(currentFields);
    if (!isStepValid) return;

    if (
      currentStep === 2 &&
      form.getValues("isBudgetExceeded") &&
      !form.getValues("budgetAcknowledged")
    ) {
      form.setError("budgetAcknowledged", {
        type: "manual",
        message: "Acknowledgement required before Lock Plan & Continue.",
      });
      return;
    }
    if (currentStep < FORM_STEPS.length - 1) {
      saveDraft();
      handleStepChange(currentStep + 1);
    }

    window.scrollTo({ top: isMobile ? 0 : 165, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentStep <= 0) return;

    saveDraft();
    handleStepChange(currentStep - 1);
    window.scrollTo({ top: isMobile ? 0 : 165, behavior: "smooth" });
  };

  const handleReviewClick = async () => {
    saveDraft();
    const isValid = await form.trigger();
    if (!isValid) return;

    setPreviewData(form.getValues());
    setIsPreviewOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsPreviewOpen(false);
    // eslint-disable-next-line no-console
    console.log("Form submitted successfully:", previewData);
    clearDraft();
    handleResetSteps();
    router.push("/challenges/success");
  };

  return (
    <div className="bg-background mx-auto flex max-w-350 flex-col pb-6">
      <FormStepperTimeline
        currentStep={currentStep}
        maxStepReached={maxStepReached}
        onSelectStep={handleStepChange}
      />

      <div className="flex flex-1 flex-col pt-6 lg:flex-row lg:gap-4 lg:overflow-hidden lg:pt-8">
        {/* Left Column */}
        <section className="flex w-full flex-col gap-6 px-4 sm:gap-7 sm:px-6 lg:w-[40%] lg:px-8">
          {currentStep === 0 && <Step1Info />}
          {currentStep === 1 && <Step2Info />}
          {currentStep === 2 && <Step3Info />}
          {currentStep === 3 && <Step4Info />}
          {currentStep === 4 && <Step5Info control={form.control} />}
        </section>

        <Separator
          orientation={isMobile ? "horizontal" : "vertical"}
          className="bg-ring/50 max-lg:my-12 lg:mx-4"
        />

        {/* Right Column */}
        <section className="flex flex-1 flex-col justify-between px-4 sm:px-6 lg:px-8">
          <form className="flex flex-col justify-between gap-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <span className="text-cc-sage-900 text-2xs font-semibold tracking-widest sm:text-xs">
                  STEP {activeStep.step} OF 05
                </span>
                <h2 className="text-xl font-medium tracking-tight sm:text-2xl sm:font-semibold">
                  {activeStep.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-2xs p-3 sm:text-xs">
                  {activeStep.time}
                </Badge>
                <Badge variant="outline" className="text-2xs p-3 sm:text-xs">
                  {activeStep.points}
                </Badge>
              </div>
            </div>

            {/* Active Step Form Fields */}
            <div>
              {currentStep === 0 && (
                <Step1Fields
                  control={form.control}
                  isLocked={isStepOneLocked}
                />
              )}
              {currentStep === 1 && <Step2Fields control={form.control} />}
              {currentStep === 2 && (
                <Step3Fields
                  control={form.control}
                  setValue={form.setValue}
                  isLocked={isStepThreeLocked}
                />
              )}
              {currentStep === 3 && (
                <Step4Fields control={form.control} setValue={form.setValue} />
              )}
              {currentStep === 4 && <Step5Fields control={form.control} />}
            </div>

            {/* Bottom Navigation Controls */}
            <div className="flex items-center justify-between border-t py-4">
              <Button
                type="button"
                variant="secondary"
                disabled={currentStep === 0}
                onClick={handlePrev}
                className="p-4 text-xs sm:p-4.5 sm:text-sm"
              >
                <HugeiconsIcon strokeWidth={2} icon={ChevronLeftIcon} />
                Previous
              </Button>

              {currentStep < FORM_STEPS.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="p-4 text-xs sm:p-4.5 sm:text-sm"
                >
                  {nextButton.label}
                  <HugeiconsIcon strokeWidth={2} icon={nextButton.icon} />
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="default"
                  onClick={handleReviewClick}
                  className="p-4 text-xs sm:p-4.5 sm:text-sm"
                >
                  <HugeiconsIcon strokeWidth={2} icon={EyeIcon} />
                  Review Challenge
                </Button>
              )}
            </div>
          </form>

          {previewData && (
            <FormPreviewDialog
              open={isPreviewOpen}
              onOpenChange={setIsPreviewOpen}
              values={previewData}
              onConfirmSubmit={handleConfirmSubmit}
            />
          )}
        </section>
      </div>
    </div>
  );
}
