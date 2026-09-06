import {
  Briefcase02Icon,
  ChartHistogramIcon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

export const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Hypothesise",
    description: "Form a working view",
    duration: "10 min",
  },
  {
    step: "02",
    title: "Prove / Disprove",
    description: "Test it with operating economics",
    duration: "20 min",
  },
  {
    step: "03",
    title: "Allocate",
    description: "Choose and fund the entry plan",
    duration: "20 min",
  },
  {
    step: "04",
    title: "Re-evaluate",
    description: "Respond to changed evidence",
    duration: "20 min",
  },
  {
    step: "05",
    title: "Recommend",
    description: "Write the board memo",
    duration: "15 min",
  },
];

export const STAGES = [
  { step: "01", label: "Hypothesis" },
  { step: "02", label: "Economics" },
  { step: "03", label: "Prioritisation" },
  { step: "04", label: "Adaptability" },
  { step: "05", label: "Communication" },
];

export const WORKING_RULES = [
  "Built-in calculator and rough working are allowed.",
  "No external research or AI assistance.",
  "Future evidence reveals progressively.",
  "Laptop recommended; mobile supported.",
];

export const CHALLENGE_METRICS = [
  {
    icon: Clock01Icon,
    label: "90 minutes",
  },
  {
    icon: Briefcase02Icon,
    label: "Individual",
  },
  {
    icon: ChartHistogramIcon,
    label: "5 sections",
  },
];
