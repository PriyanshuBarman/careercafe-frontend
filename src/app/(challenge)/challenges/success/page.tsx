import { CheckIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import LinkButton from "@/components/link-button";

export default function SuccessPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md flex-col items-center justify-center gap-12 px-4 py-10 sm:p-12 sm:px-6 md:px-8">
      {/* Check Icon */}
      <div className="bg-primary animate-in zoom-in ring-primary/50 w-fit rounded-full ring-6 duration-500">
        <HugeiconsIcon
          icon={CheckIcon}
          strokeWidth={2}
          className="text-background animate-in spin-in-90 zoom-in size-20 stroke-3 p-4 duration-500 sm:size-24"
        />
      </div>

      <div className="space-y-2 text-center sm:space-y-4">
        <h1 className="text-lg font-medium tracking-tight sm:text-2xl sm:font-semibold">
          Your DashCart challenge is in.
        </h1>
        <p className="text-muted-foreground max-w-sm text-xs sm:text-sm">
          Your expansion hypothesis and unit economics breakdown for DashCart
          have been successfully logged and sent for evaluation.
        </p>
      </div>

      <LinkButton
        href="/challenges/dashcart-expansion"
        className="w-full p-5 text-xs sm:text-sm"
      >
        Return to Challenges
      </LinkButton>
    </div>
  );
}
