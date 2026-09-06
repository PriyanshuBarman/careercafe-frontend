export const CITIES = [
  {
    title: "Pune",
    description: "5.2L HH · 28% Growth",
  },
  {
    title: "Jaipur",
    description: "Higher contribution market",
  },
  {
    title: "Bengaluru",
    description: "Headquarter market",
  },
];

interface EconomicsMetric {
  metric: string;
  pune: string;
  jaipur: string;
  kochi: string;
}

export const ECONOMICS_METRICS = [
  {
    metric: "Contribution/order",
    pune: "26.0",
    jaipur: "42.6",
    kochi: "49.0",
  },
  {
    metric: "Monthly operating contribution",
    pune: "-25.8",
    jaipur: "19.3",
    kochi: "2.1",
  },
  {
    metric: "Break-even monthly orders",
    pune: "26,923",
    jaipur: "17,981",
    kochi: "28,571",
  },
] as const satisfies readonly EconomicsMetric[];
