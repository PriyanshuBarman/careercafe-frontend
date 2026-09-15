import type { TableData } from "@/components/simple-table";

export const CITIES = ["Pune", "Jaipur", "Kochi"] as const;

export const SIGNALS = [
  { label: "Growth" },
  { label: "Market size" },
  { label: "Basket value" },
  { label: "Competition" },
  { label: "Rent" },
  { label: "Fee willingness" },
] as const;

export const CONCERNS = [
  { label: "Competitive intensity" },
  { label: "Weak unit economics" },
  { label: "Delivery complexity" },
  { label: "High fixed cost" },
] as const;

// --- Info / Exhibit Table Data ---

type TableColumnKey = "metric" | "pune" | "jaipur" | "kochi";

export const MARKET_COMPARISON_TABLE: TableData<TableColumnKey> = {
  columns: [
    { key: "metric", header: "Metric" },
    { key: "pune", header: "Pune" },
    { key: "jaipur", header: "Jaipur" },
    { key: "kochi", header: "Kochi" },
  ],
  rows: [
    {
      metric: "Online-grocery households",
      pune: "5.2L",
      jaipur: "3.6L",
      kochi: "2.9L",
    },
    {
      metric: "Category growth",
      pune: "28%",
      jaipur: "34%",
      kochi: "25%",
    },
    {
      metric: "Average basket value",
      pune: "₹720",
      jaipur: "₹590",
      kochi: "₹650",
    },
    {
      metric: "Quick-commerce competitors",
      pune: "5",
      jaipur: "2",
      kochi: "3",
    },
    {
      metric: "Dark-store rent / month",
      pune: "₹10L",
      jaipur: "₹6L",
      kochi: "₹8L",
    },
    {
      metric: "Willing to pay delivery fee",
      pune: "31%",
      jaipur: "44%",
      kochi: "52%",
    },
    {
      metric: "Delivery radius",
      pune: "4.6 km",
      jaipur: "3.8 km",
      kochi: "5.2 km",
    },
  ],
};
