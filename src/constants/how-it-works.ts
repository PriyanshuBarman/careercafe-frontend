import {
  BookOpen01Icon,
  Chat01Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

export interface HowItWorksStep {
  step: number;
  variant: "sage" | "primary";
  icon: IconSvgObject;
  title: string;
  description: string;
  features: string[];
}

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    variant: "sage",
    icon: BookOpen01Icon,
    title: "Practice Mode",
    description: "Build Foundations",
    features: [
      "Topic-based practice across SQL, Python, cases and communication",
      "Hints, retries and instant feedback",
      "Learn calmly before interview pressure",
    ],
  },
  {
    step: 2,
    variant: "primary",
    icon: Chat01Icon,
    title: "Interview Mode",
    description: "Simulate real interviews",
    features: [
      "Timed, role-specific mock interviews",
      "Adaptive follow-up questions",
      "Al feedback on approach, accuracy and communication",
    ],
  },
  {
    step: 3,
    variant: "sage",
    icon: User03Icon,
    title: "Human Validation",
    description: "Get final readiness validation",
    features: [
      "Expert mentor review",
      "Role and company-specific",
      "Actionable final guidance",
    ],
  },
] as const satisfies readonly HowItWorksStep[];
