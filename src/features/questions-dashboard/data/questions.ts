import type {
  Access,
  AnalystDirection,
  Category,
  Difficulty,
  Question,
  QuestionType,
  Subject,
} from "@/features/questions-dashboard/types/question";

export const ANALYST_DIRECTIONS = [
  "Business & Operations",
  "Data & BI",
  "Technical Analyst",
  "Consulting & Strategy",
] as const satisfies readonly AnalystDirection[];

export const QUESTION_TYPES = [
  "Case Study",
  "Guesstimate",
  "Business/ Strategy",
  "Fit & Behavioural",
] as const satisfies readonly QuestionType[];

export const CATEGORIES = [
  "technical",
  "behavioral",
  "projects",
  "ai-cloud",
] as const satisfies readonly Category[];

export const ACCESS_TYPES = [
  "free",
  "paid",
] as const satisfies readonly Access[];

export const SUBJECTS = [
  "JavaScript",
  "React",
  "SQL",
  "DBMS",
  "Python",
  "Operating Systems",
  "Computer Networks",
  "Excel",
  "Statistics",
  "HTML",
  "CSS",
  "AI",
  "Cloud Computing",
] as const satisfies readonly Subject[];

export const DIFFICULTY_LEVELS = [
  "easy",
  "medium",
  "hard",
] as const satisfies readonly Difficulty[];

export const QUESTIONS: Question[] = [
  {
    id: "guesstimate-001",
    slug: "estimate-daily-metro-riders-delhi",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Market Sizing",
    difficulty: "medium",
    access: "free",
    question: "Estimate the daily number of commuters using the Delhi Metro.",
    shortAnswer:
      "Around 4.5 million to 5.5 million daily commuters. Calculated using population proxy, public transit commuter share, and metro accessibility percentages.",
    explanation:
      "Top-down approach: Population of Delhi NCR (~30M) -> Working/student population (~50% = 15M) -> Public transit share (~60% = 9M) -> Metro catchment area & affordability factor (~55% of transit users = ~5M riders/day).",
    followUps: [
      "How would you sanity check this using a bottom-up approach (stations, trains, frequency)?",
      "How would peak-hour congestion affect your train capacity assumptions?",
    ],
  },
  {
    id: "guesstimate-002",
    slug: "estimate-annual-coffee-consumption-india",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Market Sizing",
    difficulty: "hard",
    access: "paid",
    question:
      "Estimate the annual revenue of coffee retail shops in Tier-1 Indian cities.",
    shortAnswer:
      "Approximately INR 3,200 to 4,500 Crores annually across Tier-1 metro regions, driven by rapid urbanization, cafe culture, and young working demographics.",
    explanation:
      "Segmentation: Tier-1 population (~60M) -> Middle/Upper-middle income bracket (~25% = 15M) -> Cafe visitors (once per month vs once per week) -> Average spend per transaction (~INR 250).",
    followUps: [
      "What impact does work-from-home policy have on retail footfall?",
      "How does delivery apps (Zomato/Swiggy) factor into total retail outlet revenue?",
    ],
  },
  {
    id: "guesstimate-003",
    slug: "estimate-smartphones-sold-in-us-annually",
    directions: ["Consulting & Strategy", "Data & BI"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Market Sizing",
    difficulty: "easy",
    access: "free",
    question:
      "Estimate the number of smartphones sold in the United States every year.",
    shortAnswer:
      "Approximately 120 million to 130 million smartphones per year, based on a population of 330 million and an average replacement cycle of 2.5 to 3 years.",
    explanation:
      "Population ~330M -> Smartphone penetration (~85% = 280M active users) -> Replacement frequency (average 2.5 years => 280M / 2.5 = ~112M units/year) + First-time buyers/corporate purchases (~10M units) = ~122M units.",
    followUps: [
      "How would trade-in programs and extended manufacturer support (5+ years) shift the replacement cycle?",
      "Which segment (budget vs flagship) is growing faster in market share?",
    ],
  },
  {
    id: "guesstimate-004",
    slug: "estimate-daily-food-orders-swiggy-zomato",
    directions: ["Data & BI", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "Estimate the daily number of food orders fulfilled across India by food delivery platforms.",
    shortAnswer:
      "Around 4.5 million to 5 million orders per day across major platforms, concentrated heavily in top 15 cities.",
    explanation:
      "City-tier breakdown: Top 8 metros (~300k orders/day/city = 2.4M), next 20 Tier-2 cities (~60k orders/day/city = 1.2M), remaining towns (~1M) = ~4.6M orders/day.",
    followUps: [
      "How do order frequencies change during weekends and IPL/Cricket matches?",
      "What is the average order value (AOV) and gross merchandise value (GMV) implication?",
    ],
  },
  {
    id: "guesstimate-005",
    slug: "estimate-petrol-pump-revenue-highway",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Excel",
    topic: "Market Sizing",
    difficulty: "medium",
    access: "paid",
    question:
      "Estimate the monthly fuel sales volume (in liters) for a busy highway petrol station.",
    shortAnswer:
      "Around 400,000 to 550,000 liters per month based on 6 dispensing units, hourly vehicle throughput, and fuel tank capacities of trucks vs personal cars.",
    explanation:
      "Bottom-up: 4 diesel nozzles + 2 petrol nozzles. Operating 24 hrs. Average fueling time: 4 mins (commercial) / 2 mins (car). Diesel throughput dominates on highways (~75% of volume).",
    followUps: [
      "How does EV charging station installation change the profitability per square foot?",
      "What is the margin difference between fuel retail and attached convenience stores?",
    ],
  },
  {
    id: "guesstimate-006",
    slug: "estimate-flights-in-the-air-globally",
    directions: ["Consulting & Strategy", "Technical Analyst"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "hard",
    access: "free",
    question:
      "Estimate how many commercial aircraft are in the sky right now across the globe at peak hours.",
    shortAnswer:
      "Approximately 11,000 to 14,000 commercial planes airborne at any given moment during global daytime overlaps.",
    explanation:
      "Global fleet (~25,000 commercial planes) -> Utilization rate (~60% flying at daytime peak) = ~15,000 planes active in air.",
    followUps: [
      "How would you account for time zone differences across North America, Europe, and Asia?",
      "What data sources (ADS-B, FlightRadar) would you query to validate this empirically?",
    ],
  },
  {
    id: "guesstimate-007",
    slug: "estimate-tennis-balls-used-wimbledon",
    directions: ["Consulting & Strategy"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Market Sizing",
    difficulty: "easy",
    access: "paid",
    question:
      "Estimate how many tennis balls are used during the two weeks of the Wimbledon tournament.",
    shortAnswer:
      "Approximately 50,000 to 55,000 tennis balls across all matches, warmups, and practice courts.",
    explanation:
      "Calculation: ~670 total matches. Ball change every 7 to 9 games (~24-36 balls per 3-5 set match = ~20,000 balls) + practice courts & warm-ups (2x multiplier) = ~50k-55k balls.",
    followUps: [
      "How does ball pressure decay affect court performance?",
      "What happens to the used balls after the tournament concludes?",
    ],
  },
  {
    id: "guesstimate-008",
    slug: "estimate-daily-youtube-video-uploads",
    directions: ["Data & BI", "Technical Analyst"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "Estimate the total hours of video content uploaded to YouTube every minute.",
    shortAnswer:
      "Around 500 to 600 hours of video uploaded every minute globally (roughly 720,000 to 860,000 hours per day).",
    explanation:
      "Active global creators (~50M creators) -> Average upload frequency (~1 video every 10 days = 5M uploads/day) -> Average duration (8 mins = 40M mins/day = ~660k hours/day / 1440 mins = ~460-500 hrs/min).",
    followUps: [
      "What storage infrastructure and video transcoding pipelines are required to handle this?",
      "How have YouTube Shorts impacted the number of uploads vs total storage consumed?",
    ],
  },
  {
    id: "guesstimate-009",
    slug: "estimate-daily-atm-cash-withdrawals-mumbai",
    directions: ["Data & BI", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Excel",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question: "Estimate the total cash withdrawn daily from ATMs in Mumbai.",
    shortAnswer:
      "Approximately INR 300 to 450 Crores per day across roughly 10,000 operational ATMs in Mumbai metropolitan region.",
    explanation:
      "10,000 ATMs -> Average 120 transactions per ATM/day = 1.2M transactions. Average withdrawal amount ~INR 3,000. Total = 1.2M * 3,000 = ~INR 360 Crores.",
    followUps: [
      "How has UPI penetration impacted cash withdrawal velocity over the last 5 years?",
      "How do banks optimize cash-in-transit replenishment routes to avoid ATM stock-outs?",
    ],
  },
  {
    id: "guesstimate-010",
    slug: "estimate-annual-tyre-market-india",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Guesstimate",
    category: "technical",
    subject: "Statistics",
    topic: "Market Sizing",
    difficulty: "hard",
    access: "paid",
    question:
      "Estimate the annual replacement tyre market size for 2-wheelers in India.",
    shortAnswer:
      "Approximately 40 million to 50 million tyres annually, generating INR 6,000 to 8,000 Crores in aftermarket revenue.",
    explanation:
      "Total 2-wheelers on road (~150M) -> Average tyre lifespan (~3 years) -> Replacement rate (~50M 2-wheelers replacing tyres annually) * 1.5 tyres average = ~45M tyres/year.",
    followUps: [
      "How does OEM demand vs aftermarket replacement demand split in margin contribution?",
      "What impact does EV 2-wheeler weight and instant torque have on tyre wear rate?",
    ],
  },
  {
    id: "case-001",
    slug: "declining-profitability-saas-company",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Case Study",
    category: "technical",
    subject: "Excel",
    topic: "Profitability",
    difficulty: "hard",
    access: "free",
    question:
      "A B2B SaaS company's revenue grew by 40% YoY, but its net profit margin dropped from 25% to 8%. How would you diagnose the root cause?",
    shortAnswer:
      "Break down Profit = Revenue - Costs. On Revenue: evaluate discount rates and customer mix. On Costs: analyze Customer Acquisition Cost (CAC) inflation, cloud infrastructure scaling inefficiencies, and expanding sales team commissions.",
    explanation:
      "Structure into Revenue vs Cost side. Revenue side: Higher churn of high-tier enterprise clients replaced by lower-margin SMB tiers. Cost side: COGS inflation (cloud hosting compute costs outgrowing usage tiers) + OPEX surge (marketing spend efficiency declining from higher competitive bidding + expanded headcount without proportional sales quota attainment).",
    followUps: [
      "How would you analyze Net Revenue Retention (NRR) and LTV:CAC ratio to substantiate this?",
      "What concrete cost-containment measures would you recommend without stalling top-line growth?",
    ],
  },
  {
    id: "case-002",
    slug: "e-commerce-cart-abandonment-diagnostics",
    directions: ["Data & BI", "Technical Analyst"],
    type: "Case Study",
    category: "technical",
    subject: "SQL",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    question:
      "An e-commerce platform noticed a 15% jump in checkout cart abandonment over the last 3 weeks. How would you investigate?",
    shortAnswer:
      "Segment the drop-off by device (iOS, Android, Web), payment gateway error codes, shipping fee introduction, and UI latency spikes on the payment step.",
    explanation:
      "Funnel Analysis: Isolate the funnel stage: (Cart View -> Address Select -> Payment Method -> OTP -> Confirmation). Check telemetry: Did payment gateway timeout rates increase? Did a recent deployment add mandatory account creation or hidden delivery fee thresholds?",
    followUps: [
      "Write a SQL query to compute step-by-step conversion drop-off rates across checkout funnel stages.",
      "How would you set up an automated anomaly detection alert on payment gateway failure rates?",
    ],
  },
  {
    id: "case-003",
    slug: "subscription-pricing-tier-optimization",
    directions: ["Consulting & Strategy", "Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Statistics",
    topic: "Growth & Pricing",
    difficulty: "hard",
    access: "paid",
    question:
      "A music streaming app wants to introduce a student discount tier. How would you model price elasticity and prevent cannibalization?",
    shortAnswer:
      "Model willingness-to-pay via Van Westendorp price sensitivity meter, institute strict third-party student ID verification (e.g. SheerID), and project incremental volume vs margin dilution.",
    explanation:
      "Evaluate: 1) Elasticity of demand in student cohort (price sensitive with high viral coefficient). 2) Cannibalization risk: Existing full-price users qualifying for student tier. 3) Long-term LTV: Transition rate of student accounts to full-price adult tiers upon graduation.",
    followUps: [
      "How would you design an A/B test to measure conversion uplift without leaking the promotion to the control group?",
      "What metrics indicate successful monetization of student cohorts post-graduation?",
    ],
  },
  {
    id: "case-004",
    slug: "q-commerce-delivery-fleet-utilization",
    directions: ["Business & Operations", "Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Python",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    question:
      "A quick-commerce company's average delivery time increased from 11 minutes to 19 minutes in a major metro zone. How do you identify bottlenecks?",
    shortAnswer:
      "Decompose delivery time: Order Placed -> Dark Store Picking -> Rider Assignment -> Rider Transit -> Last 100m Handover. Pinpoint where the delay spike occurred.",
    explanation:
      "Analyze data telemetry at each phase. If Picking Time is high -> Dark store inventory layout or stock-out discrepancies. If Dispatch Time is high -> Rider deficit or faulty batch dispatching algorithm. If Transit Time is high -> Micro-zone traffic or monsoon routing anomalies.",
    followUps: [
      "How would you optimize rider batching to balance throughput with strict SLA guarantees?",
      "What KPI dashboard would you build for dark-store managers to monitor operations in real-time?",
    ],
  },
  {
    id: "case-005",
    slug: "market-entry-strategy-fintech-southeast-asia",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "technical",
    subject: "Excel",
    topic: "Market Sizing",
    difficulty: "hard",
    access: "paid",
    question:
      "A leading Indian payments unicorn wants to expand into Vietnam. How should they evaluate market entry viability?",
    shortAnswer:
      "Assess market attractiveness (smartphone penetration, unbanked population), regulatory landscape (e-wallet license mandates), competitive intensity (MoMo, ZaloPay), and partner ecosystem.",
    explanation:
      "Framework: 1) Market Sizing (TAM/SAM/SOM of digital payments). 2) Regulatory Feasibility (local entity requirements, foreign ownership caps). 3) Competitive Advantage (proprietary tech stack vs local consumer trust). 4) Go-to-Market Mode (Organic build vs Acquisition vs Joint Venture with a local bank).",
    followUps: [
      "What are the key differences in unit economics between UPI in India vs digital wallets in Southeast Asia?",
      "How would you structure a post-merger integration plan if entering via local acquisition?",
    ],
  },
  {
    id: "case-006",
    slug: "hospital-bed-occupancy-optimization",
    directions: ["Business & Operations", "Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Statistics",
    topic: "Profitability",
    difficulty: "medium",
    access: "free",
    question:
      "A private hospital chain is facing high ER wait times despite average bed occupancy being only 68%. Where is the operational mismatch?",
    shortAnswer:
      "Discharge delays in inpatient wards blocking incoming admissions, coupled with specialty-specific bed allocation rigidity and uncoordinated elective surgery schedules.",
    explanation:
      "Investigate: 1) Discharge bottleneck: Patients medically cleared in morning but discharged late afternoon due to billing/pharmacy delays. 2) Bed classification rigidity: ICU vs general ward vs isolation capacity mismatch. 3) Peak load variations: Scheduled elective surgeries competing with unpredictable emergency room intake.",
    followUps: [
      "How would you implement predictive admission modeling using historical triage data?",
      "What process changes in hospital pharmacy and billing can shave 2 hours off the discharge cycle?",
    ],
  },
  {
    id: "case-007",
    slug: "retail-bank-customer-churn-diagnostics",
    directions: ["Data & BI", "Technical Analyst"],
    type: "Case Study",
    category: "technical",
    subject: "SQL",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "A retail bank experiences a 20% spike in account closures among high-net-worth (HNW) clients. How would you analyze and resolve this?",
    shortAnswer:
      "Identify early indicator signals (salary credit cessation, declining fixed deposits, digital app inactivity), segment by relationship manager assignment, and benchmark interest rate competitiveness.",
    explanation:
      "Analysis Steps: 1) Cross-sectional cohort analysis (did clients migrate funds to wealth management competitors or mutual funds?). 2) Service quality audit: RM turnover rate and resolution time for HNW support tickets. 3) Competitive pricing check on fixed deposit yields and forex markup fees.",
    followUps: [
      "How would you train a random forest or logistic regression model to predict HNW churn 90 days in advance?",
      "What proactive retention incentives (fee waivers, lifestyle perks) offer the highest ROI?",
    ],
  },
  {
    id: "case-008",
    slug: "airline-dynamic-pricing-overbooking",
    directions: ["Consulting & Strategy", "Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Statistics",
    topic: "Growth & Pricing",
    difficulty: "hard",
    access: "paid",
    question:
      "How should an airline determine the optimal overbooking rate for a popular Friday evening business flight?",
    shortAnswer:
      "Balance marginal revenue of an additional ticket sold against expected cost of denied boarding compensation multiplied by the historical no-show probability distribution.",
    explanation:
      "Expected Cost Minimization: Probability distribution of no-shows ~ Binomial(n, p). If overbooked by k seats: Revenue Gain = k * Ticket Price. Expected Penalty = Sum(P(No-shows < k) * [Voucher Cost + Alternate Flight Cost + Brand Damage]). Solve for k where Marginal Revenue = Marginal Expected Penalty.",
    followUps: [
      "How does corporate booking flexibility (refundable vs non-refundable tickets) affect no-show probability p?",
      "What real-time seat auction mechanisms can reduce the cash cost of involuntary denied boarding?",
    ],
  },
  {
    id: "biz-001",
    slug: "freemium-to-paid-conversion-strategy",
    directions: ["Consulting & Strategy", "Data & BI"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "Excel",
    topic: "Growth & Pricing",
    difficulty: "medium",
    access: "free",
    question:
      "What strategies can a SaaS productivity tool use to increase its freemium-to-paid conversion rate from 2.1% to 4.5%?",
    shortAnswer:
      "Introduce feature paywalls based on usage thresholds (e.g. storage limits, team collaboration seats), offer time-bound interactive trials for premium features, and improve in-app onboarding guidance.",
    explanation:
      "Key levers: 1) Value metric alignment: Charge for vectors that grow with user success (collaborators, API calls, export resolution). 2) Paywall timing: Trigger upgrade prompts at the 'aha!' moment of maximum user engagement. 3) In-product nudges: Reverse trials where users get 14 days of Pro automatically before falling back to Free.",
    followUps: [
      "How do you evaluate whether a stricter free tier increases conversions or destroys viral top-of-funnel acquisition?",
      "What role does product-led growth (PLG) analytics play in identifying high-intent accounts?",
    ],
  },
  {
    id: "biz-002",
    slug: "sql-where-vs-having-performance",
    directions: ["Data & BI", "Technical Analyst"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "SQL",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "What is the architectural difference between WHERE and HAVING clauses in analytical SQL pipelines?",
    shortAnswer:
      "WHERE filters rows prior to aggregation using table indices where possible; HAVING filters aggregated groups post-calculation. Filtering early with WHERE minimizes memory footprint in large distributed queries.",
    explanation:
      "In distributed query engines (BigQuery, Snowflake, PostgreSQL), WHERE conditions allow partition pruning and index scans, reducing shuffle volume across worker nodes. HAVING requires a full aggregation pass across all grouped keys before pruning results.",
    followUps: [
      "Can you use aggregate functions like COUNT() inside a WHERE clause? Why or why not?",
      "How do query optimizers handle queries containing both WHERE, GROUP BY, and HAVING clauses?",
    ],
  },
  {
    id: "biz-003",
    slug: "marketplace-chicken-and-egg-problem",
    directions: ["Consulting & Strategy", "Business & Operations"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "AI",
    topic: "Growth & Pricing",
    difficulty: "hard",
    access: "paid",
    question:
      "How should a two-sided home services marketplace (electricians/plumbers & homeowners) solve the chicken-and-egg liquidity problem in a new city?",
    shortAnswer:
      "Subsidize and constrain the supply side in a single hyper-local micro-market first, guarantee minimum hourly pay to service professionals, and launch targeted demand campaigns once supply density is achieved.",
    explanation:
      "Playbook: 1) Geographic constraint: Launch in 1 dense neighborhood (e.g. Indiranagar, Bangalore) rather than entire city. 2) Supply bootstrapping: Guarantee daily minimum earnings to top 50 verified technicians. 3) Single-player utility: Provide professionals with a free scheduling/billing tool before marketplace liquidity is ready.",
    followUps: [
      "What supply-demand ratio ensures less than 15-minute booking confirmation without idle worker overhead?",
      "How do you prevent platform leakage (technicians taking clients offline for direct cash)?",
    ],
  },
  {
    id: "biz-004",
    slug: "evaluating-build-vs-buy-llm-infrastructure",
    directions: ["Technical Analyst", "Consulting & Strategy"],
    type: "Business/ Strategy",
    category: "ai-cloud",
    subject: "AI",
    topic: "Profitability",
    difficulty: "hard",
    access: "free",
    question:
      "How should a mid-sized enterprise decide whether to fine-tune open-source LLMs (e.g. Llama 3) vs using proprietary APIs (OpenAI/Anthropic)?",
    shortAnswer:
      "Evaluate total cost of ownership (GPU hosting + MLOps talent vs token costs), data privacy/regulatory mandates, latency requirements, and domain specificity needs.",
    explanation:
      "Decision matrix: Token Volume vs Customization. Low-to-medium token volume with general reasoning -> Commercial API is 10x cheaper and faster to market. High token volume (>50M tokens/day) with strict on-prem PII compliance or ultra-low latency requirements -> Self-hosted fine-tuned open-source model delivers better unit economics and data sovereignty.",
    followUps: [
      "What are the hidden operational costs of maintaining fine-tuned model weights and evaluation benchmarks?",
      "How does Retrieval-Augmented Generation (RAG) shift the build vs buy trade-off?",
    ],
  },
  {
    id: "biz-005",
    slug: "cloud-data-warehouse-cost-optimization",
    directions: ["Technical Analyst", "Data & BI"],
    type: "Business/ Strategy",
    category: "ai-cloud",
    subject: "Cloud Computing",
    topic: "Profitability",
    difficulty: "medium",
    access: "paid",
    question:
      "A company's Snowflake/BigQuery monthly bill doubled without a corresponding user increase. What governance strategies would you implement?",
    shortAnswer:
      "Implement clustering and partitioning, set query auto-suspend timeouts, eliminate frequent unconstrained full-table scans, and transition heavy recurring reports to pre-computed materialized views.",
    explanation:
      "Audit framework: 1) Query profiling: Identify top 5% queries consuming 80% compute credits. 2) Storage optimization: Partition by date and cluster by high-cardinality filter columns. 3) Resource quotas: Establish warehouse tier sizing limits and automated kill-switches for queries exceeding predefined byte thresholds.",
    followUps: [
      "How does incremental dbt modeling differ from full-table rebuilds in terms of cloud compute cost?",
      "What KPIs should be tracked on FinOps executive dashboards?",
    ],
  },
  {
    id: "biz-006",
    slug: "ab-testing-sample-size-and-mde",
    directions: ["Data & BI"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "How do you calculate the required sample size for an A/B test, and what is Minimum Detectable Effect (MDE)?",
    shortAnswer:
      "Sample size depends on baseline conversion rate, statistical power (typically 80%), significance level alpha (typically 5%), and MDE. MDE is the smallest uplift that the experiment is powered to reliably detect.",
    explanation:
      "Formula: n = 16 * (p * (1-p)) / (MDE)^2. Trade-offs: Detecting smaller MDE requires quadratically larger sample sizes. If traffic is low, you must accept either a higher MDE, lower confidence, or run the test for a longer duration.",
    followUps: [
      "Why is early stopping ('peeking') dangerous in classical hypothesis testing, and how does sequential testing address it?",
      "What is the difference between Type I (false positive) and Type II (false negative) errors in business decisions?",
    ],
  },
  {
    id: "biz-007",
    slug: "customer-lifetime-value-calculation-methods",
    directions: ["Data & BI", "Consulting & Strategy"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "Excel",
    topic: "Profitability",
    difficulty: "medium",
    access: "free",
    question:
      "How do you calculate Customer Lifetime Value (LTV) for a subscription business versus a transactional e-commerce business?",
    shortAnswer:
      "Subscription: LTV = (ARPU * Gross Margin %) / Churn Rate. E-commerce: LTV = Average Order Value * Purchase Frequency * Gross Margin % * Average Customer Lifespan.",
    explanation:
      "Key nuances: In contractual models (SaaS/Subscription), churn is explicit. In non-contractual models (e-commerce), customer death is unobservable, requiring probabilistic models like BG/NBD and Gamma-Gamma to estimate repeat purchase likelihood.",
    followUps: [
      "How do discount rates (Cost of Capital) factor into multi-year enterprise LTV projections?",
      "Why is cohort-based historical LTV more reliable than blended cross-sectional LTV formulas?",
    ],
  },
  {
    id: "biz-008",
    slug: "retail-omnichannel-inventory-allocation",
    directions: ["Business & Operations"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "Excel",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "paid",
    question:
      "How should an apparel retailer allocate inventory between online e-commerce fulfillment centers and physical retail storefronts?",
    shortAnswer:
      "Use regional demand forecasting with dynamic safety stock buffering, enable ship-from-store fulfillment for stock balancing, and prioritize high-velocity SKUs in central hubs.",
    explanation:
      "Inventory pooling principles: Centralized warehouses reduce aggregate safety stock variance (Risk Pooling). Storefront fulfillment decreases last-mile shipping delivery time and clears aging brick-and-mortar inventory before clearance markdowns.",
    followUps: [
      "How do stock-outs impact brand loyalty differently online versus in-store?",
      "What inventory turnover ratio targets indicate a healthy fashion apparel supply chain?",
    ],
  },
  {
    id: "fit-001",
    slug: "tell-me-about-a-time-data-disproved-hypothesis",
    directions: [
      "Data & BI",
      "Consulting & Strategy",
      "Technical Analyst",
      "Business & Operations",
    ],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Statistics",
    topic: "Behavioural",
    difficulty: "easy",
    access: "free",
    question:
      "Tell me about a time when your data analysis disproved a senior stakeholder's strongly held intuition. How did you communicate it?",
    shortAnswer:
      "Framed the findings around business impact, presented the methodology transparently with visual cohorts, and offered constructive alternative hypotheses rather than blunt contradictions.",
    explanation:
      "Use STAR Method (Situation, Task, Action, Result). Focus on emotional intelligence: Validated the stakeholder's logical intuition first, clearly showed where the data deviated, and collaborated on actionable next steps without creating defensiveness.",
    followUps: [
      "What would you do if the executive still insists on their original strategy despite clear data evidence?",
      "How do you handle statistical ambiguity when sample sizes are borderline inconclusive?",
    ],
  },
  {
    id: "fit-002",
    slug: "handling-tight-deadlines-with-incomplete-data",
    directions: ["Consulting & Strategy", "Business & Operations", "Data & BI"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Excel",
    topic: "Behavioural",
    difficulty: "medium",
    access: "free",
    question:
      "Describe a situation where you had to make a critical business recommendation under a tight deadline with incomplete or imperfect data.",
    shortAnswer:
      "Applied the 80/20 rule, clearly documented core assumptions and sensitivity bounds, and delivered an 80% directional recommendation with risk mitigation buffers.",
    explanation:
      "STAR framework: Emphasize structuring ambiguity. Conducted sensitivity analysis (Best-case, Base-case, Worst-case) to show decision robustness even if underlying assumptions shifted by +/- 15%.",
    followUps: [
      "How do you decide when data is 'good enough' to take irreversible actions?",
      "What post-launch checkpoints did you establish to validate your early assumptions?",
    ],
  },
  {
    id: "fit-003",
    slug: "managing-conflicting-stakeholder-priorities",
    directions: ["Business & Operations", "Technical Analyst"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "JavaScript",
    topic: "Behavioural",
    difficulty: "medium",
    access: "paid",
    question:
      "How do you manage conflicting feature requests between the Sales team (demanding bespoke enterprise features) and Product team (defending platform scalability)?",
    shortAnswer:
      "Align both parties around quantifiable business goals (e.g. ARR impact vs technical debt maintenance cost), establish objective RICE scoring, and seek modular design compromises.",
    explanation:
      "Resolution framework: Quantify ARR unlocked by the sales request vs long-term platform velocity penalty. Where possible, architect custom requests as extensible platform APIs rather than one-off custom code forks.",
    followUps: [
      "How do you communicate 'No' to high-performing sales directors without demotivating them?",
      "How do you incorporate technical debt paydown into roadmap capacity planning?",
    ],
  },
  {
    id: "fit-004",
    slug: "navigating-a-project-failure-or-mistake",
    directions: ["Data & BI", "Technical Analyst", "Business & Operations"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Python",
    topic: "Behavioural",
    difficulty: "easy",
    access: "free",
    question:
      "Describe a project that did not achieve its intended outcome. What went wrong, and what did you learn?",
    shortAnswer:
      "Took immediate ownership without deflecting blame, identified root causes (unclear problem definition, lagging metric tracking), and instituted preventive post-mortem practices.",
    explanation:
      "Structure: 1) Honest reflection of failure. 2) Root cause analysis (e.g. optimizing for a proxy metric that didn't drive real user retention). 3) Systematic process improvements implemented to ensure the mistake never repeated.",
    followUps: [
      "What mechanisms did you put in place to catch similar failure signals earlier in future sprints?",
      "How did you rebuild stakeholder confidence following the setback?",
    ],
  },
  {
    id: "fit-005",
    slug: "leading-cross-functional-teams-without-authority",
    directions: ["Business & Operations", "Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Excel",
    topic: "Behavioural",
    difficulty: "hard",
    access: "paid",
    question:
      "Tell me about a time you led a cross-functional initiative across engineering, design, and marketing without direct managerial authority.",
    shortAnswer:
      "Built consensus by creating shared visibility on project milestones, demonstrated empathy toward each team's bandwidth constraints, and highlighted individual team wins.",
    explanation:
      "Influence without authority: Mapped stakeholder incentives, conducted 1-on-1 alignment check-ins before major steering committees, and removed blockers proactively to earn peer trust.",
    followUps: [
      "How do you handle a team member who misses agreed deadlines and doesn't report to you?",
      "What communication cadences work best for keeping executive sponsors updated without micromanagement?",
    ],
  },
  {
    id: "fit-006",
    slug: "simplifying-complex-technical-concepts",
    directions: ["Technical Analyst", "Data & BI"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "SQL",
    topic: "Behavioural",
    difficulty: "easy",
    access: "free",
    question:
      "How do you explain a complex technical data pipeline architecture or statistical model to non-technical business leaders?",
    shortAnswer:
      "Use real-world analogies, omit algorithmic jargon, focus strictly on business input/output levers, and anchor the narrative on commercial ROI.",
    explanation:
      "Example: Explaining Vector Embeddings as 'a multi-dimensional library catalog where books with similar meaning sit on the same shelf regardless of the exact words used in the title'.",
    followUps: [
      "How do you gauge whether your audience is truly understanding or just nodding along?",
      "What visual storytelling techniques do you use in executive slide decks?",
    ],
  },
  {
    id: "tech-001",
    slug: "sql-window-functions-dense-rank-lead-lag",
    directions: ["Data & BI", "Technical Analyst"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "SQL",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    question:
      "Explain the difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL analytics queries.",
    shortAnswer:
      "ROW_NUMBER assigns consecutive unique integers. RANK leaves gaps when ties occur (e.g. 1, 2, 2, 4). DENSE_RANK assigns consecutive numbers without gaps on ties (e.g. 1, 2, 2, 3).",
    explanation:
      "Window functions execute over partitioned row sets without collapsing rows like GROUP BY. Essential for top-N analysis, running totals, and MoM growth rate calculations with LEAD/LAG.",
    followUps: [
      "Write a query to find the second highest salary in each department using DENSE_RANK().",
      "What is the performance implication of PARTITION BY on high-cardinality columns?",
    ],
  },
  {
    id: "tech-002",
    slug: "react-usememo-vs-usecallback-performance",
    directions: ["Technical Analyst"],
    type: "Case Study",
    category: "technical",
    subject: "React",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    question:
      "When should you use useMemo vs useCallback in a complex React dashboard application?",
    shortAnswer:
      "useMemo caches the calculated result of an expensive calculation; useCallback caches the function definition itself to prevent unnecessary child re-renders when passing callbacks down.",
    explanation:
      "Premature optimization caution: Both hooks carry overhead (memory allocation for dependency arrays and comparison checks on every render). Use them when passing callbacks to React.memo wrapped children or performing heavy matrix/filtering math.",
    followUps: [
      "How does the React 19 compiler affect manual useMemo and useCallback optimization?",
      "What causes infinite re-render loops when using objects as dependencies in useEffect?",
    ],
  },
  {
    id: "tech-003",
    slug: "python-pandas-groupby-vs-pivot-table",
    directions: ["Data & BI"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "Python",
    topic: "Data Interpretation",
    difficulty: "easy",
    access: "free",
    question:
      "What is the difference between groupby() and pivot_table() in Python Pandas?",
    shortAnswer:
      "groupby() aggregates data along index hierarchies and returns a Series or DataFrame; pivot_table() reshapes data with both row and column multi-dimensional aggregations.",
    explanation:
      "pivot_table is essentially a convenience wrapper over groupby + unstack with built-in fill_value handling and grand total margins.",
    followUps: [
      "How do you optimize memory consumption when loading large 10GB+ CSV files into Pandas?",
      "What is the difference between vectorized operations and apply() in execution speed?",
    ],
  },
  {
    id: "tech-004",
    slug: "database-indexing-b-tree-vs-hash",
    directions: ["Technical Analyst"],
    type: "Business/ Strategy",
    category: "technical",
    subject: "DBMS",
    topic: "Root Cause Analysis",
    difficulty: "hard",
    access: "paid",
    question:
      "How does a B-Tree index work under the hood in relational databases, and why is it preferred over Hash indexes?",
    shortAnswer:
      "B-Tree is a self-balancing search tree supporting both point lookups (O(log n)) and range scans (O(log n + k)). Hash indexes only support exact equality matches O(1) and cannot handle range queries (<, >, BETWEEN).",
    explanation:
      "Because range queries, sorting (ORDER BY), and prefix pattern matching (LIKE 'abc%') are extremely common in database workloads, B-Tree indexes serve as the universal default for PostgreSQL, MySQL, and Oracle engines.",
    followUps: [
      "What is a composite index and how does the leftmost prefix rule apply?",
      "How do excessive indexes degrade INSERT/UPDATE/DELETE write throughput?",
    ],
  },
  {
    id: "tech-005",
    slug: "cloud-serverless-vs-container-architecture",
    directions: ["Technical Analyst"],
    type: "Business/ Strategy",
    category: "ai-cloud",
    subject: "Cloud Computing",
    topic: "Profitability",
    difficulty: "medium",
    access: "free",
    question:
      "When should an engineering organization choose AWS Lambda (Serverless) over ECS/EKS (Docker Containers)?",
    shortAnswer:
      "Choose Lambda for event-driven, unpredictable, or bursty workloads with zero idle cost. Choose Containers for predictable long-running workloads, complex state, or when cold start latency is unacceptable.",
    explanation:
      "Cost curves cross over: At low/intermittent invocation volume, Lambda is significantly cheaper because you pay per millisecond of compute. At sustained high CPU utilization (24/7 steady traffic), dedicated container instances offer lower unit compute cost.",
    followUps: [
      "How do you mitigate serverless cold start latencies in Java or Python runtimes?",
      "What strategies prevent database connection pool exhaustion when thousands of Lambdas spin up concurrently?",
    ],
  },
];
