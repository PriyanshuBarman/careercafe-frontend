import type { ChallengeFormValues } from "../schemas/challenge-form-schema";

export const FORM_STEPS = [
  {
    step: "01",
    title: "Hypothesis",
    description: "Form your initial working hypothesis on market viability",
    time: "15 Min",
    points: "20 Points",
  },
  {
    step: "02",
    title: "Prove / Disprove",
    description:
      "Test store-level unit economics and operating cost structures",
    time: "20 Min",
    points: "25 Points",
  },
  {
    step: "03",
    title: "Allocate",
    description: "Deploy scarce capital budget across dark stores and growth",
    time: "20 Min",
    points: "20 Points",
  },
  {
    step: "04",
    title: "Re-evaluate",
    description:
      "Adapt your model in response to competitive and demand shifts",
    time: "15 Min",
    points: "15 Points",
  },
  {
    step: "05",
    title: "Recommend",
    description: "Synthesize findings into an actionable board investment memo",
    time: "20 Min",
    points: "20 Points",
  },
];

export const STEP_FIELDS: Record<number, (keyof ChallengeFormValues)[]> = {
  0: ["city", "attractiveSignals", "concern", "hypothesis"],
  1: ["dashCartCity"],
  2: [
    "entryModel",
    "strategicInitiatives",
    "unfundedInitiative",
    "tradeoffText",
  ],
  3: [
    "decision",
    "decisionHorizon",
    "sunkCostTreatment",
    "defenceText",
    "assumptionToValidate",
  ],
  4: ["finalMarket", "primaryBoardMetric", "ceoMemo", "reversalCondition"],
};
