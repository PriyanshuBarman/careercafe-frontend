import {
  ChartIcon,
  DatabaseIcon,
  File02Icon,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

interface CompanySkill {
  name: string;
  icon: IconSvgElement;
}

interface Company {
  href: string;
  img: string;
  title: string;
  description: string;
  skills: CompanySkill[];
  features: string[];
}

export const COMPANIES = [
  {
    href: "#",
    img: "./companies/zs.png",
    title: "ZS Associates",
    description: "Business / Data Analyst Preparation",
    skills: [
      { name: "Guesstimates", icon: ChartIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "Cases Study", icon: File02Icon },
      { name: "Communication", icon: Message01Icon },
    ],
    features: [
      "Business sense & problem framing",
      "SQL and data interpretation",
      "Case structuring and communication",
      "Interview-ready analytical thinking",
    ],
  },
  {
    href: "#",
    img: "./companies/american-express.png",
    title: "American Express",
    description: "Business / Data Analyst Preparation",
    skills: [
      { name: "Guesstimates", icon: ChartIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "Cases Study", icon: File02Icon },
      { name: "Communication", icon: Message01Icon },
    ],
    features: [
      "Business sense & problem framing",
      "SQL and data interpretation",
      "Case structuring and communication",
      "Interview-ready analytical thinking",
    ],
  },
  {
    href: "#",
    img: "./companies/goldman-sachs.png",
    title: "Goldman Sachs",
    description: "Business / Data Analyst Preparation",
    skills: [
      { name: "Guesstimates", icon: ChartIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "Cases Study", icon: File02Icon },
      { name: "Communication", icon: Message01Icon },
    ],
    features: [
      "Business sense & problem framing",
      "SQL and data interpretation",
      "Case structuring and communication",
      "Interview-ready analytical thinking",
    ],
  },
  {
    href: "#",
    img: "./companies/deloitte.png",
    title: "Deloitte",
    description: "Business / Data Analyst Preparation",
    skills: [
      { name: "Guesstimates", icon: ChartIcon },
      { name: "SQL", icon: DatabaseIcon },
      { name: "Cases Study", icon: File02Icon },
      { name: "Communication", icon: Message01Icon },
    ],
    features: [
      "Business sense & problem framing",
      "SQL and data interpretation",
      "Case structuring and communication",
      "Interview-ready analytical thinking",
    ],
  },
] as const satisfies readonly Company[];
