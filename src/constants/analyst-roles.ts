import {
  ChartUpIcon,
  CodeXmlIcon,
  DatabaseSearchIcon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

interface AnalystPathwayItem {
  icon: IconSvgElement;
  title: string;
  description: string;
}

export const ANALYST_ROLES = [
  {
    icon: ChartUpIcon,
    title: "Business & Operations",
    description: "Business & Operations	Business decisions, operations, cases",
  },
  {
    icon: DatabaseSearchIcon,
    title: "Data & BI",
    description: "SQL, BI, analytics, insight",
  },
  {
    icon: CodeXmlIcon,
    title: "Technical Analyst",
    description: "Python/SQL, data systems, APIs/AI",
  },
  {
    icon: User03Icon,
    title: "Consulting Analyst",
    description:
      "Consulting & Strategy	Cases, guesstimates, structured reasoning",
  },
] as const satisfies readonly AnalystPathwayItem[];
