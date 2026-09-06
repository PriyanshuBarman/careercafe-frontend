"use client";

import { Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldTitle } from "@/components/ui/field";
import { type ChallengeFormValues } from "../../challenge/schemas/challenge-form-schema";

type PreviewItem = {
  label: string;
  value: string;
  isTextBlock?: boolean;
};

type Sections = {
  title: string;
  items: PreviewItem[];
};

type FormPreviewDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  values: ChallengeFormValues;
  onConfirmSubmit: () => void;
};

export default function FormPreviewDialog({
  open,
  onOpenChange,
  values,
  onConfirmSubmit,
}: FormPreviewDialogProps) {
  const sections: Sections[] = [
    {
      title: "Step 01 · Hypothesis",
      items: [
        { label: "Investigated City", value: values.city },
        {
          label: "Attractive Signals",
          value:
            values.attractiveSignals && values.attractiveSignals.length > 0
              ? values.attractiveSignals.join(", ")
              : "—",
        },
        {
          label: "Primary Concerns",
          value:
            values.concerns && values.concerns.length > 0
              ? values.concerns.join(", ")
              : "—",
        },
        {
          label: "Initial Hypothesis",
          value: values.hypothesis,
          isTextBlock: true,
        },
      ],
    },
    {
      title: "Step 02 · Economics",
      items: [{ label: "Prioritised City", value: values.dashCartCity }],
    },
    {
      title: "Step 03 · Capital Allocation",
      items: [
        { label: "Entry Model", value: values.entryModel },
        {
          label: "Strategic Initiatives",
          value:
            values.strategicInitiatives &&
            values.strategicInitiatives.length > 0
              ? values.strategicInitiatives.join(", ")
              : "None selected",
        },
      ],
    },
    {
      title: "Step 04 · Re-evaluation",
      items: [
        {
          label: "Decision Horizon",
          value: values.decisionHorizon,
        },
        {
          label: "Decision Defense",
          value: values.defendDecision,
          isTextBlock: true,
        },
      ],
    },
    {
      title: "Step 05 · Final Recommendation",
      items: [
        {
          label: "Final Target Market",
          value: values.finalMarket,
        },
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-[90vh] sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="sm:text-xl">
            Review Your Application
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Please review your decisions and responses before final submission
            to the board.
          </DialogDescription>
        </DialogHeader>

        <div className="no-scrollbar -mx-4 space-y-6 overflow-y-auto p-4">
          {sections.map((section) => (
            <PreviewCard
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <DialogFooter className="mt-auto gap-2 sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="text-xs sm:text-sm"
          >
            Back to Edit
          </Button>
          <Button
            type="button"
            onClick={onConfirmSubmit}
            className="text-xs sm:text-sm"
          >
            <HugeiconsIcon
              icon={Tick01Icon}
              strokeWidth={2.5}
              className="mr-1.5 size-4"
            />
            Confirm & Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type PreviewCardProps = {
  title: string;
  items: PreviewItem[];
};

function PreviewCard({ title, items }: PreviewCardProps) {
  return (
    <Card size="sm" className="bg-muted/30">
      <CardHeader className="border-b">
        <CardTitle className="text-primary text-xs sm:text-sm">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 pt-2">
        {items.map((item) =>
          item.isTextBlock ? (
            <Field
              key={item.label}
              orientation="vertical"
              className="gap-1.5 pt-1"
            >
              <FieldTitle className="text-muted-foreground text-xs font-normal sm:text-sm">
                {item.label}
              </FieldTitle>
              <div className="border-border/60 bg-background/60 text-foreground rounded-md border px-3 py-2 text-xs leading-relaxed sm:text-sm">
                {item.value ? (
                  <span className="italic">“{item.value}”</span>
                ) : (
                  <span className="text-muted-foreground italic">
                    No response provided
                  </span>
                )}
              </div>
            </Field>
          ) : (
            <Field
              key={item.label}
              orientation="horizontal"
              className="justify-between gap-4"
            >
              <FieldTitle className="text-muted-foreground shrink-0 text-xs font-normal sm:text-sm">
                {item.label}
              </FieldTitle>
              <span className="text-right text-xs font-medium sm:text-sm">
                {item.value || "—"}
              </span>
            </Field>
          ),
        )}
      </CardContent>
    </Card>
  );
}
