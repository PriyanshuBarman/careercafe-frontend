import type { TableData } from "@/components/simple-table";

export const FORMULAS = [
  "Contribution / order = (AOV x Gross Margin %) - Discount - Last-mile - Pick & Pack - Shrink",
  "Monthly operating contribution = (Contribution /order x Orders) - Rent - Fixed Ops",
  "Break-even orders = Monthly Fixed Cost - Contribution / order",
];

export interface EconomicsMetricRow {
  id:
    | "contributionOrder"
    | "monthlyOperatingContribution"
    | "breakEvenMonthlyOrders";
  label: string;
  placeholder: string;
  unit: string;
}

export const ECONOMICS_METRIC_ROWS = [
  {
    id: "contributionOrder",
    label: "Contribution/order ",
    placeholder: "0",
    unit: "₹/order",
  },
  {
    id: "monthlyOperatingContribution",
    label: "Monthly operating contribution",
    placeholder: "0",
    unit: "₹ lakh/month",
  },
  {
    id: "breakEvenMonthlyOrders",
    label: "Break-even monthly orders",
    placeholder: "0",
    unit: "orders/month",
  },
] as const satisfies readonly EconomicsMetricRow[];

// --- Info / Exhibit Data ---
export const STEP_TWO_TABLE: TableData = {
  headers: ["Metric", "Pune", "Jaipur", "Kochi"],
  rows: [
    ["Monthly orders", "170k", "125k", "90k"],
    ["Average order value", "₹720", "₹590", "₹650"],
    ["Gross margin", "25%", "24%", "26%"],
    ["Discount / order", "₹50", "₹26", "₹30"],
    ["Last-mile / order", "₹72", "₹44", "₹60"],
    ["Pick, pack and shrink", "₹32", "₹29", "₹30"],
    ["Required dark stores", "5", "3", "3"],
    ["Monthly fixed ops", "₹70L", "₹34L", "₹42L"],
  ],
};
