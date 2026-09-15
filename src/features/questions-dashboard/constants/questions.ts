export const QUESTION_TYPES = [
  "Case Study",
  "Guesstimate",
  "Business / Strategy",
  "Fit & Behavioural",
  "Technical",
  "Data Interpretation",
  "Business Case",
  "Coding",
] as const;

export const CATEGORIES = [
  "technical",
  "behavioral",
  "projects",
  "ai-cloud",
] as const;

export const ACCESS_TYPES = ["free", "paid"] as const;

export const DIFFICULTY_LEVELS = ["easy", "medium", "hard"] as const;

export const SUBJECTS = [
  // Business & Operations
  "Business Analysis",
  "Operations",
  "Business Metrics",
  "Excel",
  "SQL",
  "Data Interpretation",
  "Business Problem Solving",
  "Problem Solving",
  // Data & BI
  "Python & Pandas",
  "Power BI & Tableau",
  "Analytics & Metrics",
  "Product Analytics",
  "Power BI",
  "Statistics",
  "Data Visualisation",
  "Analytics Fundamentals",
  // Technical Analyst
  "Python",
  "Pandas & NumPy",
  "DSA Basics",
  "CS Fundamentals",
  "AI & Agentic AI",
  "Cloud & APIs",
  "DSA Fundamentals",
  "DBMS",
  "Computer Fundamentals",
  "AI & Cloud",
  // Consulting & Strategy
  "Case Interviews",
  "Business Strategy",
  "Market & Growth",
  "Guesstimates",
  "Product & Growth Strategy",
  "Fit & Behavioural",
  "Market Analysis",
  "Business Analytics",
  // General / Existing
  "JavaScript",
  "React",
  "Operating Systems",
  "Computer Networks",
  "HTML",
  "CSS",
  "AI",
  "Cloud Computing",
] as const;

export const TOPICS = [
  // Business & Operations - Business Analysis
  "Requirements Gathering",
  "Stakeholder Management",
  "Process Mapping",
  "Root Cause Analysis",
  "BRD/FRD Basics",
  "Gap Analysis",
  "UAT Basics",
  "Agile & Scrum Basics",

  // Business & Operations - Operations
  "Process Improvement",
  "Bottleneck Analysis",
  "SLA & TAT",
  "Capacity & Utilisation",
  "Supply & Demand",
  "Quality & Errors",
  "Operational Efficiency",
  "Customer Experience",

  // Business & Operations - Business Metrics
  "Revenue & Profit",
  "Margins",
  "Growth Rates",
  "Conversion Funnel",
  "Retention & Churn",
  "CAC & LTV",
  "Unit Economics",
  "KPIs",

  // Business & Operations - Excel
  "Excel Fundamentals",
  "Formulas & Conditional Logic",
  "Lookups",
  "Pivot Tables",
  "Data Cleaning",
  "Charts & Reporting",
  "Analysis & Insights",
  "Integrated Excel Case Studies",

  // Business & Operations - SQL
  "SQL Basics",
  "Filtering",
  "Joins",
  "Aggregation",
  "GROUP BY & HAVING",
  "Subqueries",
  "CTEs",
  "Window Functions Basics",

  // Business & Operations - Data Interpretation
  "Tables",
  "Charts & Graphs",
  "Trends",
  "Percentages & Ratios",
  "Growth Analysis",
  "Comparisons",
  "Outliers",
  "Business Insights",

  // Business & Operations - Business Problem Solving
  "Profitability",
  "Growth",
  "Pricing",
  "Market Sizing",
  "Cost Reduction",
  "Customer Funnel",

  // Data & BI - SQL
  "Date & String Functions",
  "Set Operations",
  "Indexes & Performance Basics",

  // Data & BI - Excel
  "Formulas & Functions",
  "Conditional Logic",
  "Charts",
  "What-If Analysis",
  "Power Query Basics",
  "Excel Case Studies",

  // Data & BI - Python & Pandas
  "Python Basics",
  "DataFrames & Series",
  "GroupBy",
  "Merge & Join",
  "Missing Values",
  "Pandas Data Cleaning",
  "NumPy Basics",
  "Vectorisation",
  "EDA",
  "Visualisation Basics",

  // Data & BI - Power BI & Tableau
  "Dashboard Fundamentals",
  "Data Modelling (Relationships & Schema)",
  "Power Query",
  "DAX Basics",
  "Calculated Columns vs Measures",
  "Filters & Slicers",
  "Dashboard Design",
  "Tableau Basics",

  // Data & BI - Statistics
  "Mean/Median/Mode",
  "Variance & Std Dev",
  "Percentiles",
  "Probability Basics",
  "Distributions",
  "Correlation",
  "Hypothesis Testing",
  "Confidence Intervals",
  "A/B Testing",
  "Sampling & Bias",

  // Data & BI - Data Visualisation
  "Chart Selection",
  "Bar/Line/Scatter",
  "Histograms",
  "Visual Hierarchy",
  "Misleading Charts",
  "Common Chart Mistakes",
  "Storytelling with Data",

  // Data & BI - Analytics & Metrics
  "Revenue & Growth",
  "Retention",
  "Churn",
  "Cohort Analysis",
  "Segmentation",
  "Trend Analysis",
  "Experiment/A-B Testing Metrics",

  // Data & BI - Product Analytics
  "Product Metrics",
  "Acquisition & Activation",
  "Conversion Funnels",
  "Engagement",
  "North Star Metrics",
  "A/B Testing & Experiments",
  "Feature Performance",

  // Technical Analyst - SQL
  "Query Performance Basics",

  // Technical Analyst - Python
  "Data Types",
  "Lists, Tuples, Dicts & Sets",
  "Classes & OOP in Python",
  "Exceptions",
  "File I/O",
  "Scripting",

  // Technical Analyst - Excel
  "Formulas",
  "Conditional Functions",

  // Technical Analyst - Pandas & NumPy
  "DataFrames",
  "Vectorization",

  // Technical Analyst - DSA Basics
  "Complexity",
  "Strings",
  "Hashing",
  "Stacks & Queues",
  "Searching & Sorting",
  "Recursion Basics",

  // Technical Analyst - CS Fundamentals
  "DBMS",
  "OOP Concepts",
  "Operating Systems",
  "Computer Networks",
  "System Design Basics",

  // Technical Analyst - AI & Agentic AI
  "AI Fundamentals",
  "GenAI & LLMs",
  "Prompting",
  "Embeddings & Vector Databases",
  "Agentic AI Basics",
  "AI Agent Workflows",
  "Tool / Function Calling",
  "Hallucinations & Guardrails",

  // Technical Analyst - Cloud & APIs
  "Cloud Fundamentals",
  "IaaS / PaaS / SaaS",
  "AWS / Azure / GCP Basics",
  "Common Cloud Services",
  "REST API Basics",
  "API Integration",
  "Deployment Basics",

  // Consulting & Strategy - Case Interviews
  "Operations Improvement",

  // Consulting & Strategy - Business Strategy
  "Business Models",
  "Competitive Advantage",
  "Strategic Trade-offs",
  "SWOT Basics",
  "Porter’s Five Forces Basics",
  "Growth Options",
  "Cost vs Differentiation",
  "Partnerships",
  "M&A Basics",

  // Consulting & Strategy - Market & Growth
  "Market Expansion",
  "Growth Levers",
  "Pricing Strategy",
  "Go-to-Market Basics",
  "Customer Acquisition",
  "Retention Strategy",

  // Consulting & Strategy - Guesstimates
  "Population-Based Estimates",
  "Demand Estimation",
  "Capacity Estimation",
  "Revenue Estimation",
  "Assumption Building",
  "Top-Down vs Bottom-Up",
  "Sanity Checks",

  // Consulting & Strategy - Data Interpretation
  "Tables & Exhibits",
  "Profitability Data",
  "Market Share",
  "Comparing Alternatives",

  // Consulting & Strategy - Product & Growth Strategy
  "Product Sense",
  "User Problems",
  "Feature Prioritisation",
  "Engagement & Retention",
  "Monetisation & Pricing",
  "Feature Evaluation",
  "Experimentation Basics",

  // Consulting & Strategy - Fit & Behavioural
  "Why Consulting",
  "Tell Me About Yourself",
  "Teamwork",
  "Conflict",
  "Failure & Learning",
  "Problem Solving Stories",
  "Communication",
  "Resume / Project Discussion",

  // Other Existing / Directions
  "Business Metrics",
  "Data Interpretation",
  "Growth & Pricing",
  "Funnels & Conversion",
  "KPI Analysis",
  "Window Functions",
  "CTEs & Subqueries",
  "Dashboards",
  "Charts & Visualisation",
  "Descriptive Statistics",
  "Python Fundamentals",
  "Lists & Dictionaries",
  "Functions",
  "OOP Basics",
  "Arrays",
  "Hash Maps",
  "Two Pointers",
  "Sorting & Searching",
  "Normalization",
  "OS",
  "Networks",
  "GenAI Basics",
  "RAG",
  "AI Agents",
  "Cloud Basics",
  "Growth Strategy",
  "Market Entry",
  "Revenue Growth",
  "Competitive Analysis",
  "Customer Segmentation",
  "Leadership",
  "Team Conflict",
  "Behavioural",
] as const;
