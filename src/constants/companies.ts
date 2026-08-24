import {
  ChartIcon,
  DatabaseIcon,
  File02Icon,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

interface CompanySkill {
  name: string;
  icon: IconSvgObject;
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
    img: "./zs.png",
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
    img: "./american-express.png",
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
    img: "./goldman-sachs.png",
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
    img: "./deloitte.png",
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
