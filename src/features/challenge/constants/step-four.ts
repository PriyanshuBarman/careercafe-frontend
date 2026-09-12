import type { TableData } from "@/components/simple-table";

export const DECISION_HORIZONS = [
  "One-year view",
  "Two-year view",
  "Balanced",
] as const;

export type DecisionHorizon = (typeof DECISION_HORIZONS)[number];

export const SUNK_COST_OPTIONS = [
  "Exclude ₹45L from the incremental financial comparison, but acknowledge the existing operational commitment",
  "Include ₹45L again as a switching cost",
  "Ignore ₹45L completely",
  "Unsure",
] as const;

export type SunkCostOption = (typeof SUNK_COST_OPTIONS)[number];

// --- Info / Exhibit Data ---
export const STEP_FOUR_TABLE: TableData = {
  headers: ["Metric", "Stay Jaipur", "Switch Kochi"],
  rows: [
    ["12-month operating contribution", "₹340L", "₹365L before switch costs"],
    ["Transition cost", "₹0", "-₹25L"],
    ["Festival-delay impact", "₹0", "-₹22L"],
    ["Net 12-month value", "₹340L", "₹318L"],
    ["Net 24-month value", "₹620L", "₹828L"],
    ["Competitive intensity", "Medium", "Low after exit"],
    ["Execution speed", "Faster", "~5 weeks slower"],
    ["Jaipur preparation", "₹45L sunk", "₹45L sunk"],
  ],
};
