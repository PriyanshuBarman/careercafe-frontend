import {
  Briefcase02Icon,
  ChartAnalysisIcon,
  CodeXmlIcon,
  DashboardSquare01Icon,
  Presentation01Icon,
  User03Icon,
  XIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { QuestionType, Topic } from "../types/question";

const QUESTION_TYPE_ICONS: Record<string, IconSvgElement> = {
  "All Types": DashboardSquare01Icon,
  "Case Study": Briefcase02Icon,
  "Business Case": Briefcase02Icon,
  Guesstimate: ChartAnalysisIcon,
  "Business / Strategy": Presentation01Icon,
  "Fit & Behavioural": User03Icon,
  Coding: CodeXmlIcon,
  Technical: CodeXmlIcon,
  "Data Interpretation": ChartAnalysisIcon,
};

type TypeAndTopicFilterProps = {
  types: readonly QuestionType[];
  selectedType: QuestionType | null;
  onTypeChange: (type: QuestionType | null) => void;
  topics: readonly Topic[];
  selectedTopics: Topic[];
  onTopicToggle: (topic: Topic) => void;
};

export default function TypeAndTopicFilter({
  types,
  selectedType,
  onTypeChange,
  topics,
  selectedTopics,
  onTopicToggle,
}: TypeAndTopicFilterProps) {
  const typeOptions = [
    {
      icon: DashboardSquare01Icon,
      name: "All Types",
      value: null,
    },
    ...types.map((typeName) => ({
      icon: QUESTION_TYPE_ICONS[typeName] ?? DashboardSquare01Icon,
      name: typeName,
      value: typeName,
    })),
  ];

  return (
    <div className="bg-card rounded-xl border p-4">
      {/* Question Types Tabs (Single-Select) */}
      <div className="flex items-center overflow-x-auto border-b sm:flex-wrap sm:overflow-visible">
        {typeOptions.map((type) => {
          const isActive = selectedType === type.value;

          return (
            <Button
              key={type.name}
              variant="ghost"
              onClick={() => onTypeChange(type.value)}
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
                  layoutId="active-question-type-border"
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

      {/* Topic Pills (Multi-Select) */}
      {topics.length > 0 && (
        <div className="mt-4 flex flex-col gap-2 sm:gap-2">
          <span className="text-xs font-medium sm:pl-2 sm:text-sm">TOPICS</span>
          <div className="flex gap-2 overflow-x-auto sm:flex-wrap sm:gap-3 sm:p-1">
            {topics.map((topic) => {
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
      )}
    </div>
  );
}
