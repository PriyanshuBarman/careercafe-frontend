export const FINAL_MARKETS = ["Jaipur", "Kochi"] as const;

export type FinalMarket = (typeof FINAL_MARKETS)[number];

export const PRIMARY_BOARD_METRICS = [
  "Monthly operating contribution",
  "Contribution/order",
  "On-time delivery",
  "Monthly orders",
  "Capacity utilisation",
  "Repeat rate",
  "Other",
] as const;

export type PrimaryBoardMetric = (typeof PRIMARY_BOARD_METRICS)[number];
