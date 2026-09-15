import { Suspense } from "react";
import type { Metadata } from "next";
import { CheckIcon, Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import LinkButton from "@/components/link-button";
import SubmissionTimeCard from "./_components/submission-time-card";

export const metadata: Metadata = {
  title: "Submission Confirmed",
  description: "Your challenge responses have been successfully submitted.",
};

export default function SuccessPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col items-center justify-center gap-8 px-4 py-10 sm:p-12 sm:px-6 md:px-8">
      {/* Check Icon */}
      <div className="bg-primary animate-in zoom-in ring-primary/50 w-fit rounded-full ring-6 duration-500">
        <HugeiconsIcon
          icon={CheckIcon}
          strokeWidth={2}
          className="text-background animate-in spin-in-90 zoom-in size-20 stroke-3 p-4 duration-500 sm:size-24"
        />
      </div>

      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Submission confirmed
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Your challenge responses have been successfully submitted.
        </p>
      </div>

      <Suspense
        fallback={<div className="bg-muted/30 h-19 w-90 rounded-xl border" />}
      >
        <SubmissionTimeCard />
      </Suspense>

      <LinkButton href="/" className="w-full p-5 text-xs sm:text-sm">
        Exit
        <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
      </LinkButton>
    </div>
  );
}
