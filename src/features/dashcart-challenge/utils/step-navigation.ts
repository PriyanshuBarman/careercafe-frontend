import { ChevronRightIcon, LockKeyholeIcon } from "@hugeicons/core-free-icons";

interface GetNextButtonConfigParams {
  currentStep: number;
  maxStepReached: number;
}

export function getNextButtonConfig({
  currentStep,
  maxStepReached,
}: GetNextButtonConfigParams) {
  const isAlreadyFilled = currentStep < maxStepReached;

  if (isAlreadyFilled) {
    return { label: "Next", icon: ChevronRightIcon };
  }

  if (currentStep === 2) {
    return { label: "Lock Plan & Continue", icon: LockKeyholeIcon };
  }

  return { label: "Save & Continue", icon: ChevronRightIcon };
}
