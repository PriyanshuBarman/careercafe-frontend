"use client";

import {
  AlarmClockIcon,
  CheckIcon,
  ChevronRightIcon,
  InfoIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CHALLENGE_TIME_LIMIT_IN_MINUTES,
  useChallengeStore,
} from "../store/challenge-store";

const CHALLENGE_KEY_POINTS = [
  {
    icon: AlarmClockIcon,
    label: "Time Limit",
    value: `${CHALLENGE_TIME_LIMIT_IN_MINUTES} Min (Continuous)`,
  },
  {
    icon: CheckIcon,
    label: "Progress",
    value: "Auto-saved per step",
  },
  {
    icon: InfoIcon,
    label: "Submission",
    value: "Auto-submits on timeout",
  },
] as const;

export default function StartChallengeDialog() {
  const hasStarted = useChallengeStore((state) => state.hasStarted);
  const isCompleted = useChallengeStore((state) => state.isCompleted);
  const startChallenge = useChallengeStore((state) => state.startChallenge);

  if (hasStarted || isCompleted) return null;

  const handleStart = () => {
    startChallenge();
    toast.info(
      `Challenge started! ${CHALLENGE_TIME_LIMIT_IN_MINUTES} minutes remaining.`,
      {
        position: "top-center",
      },
    );
  };

  return (
    <Dialog open={true}>
      <DialogContent
        showCloseButton={false}
        className="gap-6 p-6 sm:min-w-xl sm:p-8"
      >
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/10 text-primary mb-4 flex items-center justify-center rounded-full p-5">
            <HugeiconsIcon
              icon={AlarmClockIcon}
              strokeWidth={2}
              className="size-6 sm:size-8"
            />
          </div>

          <DialogHeader className="gap-1.5 text-center">
            <DialogTitle className="tracking-tight sm:text-2xl">
              Start Challenge
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              DashCart Expansion Case Study
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="bg-muted/40 divide-border divide-y rounded-xl border">
          {CHALLENGE_KEY_POINTS.map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-3.5">
              <HugeiconsIcon
                icon={item.icon}
                className="text-primary size-4 shrink-0 sm:size-4.5"
                strokeWidth={2}
              />
              <div className="flex flex-1 items-center justify-between text-xs sm:text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="bg-card flex-col gap-4 sm:flex-col">
          <div className="text-muted-foreground text-2xs flex items-center justify-center gap-2 text-center sm:text-xs">
            <HugeiconsIcon icon={InfoIcon} strokeWidth={2} className="size-3" />
            <p>The timer starts immediately and cannot be paused.</p>
          </div>
          <Button
            size="lg"
            className="w-full gap-2 p-5 text-xs font-normal sm:text-sm sm:font-medium"
            onClick={handleStart}
          >
            <span>Begin Assessment</span>
            <HugeiconsIcon icon={ChevronRightIcon} strokeWidth={2} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
