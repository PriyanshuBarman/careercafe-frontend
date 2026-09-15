"use client";

import { useMemo } from "react";
import { useWatch, type Control } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldTitle } from "@/components/ui/field";
import { FORM_STEPS } from "../../../constants/form";
import { type ChallengeFormData } from "../../../schemas/form-schema";
import { calculatePlanSummary } from "../../../utils/plan-summary";

type Step5InfoProps = {
  control: Control<ChallengeFormData>;
};

type PreviewItem = {
  label: string;
  value?: string;
  isTextBlock?: boolean;
};

type JourneySection = {
  title: string;
  items: PreviewItem[];
};

export default function Step5Info({ control }: Step5InfoProps) {
  const {
    investigatedCity,
    attractiveSignals,
    primaryConcern,
    initialHypothesis,
    prioritisedCity,
    stressTestMetric,
    viewInterpretation,
    entryModel,
    strategicInitiatives,
    hardestUnfundedInitiative,
    tradeoffExplanation,
    strategicDecision,
    decisionHorizon,
    sunkCostTreatment,
    decisionDefence,
    keyAssumptionToValidate,
  } = useWatch({ control });

  const planSummary = useMemo(
    () => calculatePlanSummary(entryModel, strategicInitiatives),
    [entryModel, strategicInitiatives],
  );

  const derivedStatus = useMemo(() => {
    if (!investigatedCity || !prioritisedCity) return "—";
    return investigatedCity !== prioritisedCity
      ? `Hypothesis changed: ${investigatedCity} → ${prioritisedCity}`
      : "Hypothesis strengthened";
  }, [investigatedCity, prioritisedCity]);

  const strategicDecisionLabel =
    strategicDecision === "Jaipur"
      ? "Stick with Jaipur"
      : strategicDecision === "Kochi"
        ? "Switch to Kochi"
        : strategicDecision;

  const sections: JourneySection[] = [
    {
      title: `Step 01 · ${FORM_STEPS[0].title}`,
      items: [
        { label: "Investigated City", value: investigatedCity },
        {
          label: "Attractive Signals",
          value: attractiveSignals?.join(", "),
        },
        { label: "Primary Concern", value: primaryConcern },
        {
          label: "Initial Hypothesis",
          value: initialHypothesis,
          isTextBlock: true,
        },
      ],
    },
    {
      title: `Step 02 · ${FORM_STEPS[1].title}`,
      items: [
        { label: "Prioritised City", value: prioritisedCity },
        { label: "Stress-Test Metric", value: stressTestMetric },
        { label: "Evolution Status", value: derivedStatus },
        {
          label: "Interpretation",
          value: viewInterpretation,
          isTextBlock: true,
        },
      ],
    },
    {
      title: `Step 03 · ${FORM_STEPS[2].title}`,
      items: [
        { label: "Entry Model", value: entryModel },
        {
          label: "Strategic Initiatives",
          value: strategicInitiatives?.join(", "),
        },
        {
          label: "Hardest Unfunded Initiative to Leave Out",
          value: hardestUnfundedInitiative,
        },
        {
          label: "Provisional Spend",
          value: planSummary ? `₹${planSummary.totalCost}L` : "—",
        },
        {
          label: "On-Time Delivery",
          value: planSummary ? `${planSummary.onTimeRate}%` : "—",
        },
        {
          label: "Capacity",
          value: planSummary ? `${planSummary.totalCapacity}k` : "—",
        },
        {
          label: "Trade-off Explanation",
          value: tradeoffExplanation,
          isTextBlock: true,
        },
      ],
    },
    {
      title: `Step 04 · ${FORM_STEPS[3].title}`,
      items: [
        {
          label: "Strategic Decision",
          value: strategicDecisionLabel,
        },
        {
          label: "Decision Horizon",
          value: decisionHorizon,
        },
        {
          label: "Sunk Cost Treatment (₹45L)",
          value: sunkCostTreatment,
          isTextBlock: true,
        },
        {
          label: "Decision Defense & Counterargument",
          value: decisionDefence,
          isTextBlock: true,
        },
        {
          label: "Key Assumption to Validate",
          value: keyAssumptionToValidate,
          isTextBlock: true,
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-7">
      <div>
        <h2 className="text-base font-medium tracking-tight sm:text-lg sm:font-semibold">
          Your Decision Journey
        </h2>
        <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
          Review your evolving hypothesis and commitments from earlier stages.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <JourneyCard
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}

function JourneyCard({
  title,
  items,
}: {
  title: string;
  items: PreviewItem[];
}) {
  return (
    <Card size="sm" className="bg-muted/40">
      <CardHeader className="border-b">
        <CardTitle className="text-foreground text-xs font-semibold sm:text-sm">
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
