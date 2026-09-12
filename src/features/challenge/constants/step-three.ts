import type { TableData } from "@/components/simple-table";

export const JAIPUR_CONSTRAINTS = [
  { label: "Budget", value: "₹420L" },
  { label: "Service target", value: "≥90% on-time" },
  { label: "Launch deadline", value: "≤9 weeks" },
  { label: "Base Month-12 demand", value: "125k orders/month" },
] as const;

export const MODELS = [
  "Owned Dark Stores",
  "Retail Partner",
  "Hybrid",
] as const;

export type Model = (typeof MODELS)[number];

export const OPERATING_MODEL_METRICS = {
  "Owned Dark Stores": {
    cost: 250,
    launchWeeks: 9,
    contribution: 45,
    onTime: 95,
    capacity: 150,
    dataVisibility: "100%",
  },
  "Retail Partner": {
    cost: 70,
    launchWeeks: 4,
    contribution: 25,
    onTime: 89,
    capacity: 160,
    dataVisibility: "65%",
  },
  Hybrid: {
    cost: 150,
    launchWeeks: 6,
    contribution: 38,
    onTime: 92,
    capacity: 145,
    dataVisibility: "85%",
  },
} as const;

export const INITIATIVES = [
  "Routing optimisation",
  "Private-label assortment",
  "Launch marketing",
  "Premium membership",
  "Micro-fulfilment automation",
] as const;

export type Initiative = (typeof INITIATIVES)[number];
export type InitiativeTitle = Initiative;

export interface InitiativeImpact {
  costInLakhs: number;
  launchDelayWeeks: number;
  additionalMonthlyOrders: number;
  additionalCapacity: number;
  onTimeDeliveryRateDelta: number;
  contributionPerOrderDelta: number;
}

export const INITIATIVE_IMPACTS: Record<Initiative, InitiativeImpact> = {
  "Routing optimisation": {
    costInLakhs: 60,
    launchDelayWeeks: 0,
    additionalMonthlyOrders: 0,
    additionalCapacity: 0,
    onTimeDeliveryRateDelta: 1,
    contributionPerOrderDelta: 6,
  },
  "Private-label assortment": {
    costInLakhs: 90,
    launchDelayWeeks: 0,
    additionalMonthlyOrders: 0,
    additionalCapacity: 0,
    onTimeDeliveryRateDelta: 0,
    contributionPerOrderDelta: 5,
  },
  "Launch marketing": {
    costInLakhs: 110,
    launchDelayWeeks: 0,
    additionalMonthlyOrders: 25,
    additionalCapacity: 0,
    onTimeDeliveryRateDelta: 0,
    contributionPerOrderDelta: 0,
  },
  "Premium membership": {
    costInLakhs: 80,
    launchDelayWeeks: 0,
    additionalMonthlyOrders: 5,
    additionalCapacity: 0,
    onTimeDeliveryRateDelta: 0,
    contributionPerOrderDelta: 4,
  },
  "Micro-fulfilment automation": {
    costInLakhs: 130,
    launchDelayWeeks: 2,
    additionalMonthlyOrders: 0,
    additionalCapacity: 25,
    onTimeDeliveryRateDelta: 0,
    contributionPerOrderDelta: 4,
  },
};

export const SUMMARY_TABLE_HEADERS = [
  "Investment",
  "Launch",
  "Demand",
  "Capacity",
  "On-time",
  "Contribution/order",
] as const;

// --- Info / Exhibit Data ---
export const OPERATING_MODELS_TABLE: TableData = {
  headers: ["Metric", "Owned Dark Stores", "Retail Partner", "Hybrid"],
  rows: [
    ["Setup cost", "₹250L", "₹70L", "₹150L"],
    ["Launch", "9 weeks", "4 weeks", "6 weeks"],
    ["Contribution / order", "₹45", "₹25", "₹38"],
    ["On-time delivery", "95%", "89%", "92%"],
    ["Capacity", "150k", "160k", "145k"],
    ["Customer-data visibility", "100%", "65%", "85%"],
  ],
};

export const STRATEGIC_INITIATIVES_TABLE: TableData = {
  headers: ["Initiative", "Cost", "Key Impacts"],
  rows: [
    ["Routing optimisation", "₹60L", "+₹6/order · +1pp on-time delivery"],
    ["Private-label assortment", "₹90L", "+₹5/order from Month 4"],
    [
      "Launch marketing",
      "₹110L",
      "+25k monthly orders from Month 4 · Extra ₹10/order promo cost (first 3 months)",
    ],
    [
      "Premium membership",
      "₹80L",
      "+₹4/order · +5k monthly orders from Month 5",
    ],
    [
      "Micro-fulfilment automation",
      "₹130L",
      "+25k capacity · +₹4/order · +2 weeks to launch",
    ],
  ],
};
