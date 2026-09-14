"use client";

import { useEffect, useState } from "react";
import { AlarmClockIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CHALLENGE_TIME_LIMIT_IN_MINUTES,
  useChallengeStore,
} from "../store/challenge-store";

const formatSeconds = (totalSeconds: number) => {
  const clamped = Math.max(0, totalSeconds);
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(minutes)}:${pad(seconds)}`;
};

export default function CountdownTimer() {
  const hasStarted = useChallengeStore((state) => state.hasStarted);
  const isCompleted = useChallengeStore((state) => state.isCompleted);
  const deadlineTimestamp = useChallengeStore(
    (state) => state.deadlineTimestamp,
  );

  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    if (!hasStarted || !deadlineTimestamp) {
      return CHALLENGE_TIME_LIMIT_IN_MINUTES * 60;
    }
    return Math.max(0, Math.floor((deadlineTimestamp - Date.now()) / 1000));
  });

  useEffect(() => {
    if (!hasStarted || !deadlineTimestamp || isCompleted) return;

    const interval = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.floor((deadlineTimestamp - Date.now()) / 1000),
      );
      setRemainingSeconds(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [hasStarted, deadlineTimestamp, isCompleted]);

  if (!hasStarted || isCompleted) return null;

  const isLowTime =
    hasStarted && remainingSeconds <= 900 && remainingSeconds > 300; // <= 15 min
  const isVeryLowTime = hasStarted && remainingSeconds <= 300; // <= 5 min

  return (
    <Button
      variant="secondary"
      className={cn(
        "text-primary gap-2 p-4 text-xs font-medium tabular-nums sm:p-5 sm:text-sm",
        isLowTime &&
          "border-amber-500/30 bg-amber-500/15 text-amber-600 dark:bg-amber-500/20",
        isVeryLowTime &&
          "border-destructive/40 bg-destructive/10 text-destructive dark:bg-destructive/20",
      )}
    >
      <HugeiconsIcon icon={AlarmClockIcon} strokeWidth={2} />
      {formatSeconds(remainingSeconds)} remaining
    </Button>
  );
}
