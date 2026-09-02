import type { DirectionConfig } from "../types/direction";

export const ANALYST_DIRECTIONS = [
  "Business & Operations",
  "Data & BI",
  "Technical Analyst",
  "Consulting & Strategy",
] as const;

export const DIRECTION_CONFIG = {
  "Business & Operations": {
    title: "Business & Operations",
    description: "Process improvement, stakeholder management and execution.",
    types: [
      "Business Case",
      "Data Interpretation",
      "Guesstimate",
      "Technical",
      "Fit & Behavioural",
    ],
    subjects: {
      "Business Analysis": {
        label: "Business Analysis",
        topics: [
          "Root Cause Analysis",
          "Process Improvement",
          "Funnels & Conversion",
        ],
      },
      Operations: {
        label: "Operations",
        topics: [
          "Process Improvement",
          "Supply & Demand",
          "Customer Experience",
        ],
      },
      Excel: {
        label: "Excel",
        topics: ["KPI Analysis", "Data Interpretation", "Unit Economics"],
      },
      SQL: {
        label: "SQL",
        topics: ["KPI Analysis", "Funnels & Conversion"],
      },
      "Business Metrics": {
        label: "Business Metrics",
        topics: [
          "Profitability",
          "Growth & Pricing",
          "Unit Economics",
          "KPI Analysis",
        ],
      },
      "Problem Solving": {
        label: "Problem Solving",
        topics: ["Root Cause Analysis", "Customer Experience"],
      },
    },
  },
  "Data & BI": {
    title: "Data & BI",
    description: "SQL, dashboards, business metrics and data-driven insights.",
    types: [
      "Technical",
      "Data Interpretation",
      "Case Study",
      "Fit & Behavioural",
    ],
    subjects: {
      SQL: {
        label: "SQL",
        topics: [
          "Joins",
          "Window Functions",
          "Aggregation",
          "CTEs & Subqueries",
        ],
      },
      Excel: {
        label: "Excel",
        topics: [
          "Data Cleaning",
          "Charts & Visualisation",
          "Descriptive Statistics",
        ],
      },
      "Power BI": {
        label: "Power BI",
        topics: ["Dashboards", "Charts & Visualisation", "Business Metrics"],
      },
      Statistics: {
        label: "Statistics",
        topics: ["Descriptive Statistics", "Data Interpretation"],
      },
      "Data Visualisation": {
        label: "Data Visualisation",
        topics: ["Charts & Visualisation", "Dashboards"],
      },
      "Analytics Fundamentals": {
        label: "Analytics Fundamentals",
        topics: ["Business Metrics", "Data Interpretation", "Data Cleaning"],
      },
    },
  },
  "Technical Analyst": {
    title: "Technical Analyst",
    description:
      "Technical architecture, databases, problem solving and systems.",
    types: [
      "Coding",
      "Technical",
      "Data Interpretation",
      "Case Study",
      "Fit & Behavioural",
    ],
    subjects: {
      Python: {
        label: "Python",
        topics: [
          "Python Fundamentals",
          "Lists & Dictionaries",
          "Functions",
          "OOP Basics",
        ],
      },
      SQL: {
        label: "SQL",
        topics: ["Joins", "Normalization"],
      },
      "DSA Fundamentals": {
        label: "DSA Fundamentals",
        topics: ["Arrays", "Hash Maps", "Two Pointers", "Sorting & Searching"],
      },
      DBMS: {
        label: "DBMS",
        topics: ["Joins", "Normalization"],
      },
      "Computer Fundamentals": {
        label: "Computer Fundamentals",
        topics: ["OS", "Networks"],
      },
      "AI & Cloud": {
        label: "AI & Cloud",
        topics: ["GenAI Basics", "RAG", "AI Agents", "Cloud Basics"],
      },
    },
  },
  "Consulting & Strategy": {
    title: "Consulting & Strategy",
    description: "Cases, numbers, recommendations and fit interviews.",
    types: [
      "Case Study",
      "Guesstimate",
      "Data Interpretation",
      "Business / Strategy",
      "Fit & Behavioural",
    ],
    subjects: {
      "Case Interviews": {
        label: "Case Interviews",
        topics: [
          "Market Sizing",
          "Profitability",
          "Growth Strategy",
          "Market Entry",
          "Cost Reduction",
        ],
      },
      Guesstimates: {
        label: "Guesstimates",
        topics: ["Market Sizing", "Revenue Growth"],
      },
      "Business Strategy": {
        label: "Business Strategy",
        topics: ["Pricing", "Competitive Analysis", "Growth Strategy"],
      },
      "Market Analysis": {
        label: "Market Analysis",
        topics: ["Market Sizing", "Market Entry", "Customer Segmentation"],
      },
      "Business Analytics": {
        label: "Business Analytics",
        topics: ["Root Cause Analysis", "Revenue Growth", "Profitability"],
      },
      "Fit & Behavioural": {
        label: "Fit & Behavioural",
        topics: ["Leadership", "Team Conflict"],
      },
    },
  },
} as const satisfies Record<
  (typeof ANALYST_DIRECTIONS)[number],
  DirectionConfig
>;
