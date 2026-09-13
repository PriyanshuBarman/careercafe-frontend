import type { TableData } from "@/components/simple-table";

export const BASE_MONTH_12_DEMAND_IN_THOUSANDS = 125;

export const JAIPUR_CONSTRAINTS = [
  { label: "Budget", value: "₹420L" },
  { label: "Service target", value: "≥90% on-time" },
  { label: "Launch deadline", value: "≤9 weeks" },
  {
    label: "Base Month-12 demand",
    value: `${BASE_MONTH_12_DEMAND_IN_THOUSANDS}k orders/month`,
  },
] as const;

export const MODELS = [
  "Owned Dark Stores",
  "Retail Partner",
  "Hybrid",
] as const;

export type Model = (typeof MODELS)[number];

interface OperatingModelMetric {
  cost: number;
  launchWeeks: number;
  contribution: number;
  onTime: number;
  capacity: number;
  dataVisibility: string;
}

export const OPERATING_MODEL_METRICS = {
  "Owned Dark Stores": {
    cost: 250,
    launchWeeks: 9,
    contribution: 40,
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
} as const satisfies Record<Model, OperatingModelMetric>;

export const INITIATIVES = [
  "Routing optimisation",
  "Private-label assortment",
  "Launch marketing",
  "Premium membership",
  "Micro-fulfilment automation",
] as const;

export type Initiative = (typeof INITIATIVES)[number];

interface InitiativeImpact {
  costInLakhs: number;
  launchDelayWeeks: number;
  additionalMonthlyOrders: number;
  additionalCapacity: number;
  onTimeDeliveryRateDelta: number;
  contributionPerOrderDelta: number;
}

export const INITIATIVE_IMPACTS = {
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
} as const satisfies Record<Initiative, InitiativeImpact>;

export const SUMMARY_TABLE_HEADERS = [
  "Investment",
  "Launch",
  "Demand",
  "Capacity",
  "On-time",
  "Contribution/order",
] as const;

// --- Info / Exhibit Table Data ---

type OperatingModelsColumnKey =
  "metric" | "ownedDarkStores" | "retailPartner" | "hybrid";

export const OPERATING_MODELS_TABLE: TableData<OperatingModelsColumnKey> = {
  columns: [
    { key: "metric", header: "Metric" },
    { key: "ownedDarkStores", header: "Owned Dark Stores" },
    { key: "retailPartner", header: "Retail Partner" },
    { key: "hybrid", header: "Hybrid" },
  ],
  rows: [
    {
      metric: "Setup cost",
      ownedDarkStores: "₹250L",
      retailPartner: "₹70L",
      hybrid: "₹150L",
    },
    {
      metric: "Launch",
      ownedDarkStores: "9 weeks",
      retailPartner: "4 weeks",
      hybrid: "6 weeks",
    },
    {
      metric: "Contribution / order",
      ownedDarkStores: "₹40",
      retailPartner: "₹25",
      hybrid: "₹38",
    },
    {
      metric: "On-time delivery",
      ownedDarkStores: "95%",
      retailPartner: "89%",
      hybrid: "92%",
    },
    {
      metric: "Capacity",
      ownedDarkStores: "150k",
      retailPartner: "160k",
      hybrid: "145k",
    },
    {
      metric: "Customer-data visibility",
      ownedDarkStores: "100%",
      retailPartner: "65%",
      hybrid: "85%",
    },
  ],
};

type StrategicInitiativesColumnKey =
  "initiative" | "cost" | "steadyStateEffect";

export const STRATEGIC_INITIATIVES_TABLE: TableData<StrategicInitiativesColumnKey> =
  {
    columns: [
      { key: "initiative", header: "Initiative" },
      { key: "cost", header: "Cost" },
      { key: "steadyStateEffect", header: "Steady-state effect" },
    ],
    rows: [
      {
        initiative: "Routing optimisation",
        cost: "₹60L",
        steadyStateEffect: "+₹6/order, +1pp on-time",
      },
      {
        initiative: "Private-label assortment",
        cost: "₹90L",
        steadyStateEffect: "+₹5/order",
      },
      {
        initiative: "Launch marketing",
        cost: "₹110L",
        steadyStateEffect: "+25k monthly orders",
      },
      {
        initiative: "Premium membership",
        cost: "₹80L",
        steadyStateEffect: "+₹4/order, +5k monthly orders",
      },
      {
        initiative: "Micro-fulfilment automation",
        cost: "₹130L",
        steadyStateEffect: "+₹4/order, +25k capacity, +2 weeks",
      },
    ],
  };
