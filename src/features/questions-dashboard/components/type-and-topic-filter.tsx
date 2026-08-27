"use client";

import {
  Briefcase02Icon,
  ChartAnalysisIcon,
  DashboardSquare01Icon,
  Presentation01Icon,
  User03Icon,
  XIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { QuestionType } from "@/features/questions-dashboard/types/question";

export type QuestionTypeFilter = "All Types" | QuestionType;

export const QUESTION_TYPES = [
  { icon: DashboardSquare01Icon, name: "All Types" as const },
  { icon: Briefcase02Icon, name: "Case Study" as const },
  { icon: ChartAnalysisIcon, name: "Guesstimate" as const },
  { icon: Presentation01Icon, name: "Business/ Strategy" as const },
  { icon: User03Icon, name: "Fit & Behavioural" as const },
] as const;

export const QUESTION_TOPICS = [
  "Market Sizing",
  "Profitability",
  "Growth & Pricing",
  "Root Cause Analysis",
  "Data Interpretation",
  "Behavioural",
] as const;

type TypeAndTopicFilterProps = {
  selectedType: QuestionTypeFilter;
  onTypeChange: (type: QuestionTypeFilter) => void;
  selectedTopics: string[];
  onTopicToggle: (topic: string) => void;
};

export default function TypeAndTopicFilter({
  selectedType,
  onTypeChange,
  selectedTopics,
  onTopicToggle,
}: TypeAndTopicFilterProps) {
  return (
    <div className="bg-card rounded-xl border p-4">
      {/* Question Types Tabs */}
      <div className="flex items-center overflow-x-auto border-b sm:flex-wrap sm:overflow-visible">
        {QUESTION_TYPES.map((type) => {
          const isActive = selectedType === type.name;

          return (
            <Button
              key={type.name}
              variant="ghost"
              onClick={() => onTypeChange(type.name)}
              className={cn(
                "text-muted-foreground hover:text-primary relative shrink-0 text-xs hover:bg-transparent sm:flex-1 sm:gap-3 sm:text-sm",
                isActive && "text-primary font-semibold",
              )}
            >
              <HugeiconsIcon
                strokeWidth={2}
                icon={type.icon}
                className="size-4 sm:size-4.5"
              />
              <span className="whitespace-nowrap">{type.name}</span>
              {isActive && (
                <motion.div
                  layoutId="active-question-type-border-flex"
                  className="bg-primary absolute inset-x-0 -bottom-px h-0.75 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                />
              )}
            </Button>
          );
        })}
      </div>

      {/* Topic Pills */}
      <div className="mt-4 flex flex-col gap-2 sm:gap-2">
        <span className="pl-1 text-xs font-medium sm:text-sm">TOPICS</span>
        <div className="flex gap-2 overflow-x-auto p-0.5 sm:flex-wrap sm:gap-3">
          {QUESTION_TOPICS.map((topic) => {
            const isActive = selectedTopics.includes(topic);

            return (
              <Button
                key={topic}
                variant="secondary"
                onClick={() => onTopicToggle(topic)}
                className={cn(
                  "text-2xs transition-all sm:p-4 sm:text-xs",
                  isActive && "ring-primary text-primary font-medium ring",
                )}
              >
                {topic}
                {isActive && <HugeiconsIcon icon={XIcon} strokeWidth={2} />}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
