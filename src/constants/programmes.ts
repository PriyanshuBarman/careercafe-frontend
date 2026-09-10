import { Award04Icon, Plant01Icon } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export interface Programme {
  variant: "sage" | "primary";
  icon: IconSvgElement;
  title: string;
  badge: string;
  features: string[];
  buttonLabel: string;
  href: string;
}

export const PROGRAMMES = [
  {
    variant: "sage",
    icon: Plant01Icon,
    title: "Analyst Foundation",
    badge: "Earlier-stage students",
    features: [
      "Question Bank",
      "SQL/Python practice",
      "Cases & guesstimates",
      "Project/interview preparation",
      "AI mocks + human validation",
    ],
    buttonLabel: "Explore Foundation",
    href: "#",
  },
  {
    variant: "primary",
    icon: Award04Icon,
    title: "Analyst Placement Pass",
    badge: "Pre-final / final-year students",
    features: [
      "Role-specific practice",
      "Company-specific preparation",
      "Interview simulations",
      "Resume/project questioning",
      "AI mocks + human mock interviews",
    ],
    buttonLabel: "Start Placement Preparation",
    href: "#",
  },
] as const satisfies readonly Programme[];
