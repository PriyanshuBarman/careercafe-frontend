import { z } from "zod";

export const challengeFormSchema = z.object({
  // Step 1: Hypothesis
  city: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select an expansion city",
  }),
  attractiveSignals: z
    .array(z.string())
    .min(1, "Please select at least one signal"),
  concerns: z.array(z.string()).min(1, "Please select at least one concern"),
  hypothesis: z
    .string()
    .min(1, "Hypothesis summary is required")
    .max(80, "Hypothesis must be 80 characters or fewer"),

  // Step 2: Economics
  dashCartCity: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select a city",
  }),

  // Step 3: Allocate
  entryModel: z.enum(["Owned Dark Stores", "Retail Partner", "Hybrid"], {
    message: "Please select an entry model",
  }),
  strategicInitiatives: z
    .array(z.string())
    .min(1, "Select at least one strategy"),

  // Step 4: Re-evaluate
  decisionHorizon: z.enum(["12 months", "24 months", "balanced"], {
    message: "Please select a horizon",
  }),
  defendDecision: z
    .string()
    .min(1, "Decision summary is required")
    .max(80, "Decision must be 80 characters or fewer"),

  // Step 5: Recommend
  finalMarket: z.enum(["Jaipur", "Pune", "Bengaluru"], {
    message: "Please select a city",
  }),
});

export type ChallengeFormValues = z.infer<typeof challengeFormSchema>;
