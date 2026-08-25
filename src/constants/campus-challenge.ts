import { BriefcaseBusinessIcon, CodeIcon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

interface Challenge {
  icon: IconSvgElement;
  title: string;
  description: string;
}

export const CHALLENGES = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Business Case Challenge",
    description:
      "Cases · Guesstimates · Quantitative reasoning · Recommendations",
  },
  {
    icon: CodeIcon,
    title: "Technical Analyst Challenge",
    description:
      "Data reasoning · SQL/Python thinking · AI solution design · Guardrails",
  },
] as const satisfies readonly Challenge[];

export const FLOW_STEPS = [
  "Challenge",
  "Performance Snapshot",
  "Finalist Defence",
  "CareerCafe Practice",
] as const;
