"use client";

import { useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";

export default function ChallengeContainer() {
  const [currentStep, setCurrentStep] = useState(0);
  const isMobile = useIsMobile("lg");

  return (
    <div className="bg-background mx-auto flex min-h-svh max-w-350 flex-col py-10 sm:py-14 lg:flex-row lg:overflow-hidden">
      <LeftColumn currentStep={currentStep} />

      <Separator
        orientation={isMobile ? "horizontal" : "vertical"}
        className="bg-ring/50 max-lg:my-8 max-lg:hidden lg:mx-4"
      />

      <RightColumn currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
