"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useChallengeStore } from "@/features/dashcart-challenge/store/challenge-store";

const formatTimeSpent = (totalSeconds: number | null) => {
  if (totalSeconds === null || totalSeconds <= 0) return "0s";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(" ");
};

export default function SubmissionTimeCard() {
  const searchParams = useSearchParams();
  const resetChallenge = useChallengeStore((state) => state.resetChallenge);

  useEffect(() => {
    resetChallenge();
  }, [resetChallenge]);

  const timeSpentParam = searchParams.get("timeSpentSeconds");
  const timeSpentSeconds =
    timeSpentParam !== null && !isNaN(Number(timeSpentParam))
      ? parseInt(timeSpentParam, 10)
      : null;

  if (timeSpentSeconds === null) return null;

  return (
    <div className="bg-muted/30 flex w-full flex-col items-center gap-1 rounded-xl border px-6 py-3.5 text-center">
      <span className="text-2xs text-muted-foreground font-semibold tracking-wider uppercase">
        Total Time Taken
      </span>
      <span className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">
        {formatTimeSpent(timeSpentSeconds)}
      </span>
    </div>
  );
}
