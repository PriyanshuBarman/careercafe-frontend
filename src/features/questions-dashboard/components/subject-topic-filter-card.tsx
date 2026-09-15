import { InfoIcon, XIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Subject, Topic } from "../types/question";

type SubjectTopicFilterCardProps = {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSubjectChange: (subject: Subject | null) => void;
  topics: Topic[];
  selectedTopics: Topic[];
  onTopicToggle: (topic: Topic) => void;
};

export default function SubjectTopicFilterCard({
  subjects,
  selectedSubject,
  onSubjectChange,
  topics,
  selectedTopics,
  onTopicToggle,
}: SubjectTopicFilterCardProps) {
  const handleSubjectClick = (subject: Subject | "All Subjects") => {
    if (subject === "All Subjects") {
      onSubjectChange(null);
    } else {
      onSubjectChange(subject);
    }
  };

  return (
    <div className="bg-card space-y-4 rounded-2xl border px-4 py-6">
      {/* Subject Pills (Single-Select) */}
      {subjects.length > 0 && (
        <div className="flex flex-col gap-2 sm:gap-2">
          <span className="text-xs font-medium sm:pl-2 sm:text-sm">
            SUBJECTS
          </span>
          <div className="flex gap-2 overflow-x-auto p-1 sm:flex-wrap sm:gap-3">
            {(["All Subjects", ...subjects] as const).map((subject) => {
              const isActive =
                (subject === "All Subjects" && selectedSubject === null) ||
                selectedSubject === subject;

              return (
                <Button
                  key={subject}
                  variant="secondary"
                  onClick={() => handleSubjectClick(subject)}
                  className={cn(
                    "text-2xs sm:p-4 sm:text-xs",
                    isActive &&
                      "ring-primary bg-primary/5 hover:bg-primary/5 text-primary ring",
                  )}
                >
                  {subject}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      <Separator />

      {/* Topic Pills or placeholder message */}
      {selectedSubject === null ? (
        <Alert className="bg-accent w-fit rounded-lg border-none">
          <HugeiconsIcon
            icon={InfoIcon}
            className="text-muted-foreground! translate-y-0!"
          />
          <AlertDescription className="text-2xs sm:text-xs">
            Select a subject to filter by topics.
          </AlertDescription>
        </Alert>
      ) : (
        topics.length > 0 && (
          <div className="flex flex-col gap-2 sm:gap-2">
            <span className="text-xs font-medium sm:pl-2 sm:text-sm">
              TOPICS
            </span>
            <div className="flex gap-2 overflow-x-auto p-1 sm:flex-wrap sm:gap-3">
              {topics.map((topic) => {
                const isActive = selectedTopics.includes(topic);

                return (
                  <Button
                    key={topic}
                    variant="secondary"
                    onClick={() => onTopicToggle(topic)}
                    className={cn(
                      "text-2xs sm:p-4 sm:text-xs",
                      isActive &&
                        "ring-primary bg-primary/5 hover:bg-primary/5 text-primary ring",
                    )}
                  >
                    {topic}
                    {isActive && <HugeiconsIcon icon={XIcon} strokeWidth={2} />}
                  </Button>
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
}
