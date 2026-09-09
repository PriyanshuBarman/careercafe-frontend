import { z } from "zod";

export const challengeFormSchema = z.object({
  // Step 1: Hypothesis
  city: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select one city",
  }),
  attractiveSignals: z
    .array(z.string())
    .min(2, "Please select exactly 2 signals")
    .max(2, "Please select exactly 2 signals"),
  concern: z.enum(
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
  hypothesis: z
    .string()
    .min(1, "Hypothesis summary is required")
    .max(80, "Hypothesis must be 80 characters or fewer"),

  // Step 2: Prove / Disprove
  dashCartCity: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select a city",
  }),

  // Step 3: Allocate
  entryModel: z.enum(["Owned Dark Stores", "Retail Partner", "Hybrid"], {
    message: "Please select an entry model",
  }),
  strategicInitiatives: z
    .array(z.string())
    .min(2, "Please select exactly 2 initiatives")
    .max(2, "Please select exactly 2 initiatives"),
  unfundedInitiative: z
    .string({
      message: "Please select one initiative to not fund",
    })
    .min(1, "Please select one initiative to not fund"),
  tradeoffText: z
    .string()
    .min(1, "This field is required")
    .max(120, "Max 120 characters"),

  // Step 4: Re-evaluate
  decision: z
    .string({
      message: "Please select your decision",
    })
    .min(1, "Please select your decision"),
  decisionHorizon: z.enum(["12 months", "24 months", "balanced"], {
    message: "Please select a horizon",
  }),
  sunkCostTreatment: z
    .string()
    .min(1, "This field is required")
    .max(100, "Max 100 characters"),
  defenceText: z
    .string()
    .min(1, "Decision summary is required")
    .max(100, "Max 100 characters"),
  assumptionToValidate: z
    .string()
    .min(1, "This field is required")
    .max(40, "Max 40 characters"),

  // Step 5: Recommend
  finalMarket: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select a city",
  }),
  primaryBoardMetric: z.enum(
    [
      "Contribution Margin per Order (₹)",
      "On-Time Delivery Rate (%)",
      "Monthly Order Volume / Demand",
      "Launch Timeline / Time to Market (Weeks)",
      "Customer Lifetime Value / Payback Period",
    ],
    {
      message: "Please select a primary board metric",
    },
  ),
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
