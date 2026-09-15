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

// --- Info / Exhibit Table Data ---

type TableColumnKey = "metric" | "stayJaipur" | "switchKochi";

export const MARKET_TRANSITION_TABLE: TableData<TableColumnKey> = {
  columns: [
    { key: "metric", header: "Metric" },
    { key: "stayJaipur", header: "Stay Jaipur" },
    { key: "switchKochi", header: "Switch Kochi" },
  ],
  rows: [
    {
      metric: "12-month operating contribution",
      stayJaipur: "₹340L",
      switchKochi: "₹365L before switch costs",
    },
    {
      metric: "Transition cost",
      stayJaipur: "₹0",
      switchKochi: "-₹25L",
    },
    {
      metric: "Festival-delay impact",
      stayJaipur: "₹0",
      switchKochi: "-₹22L",
    },
    {
      metric: "Net 12-month value",
      stayJaipur: "₹340L",
      switchKochi: "₹318L",
    },
    {
      metric: "Net 24-month value",
      stayJaipur: "₹620L",
      switchKochi: "₹828L",
    },
    {
      metric: "Competitive intensity",
      stayJaipur: "Medium",
      switchKochi: "Low after exit",
    },
    {
      metric: "Execution speed",
      stayJaipur: "Faster",
      switchKochi: "~5 weeks slower",
    },
    {
      metric: "Jaipur preparation",
      stayJaipur: "₹45L sunk",
      switchKochi: "₹45L sunk",
    },
  ],
};
