import { z } from "zod";

import { FINAL_MARKETS, PRIMARY_BOARD_METRICS } from "../constants/step-five";
import { DECISION_HORIZONS, SUNK_COST_OPTIONS } from "../constants/step-four";
import { CITIES } from "../constants/step-one";
import { INITIATIVES, MODELS } from "../constants/step-three";

export const challengeFormSchema = z.object({
  // Step 1
  investigatedCity: z.enum(CITIES, {
    message: "Please select one city",
  }),
  attractiveSignals: z
    .array(z.string())
    .min(2, "Please select exactly 2 signals")
    .max(2, "Please select exactly 2 signals"),
  primaryConcern: z.enum(
    [
      "Competitive intensity",
      "Weak unit economics",
      "Delivery complexity",
      "High fixed cost",
    ],
    {
      message: "Please select your biggest concern",
    },
  ),
  initialHypothesis: z
    .string()
    .min(1, "Hypothesis summary is required")
    .max(80, "Hypothesis must be 80 characters or fewer"),

  // Step 2
  prioritisedCity: z.enum(CITIES, {
    message: "Please select a city",
  }),
  economics: z.object({
    contributionOrder: z.object({
      pune: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      jaipur: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      kochi: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
    }),
    monthlyOperatingContribution: z.object({
      pune: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      jaipur: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      kochi: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
    }),
    breakEvenMonthlyOrders: z.object({
      pune: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      jaipur: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
      kochi: z
        .string()
        .min(1)
        .regex(/^-?[0-9,]*\.?[0-9]+$/, "Must be a number"),
    }),
  }),

  // Step 3
  entryModel: z.enum(MODELS, {
    message: "Please select an entry model",
  }),
  strategicInitiatives: z
    .array(z.enum(INITIATIVES))
    .min(2, "Please select exactly 2 initiatives")
    .max(2, "Please select exactly 2 initiatives"),
  hardestUnfundedInitiative: z.enum(INITIATIVES, {
    message: "Please select which initiative was hardest to leave out",
  }),
  isBudgetExceeded: z.boolean().optional(),
  budgetAcknowledged: z.boolean().optional(),
  tradeoffExplanation: z
    .string()
    .min(1, "This field is required")
    .max(120, "Max 120 characters"),

  // Step 4
  strategicDecision: z.enum(FINAL_MARKETS, {
    message: "Please select your decision",
  }),
  decisionHorizon: z.enum(DECISION_HORIZONS, {
    message: "Please select a horizon",
  }),
  sunkCostTreatment: z.enum(SUNK_COST_OPTIONS, {
    message: "Please select how to treat the ₹45L spent",
  }),
  decisionDefence: z
    .string()
    .min(1, "Decision summary is required")
    .max(100, "Max 100 characters"),
  keyAssumptionToValidate: z
    .string()
    .min(1, "This field is required")
    .max(40, "Max 40 characters"),

  // Step 5
  finalTargetMarket: z.enum(FINAL_MARKETS, {
    message: "Please select a final market",
  }),
  primaryBoardMetric: z.enum(PRIMARY_BOARD_METRICS, {
    message: "Please select a primary board metric",
  }),
  ceoMemo: z
    .string()
    .min(1, "This field is required")
    .max(180, "Max 180 characters"),
  reversalCondition: z
    .string()
    .min(1, "This field is required")
    .max(50, "Max 50 characters"),
});

export type ChallengeFormValues = z.infer<typeof challengeFormSchema>;
