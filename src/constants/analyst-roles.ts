import {
  ChartUpIcon,
  CodeXmlIcon,
  DatabaseSearchIcon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/core-free-icons/types";

interface AnalystPathwayItem {
  icon: IconSvgObject;
  title: string;
  description: string;
}

export const ANALYST_ROLES = [
  {
    icon: ChartUpIcon,
    title: "Business & Operations",
    description: "Cases · Guesstimates · Excel · Business Metrics",
  },
  {
    icon: DatabaseSearchIcon,
    title: "Data & BI",
    description: "Data & BI	SQL · Excel · Dashboards · Data Interpretation",
  },
  {
    icon: CodeXmlIcon,
    title: "Technical Analyst",
    description:
      "Technical Analyst	SQL · Python · DSA Basics · Technical Fundamentals",
  },
  {
    icon: User03Icon,
    title: "Consulting Analyst",
    description:
      "Cases · Structured Thinking · Recommendations · Communication",
  },
] as const satisfies readonly AnalystPathwayItem[];
