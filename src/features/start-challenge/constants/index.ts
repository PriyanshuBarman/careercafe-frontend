import {
  ChartHistogramIcon,
  Clock01Icon,
  File02Icon,
  ShieldAlertIcon,
  TrophyIcon,
  UserIcon,
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

export const BADGES = [
  {
    icon: Clock01Icon,
    label: "90 minutes",
  },
  {
    icon: UserIcon,
    label: "Individual",
  },
  {
    icon: ChartHistogramIcon,
    label: "5 sections",
  },
  {
    icon: TrophyIcon,
    label: "100 Marks",
  },
];

export const CARDS = [
  {
    icon: File02Icon,
    title: "What makes this different?",
    items: [
      "Evolving business scenario",
      "Realistic data and trade-offs",
      "Tests how you think, not just what you know",
      "No external help required",
    ],
  },
  {
    icon: ShieldAlertIcon,
    title: "Rules & guidelines",
    items: [
      "Calculator and rough work allowed",
      "No external help (internet, Al tools, etc.)",
      "Use only the information provided",
      "New evidence unlocks as you progress",
      "Earlier decision checkpoints may become locked",
    ],
  },
];
