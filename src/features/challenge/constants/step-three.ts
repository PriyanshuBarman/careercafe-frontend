export const ENTRY_MODES = [
  {
    title: "Owned Dark Stores",
    description: "₹250L setup · 9 weeks · 95% on-time",
  },
  {
    title: "Retail Partner",
    description: "₹70L setup · 4 weeks · 89% on-time",
  },
  {
    title: "Hybrid",
    description: "₹150L setup · 6 weeks · 92% on-time",
  },
] as const;

export interface StrategicInitiative {
  title: string;
  description: string;
}

export const STRATEGIC_INITIATIVES: StrategicInitiative[] = [
  {
    title: "Routing optimisation",
    description: "₹60L | +₹6/order, +1pp on-time",
  },
  {
    title: "Private-label assortment",
    description: "₹90L | +₹5/order",
  },
  {
    title: "Launch marketing",
    description: "₹120L | +25k orders",
  },
  {
    title: "Premium membership",
    description: "₹80L | +₹4/order, +5k orders",
  },
  {
    title: "Micro-fulfilment automation",
    description: "₹130L | +25k capacity",
  },
];

export const SUMMARY_TABLE = {
  headers: [
    "Investment",
    "Launch",
    "Demand",
    "Capacity",
    "On Time",
    "Contribution",
  ],
  rows: [["₹210L/420L", "4 weeks", "130k", "160k", "90%", "₹35/order"]],
} as const;
