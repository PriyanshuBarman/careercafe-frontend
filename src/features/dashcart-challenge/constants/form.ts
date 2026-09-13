import type { ChallengeFormData } from "../schemas/form-schema";

export const CHALLENGE_FORM_DEFAULT_VALUES: Partial<ChallengeFormData> = {
  attractiveSignals: [],
  economics: {
    contributionOrder: { pune: "", jaipur: "", kochi: "" },
    monthlyOperatingContribution: { pune: "", jaipur: "", kochi: "" },
    breakEvenMonthlyOrders: { pune: "", jaipur: "", kochi: "" },
  },
  strategicInitiatives: [],
};

interface FormStep {
  step: string;
  title: string;
  time: string;
  points: string;
}

export const FORM_STEPS = [
  {
    step: "01",
    title: "Hypothesis",
    time: "Avg 15 Min",
    points: "20 Points",
  },
  {
    step: "02",
    title: "Prove / Disprove",
    time: "Avg 20 Min",
    points: "25 Points",
  },
  {
    step: "03",
    title: "Allocate",
    time: "Avg 20 Min",
    points: "20 Points",
  },
  {
    step: "04",
    title: "Re-evaluate",
    time: "Avg 15 Min",
    points: "25 Points",
  },
  {
    step: "05",
    title: "Recommend",
    time: "Avg 20 Min",
    points: "20 Points",
  },
] as const satisfies readonly FormStep[];

export const FORM_STEP_FIELDS: Record<number, (keyof ChallengeFormData)[]> = {
  0: [
    "investigatedCity",
    "attractiveSignals",
    "primaryConcern",
    "initialHypothesis",
  ],
  1: ["prioritisedCity", "economics", "stressTestMetric", "viewInterpretation"],
  2: [
    "entryModel",
    "strategicInitiatives",
    "hardestUnfundedInitiative",
    "isBudgetExceeded",
    "budgetAcknowledged",
    "tradeoffExplanation",
  ],
  3: [
    "strategicDecision",
    "decisionHorizon",
    "sunkCostTreatment",
    "decisionDefence",
    "keyAssumptionToValidate",
  ],
  4: [
    "finalTargetMarket",
    "primaryBoardMetric",
    "ceoMemo",
    "reversalCondition",
  ],
};
