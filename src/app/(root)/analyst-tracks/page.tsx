import { Suspense } from "react";
import type { Metadata } from "next";

import AnalystTracksView from "@/components/analyst-tracks/analyst-tracks-view";

export const metadata: Metadata = {
  title: "Analyst Tracks | CareerCafe",
  description:
    "Explore your analyst direction. Compare Business Analyst, Data Analyst, Technical Analyst, and Consulting Analyst career tracks and interview preparation expectations.",
};

export default function AnalystTracksPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:gap-4">
        <h1 className="text-xl font-semibold tracking-tight sm:text-3xl md:text-3xl lg:text-4xl">
          Analyst Tracks
        </h1>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-lg">
          Understand the roles, skills and interview expectations to choose the
          right path for you.
        </p>
      </div>

      <Suspense fallback={null}>
        <AnalystTracksView />
      </Suspense>
    </section>
  );
}
