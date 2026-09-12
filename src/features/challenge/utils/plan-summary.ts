import {
  INITIATIVE_IMPACTS,
  OPERATING_MODEL_METRICS,
  type InitiativeTitle,
  type Model,
} from "../constants/step-three";

export interface PlanMetrics {
  totalCost: number;
  totalLaunch: number;
  totalDemand: number;
  totalCapacity: number;
  totalOnTime: number;
  totalContribution: number;
}

export function calculatePlanMetrics(
  entryModel?: Model,
  strategicInitiatives: (InitiativeTitle | string)[] = [],
): PlanMetrics | null {
  if (!entryModel || !(entryModel in OPERATING_MODEL_METRICS)) {
    return null;
  }

  const modelMetrics = OPERATING_MODEL_METRICS[entryModel as Model];
  let totalCost = modelMetrics.cost;
  let totalLaunch = modelMetrics.launchWeeks;
  let totalDemand = 125;
  let totalCapacity = modelMetrics.capacity;
  let totalOnTime = modelMetrics.onTime;
  let totalContribution = modelMetrics.contribution;

  for (const title of strategicInitiatives) {
    const impact = INITIATIVE_IMPACTS[title as InitiativeTitle];
    if (impact) {
      totalCost += impact.costInLakhs;
      totalLaunch += impact.launchDelayWeeks;
      totalDemand += impact.additionalMonthlyOrders;
      totalCapacity += impact.additionalCapacity;
      totalOnTime += impact.onTimeDeliveryRateDelta;
      totalContribution += impact.contributionPerOrderDelta;
    }
  }

  return {
    totalCost,
    totalLaunch,
    totalDemand,
    totalCapacity,
    totalOnTime,
    totalContribution,
  };
}

export function formatPlanSummaryRow(metrics: PlanMetrics | null): string[] {
  if (!metrics) {
    return ["—", "—", "—", "—", "—", "—"];
  }

  return [
    `₹${metrics.totalCost}L`,
    `${metrics.totalLaunch} weeks`,
    `${metrics.totalDemand}k`,
    `${metrics.totalCapacity}k`,
    `${metrics.totalOnTime}%`,
    `₹${metrics.totalContribution}/order`,
  ];
}

export interface PlanWarning {
  id: "budget" | "onTime" | "launch" | "capacity";
  label: string;
  isMet: boolean;
  message: string;
}

export function getPlanConstraintWarnings(metrics: PlanMetrics): PlanWarning[] {
  const isBudgetWithin = metrics.totalCost <= 420;
  const isOnTimeMet = metrics.totalOnTime >= 90;
  const isLaunchMet = metrics.totalLaunch <= 9;
  const isCapacitySufficient = metrics.totalDemand <= metrics.totalCapacity;

  return [
    {
      id: "budget",
      label: "Budget",
      isMet: isBudgetWithin,
      message: isBudgetWithin ? "Within budget" : "Budget exceeded",
    },
    {
      id: "onTime",
      label: "Service target",
      isMet: isOnTimeMet,
      message: isOnTimeMet ? "Service target met" : "Service below 90% target.",
    },
    {
      id: "launch",
      label: "Launch deadline",
      isMet: isLaunchMet,
      message: isLaunchMet
        ? "Launch deadline met"
        : "Launch exceeds 9-week deadline.",
    },
    {
      id: "capacity",
      label: "Capacity",
      isMet: isCapacitySufficient,
      message: isCapacitySufficient
        ? "Capacity sufficient"
        : "Projected demand exceeds available capacity.",
    },
  ];
}
