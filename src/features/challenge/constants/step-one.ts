import type { TableData } from "@/components/simple-table";

export const SIGNALS = [
  { label: "Growth" },
  { label: "Market size" },
  { label: "Basket value" },
  { label: "Competition" },
  { label: "Rent" },
  { label: "Fee willingness" },
];

export const CONCERNS = [
  { label: "Competitive intensity" },
  { label: "Weak unit economics" },
  { label: "Delivery complexity" },
  { label: "High fixed cost" },
];

export const CITIES = ["Pune", "Jaipur", "Kochi"] as const;

// --- Info / Exhibit Data ---
export const STEP_ONE_TABLE: TableData = {
  headers: ["Metric", "Pune", "Jaipur", "Kochi"],
  rows: [
    ["Online grocery households", "5.2L", "3.6L", "2.9L"],
    ["Category growth", "28%", "34%", "25%"],
    ["Average basket value", "₹720", "₹590", "₹650"],
    ["Quick-commerce competitors", "5", "2", "3"],
    ["Dark-store rent / month", "₹10L", "₹6L", "₹7L"],
    ["Willing to pay fee", "31%", "40%", "52%"],
    ["Delivery radius", "4.6 km", "3.8 km", "5.2 km"],
  ],
};
