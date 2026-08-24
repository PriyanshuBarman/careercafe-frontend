import { Award04Icon, Plant01Icon } from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

export interface Programme {
  variant: "sage" | "primary";
  icon: IconSvgObject;
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
    badge: "Primarily for 1st and 2nd year students",
    features: [
      "Build core analyst capability",
      "Internship readiness and guided practice",
      "Calmer pace for early-stage learners",
    ],
    buttonLabel: "Explore Foundation",
    href: "#",
  },
  {
    variant: "primary",
    icon: Award04Icon,
    title: "Analyst Placement Pass",
    badge: "For pre-final and final-year students",
    features: [
      "Role, company and interview preparation",
      "Al simulations + human readiness validation",
      "Placement-focused practice and mock support",
    ],
    buttonLabel: "Start Placement Preparation",
    href: "#",
  },
] as const satisfies readonly Programme[];
