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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StepFive from "../../challenge/components/steps/step-five";
import StepFour from "../../challenge/components/steps/step-four";
import StepOne from "../../challenge/components/steps/step-one";
import StepThree from "../../challenge/components/steps/step-three";
import StepTwo from "../../challenge/components/steps/step-two";
import {
  FORM_STEPS,
  STEP_FIELDS,
} from "../../challenge/constants/right-column";
import { useFormAutoSave } from "../../challenge/hooks/use-form-auto-save";
import {
  challengeFormSchema,
  type ChallengeFormValues,
} from "../schemas/challenge-form-schema";
import FormPreviewDialog from "./form-preview-dialog";

const STORAGE_KEY = "careercafe_challenge_draft_v1";

type RightColumnProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onResetSteps?: () => void;
};

export default function RightColumn({
  currentStep,
  setCurrentStep,
  onResetSteps,
}: RightColumnProps) {
  const router = useRouter();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState<ChallengeFormValues | null>(
    null,
  );

  const form = useForm<ChallengeFormValues>({
    resolver: zodResolver(challengeFormSchema),
    defaultValues: {
      city: undefined,
      attractiveSignals: [],
      concern: undefined,
      hypothesis: "",
      dashCartCity: undefined,
      entryModel: undefined,
      strategicInitiatives: [],
      unfundedInitiative: undefined,
      tradeoffText: "",
      decision: undefined,
      decisionHorizon: undefined,
      sunkCostTreatment: "",
      defenceText: "",
      assumptionToValidate: "",
      finalMarket: undefined,
      primaryBoardMetric: undefined,
      ceoMemo: "",
      reversalCondition: "",
    },
    mode: "onChange",
  });

  const { saveDraft, clearDraft } = useFormAutoSave({
    key: STORAGE_KEY,
    form,
  });

  const activeStep = FORM_STEPS[currentStep];

  const handleNext = async () => {
    const currentFields = STEP_FIELDS[currentStep];
    const isStepValid = await form.trigger(currentFields);
    if (!isStepValid) return;

    if (currentStep < FORM_STEPS.length - 1) {
      saveDraft();
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      saveDraft();
      setCurrentStep(currentStep - 1);
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
    onResetSteps?.();
    router.push("/challenges/success");
  };

  return (
    <section className="flex flex-1 flex-col justify-between px-6 sm:px-8 lg:px-10">
      <form className="flex flex-col justify-between gap-8">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-cc-sage-900 text-2xs font-semibold tracking-widest uppercase sm:text-xs">
              ROUND 01 · {activeStep.step} OF 05
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
          {currentStep === 0 && <StepOne control={form.control} />}
          {currentStep === 1 && <StepTwo control={form.control} />}
          {currentStep === 2 && <StepThree control={form.control} />}
          {currentStep === 3 && <StepFour control={form.control} />}
          {currentStep === 4 && <StepFive control={form.control} />}
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-between border-t pt-4">
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
              Save & Continue
              <HugeiconsIcon strokeWidth={2} icon={ChevronRightIcon} />
            </Button>
          ) : (
            <Button
              type="button"
              variant="default"
              onClick={handleReviewClick}
              className="p-4 text-xs sm:p-4.5 sm:text-sm"
            >
              Review Application
              <HugeiconsIcon strokeWidth={2} icon={EyeIcon} />
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
  );
}
