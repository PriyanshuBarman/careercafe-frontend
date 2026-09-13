import {
  BASE_MONTH_12_DEMAND_IN_THOUSANDS,
  INITIATIVE_IMPACTS,
  OPERATING_MODEL_METRICS,
  type Initiative,
  type Model,
} from "../constants/step-3";

interface PlanSummary {
  totalCost: number;
  totalLaunchWeeks: number;
  totalCapacity: number;
  onTimeRate: number;
  contributionPerOrder: number;
}

export function calculatePlanSummary(
  entryModel?: Model,
  strategicInitiatives: Initiative[] = [],
): PlanSummary | null {
  if (!entryModel) return null;

  const modelMetrics = OPERATING_MODEL_METRICS[entryModel];
  let totalCost = modelMetrics.cost;
  let totalLaunchWeeks = modelMetrics.launchWeeks;
  let totalCapacity = modelMetrics.capacity;
  let onTimeRate = modelMetrics.onTime;
  let contributionPerOrder = modelMetrics.contribution;

  for (const title of strategicInitiatives) {
    const impact = INITIATIVE_IMPACTS[title];
    if (impact) {
      totalCost += impact.costInLakhs;
      totalLaunchWeeks += impact.launchDelayWeeks;
      totalCapacity += impact.additionalCapacity;
      onTimeRate += impact.onTimeDeliveryRateDelta;
      contributionPerOrder += impact.contributionPerOrderDelta;
    }
  }

  return {
    totalCost,
    totalLaunchWeeks,
    totalCapacity,
    onTimeRate,
    contributionPerOrder,
  };
}

export function formatPlanSummary(summary: PlanSummary | null) {
  if (!summary) {
    return ["—", "—", "—", "—", "—", "—"];
  }

  return [
    `₹${summary.totalCost}L`,
    `${summary.totalLaunchWeeks} weeks`,
    `${BASE_MONTH_12_DEMAND_IN_THOUSANDS}k`,
    `${summary.totalCapacity}k`,
    `${summary.onTimeRate}%`,
    `₹${summary.contributionPerOrder}/order`,
  ];
}

export type PlanConstraint = {
  id: "budget" | "onTime" | "launch" | "capacity";
  label: string;
  isSatisfied: boolean;
  message: string;
};

export function getPlanConstraints(summary: PlanSummary): PlanConstraint[] {
  const isBudgetSatisfied = summary.totalCost <= 420;
  const isOnTimeSatisfied = summary.onTimeRate >= 90;
  const isLaunchSatisfied = summary.totalLaunchWeeks <= 9;
  const isCapacitySatisfied =
    summary.totalCapacity >= BASE_MONTH_12_DEMAND_IN_THOUSANDS;

  return [
    {
      id: "budget",
      label: "Budget",
      isSatisfied: isBudgetSatisfied,
      message: isBudgetSatisfied ? "Within budget" : "Budget exceeded",
    },
    {
      id: "onTime",
      label: "Service target",
      isSatisfied: isOnTimeSatisfied,
      message: isOnTimeSatisfied
        ? "Service target met"
        : "Service below 90% target.",
    },
    {
      id: "launch",
      label: "Launch deadline",
      isSatisfied: isLaunchSatisfied,
      message: isLaunchSatisfied
        ? "Launch deadline met"
        : "Launch exceeds 9-week deadline.",
    },
    {
      id: "capacity",
      label: "Capacity",
      isSatisfied: isCapacitySatisfied,
      message: isCapacitySatisfied
        ? "Capacity sufficient"
        : "Projected demand exceeds available capacity.",
    },
  ];
}
