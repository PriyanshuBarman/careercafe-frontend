export const PRIMARY_BOARD_METRICS = [
  "Contribution Margin per Order (₹)",
  "On-Time Delivery Rate (%)",
  "Monthly Order Volume / Demand",
  "Launch Timeline / Time to Market (Weeks)",
  "Customer Lifetime Value / Payback Period",
] as const;

export type PrimaryBoardMetric = (typeof PRIMARY_BOARD_METRICS)[number];
