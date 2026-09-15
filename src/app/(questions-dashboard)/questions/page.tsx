import { Suspense } from "react";
import type { Metadata } from "next";

import Dashboard from "@/features/questions-dashboard/components/dashboard";

export const metadata: Metadata = {
  title: "Interview Questions",
  description:
    "Explore case studies, guesstimates, strategy, and fit questions across Data, BI, Business, and Consulting Analyst tracks to build interview confidence.",
};

export default async function QuestionDashboardPage() {
  return (
    <div className="py-">
      <Suspense fallback={null}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
