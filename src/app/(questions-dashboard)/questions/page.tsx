import { Suspense } from "react";

import { Dashboard } from "@/features/questions-dashboard/dashboard";

export default async function QuestionDashboardPage() {
  return (
    <div className="py-10">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="text-lg leading-tight font-medium tracking-tight sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl">
          Interview Questions
        </h1>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-lg">
          Explore case studies, guesstimates, strategy and fit questions to
          build confidence.
        </p>
      </div>

      <Suspense fallback={null}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
