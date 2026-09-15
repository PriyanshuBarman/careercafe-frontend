import type { TableData } from "@/components/simple-table";

export const FORMULAS = [
  "Contribution/order = (AOV x gross margin %) - discount - last-mile - pick/pack/shrink.",
  "Monthly operating contribution = (Contribution/order x Monthly orders) - Total monthly fixed cost.",
  "Break-even orders = Total monthly fixed cost / Contribution/order.",
] as const;

interface EconomicsMetricRow {
  id:
    | "contributionOrder"
    | "monthlyOperatingContribution"
    | "breakEvenMonthlyOrders";
  label: string;
  unit: string;
}

export const ECONOMICS_METRIC_ROWS = [
  {
    id: "contributionOrder",
    label: "Contribution/order ",
    unit: "₹/order",
  },
  {
    id: "monthlyOperatingContribution",
    label: "Monthly operating contribution",
    unit: "₹ lakh/month",
  },
  {
    id: "breakEvenMonthlyOrders",
    label: "Break-even monthly orders",
    unit: "orders/month",
  },
] as const satisfies readonly EconomicsMetricRow[];

export const STRESS_TEST_METRICS = [
  "Monthly orders",
  "Average order value",
  "Gross margin",
  "Discount / order",
  "Last-mile / order",
  "Pick, pack and shrink",
  "Total monthly fixed cost",
] as const;

export type StressTestMetric = (typeof STRESS_TEST_METRICS)[number];

// --- Info / Exhibit Table Data ---

type TableColumnKey = "metric" | "pune" | "jaipur" | "kochi";

export const UNIT_ECONOMICS_TABLE: TableData<TableColumnKey> = {
  columns: [
    { key: "metric", header: "Metric" },
    { key: "pune", header: "Pune" },
    { key: "jaipur", header: "Jaipur" },
    { key: "kochi", header: "Kochi" },
  ],
  rows: [
    {
      metric: "Monthly orders",
      pune: "170k",
      jaipur: "125k",
      kochi: "90k",
    },
    {
      metric: "Average order value",
      pune: "₹720",
      jaipur: "₹590",
      kochi: "₹650",
    },
    {
      metric: "Gross margin",
      pune: "25%",
      jaipur: "24%",
      kochi: "26%",
    },
    {
      metric: "Discount / order",
      pune: "₹50",
      jaipur: "₹26",
      kochi: "₹30",
    },
    {
      metric: "Last-mile / order",
      pune: "₹72",
      jaipur: "₹44",
      kochi: "₹60",
    },
    {
      metric: "Pick, pack and shrink",
      pune: "₹32",
      jaipur: "₹29",
      kochi: "₹30",
    },
    {
      metric: "Total monthly fixed cost",
      pune: "₹70L",
      jaipur: "₹34L",
      kochi: "₹42L",
    },
  ],
};
