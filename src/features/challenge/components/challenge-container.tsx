"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";

import { useLocalStorage } from "@/hooks/use-localstorage";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FORM_STEPS, STEP_FIELDS } from "../constants/form";
import { useFormAutoSave } from "../hooks/use-form-auto-save";
import {
  challengeFormSchema,
  type ChallengeFormValues,
} from "../schemas/challenge-form-schema";
import FormPreviewDialog from "./form-preview-dialog";
import FormStepperTimeline from "./form-stepper-timeline";
// Step Components
import StepFiveForm from "./steps/step-five/step-five-form";
import StepFiveInfo from "./steps/step-five/step-five-info";
import StepFourForm from "./steps/step-four/step-four-form";
import StepFourInfo from "./steps/step-four/step-four-info";
import StepOneForm from "./steps/step-one/step-one-form";
import StepOneInfo from "./steps/step-one/step-one-info";
import StepThreeForm from "./steps/step-three/step-three-form";
import StepThreeInfo from "./steps/step-three/step-three-info";
import StepTwoForm from "./steps/step-two/step-two-form";
import StepTwoInfo from "./steps/step-two/step-two-info";

const STORAGE_KEY = "careercafe_challenge_draft_v1";

export default function ChallengeContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useLocalStorage(
    "dashcart_challenge_current_step",
    0,
  );
  const [maxStepReached, setMaxStepReached] = useLocalStorage(
    "challenge_max_step_v1",
    0,
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<ChallengeFormValues | null>(
    null,
  );

  const isMobile = useIsMobile("lg");

  const form = useForm<ChallengeFormValues>({
    resolver: zodResolver(challengeFormSchema),
    defaultValues: {
      attractiveSignals: [],
      initialHypothesis: "",
      economics: {
        contributionOrder: { pune: "", jaipur: "", kochi: "" },
        monthlyOperatingContribution: { pune: "", jaipur: "", kochi: "" },
        breakEvenMonthlyOrders: { pune: "", jaipur: "", kochi: "" },
      },
      strategicInitiatives: [],
      isBudgetExceeded: false,
      budgetAcknowledged: false,
      tradeoffExplanation: "",
      decisionDefence: "",
      keyAssumptionToValidate: "",
      ceoMemo: "",
      reversalCondition: "",
    },
    mode: "onChange",
  });

  const { saveDraft, clearDraft } = useFormAutoSave({
    key: STORAGE_KEY,
    form,
  });

  const isStepOneLocked = maxStepReached > 0;
  const isStepThreeLocked = maxStepReached > 2;
  const activeStep = FORM_STEPS[currentStep];

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
    const currentFields = STEP_FIELDS[currentStep];
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
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      saveDraft();
      handleStepChange(currentStep - 1);
    }
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

      <div className="flex flex-1 flex-col-reverse pt-6 lg:flex-row lg:overflow-hidden lg:pt-8">
        {/* Left Column */}
        <section className="sticky top-0 flex w-full flex-col gap-6 px-6 sm:gap-7 sm:px-8 lg:w-[40%] lg:px-10">
          {currentStep === 0 && <StepOneInfo />}
          {currentStep === 1 && <StepTwoInfo />}
          {currentStep === 2 && <StepThreeInfo />}
          {currentStep === 3 && <StepFourInfo />}
          {currentStep === 4 && <StepFiveInfo control={form.control} />}
        </section>

        <Separator
          orientation={isMobile ? "horizontal" : "vertical"}
          className="bg-ring/50 max-lg:my-12 lg:mx-4"
        />

        {/* Right Column */}
        <section className="flex flex-1 flex-col justify-between px-6 sm:px-8 lg:px-10">
          <form className="flex flex-col justify-between gap-8">
            {/* Form Top Header */}
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
                <StepOneForm
                  control={form.control}
                  isLocked={isStepOneLocked}
                />
              )}
              {currentStep === 1 && <StepTwoForm control={form.control} />}
              {currentStep === 2 && (
                <StepThreeForm
                  control={form.control}
                  setValue={form.setValue}
                  isLocked={isStepThreeLocked}
                />
              )}
              {currentStep === 3 && (
                <StepFourForm control={form.control} setValue={form.setValue} />
              )}
              {currentStep === 4 && <StepFiveForm control={form.control} />}
            </div>

            {/* Bottom Navigation Controls */}
            <div className="flex items-center justify-between border-t py-4">
              <Button
                type="button"
                variant="outline"
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
                  {currentStep === 0 && isStepOneLocked
                    ? "Next"
                    : currentStep === 2
                      ? isStepThreeLocked
                        ? "Next"
                        : "Lock Plan & Continue"
                      : "Save & Continue"}
                  <HugeiconsIcon strokeWidth={2} icon={ChevronRightIcon} />
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
