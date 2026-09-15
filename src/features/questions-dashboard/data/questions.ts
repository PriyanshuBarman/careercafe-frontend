import type { Question } from "../types/question";

export const QUESTIONS: Question[] = [
  {
    id: "biz-root-001",
    slug: "declining-online-sales-root-cause-analysis",
    question:
      "Our e-commerce company has seen a 15% decline in online sales over the past 3 months. How would you approach diagnosing the root cause?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Decompose sales into Traffic × Conversion Rate × Average Order Value, then drill down into each component with quantitative data and qualitative inputs to identify the primary driver.",
    explanation:
      "Start by disaggregating sales into its core components: Traffic, Conversion Rate, and Average Order Value (AOV). Gather historical data for each metric over the 3-month decline period versus the prior period. For traffic, analyze channel performance (organic, paid, referral, direct). For conversion, examine funnel drop-offs, device types, and user segments. For AOV, look at product mix, discounting, and upsell effectiveness. Combine this with qualitative inputs like customer feedback and competitive analysis. Form hypotheses for each component and validate them with statistical tests. This systematic approach prevents jumping to conclusions and ensures you isolate the true root cause.",
    followUps: [
      {
        question:
          "If you found that traffic is down only from paid search, what would you investigate next?",
        answer:
          "I would analyze paid search campaign performance metrics: impressions, click-through rate, cost-per-click, and Quality Score. I'd also check if competitors increased their bids, if our ad copy lost relevance, or if landing page conversion rates dropped. Additionally, I'd review budget allocation and seasonal trends in search volume.",
      },
      {
        question: "How would you prioritize which root cause to address first?",
        answer:
          "I'd use an impact-effort matrix. Impact is measured by the magnitude of the decline each factor explains. Effort is the time and resources required to fix it. I'd prioritize high-impact, low-effort fixes first, followed by high-impact, high-effort initiatives. I'd also consider whether the issue is internal (controllable) or external (market-driven).",
      },
    ],
    commonMistakes: [
      "Jumping to a conclusion without data validation (e.g., blaming marketing immediately).",
      "Not properly disaggregating the problem into its drivers.",
      "Ignoring qualitative data like customer feedback or competitive moves.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
      "customer-onboarding-cycle-time-reduction",
    ],
  },
  {
    id: "biz-root-002",
    slug: "manufacturing-defect-rate-increase",
    question:
      "A manufacturing plant has experienced a 20% increase in defect rates over the last 6 weeks. How would you conduct a root cause analysis to identify the source?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use the 5 Whys technique and Ishikawa (fishbone) diagram to systematically explore potential causes across machine, material, method, manpower, measurement, and environment dimensions.",
    explanation:
      "Begin with the 5 Whys: ask 'why' repeatedly to drill down from the symptom (high defect rate) to underlying causes. Simultaneously, construct a fishbone diagram categorizing potential causes into: Machines (equipment calibration, maintenance), Materials (raw material quality, supplier changes), Methods (process changes, SOPs), Manpower (training, fatigue), Measurement (inspection accuracy), and Environment (temperature, humidity). Gather production data and perform Pareto analysis to identify the most frequent defect types. Conduct controlled experiments (e.g., change one variable at a time) to validate hypotheses. This multi-dimensional approach ensures no area is overlooked.",
    followUps: [
      {
        question:
          "What if the data shows defects are concentrated on one shift?",
        answer:
          "That points to manpower or shift-specific processes. I'd investigate training levels, shift supervisors, break schedules, and whether temporary workers were used. I'd also compare machine settings and maintenance logs across shifts.",
      },
      {
        question: "How would you involve operators in the root cause analysis?",
        answer:
          "Operators have the most hands-on knowledge. I'd conduct focus groups, anonymous surveys, and shadowing sessions. Their insights often uncover issues not captured in data, like subtle machine vibrations or material handling problems.",
      },
    ],
    commonMistakes: [
      "Stopping at the first root cause without exploring deeper.",
      "Relying only on quantitative data without operator input.",
      "Not segmenting defects by type before analysis.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "order-fulfillment-process-optimization",
      "customer-onboarding-cycle-time-reduction",
    ],
  },
  {
    id: "biz-process-003",
    slug: "order-fulfillment-process-optimization",
    question:
      "Our order fulfillment process takes 8 hours on average, and we need to reduce it to 6 hours. How would you approach this process improvement initiative?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Process Improvement",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Map the current process flow, identify bottlenecks through time-motion studies, and implement solutions like zone picking, batch picking, and layout optimization.",
    explanation:
      "Start with value stream mapping: document every step from order receipt to dispatch, including waiting times and handoffs. Conduct time-motion studies to measure actual duration of each step. Identify the biggest time sinks—often travel time, batching delays, or packing bottlenecks. Propose solutions: zone picking (assign pickers to zones), batch picking (pick multiple orders at once), wave scheduling, or implementing voice-directed picking. Also evaluate warehouse layout redesign to minimize travel distance. Pilot changes in one zone, measure improvements, and iterate before scaling. Track both speed and accuracy (to avoid quality trade-offs).",
    followUps: [
      {
        question: "What if the bottleneck is not picking but packing?",
        answer:
          "I'd similarly analyze the packing station: layout, materials availability, packing process steps, and whether parallel packing stations could be added. Cross-training staff and improving workstation ergonomics can also help. Additionally, consider pre-packing for fast-moving items.",
      },
      {
        question: "How would you ensure quality is not sacrificed for speed?",
        answer:
          "I'd implement checkpoints and quality audits at each stage. Use error tracking to monitor accuracy rates. Introduce a 'quality ambassador' role to spot-check orders. Pilot changes and compare error rates before and after, ensuring that improvement in speed doesn't come at the cost of accuracy.",
      },
    ],
    commonMistakes: [
      "Implementing technology solutions without understanding the current process.",
      "Focusing only on speed and ignoring quality.",
      "Not involving frontline staff who have the most knowledge of the process.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "customer-onboarding-cycle-time-reduction",
    ],
  },
  {
    id: "biz-process-004",
    slug: "customer-onboarding-cycle-time-reduction",
    question:
      "Our customer onboarding process takes 5 days, but competitors do it in 2. How would you analyze and improve this process to reduce cycle time?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Process Improvement",
    difficulty: "easy",
    access: "paid",
    shortAnswer:
      "Map the onboarding process, identify handoffs and wait times, and streamline steps like document collection and verification to reduce cycle time.",
    explanation:
      "First, map the current onboarding process from customer sign-up to account activation. Document every step, owner, and average time. Identify where wait times are longest (e.g., legal review, IT provisioning). Use a Pareto chart to see which steps account for most of the time. Implement parallel processing where possible (e.g., credit checks while document verification happens). Automate manual steps like identity verification using APIs. Reduce handoffs by assigning a single point of contact (concierge) for each customer. Set up a pilot with a small group of customers to test the streamlined process. Measure end-to-end cycle time and customer satisfaction.",
    followUps: [
      {
        question:
          "How would you handle exceptions or complex cases that take longer?",
        answer:
          "I'd segment customers into standard vs. complex and design two different workflows. Complex cases could have a dedicated team and longer SLA, while standard cases are optimized for speed. This allows us to maintain speed for the majority while handling complexity appropriately.",
      },
      {
        question: "What metrics would you use to track success?",
        answer:
          "Cycle time (end-to-end), time per step, customer satisfaction (CSAT) score, and conversion rate (percentage of customers who complete onboarding). Also track handoff frequency and error rates to identify friction points.",
      },
    ],
    commonMistakes: [
      "Not distinguishing between value-add and non-value-add steps.",
      "Over-automating without testing with real customers.",
      "Ignoring legal and compliance constraints.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "biz-funnel-005",
    slug: "saas-free-trial-to-paid-conversion",
    question:
      "Our SaaS product has a 10% free trial to paid conversion rate. How would you analyze and improve this conversion funnel?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Funnels & Conversion",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Map the trial user journey, identify drop-off points, and implement targeted interventions like personalized onboarding emails and feature gating to drive conversion.",
    explanation:
      "Start by mapping the entire user journey: sign-up → activation (key action) → engagement (using core features) → upgrade to paid. Use analytics to track conversion rates at each stage. Identify where users drop off: after sign-up? After first session? When trying premium features? Conduct user interviews and surveys to understand barriers (e.g., unclear value, pricing concerns, complexity). Implement A/B tests: personalized onboarding sequences, in-app tutorials highlighting premium features, and targeted email campaigns with case studies. Introduce product-led growth tactics like 'try premium for 7 days' at the right moment. Measure impact on conversion rate over time.",
    followUps: [
      {
        question:
          "What if most drop-offs happen after users try the product once and never return?",
        answer:
          "That suggests an onboarding or first-use experience problem. I'd redesign the onboarding flow to guide users to the 'aha moment' faster. I'd use tools like Userpilot or Pendo to create interactive walkthroughs and send targeted re-engagement emails.",
      },
      {
        question: "How would you segment trial users to improve conversion?",
        answer:
          "I'd segment by: sign-up source (organic, paid, referral), company size, industry, and usage behavior (power users vs. casual). Then tailor conversion strategies for each segment. For example, power users might need pricing incentives, while casual users might need education on product value.",
      },
    ],
    commonMistakes: [
      "Focusing only on the upgrade page without analyzing earlier stages.",
      "Not understanding why users don't return after first session.",
      "Overcomplicating the funnel without testing one change at a time.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "biz-funnel-006",
    slug: "ecommerce-abandoned-cart-analysis",
    question:
      "Our e-commerce store has a 70% cart abandonment rate. How would you analyze this and implement solutions to recover lost revenue?",
    directions: ["Business & Operations"],
    type: "Technical",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Funnels & Conversion",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Analyze the checkout funnel, identify friction points (shipping costs, account creation, payment options), and implement exit-intent popups, cart recovery emails, and streamlined checkout.",
    explanation:
      "Start by analyzing the checkout funnel data: view cart → enter shipping → enter payment → review → place order. Identify where users drop off using analytics. Common reasons: high shipping costs, mandatory account creation, too many form fields, limited payment options, or slow page load. Implement solutions: offer guest checkout, show shipping costs early, simplify forms, add PayPal/Apple Pay, and use trust signals (security badges). Also implement exit-intent popups offering a discount or free shipping. Send automated abandoned cart emails within 1 hour, then 24 hours, with social proof (e.g., '10 people are viewing this item'). A/B test each change to measure impact.",
    followUps: [
      {
        question: "How would you measure the success of your interventions?",
        answer:
          "I'd track recovery rate (percentage of abandoned carts that convert after intervention), revenue recovered, and overall conversion rate. I'd also monitor cart abandonment rate over time and compare with a control group of users who don't receive interventions.",
      },
      {
        question: "What if a user abandons multiple carts over time?",
        answer:
          "That suggests deeper issues like price sensitivity or trust. I'd analyze their behavior: are they comparing prices? Are they adding and removing the same items? I'd consider offering a personalized discount or free trial of a subscription program to encourage commitment.",
      },
    ],
    commonMistakes: [
      "Sending too many recovery emails and annoying customers.",
      "Not addressing the root cause (like high shipping costs).",
      "Implementing popups that hurt user experience rather than help.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "ops-process-007",
    slug: "warehouse-layout-optimization",
    question:
      "Our warehouse operations are inefficient, with pickers traveling long distances. How would you redesign the warehouse layout to reduce travel time by 30%?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Operations",
    topic: "Process Improvement",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Analyze order profiles and SKU velocity, implement ABC classification, and reorganize layout using slotting optimization and zone-based picking.",
    explanation:
      "Start with ABC analysis: categorize SKUs by pick frequency (A = high velocity, B = medium, C = low). A-items should be placed in the most accessible locations (near packing stations). Use order data to determine which items are frequently picked together (affinity analysis) and co-locate them. Implement a forward pick area for A-items and a reserve storage area for B/C-items. Redesign the layout to reduce travel: use a U-shaped flow with receiving at one end and shipping at the other. Consider implementing zone picking where pickers are assigned to specific zones. Use slotting optimization software to determine optimal bin placement. Pilot the new layout in one aisle and measure travel time reduction before full rollout.",
    followUps: [
      {
        question: "What if the product mix changes seasonally?",
        answer:
          "I'd design a flexible slotting system that allows for seasonal reassignment. Use dynamic slotting algorithms that recalculate optimal locations based on recent demand patterns. During peak seasons, temporarily reclassify certain SKUs as high-velocity and move them to forward areas.",
      },
      {
        question: "How would you evaluate the ROI of this layout change?",
        answer:
          "I'd compare labor costs before and after (travel time reduction = fewer pickers needed or more orders picked per hour). Also consider reduced overtime and error rates. Factor in implementation costs (moving racks, re-labeling). The payback period should be less than 12 months for a compelling business case.",
      },
    ],
    commonMistakes: [
      "Not using data to decide placement (relying on intuition).",
      "Ignoring safety and ergonomics in layout design.",
      "Not piloting changes before full rollout.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "ops-supply-008",
    slug: "inventory-stockout-optimization",
    question:
      "We often face stockouts on popular items and excess inventory on slow movers. How would you improve demand forecasting and inventory management?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Operations",
    topic: "Supply & Demand",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Implement statistical demand forecasting with safety stock calculations, use ABC classification for inventory management, and establish vendor collaboration for lead time reduction.",
    explanation:
      "Start by improving demand forecasting using time-series models (exponential smoothing, ARIMA) that account for seasonality and trends. Calculate safety stock based on demand variability and lead time variability: Safety Stock = Z-score × sqrt(Lead Time × Variance of Demand + Demand² × Variance of Lead Time). Use ABC classification: A-items (high value, high volume) get tight control and frequent forecasting; C-items get simpler approaches. Establish strong vendor relationships to reduce lead times and increase reliability. Implement a periodic review system with reorder point triggers. Use inventory optimization software to recommend order quantities balancing holding costs and stockout costs. Regularly review and adjust parameters as demand patterns evolve.",
    followUps: [
      {
        question: "How would you handle promotional demand spikes?",
        answer:
          "I'd incorporate promotional calendars into forecasting models, using lift factors based on historical promotions. I'd also coordinate with marketing to get early notice of promotions and adjust orders. Safety stock should also account for promotional uncertainty.",
      },
      {
        question:
          "What if multiple suppliers have long and variable lead times?",
        answer:
          "I'd consider dual sourcing to reduce risk. Increase safety stock buffers for those items. I'd also work with suppliers on lead time improvement projects (e.g., better production planning). Alternatively, consider regional warehousing closer to suppliers.",
      },
    ],
    commonMistakes: [
      "Using average demand without considering variability.",
      "Not differentiating between perishable and non-perishable items.",
      "Ignoring supplier lead time variability in safety stock calculations.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "ops-supply-009",
    slug: "restaurant-supply-chain-disruption",
    question:
      "A major ingredient supplier for our restaurant chain has gone out of business. How would you manage this supply chain disruption?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Operations",
    topic: "Supply & Demand",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Identify alternative suppliers, assess quality and cost trade-offs, adjust menu temporarily, and communicate transparently with customers.",
    explanation:
      "First, quantify the inventory on hand and how long it will last. Immediately engage the procurement team to identify alternative suppliers. Assess each alternative on quality, price, reliability, and lead time. If alternatives are expensive, evaluate menu adjustments: feature other items, or temporarily remove the affected dishes. Communicate with customers proactively via email and in-store signage, emphasizing quality commitment. Work with the new supplier to expedite deliveries while negotiating longer-term contracts. Simultaneously, review supply chain resilience: consider dual sourcing for critical ingredients moving forward. Track customer feedback and sales impact to measure recovery.",
    followUps: [
      {
        question: "What if the alternative supplier's quality is lower?",
        answer:
          "I'd conduct a blind taste test with a sample group. If quality is significantly inferior, I'd continue searching for other suppliers or consider changing the recipe. If the difference is marginal, I'd temporarily accept it while looking for better options, but I'd communicate the change honestly to customers.",
      },
      {
        question: "How would you prevent this from happening again?",
        answer:
          "Implement a supplier diversification strategy with at least two suppliers for critical ingredients. Build strategic relationships and conduct regular risk assessments. Develop a business continuity plan with predefined triggers and alternate suppliers.",
      },
    ],
    commonMistakes: [
      "Panicking and accepting the first alternative without due diligence.",
      "Not communicating with customers and losing trust.",
      "Focusing only on the short-term and not building long-term resilience.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "ops-cx-010",
    slug: "call-center-wait-time-reduction",
    question:
      "Our customer call center has an average wait time of 10 minutes, leading to customer frustration. How would you reduce this to under 2 minutes?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Operations",
    topic: "Customer Experience",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Implement workforce management with better forecasting, improve self-service options (IVR, chatbots), and introduce callback options to reduce perceived wait time.",
    explanation:
      "Start with call volume forecasting: analyze historical data by day of week, hour, and season. Use Erlang-C model to calculate required staffing levels to achieve the target service level (80% of calls answered within 20 seconds). Implement workforce management software to schedule agents optimally, including part-time and cross-trained agents for peak hours. Enhance self-service: improve IVR (Interactive Voice Response) to handle common queries (balance inquiry, order status). Deploy chatbots on the website for simple issues. Offer a callback option to customers who don't want to wait, reducing perceived hold time. Monitor abandonment rates and customer satisfaction (CSAT) to measure improvement.",
    followUps: [
      {
        question:
          "What if we can't hire more agents due to budget constraints?",
        answer:
          "I'd focus on reducing call volume through better self-service and proactive communication (e.g., sending status updates via SMS). Also, analyze call drivers—are many calls due to product confusion? Fixing the root cause may reduce volume. Additionally, I'd cross-train agents to handle different query types more efficiently.",
      },
      {
        question: "How would you measure the impact of these changes?",
        answer:
          "Key metrics: average speed of answer (ASA), abandonment rate, CSAT, first-call resolution (FCR), and average handle time (AHT). I'd track these weekly and conduct customer surveys to gauge perception of wait time. Also monitor operational costs per call.",
      },
    ],
    commonMistakes: [
      "Hiring more agents without analyzing call patterns.",
      "Not fixing root causes of high call volume.",
      "Implementing self-service poorly, leading to more confusion.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "excel-kpi-011",
    slug: "saas-metrics-dashboard-excel",
    question:
      "Build an Excel dashboard for our SaaS business tracking MRR, churn, CAC, and LTV. What KPIs would you include and how would you structure the dashboard?",
    directions: ["Business & Operations"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "KPI Analysis",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Create a dashboard with monthly trend charts, cohort tables, and key metrics cards. Use formulas for MRR calculation, churn analysis, and LTV/CAC ratios.",
    explanation:
      "Structure the dashboard with: 1) Key KPI cards at the top: MRR, Churn Rate, CAC, LTV, LTV/CAC ratio, and NRR. 2) Trend charts: MRR growth over time, churn rate trend, customer acquisition trend. 3) Cohort analysis: table showing retention rates by cohort month. 4) Breakdown of CAC and LTV by channel (paid, organic, referral). 5) Bottom section: data source details and assumptions. Use Excel formulas: SUMIFS for MRR, AVERAGEIFS for churn, and DYNAMIC array functions for cohorts. Conditional formatting highlights issues: red if churn >5%, green if LTV/CAC >3. Use pivot tables for flexibility. Automate refresh with Power Query if data source changes.",
    followUps: [
      {
        question:
          "How would you calculate NRR (Net Revenue Retention) in Excel?",
        answer:
          "NRR = (Starting MRR + Expansion - Churn - Contraction) / Starting MRR. I'd use SUMIFS to calculate each component for the cohort. This can be done with separate columns or a single formula with helper cells.",
      },
      {
        question: "How do you visualize cohort retention effectively in Excel?",
        answer:
          "Use a conditional formatting heatmap on a table where rows are cohorts and columns are months. Color intensity represents retention rate. This instantly shows which cohorts are performing well and if newer cohorts are improving.",
      },
    ],
    commonMistakes: [
      "Including too many metrics and making the dashboard cluttered.",
      "Not using consistent date formats leading to calculation errors.",
      "Forgetting to document assumptions and data sources.",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "excel-interp-012",
    slug: "sales-data-trend-analysis-excel",
    question:
      "You have 3 years of monthly sales data in Excel. How would you analyze trends, seasonality, and forecast the next 6 months?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Excel",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use FORECAST.ETS for exponential smoothing, analyze moving averages for trends, and identify seasonal patterns with seasonal indices.",
    explanation:
      "First, visualize the data with a line chart to spot overall trends and seasonality. Calculate a 12-month moving average to smooth out seasonality and see the underlying trend. Compute seasonal indices: average sales per month divided by overall average to see which months are above/below average. Use the FORECAST.ETS function in Excel which automatically detects seasonality and trend to forecast the next 6 months. Alternatively, use a regression model with time variables. Validate the forecast by comparing with historical holdout data. Document key drivers: promotions, economic indicators, or market events that might affect the forecast.",
    followUps: [
      {
        question:
          "What if the data has outliers (e.g., one month with a huge promotion)?",
        answer:
          "I'd identify outliers using statistical methods (e.g., 3 standard deviations from mean). I'd either remove them and explain the adjustment, or use a model that is robust to outliers. I might also create a separate forecast with and without the promotion to show the impact.",
      },
      {
        question:
          "How do you communicate the forecast uncertainty to stakeholders?",
        answer:
          "I'd create a confidence interval (e.g., 95% prediction interval) around the forecast using the forecast error from historical data. This shows the range of possible outcomes and helps stakeholders make decisions with full awareness of uncertainty.",
      },
    ],
    commonMistakes: [
      "Ignoring seasonality and assuming linear trend.",
      "Not validating the forecast against historical data.",
      "Overcomplicating the model when a simpler one works well.",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "excel-unit-013",
    slug: "coffee-shop-unit-economics",
    question:
      "Build a unit economics model for a coffee shop. Calculate contribution margin per cup and break-even point. What Excel features would you use?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "technical",
    subject: "Excel",
    topic: "Unit Economics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Calculate revenue per cup minus variable costs (coffee, milk, cup, labor) to get contribution margin. Fixed costs (rent, utilities, salaries) divided by contribution margin gives break-even units.",
    explanation:
      "In Excel, structure the model: 1) Inputs section: price per cup ($4), variable cost per cup ($1.20), fixed costs monthly ($8,000). 2) Unit economics: contribution margin = $2.80 per cup. Contribution margin ratio = 70%. 3) Break-even: fixed costs / contribution margin = 2,857 cups/month. 4) Sensitivity analysis with data tables: show how break-even changes with price or cost variations. 5) Scenario manager: best-case, worst-case, expected. Use named ranges for clarity. Add a profit/loss chart at different volume levels. This model is simple but powerful for decision-making.",
    followUps: [
      {
        question:
          "How would you incorporate labor costs into variable vs. fixed?",
        answer:
          "Labor can be fixed (salaried managers) and variable (hourly baristas). I'd separate: fixed labor is part of fixed costs; variable labor (proportional to cups sold) is part of variable costs. This gives a more accurate contribution margin.",
      },
      {
        question: "How would you use this model to evaluate a price change?",
        answer:
          "I'd create a 'what-if' analysis with a data table showing profit at various price and volume combinations. This helps visualize the trade-off: increasing price may reduce volume, but could still increase profit. Goal Seek can find the required volume to maintain profit at a new price.",
      },
    ],
    commonMistakes: [
      "Misclassifying costs (e.g., treating labor as entirely variable).",
      "Ignoring step costs (costs that change at certain volumes).",
      "Not including opportunity costs or depreciation.",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "sql-kpi-014",
    slug: "monthly-recurring-revenue-sql",
    question:
      "Write a SQL query to calculate Monthly Recurring Revenue (MRR) for a subscription business. Include breakdowns by plan and customer segment.",
    directions: ["Business & Operations"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "KPI Analysis",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use SUM of monthly subscription prices for active customers. Group by plan and segment to get breakdowns. Handle proration and discounts in the calculation.",
    explanation:
      "Assume a subscriptions table with customer_id, plan, monthly_price, start_date, end_date (if cancelled), and discount. To calculate MRR for the current month: SELECT plan, SUM(CASE WHEN end_date IS NULL OR end_date >= CURRENT_DATE THEN monthly_price * (1 - discount) ELSE 0 END) AS MRR FROM subscriptions GROUP BY plan. For customer segment, join with customers table containing segment. To handle proration (mid-month upgrades), calculate daily rates and sum for remaining days in the month. A more accurate method: use a daily snapshot table that tracks subscriptions day by day.",
    followUps: [
      {
        question: "How would you calculate MRR growth month-over-month?",
        answer:
          "I'd use LAG() window function: SELECT month, SUM(price) as MRR, LAG(SUM(price)) OVER (ORDER BY month) as prev_MRR, (SUM(price) - LAG(SUM(price)) OVER (ORDER BY month)) / LAG(SUM(price)) OVER (ORDER BY month) as growth. Need to group by month using date_trunc.",
      },
      {
        question:
          "What if you have free trials in the data? How do you exclude them?",
        answer:
          "I'd add a condition: WHERE plan != 'free_trial' OR (plan = 'free_trial' AND is_trial_converted = TRUE). This ensures we're only counting paying customers in MRR.",
      },
    ],
    commonMistakes: [
      "Including canceled customers after their end date.",
      "Not accounting for discounts or prorations.",
      "Counting free trials as paying customers.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "sql-funnel-015",
    slug: "marketing-channel-funnel-sql",
    question:
      "Write a SQL query to analyze the marketing conversion funnel: impression → click → sign-up → purchase, segmented by marketing channel.",
    directions: ["Business & Operations"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Funnels & Conversion",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use CTEs for each stage with DISTINCT user_id and channel, then join them sequentially to calculate conversion rates from impression to purchase.",
    explanation:
      "Create CTEs for each event: impressions (user_id, channel, timestamp), clicks, signups, and purchases. Then funnel CTE: SELECT i.channel, COUNT(DISTINCT i.user_id) as impressions, COUNT(DISTINCT c.user_id) as clicks, COUNT(DISTINCT s.user_id) as signups, COUNT(DISTINCT p.user_id) as purchases FROM impressions i LEFT JOIN clicks c ON i.user_id = c.user_id AND c.timestamp >= i.timestamp LEFT JOIN signups s ON i.user_id = s.user_id AND s.timestamp >= c.timestamp LEFT JOIN purchases p ON i.user_id = p.user_id AND p.timestamp >= s.timestamp GROUP BY i.channel. Then compute conversion rates: clicks/impressions, signups/clicks, purchases/signups. This gives a complete funnel by channel. For scalability, use window functions to ensure time order.",
    followUps: [
      {
        question:
          "How would you handle users who perform actions out of order?",
        answer:
          "I'd use time-based conditions: ensure each subsequent event occurs after the previous one. For example, signup timestamp > click timestamp. If out-of-order events exist, they should be treated as separate funnels (e.g., user signed up directly without clicking).",
      },
      {
        question:
          "What if a user interacts with multiple channels before converting?",
        answer:
          "That's attribution modeling. I'd use a multi-touch attribution approach (e.g., first-touch, last-touch, or linear) and assign conversion credit accordingly. In SQL, I'd track all channel touches and assign weights.",
      },
    ],
    commonMistakes: [
      "Using INNER JOIN instead of LEFT JOIN, losing users who didn't progress.",
      "Not considering time order leading to incorrect funnels.",
      "Forgetting to use DISTINCT to count unique users, not events.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "metrics-profit-016",
    slug: "retail-store-profitability-analysis",
    question:
      "Our retail chain has 100 stores. How would you analyze profitability and identify underperforming stores?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Metrics",
    topic: "Profitability",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Compute gross profit and EBITDA per store, compare against benchmarks, and use a quadrant analysis (profit vs. growth) to identify underperformers.",
    explanation:
      "Collect P&L data for each store: revenue, COGS, operating expenses (rent, labor, utilities). Compute gross profit margin and EBITDA margin per store. Normalize by store size (sales per sq ft) to compare apples-to-apples. Use a quadrant analysis: X-axis = revenue growth, Y-axis = profit margin. Stores in bottom-left (low growth, low profit) are candidates for closure or turnaround. Bottom-right (high growth, low profit) need cost optimization. Top-left (high profit, low growth) need growth strategies. Also analyze fixed vs. variable costs to identify drivers. Interview store managers to understand local dynamics. Present findings with store-level heatmaps and action plans for each segment.",
    followUps: [
      {
        question:
          "What if a low-profit store is strategically important (e.g., high foot traffic visibility)?",
        answer:
          "I'd evaluate intangible benefits: brand awareness, competitive blocking, and future growth potential. If strategic value outweighs financial loss, I'd keep it but set a turnaround plan with targets. I'd also consider if the store can be converted to a different format (e.g., pop-up, showroom).",
      },
      {
        question:
          "How would you account for store age in profitability analysis?",
        answer:
          "New stores often have lower profitability initially due to high setup costs. I'd segment stores by age: less than 1 year, 1-3 years, 3+ years. Compare profitability within each age group to account for maturity. I'd also track revenue ramp-up curves for newer stores.",
      },
    ],
    commonMistakes: [
      "Comparing stores without normalizing by size or location.",
      "Ignoring the strategic value of stores beyond profit.",
      "Not considering local competitive dynamics.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "metrics-growth-017",
    slug: "pricing-strategy-for-saas",
    question:
      "Our SaaS product has 3 pricing tiers: Basic ($10/mo), Pro ($50/mo), Enterprise ($200/mo). How would you analyze pricing impact and optimize for revenue growth?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Metrics",
    topic: "Growth & Pricing",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Analyze distribution of customers across tiers, churn rates by tier, and ARPU. Test price sensitivity with A/B testing and use cohort analysis to see upgrade/downgrade patterns.",
    explanation:
      "Start with data: % of customers in each tier, revenue contribution, churn rate, LTV. Analyze upgrade/downgrade patterns: how many customers move between tiers? High churn at Basic might indicate they don't see value. Pro might be the sweet spot—most revenue. Test price elasticity: run A/B tests with different price points for each tier on new signups. Measure conversion, revenue, and retention. Also consider feature bundling: add high-value features to Pro to encourage upgrades. For Enterprise, focus on customization and support. Use cohort analysis to see how pricing changes affect LTV over time. Based on data, adjust pricing or reposition tiers. Monitor competitor pricing and market dynamics.",
    followUps: [
      {
        question:
          "What if you discover your Pro tier is underpriced based on customer surveys?",
        answer:
          "I'd test a price increase on a small cohort. If conversion doesn't drop significantly and churn stays stable, I'd raise the price for new customers while grandfathering existing ones. This captures additional value without alienating current users.",
      },
      {
        question:
          "How would you balance growth vs. profitability in pricing decisions?",
        answer:
          "Use a revenue growth vs. profit margin trade-off analysis. Sometimes, lowering price can increase volume but reduce margin. I'd calculate the break-even point: how much volume increase is needed to offset margin loss. This ensures decisions are data-driven.",
      },
    ],
    commonMistakes: [
      "Changing prices without testing assumptions.",
      "Ignoring the impact of price changes on churn.",
      "Not differentiating between new customer pricing and existing customer pricing.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "metrics-unit-018",
    slug: "delivery-app-unit-economics",
    question:
      "Analyze the unit economics of a food delivery app. Calculate contribution margin per order and determine the path to profitability.",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Metrics",
    topic: "Unit Economics",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Calculate revenue per order (delivery fee + markup) minus variable costs (payment processing, driver incentives, packaging). Use fixed costs (marketing, tech, G&A) to determine break-even volume.",
    explanation:
      "Revenue per order = delivery fee + restaurant commission + markup. Variable costs = payment processing (% of order), driver payment (base + distance), packaging (if provided). Contribution margin = revenue - variable costs. For example: $5 delivery fee + $2 commission = $7 revenue; $3 driver + $0.50 payment processing = $3.50 costs; contribution margin = $3.50/order. Fixed costs: marketing ($100K/mo), tech maintenance ($50K/mo), G&A ($50K/mo) = $200K/mo. Break-even = $200K / $3.50 = ~57,143 orders/month. Analyze sensitivity to volume, average order value, and driver incentives. To achieve profitability, focus on increasing average order value (upselling), reducing driver costs (route optimization), or increasing delivery fees.",
    followUps: [
      {
        question: "How would you reduce driver costs without reducing quality?",
        answer:
          "Optimize order batching (multiple orders per trip), improve route algorithms, and incentivize off-peak deliveries. Also, consider using a mix of gig workers and part-time employees to balance cost and availability.",
      },
      {
        question: "What if competitors are subsidizing delivery fees?",
        answer:
          "I'd focus on differentiation: better selection, faster delivery, loyalty programs, or unique partnerships with restaurants. Compete on value, not just price. I'd also analyze customer segments to see if some are willing to pay for premium delivery.",
      },
    ],
    commonMistakes: [
      "Ignoring customer acquisition costs when calculating unit economics.",
      "Assuming all fixed costs are truly fixed in the long term.",
      "Not considering the impact of volume on variable costs (e.g., driver availability).",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "problem-root-019",
    slug: "product-return-rate-analysis",
    question:
      "Our e-commerce product return rate has increased from 10% to 18% in 3 months. How would you find the root cause and address it?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Problem Solving",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Segment returns by product category, reason, and customer segment. Analyze quality control data and customer feedback to identify the primary driver.",
    explanation:
      "Start by segmenting the return data: by product SKU, category, reason code (e.g., defect, wrong size, changed mind), customer segment, and time period. Look for spikes: did a specific SKU drive the increase? Is it concentrated in a certain region? Compare with quality control data: did a supplier change occur? Did manufacturing batch number correlate? Analyze customer feedback: are there recurring themes in return comments (e.g., 'size too small', 'color different', 'damaged')? Conduct a Pareto analysis to see if 20% of products cause 80% of returns. Also check if the return policy changed recently (e.g., free returns), which could cause behavioral changes. Once the root cause is found (e.g., poor quality in a new batch), take corrective action: recall, supplier renegotiation, or quality inspection enhancement.",
    followUps: [
      {
        question:
          "What if the increase is due to a change in return policy (e.g., easier returns)?",
        answer:
          "If the policy change is the cause, the returns are 'legitimate' but costly. I'd analyze the ROI of free returns: does it increase sales enough to justify the cost? If not, consider a return fee or tightening the policy, but be careful with competitive positioning.",
      },
      {
        question: "How would you track if your corrective actions are working?",
        answer:
          "Set up a weekly dashboard tracking return rate by SKU and reason. After implementing changes, monitor for a sustained decline. Use statistical process control (SPC) to detect if improvement is real or random fluctuation. Also track customer satisfaction scores to ensure quality perception improves.",
      },
    ],
    commonMistakes: [
      "Not segmenting the data enough (e.g., treating all returns as equal).",
      "Implementing a solution without validating the root cause.",
      "Ignoring customer feedback as qualitative data.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "problem-cx-020",
    slug: "customer-support-ticket-volumes",
    question:
      "Customer support ticket volumes have doubled in the last month. How would you diagnose and solve this problem?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Operations",
    topic: "Customer Experience",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Categorize tickets by issue type, identify spikes in specific categories, and correlate with recent product changes, marketing campaigns, or external factors.",
    explanation:
      "First, classify tickets by category: technical bugs, account issues, billing, product questions, etc. Use Pareto analysis to see which category is responsible for the increase. Compare the timeline of the increase with: recent product releases, marketing campaigns (new users), pricing changes, or external events (e.g., competitor outages). If the spike is in technical bugs, investigate recent releases—was there a known issue? If it's billing, check if a pricing change or payment processor change occurred. If it's product questions, the UI/UX might need improvement. For each category, define an action plan: bug fixes, improve onboarding documentation, or automated responses. Implement a 'ticket reduction' project with clear metrics. Monitor daily ticket volumes and CSAT.",
    followUps: [
      {
        question:
          "What if tickets are increasing due to a competitor's outage?",
        answer:
          "That's an external opportunity. I'd analyze what customers are asking and use it as a selling point for our reliability. I'd create marketing collateral highlighting our uptime. Also, ensure our support team has a script to convert these inquiries into sales.",
      },
      {
        question:
          "How do you balance immediate fixes with long-term solutions?",
        answer:
          "Implement a short-term fix (e.g., FAQ update, automated responses) to reduce immediate volume. Simultaneously, plan a long-term fix (e.g., product change, better onboarding). Use the 80/20 rule: address 80% of the issue with 20% effort first, then tackle deeper issues.",
      },
    ],
    commonMistakes: [
      "Only looking at volume without understanding types of tickets.",
      "Implementing quick fixes that don't address the root cause.",
      "Not communicating with the team about changes that might impact customers.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "order-fulfillment-process-optimization",
    ],
  },
  {
    id: "dbi-joins-021",
    slug: "customer-orders-join-analysis",
    question:
      "Given tables: customers (customer_id, name, signup_date) and orders (order_id, customer_id, order_date, amount). Write a query to find customers with no orders and those with high-value orders (>$1000).",
    directions: ["Business & Operations", "Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Joins",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use LEFT JOIN with WHERE order_id IS NULL for customers with no orders. Use INNER JOIN with HAVING SUM(amount) > 1000 for high-value customers.",
    explanation:
      "For customers with no orders: SELECT c.* FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL. This returns all customers who haven't placed an order. For high-value customers: SELECT c.customer_id, c.name, SUM(o.amount) as total_spent FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.name HAVING SUM(o.amount) > 1000. This aggregates total spending and filters for those above $1000. Use indexes on customer_id for performance. If you need both in one query, you could use a UNION or case when with conditional aggregation.",
    followUps: [
      {
        question:
          "How would you handle customers with multiple orders when calculating total spend?",
        answer:
          "The GROUP BY with SUM handles multiple orders naturally. If you want to show individual orders too, you can use window functions: SUM(amount) OVER (PARTITION BY customer_id) to show per-row total while keeping individual orders.",
      },
      {
        question:
          "What if you need to include customers who have only placed an order in the last 30 days?",
        answer:
          "Add a WHERE condition: WHERE o.order_date >= CURRENT_DATE - INTERVAL '30 days'. Then use LEFT JOIN to include those with no recent orders as well, and filter accordingly.",
      },
    ],
    commonMistakes: [
      "Using INNER JOIN and missing customers with no orders.",
      "Forgetting to GROUP BY when using aggregate functions.",
      "Using non-SARGable conditions that hurt performance.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "monthly-recurring-revenue-sql",
      "marketing-channel-funnel-sql",
      "employee-salary-rankings",
    ],
  },
  {
    id: "dbi-window-022",
    slug: "employee-salary-rankings",
    question:
      "Using a window function, write a query to rank employees by salary within each department. Also compute the running total of salaries per department.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Window Functions",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use RANK() OVER (PARTITION BY department ORDER BY salary DESC) for rankings, and SUM(salary) OVER (PARTITION BY department ORDER BY salary ROWS UNBOUNDED PRECEDING) for running total.",
    explanation:
      "For ranking: SELECT employee_id, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank_in_dept FROM employees. This assigns a rank within each department, with ties getting same rank and skipping numbers (e.g., 1,1,3). For running total: SELECT employee_id, department, salary, SUM(salary) OVER (PARTITION BY department ORDER BY salary ROWS UNBOUNDED PRECEDING) as running_total FROM employees. This sums salaries from the lowest to the current row within each department. Use ORDER BY salary to define the order of accumulation. Combine both in one query.",
    followUps: [
      {
        question: "What's the difference between RANK() and DENSE_RANK()?",
        answer:
          "RANK() skips ranks after ties (1,1,3), while DENSE_RANK() does not skip (1,1,2). Use DENSE_RANK() when you want consecutive ranks. ROW_NUMBER() assigns unique numbers without ties.",
      },
      {
        question:
          "How would you compute the moving average of salaries over 3 employees?",
        answer:
          "Use AVG(salary) OVER (PARTITION BY department ORDER BY salary ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) to get a 3-row moving average. This includes the current and two previous rows.",
      },
    ],
    commonMistakes: [
      "Forgetting the PARTITION BY clause, which ranks globally instead of per department.",
      "Using ORDER BY without specifying ROWS UNBOUNDED PRECEDING, leading to unexpected results in some databases.",
      "Confusing RANK() with ROW_NUMBER().",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "monthly-recurring-revenue-sql",
      "marketing-channel-funnel-sql",
      "customer-orders-join-analysis",
    ],
  },
  {
    id: "dbi-agg-023",
    slug: "monthly-sales-aggregation",
    question:
      "Write a SQL query to compute monthly total sales, average order value, and number of orders for each product category. Also find the month with the highest sales.",
    directions: ["Business & Operations", "Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Aggregation",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use GROUP BY with DATE_TRUNC('month', order_date), category, and aggregate functions: SUM(amount), AVG(amount), COUNT(order_id). Then use ORDER BY to find the top month.",
    explanation:
      "First query: SELECT DATE_TRUNC('month', order_date) as month, category, COUNT(order_id) as order_count, SUM(amount) as total_sales, AVG(amount) as avg_order_value FROM orders GROUP BY month, category ORDER BY month, category. This gives monthly totals per category. To find the month with the highest sales overall: SELECT month, total_sales FROM (SELECT DATE_TRUNC('month', order_date) as month, SUM(amount) as total_sales FROM orders GROUP BY month) ORDER BY total_sales DESC LIMIT 1. Use COALESCE to handle NULL values. For performance, consider creating indexes on order_date and category.",
    followUps: [
      {
        question: "How would you handle time zones when aggregating by month?",
        answer:
          "Ensure all timestamps are in a consistent time zone (e.g., UTC). Convert with AT TIME ZONE if needed: DATE_TRUNC('month', order_date AT TIME ZONE 'UTC') as month. This is critical for accurate monthly aggregation.",
      },
      {
        question: "What if you need to include months with zero sales?",
        answer:
          "Generate a calendar table with all months and LEFT JOIN orders to it. Use COALESCE(total_sales, 0) to fill zeros. This is essential for time-series analysis to show gaps.",
      },
    ],
    commonMistakes: [
      "Not handling NULL values in SUM or AVG.",
      "Grouping by month without considering year, merging data from different years.",
      "Forgetting to filter out canceled or returned orders.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "monthly-recurring-revenue-sql",
      "marketing-channel-funnel-sql",
      "customer-orders-join-analysis",
    ],
  },
  {
    id: "dbi-cte-024",
    slug: "customer-lifetime-value-cte",
    question:
      "Write a SQL query using CTEs to compute Customer Lifetime Value (LTV) by cohort month. Include total spending, number of orders, and average order value per customer.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "CTEs & Subqueries",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use multiple CTEs to calculate per-customer metrics, then aggregate by cohort month. This improves readability and allows for stepwise transformations.",
    explanation:
      "WITH customer_metrics AS (SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) as cohort_month, COUNT(order_id) as order_count, SUM(amount) as total_spent, AVG(amount) as avg_order_value FROM orders GROUP BY customer_id), cohort_ltv AS (SELECT cohort_month, COUNT(customer_id) as customers, AVG(total_spent) as avg_ltv, AVG(order_count) as avg_orders, AVG(avg_order_value) as avg_aov FROM customer_metrics GROUP BY cohort_month ORDER BY cohort_month) SELECT * FROM cohort_ltv. This gives LTV by acquisition month. Additional CTEs can be added for retention or churn analysis. The modular approach makes the query easier to debug and maintain.",
    followUps: [
      {
        question: "How would you add churn rate to the LTV calculation?",
        answer:
          "Add a CTE that calculates customer retention: customers with orders in each subsequent month. Then churn = 1 - retention. This can be joined with the LTV CTE to compute LTV = ARPU / churn, providing a more dynamic metric.",
      },
      {
        question:
          "What if you need to segment by product category in the LTV calculation?",
        answer:
          "Include category in the orders table and group by category in the CTE. This gives LTV per category. You can also use UNPIVOT or ROLLUP for cross-category analysis.",
      },
    ],
    commonMistakes: [
      "Overcomplicating with too many CTEs, impacting performance.",
      "Not considering that customers can have orders in multiple cohorts.",
      "Using subqueries instead of CTEs for readability, making the query harder to maintain.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "monthly-recurring-revenue-sql",
      "marketing-channel-funnel-sql",
      "customer-orders-join-analysis",
    ],
  },
  {
    id: "dbi-clean-025",
    slug: "excel-data-cleaning-techniques",
    question:
      "You have a dataset with 100,000 rows of customer data in Excel. It has inconsistent formats, duplicates, missing values, and outliers. How would you clean it?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Excel",
    topic: "Data Cleaning",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use Power Query for repeatable cleaning: remove duplicates, standardize formats, handle missing values, and filter outliers using conditional formatting or statistical thresholds.",
    explanation:
      "Start with Power Query (Get & Transform): load the data, then apply transformations: 1) Remove duplicate rows using 'Remove Duplicates'. 2) Standardize text using TRIM and CLEAN functions. 3) Convert to proper case with PROPER or use a custom column. 4) Handle missing values: either remove rows, impute with mean/median using 'Fill Down' or conditional logic. 5) Identify outliers: use conditional formatting to highlight values beyond 3 standard deviations, then decide on a case-by-case basis. 6) Standardize date formats using DATEVALUE or Power Query's date transformations. Document each step in a query log. Use the 'Transform' and 'Add Column' tabs for most operations. This ensures the cleaning process is reproducible.",
    followUps: [
      {
        question:
          "How would you handle missing values in a categorical column?",
        answer:
          "For categorical data, I'd use mode imputation (most frequent value) or create a separate category 'Unknown'. In Power Query, I'd use a conditional column to fill nulls with the mode value. I'd also evaluate if missingness is informative (e.g., missing means the customer didn't provide info).",
      },
      {
        question:
          "What if you need to join with another dataset during cleaning?",
        answer:
          "Use Power Query's Merge Queries feature to perform a join. This is similar to SQL joins and can be done after basic cleaning. Ensure the key columns are in a consistent format (e.g., trimmed, case-sensitive) to avoid mismatches.",
      },
    ],
    commonMistakes: [
      "Cleaning in the original file without preserving the raw data.",
      "Not documenting what was changed, making it hard to audit.",
      "Removing outliers without understanding their cause.",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "saas-metrics-dashboard-excel",
      "sales-data-trend-analysis-excel",
      "coffee-shop-unit-economics",
    ],
  },
  {
    id: "dbi-chart-026",
    slug: "excel-sales-dashboard-visualization",
    question:
      "You need to create a sales dashboard in Excel for executives. What charts would you use to show trends, comparisons, and composition? How would you make it interactive?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Excel",
    topic: "Charts & Visualisation",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use line charts for trends, bar charts for comparisons (top products/regions), pie/donut charts for composition, and sparklines for in-cell trends. Add slicers for interactivity.",
    explanation:
      "Design a clean dashboard: 1) Top row: KPI cards (Total Sales, Growth %, Profit) with conditional formatting for targets. 2) Middle: line chart showing sales trend over 12 months, with a moving average overlay. 3) Bar charts: top 5 products by sales, sales by region, and sales by channel. 4) Donut chart: product category breakdown. 5) Bottom: pivot table with sales data. Add slicers for Region, Product Category, and Date Range to make it interactive. Use a consistent color scheme. Use Camera tool to create snapshots. Add a 'Reset' button using VBA to clear all slicers. Ensure the dashboard is print-friendly and fits on one page.",
    followUps: [
      {
        question: "How do you ensure the dashboard is dynamically updated?",
        answer:
          "Use PivotTables and PivotCharts connected to a data model. Any data refresh automatically updates the dashboard. Use Power Query to load data from the source. Set up auto-refresh at specific intervals.",
      },
      {
        question:
          "What if the dashboard needs to be distributed to non-Excel users?",
        answer:
          "Export as PDF or use Power BI. Alternatively, use Excel's Share feature to embed in a SharePoint site. For PowerPoint, use 'Copy as Picture' to paste into slides, or use linked charts for auto-updating.",
      },
    ],
    commonMistakes: [
      "Using too many chart types, making the dashboard cluttered.",
      "Not including context (targets, benchmarks) with charts.",
      "Ignoring accessibility (color blindness, font size).",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "saas-metrics-dashboard-excel",
      "sales-data-trend-analysis-excel",
      "coffee-shop-unit-economics",
    ],
  },
  {
    id: "dbi-stats-027",
    slug: "descriptive-statistics-excel",
    question:
      "In Excel, how would you calculate descriptive statistics (mean, median, mode, standard deviation, quartiles) for a dataset. How would you interpret the results?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Descriptive Statistics",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use Data Analysis Toolpak's Descriptive Statistics, or individual functions: AVERAGE, MEDIAN, MODE.SNGL, STDEV.S, QUARTILE.INC. Interpret with measures of central tendency and spread.",
    explanation:
      "In Excel, go to Data > Data Analysis > Descriptive Statistics, select input range, check 'Summary Statistics' to get a comprehensive output: mean, median, mode, standard deviation, variance, range, min, max, quartiles, and skewness. Alternatively, use formulas: =AVERAGE(range), =MEDIAN(range), =MODE.SNGL(range), =STDEV.S(range), =QUARTILE.INC(range, 1) for Q1, =QUARTILE.INC(range, 3) for Q3. Interpret: Mean and median indicate central tendency; if different, skewness is present. Standard deviation and IQR (Q3-Q1) show spread. A low standard deviation relative to mean means data is clustered. Use these to understand data distribution and identify outliers (e.g., beyond 1.5*IQR).",
    followUps: [
      {
        question: "How would you handle skewed data in your analysis?",
        answer:
          "I'd consider using median instead of mean as it's robust to outliers. I'd also use a log transformation or Box-Cox transformation to normalize the data for further analysis. I'd report both mean and median to give a complete picture.",
      },
      {
        question: "What's the difference between STDEV.P and STDEV.S?",
        answer:
          "STDEV.P calculates standard deviation for an entire population, while STDEV.S is for a sample. In business data, we usually have a sample, so use STDEV.S. The difference is whether we divide by n (population) or n-1 (sample).",
      },
    ],
    commonMistakes: [
      "Using mean when median is more appropriate.",
      "Ignoring outliers when calculating standard deviation.",
      "Confusing sample and population standard deviation.",
    ],
    example:
      '**Excel Formula & Model Structure:**\n- **Cell Range Formulation:**\n  - Revenue Range: `B2:B500`\n  - Customer Cohort Column: `C2:C500`\n  - Active Status Column: `D2:D500`\n- **Key Formulas:**\n  - `=SUMIFS(B2:B500, C2:C500, "2024-Q1", D2:D500, "Active")`\n  - `=XLOOKUP(E2, UserIDs, CustomerStatus, "Inactive", 0)`\n- **Result:** Provides real-time dynamic aggregation in executive summary pivot tables without manual re-indexing.',
    relatedQuestions: [
      "saas-metrics-dashboard-excel",
      "sales-data-trend-analysis-excel",
      "coffee-shop-unit-economics",
    ],
  },
  {
    id: "dbi-pbi-028",
    slug: "executive-sales-dashboard-powerbi",
    question:
      "Design a Power BI dashboard for an executive team to monitor sales performance across regions, product lines, and time periods. What features would you include?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Dashboards",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Include high-level KPIs, trend charts, geographic map, product performance, and drill-through capabilities. Use bookmarks and buttons for navigation.",
    explanation:
      "Structure the dashboard: 1) Top section: KPI cards (Total Sales, YoY Growth, Profit Margin, # of Customers) with conditional formatting (green for good, red for bad). 2) Line chart: sales trend over 12 months with forecast. 3) Filled map: sales by region, color-coded. 4) Bar chart: sales by product category and by sales rep. 5) Matrix: sales by region and product category. 6) Slicers: Date Range, Region, Product Line. 7) Drill-through: click on a region to see detailed store-level performance. 8) Bookmarks: 'Executive View', 'Regional View', 'Product View' for different audiences. Use custom visuals like 'Chiclet Slicer' for improved UX. Publish to Power BI Service for mobile access and automatic refresh.",
    followUps: [
      {
        question: "How would you ensure performance with large datasets?",
        answer:
          "Use incremental refresh, implement data reduction strategies (summarize data at the day level), and optimize DAX measures. Use aggregations and composite models. Also, limit visuals to necessary data points and use 'Cache' settings.",
      },
      {
        question: "How do you handle security and row-level access?",
        answer:
          "Use Row-Level Security (RLS) with roles defined in Power BI. Map user emails to roles (e.g., 'Region Manager' sees only their region). Test thoroughly with the 'View As' feature. Ensure data sources also have security measures.",
      },
    ],
    commonMistakes: [
      "Including too many visuals, making the dashboard slow and confusing.",
      "Not defining the audience and their needs before designing.",
      "Ignoring mobile design when publishing to Power BI Service.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-pbi-chart-029",
    slug: "power-bi-chart-selection-guide",
    question:
      "In Power BI, when would you use a line chart vs. an area chart vs. a column chart? Provide examples for sales data.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Power BI",
    topic: "Charts & Visualisation",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use line charts for continuous trends over time, area charts for cumulative totals, column charts for comparing discrete categories, and combo charts for dual axes.",
    explanation:
      "Line chart: best for showing trends over time (e.g., monthly sales over 2 years). It emphasizes continuity and direction. Area chart: similar to line but filled below, useful for emphasizing magnitude over time (e.g., cumulative revenue). Column chart: for comparing categories (e.g., sales by product category, region). Use clustered columns for sub-categories. Waterfall chart: for showing cumulative effects (e.g., revenue drivers). Combo chart: for two different scales (e.g., sales and profit margin). Always consider the data type: time-series = line, categorical = column/bar. In Power BI, you can also use custom visuals like 'Timeline Slicer' and 'Synoptic Panel' for more advanced visualizations.",
    followUps: [
      {
        question:
          "What if you have two different measures on different scales?",
        answer:
          "Use a combo chart with a secondary axis. For example, sales amount (bars) and sales growth % (line). Ensure both axes are clearly labeled to avoid confusion. Use tooltips to show exact values.",
      },
      {
        question: "How do you handle overplotting in line charts?",
        answer:
          "Use smaller time granularity (e.g., weekly instead of daily) or apply a moving average. In Power BI, you can add a 'Trend Line' or 'Forecast' to reduce noise. Also, use interactive filtering to allow users to zoom in on specific periods.",
      },
    ],
    commonMistakes: [
      "Using a line chart when categories are not ordered (e.g., product names).",
      "Using a pie chart when there are many small slices.",
      "Not using tooltips to provide additional context.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-pbi-metrics-030",
    slug: "finance-kpi-dashboard-powerbi",
    question:
      "Build a Power BI dashboard for financial KPIs: revenue, costs, profit, and cash flow. How would you structure the data model and DAX measures?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Business Metrics",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use a star schema: Fact table (transactions) with Date, Account, and amount. Dimension tables: Date, Account (revenue/cost/expense). DAX measures: Total Revenue, Total Costs, Gross Profit, Net Profit, Cash Flow, and YoY growth.",
    explanation:
      "Data model: FactFinancials (DateKey, AccountKey, Amount, Quantity). DimDate (DateKey, Year, Month, Quarter). DimAccount (AccountKey, AccountType (Revenue, COGS, OpEx, Capex), AccountName). Relationships: FactFinancials[DateKey] -> DimDate[DateKey]; FactFinancials[AccountKey] -> DimAccount[AccountKey]. Measures: Total Revenue = CALCULATE(SUM(FactFinancials[Amount]), DimAccount[AccountType] = 'Revenue'). Total Costs = CALCULATE(SUM(FactFinancials[Amount]), DimAccount[AccountType] IN {'COGS', 'OpEx'}). Gross Profit = [Total Revenue] - [Total COGS]. Net Profit = [Total Revenue] - [Total Costs]. YoY Growth = DIVIDE([Total Revenue] - CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(DimDate[Date])), CALCULATE([Total Revenue], SAMEPERIODLASTYEAR(DimDate[Date]))). Use time intelligence functions for YTD, QTD, and MTD. Dashboard: waterfall chart for profit breakdown, bar chart for costs by category, and trend lines for revenue and profit.",
    followUps: [
      {
        question: "How would you handle currency conversion in the dashboard?",
        answer:
          "Use a currency dimension and a conversion rate fact table. Implement a DAX measure that multiplies the amount by the applicable conversion rate based on date. This can be complex; use a separate measure for each currency.",
      },
      {
        question:
          "How do you ensure the dashboard reflects the latest financial data?",
        answer:
          "Schedule automatic data refresh in Power BI Service (e.g., daily at 6 AM). Use incremental refresh to only load recent transactions. Also, set up data validation to catch missing or incorrect entries.",
      },
    ],
    commonMistakes: [
      "Not separating measures into different folders for clarity.",
      "Using too many DAX measures, slowing down performance.",
      "Ignoring the financial calendar (e.g., fiscal year vs. calendar year).",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-stats-desc-031",
    slug: "central-tendency-measures",
    question:
      "Explain the difference between mean, median, and mode. Provide examples of when each is most appropriate in business analysis.",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Statistics",
    topic: "Descriptive Statistics",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Mean is the arithmetic average (use for symmetric data), median is the middle value (use for skewed data), and mode is the most frequent value (use for categorical data).",
    explanation:
      "Mean: sum of all values divided by count. Sensitive to outliers, best for normal distributions (e.g., average order value). Median: middle value when sorted, robust to outliers, best for income or house prices (skewed). Mode: most frequent value, best for categorical data (e.g., most popular product, most common customer segment). In business, use mean for standard KPI reporting, median for understanding typical customer behavior, and mode for identifying popular choices. Also, consider trim mean (remove outliers) for a compromise. Use all three to get a full picture of the distribution.",
    followUps: [
      {
        question:
          "How would you report central tendency for data with multiple peaks?",
        answer:
          "For multi-modal data, reporting a single measure is insufficient. I'd describe the modes separately and also report the range and distribution. Visualizations like histograms or kernel density plots are more informative.",
      },
      {
        question:
          "In salary data, which measure do you think HR teams should focus on?",
        answer:
          "HR teams often use median for compensation analysis because it's not skewed by executive salaries. They also use percentiles (e.g., 25th, 50th, 75th) to understand the salary distribution and ensure pay equity.",
      },
    ],
    commonMistakes: [
      "Using mean for highly skewed data without acknowledging the skew.",
      "Assuming mode is always the most representative measure.",
      "Reporting only mean without also reporting variability.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-viz-032",
    slug: "data-storytelling-visualization",
    question:
      "You have a dataset showing sales by region over 5 years. How would you visualize this data to tell a compelling story?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Data Visualisation",
    topic: "Charts & Visualisation",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use a combination of a line chart for trends, a bar chart for comparisons, and a map for geographical distribution. Highlight key insights with annotations.",
    explanation:
      "Start with a small multiple line chart: one line per region, showing sales over 5 years. This allows viewers to compare trends across regions. Use annotations to highlight key events (e.g., 'new marketing campaign launched here') and callouts for peaks/troughs. Below, use a bar chart showing current year sales and growth percentage (with arrows). On the side, a filled map of the country showing sales by region, color-coded. Add a summary KPI card: 'Overall growth 12%' with a sparkline. Use storytelling: first show the overall picture, then zoom into the best and worst performing regions. Use consistent colors and a clean layout. End with actionable insights: 'Focus on improving performance in the Midwest region.'",
    followUps: [
      {
        question: "How would you handle negative growth in the visualization?",
        answer:
          "Use a diverging color palette (red for negative, green for positive) in a bar chart. In line charts, use dashed lines for negative growth periods. Annotations can explain the causes of declines.",
      },
      {
        question:
          "What if you need to present this to a non-technical audience?",
        answer:
          "Simplify: avoid complex charts; use clear titles and labels. Use a storyboard format: start with the big picture, then dive into details. Use context: explain why the data matters to their business goals. Avoid jargon and focus on actionable insights.",
      },
    ],
    commonMistakes: [
      "Using too many colors or chart types, causing confusion.",
      "Forgetting to include a clear takeaway or call to action.",
      "Ignoring the audience's level of data literacy.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-fund-033",
    slug: "north-star-metric-identification",
    question:
      "How would you identify the North Star Metric (NSM) for a subscription-based fitness app? How would you measure it?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "behavioral",
    subject: "Analytics Fundamentals",
    topic: "Business Metrics",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "The NSM should be the metric that best predicts long-term revenue. For a fitness app, it could be 'active workouts per week' or 'average daily sessions per user'. Measure it via user engagement data.",
    explanation:
      "The North Star Metric is the single metric that best captures the core value delivered to customers and predicts future growth. For a fitness app, the core value is helping users stay fit. Possible NSMs: 'Number of active workouts completed per week' (engagement), 'Average daily active users (DAU)' (retention), or 'Monthly active users (MAU)' (scale). Validate by correlating these metrics with retention and revenue. 'Active workouts per week' is likely the best because it directly measures product usage and predicts subscription renewal. To measure: log every workout completion, aggregate per user per week. Track the average across all users. Set a goal: e.g., increase from 2 to 3 workouts/week. Align the entire product team around this metric.",
    followUps: [
      {
        question: "How would you break down the NSM to make it actionable?",
        answer:
          "Break down into leading indicators: new user workout rate, returning user frequency, and workout length. Also segment by user type (beginners vs. advanced) and platforms (iOS vs. Android) to identify where to focus efforts.",
      },
      {
        question: "What if the NSM is going up but revenue is flat?",
        answer:
          "That indicates a monetization problem. I'd analyze: are users not converting to paid? Is the pricing wrong? Or are they using the app but not seeing enough value to pay? Combine NSM with conversion rate and churn analysis to diagnose.",
      },
    ],
    commonMistakes: [
      "Choosing a vanity metric (e.g., total downloads) that doesn't correlate with revenue.",
      "Not validating the NSM with historical data.",
      "Not making the NSM actionable or understandable to the entire team.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "dbi-clean-034",
    slug: "data-quality-issues-diagnosis",
    question:
      "Your analytics team has been reporting inconsistent numbers. How would you diagnose and fix data quality issues?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Analytics Fundamentals",
    topic: "Data Cleaning",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Perform data profiling, check for duplicates, nulls, and outliers. Validate against source systems and create a data quality dashboard to monitor issues.",
    explanation:
      "Start with data profiling: examine table schemas, data types, and distributions. Check for duplicates in key columns (e.g., order_id) using COUNT(DISTINCT ...) vs COUNT(*). Identify null percentages in critical columns. Validate against source systems: sample a subset and compare manually. Create a data quality framework: accuracy (correct values), completeness (no nulls), consistency (same format), timeliness (up-to-date), and validity (conforms to rules). Implement automated checks using tools like Great Expectations or custom SQL queries. Create a data quality dashboard showing pass/fail rates for each check. Establish a data governance process: root cause analysis for failures, and SLA for fixing issues.",
    followUps: [
      {
        question:
          "How would you handle duplicate transactions in an e-commerce dataset?",
        answer:
          "I'd use a combination of order_id, timestamp, and amount to identify duplicates. Use ROW_NUMBER() to flag duplicates and remove the ones with later timestamps. Always keep raw data and a 'cleaned' version for audit.",
      },
      {
        question:
          "What if the issue is in the source system, not the data pipeline?",
        answer:
          "I'd work with the source system owner to fix the root cause. In the meantime, implement a data patch or transformation to correct the issue downstream. Document the issue and communicate to stakeholders until it's resolved.",
      },
    ],
    commonMistakes: [
      "Fixing issues downstream without addressing the root cause.",
      "Not documenting data quality issues and fixes.",
      "Ignoring data quality until it's too late.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "employee-salary-rankings",
      "monthly-sales-aggregation",
    ],
  },
  {
    id: "tech-py-fund-035",
    slug: "python-fizzbuzz-solution",
    question:
      "Write a Python function that prints numbers from 1 to n. For multiples of 3, print 'Fizz'; for multiples of 5, print 'Buzz'; for multiples of both, print 'FizzBuzz'. Include error handling.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "Python",
    topic: "Python Fundamentals",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use a for loop with if-elif-else conditions. Handle edge cases like n <= 0 with a ValueError.",
    explanation:
      "Define fizzbuzz(n): if n <= 0, raise ValueError('n must be positive'). Then for i in range(1, n+1): if i % 15 == 0: print('FizzBuzz'), elif i % 3 == 0: print('Fizz'), elif i % 5 == 0: print('Buzz'), else: print(i). This is efficient O(n) and handles all cases. For large n, use a list comprehension for speed: ['FizzBuzz' if i%15==0 else 'Fizz' if i%3==0 else 'Buzz' if i%5==0 else str(i) for i in range(1,n+1)]. This is a classic interview question testing basic loops and conditionals.",
    followUps: [
      {
        question:
          "How would you modify this to return a list instead of printing?",
        answer:
          "I'd change the function to return a list: return ['FizzBuzz' if i%15==0 else 'Fizz' if i%3==0 else 'Buzz' if i%5==0 else str(i) for i in range(1, n+1)]. This makes it more reusable.",
      },
      {
        question: "What is the time and space complexity of your solution?",
        answer:
          "Time complexity is O(n) because we iterate n times. Space complexity is O(1) if printing, or O(n) if returning a list. This is optimal for this problem.",
      },
    ],
    commonMistakes: [
      "Checking multiples of 3 and 5 separately (e.g., if i%3==0: print('Fizz') else if i%5==0...)—this would not print 'FizzBuzz' correctly.",
      "Forgetting to handle edge cases (n=0, negative).",
      "Using type hints or docstrings (good practice, often expected).",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
      "bank-account-oop-design",
    ],
  },
  {
    id: "tech-py-list-036",
    slug: "merge-two-sorted-lists",
    question:
      "Write a Python function to merge two sorted lists into a single sorted list. Use both iterative and recursive approaches.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "Python",
    topic: "Lists & Dictionaries",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Iterative: use two pointers and append the smaller element. Recursive: compare heads and recurse on the remaining list. Time O(n+m), space O(1) for iterative, O(n+m) for recursive.",
    explanation:
      "Iterative: def merge_lists(l1, l2): i = j = 0; result = []; while i < len(l1) and j < len(l2): if l1[i] <= l2[j]: result.append(l1[i]); i += 1; else: result.append(l2[j]); j += 1; result.extend(l1[i:]); result.extend(l2[j:]); return result. Recursive: def merge_lists(l1, l2): if not l1: return l2; if not l2: return l1; if l1[0] <= l2[0]: return [l1[0]] + merge_lists(l1[1:], l2); else: return [l2[0]] + merge_lists(l1, l2[1:]). The iterative approach is more efficient (O(1) extra space) and preferred for large lists. The recursive approach is elegant but has O(n+m) recursion depth which could hit limits.",
    followUps: [
      {
        question: "How would you merge more than two sorted lists?",
        answer:
          "Use a heap (priority queue) with a min-heap of (value, list_index, element_index). Then pop the smallest and push the next from the same list. This is O(N log k) where k is the number of lists.",
      },
      {
        question:
          "What if the lists contain duplicates? How does your solution handle them?",
        answer:
          "Both solutions handle duplicates naturally: the <= condition ensures duplicates are preserved. For the iterative solution, if equal, we append from l1 first, which maintains stability.",
      },
    ],
    commonMistakes: [
      "Using nested loops leading to O(n*m) complexity.",
      "Not handling empty lists as edge cases.",
      "Mutating the original lists in the recursive solution.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "decorator-for-timing-functions",
      "bank-account-oop-design",
    ],
  },
  {
    id: "tech-py-func-037",
    slug: "decorator-for-timing-functions",
    question:
      "Write a Python decorator that measures and logs the execution time of any function. Include handling for functions with arguments and return values.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "Python",
    topic: "Functions",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Define a decorator using functools.wraps: import time; def timer(func): @wraps(func) def wrapper(*args, **kwargs): start = time.time(); result = func(*args, **kwargs); print(f'{func.__name__} took {time.time()-start:.2f}s'); return result; return wrapper.",
    explanation:
      "The decorator timer takes a function as input and returns a wrapper. The wrapper uses *args and **kwargs to accept any arguments. It records the start time, calls the function, computes elapsed time, logs it (or stores it), and returns the function's result. Use functools.wraps to preserve the original function's metadata (name, docstring). This is useful for profiling and debugging. Example: @timer def slow_function(): time.sleep(2). It can be extended to accept parameters (e.g., number of runs) using a decorator factory.",
    followUps: [
      {
        question:
          "How would you modify the decorator to take a custom log level?",
        answer:
          "Create a decorator factory: def timer(level='INFO'): def decorator(func): @wraps(func) def wrapper(*args, **kwargs): ...; print(f'[{level}] {func.__name__} took ...'); return wrapper; return decorator. Usage: @timer(level='DEBUG').",
      },
      {
        question: "How would you collect timing data across multiple calls?",
        answer:
          "Use a dictionary or a list attached to the wrapper: wrapper.timings = []. In the wrapper, append the elapsed time to this list. Then you can compute min, max, average. This requires making the wrapper a proper class or using closures.",
      },
    ],
    commonMistakes: [
      "Forgetting to use *args, **kwargs, which makes the decorator inflexible.",
      "Not using @wraps, which loses the function's name and docstring.",
      "Returning nothing from the wrapper, losing the function's return value.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "bank-account-oop-design",
    ],
  },
  {
    id: "tech-py-oop-038",
    slug: "bank-account-oop-design",
    question:
      "Design a Python class for a bank account. Include attributes (account_number, balance, owner), methods (deposit, withdraw, transfer), and use inheritance for SavingsAccount and CheckingAccount.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "Python",
    topic: "OOP Basics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Create a base Account class with encapsulation using _balance. Use property for balance. Subclasses override withdraw with different rules (e.g., SavingsAccount requires minimum balance).",
    explanation:
      "class Account: def __init__(self, account_number, owner, balance=0): self.account_number = account_number; self.owner = owner; self._balance = balance. @property def balance(self): return self._balance. def deposit(self, amount): if amount > 0: self._balance += amount; def withdraw(self, amount): if 0 < amount <= self._balance: self._balance -= amount; else: raise ValueError('Insufficient funds'). class SavingsAccount(Account): def __init__(self, account_number, owner, balance=0, min_balance=100): super().__init__(account_number, owner, balance); self.min_balance = min_balance; def withdraw(self, amount): if self._balance - amount < self.min_balance: raise ValueError('Minimum balance required'); super().withdraw(amount). class CheckingAccount(Account): def __init__(self, account_number, owner, balance=0, overdraft_limit=500): super().__init__(account_number, owner, balance); self.overdraft_limit = overdraft_limit; def withdraw(self, amount): if amount <= self._balance + self.overdraft_limit: self._balance -= amount; else: raise ValueError('Overdraft limit exceeded'). This demonstrates inheritance, encapsulation, and method overriding.",
    followUps: [
      {
        question: "How would you implement a transaction history?",
        answer:
          "Add a list of transactions to the Account class. In deposit and withdraw, append a tuple (timestamp, type, amount, new_balance). This provides an audit trail. You can also add a method to print the statement.",
      },
      {
        question:
          "How would you handle concurrency issues in a banking application?",
        answer:
          "In a multi-threaded environment, use locks (threading.Lock) around critical sections (balance updates). In a database-backed system, use transactions and isolation levels. For a distributed system, use distributed locks or optimistic concurrency.",
      },
    ],
    commonMistakes: [
      "Not using encapsulation (making balance public).",
      "Not calling super().__init__() in subclasses.",
      "Not handling edge cases (negative amounts, invalid account numbers).",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-sql-norm-039",
    slug: "database-normalization-example",
    question:
      "You have a table with order_id, product_id, product_name, customer_id, customer_name, order_date. Normalize this table into 3NF. Explain your steps.",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Normalization",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Split into Orders, Customers, and Products tables. Orders: order_id, customer_id, product_id, order_date. Customers: customer_id, customer_name. Products: product_id, product_name.",
    explanation:
      "1NF: already atomic (no repeating groups). 2NF: identify partial dependencies. The primary key could be (order_id, product_id). product_name depends only on product_id (partial dependency), and customer_name depends only on customer_id. So we split: Products (product_id, product_name), Customers (customer_id, customer_name), and Orders (order_id, customer_id, product_id, order_date). 3NF: check for transitive dependencies: none, because all attributes depend on the primary key directly. This reduces redundancy: product_name and customer_name are stored once, and updates are easier. This is a classic normalization example in interviews.",
    followUps: [
      {
        question: "What are the benefits of normalization in this case?",
        answer:
          "Reduces data redundancy, saves storage, avoids update anomalies (e.g., changing a customer's name requires only one update), and ensures data integrity. However, it may slow down queries that require joins, so consider denormalization for reporting.",
      },
      {
        question:
          "How would you handle a product that belongs to multiple categories?",
        answer:
          "Use a junction table: ProductCategories (product_id, category_id) and Categories (category_id, category_name). This is a many-to-many relationship, which is normalized and allows flexible category assignments.",
      },
    ],
    commonMistakes: [
      "Not identifying the primary key correctly.",
      "Splitting into too many tables, making queries complex.",
      "Confusing normalization with database design.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "monthly-recurring-revenue-sql",
      "marketing-channel-funnel-sql",
      "customer-orders-join-analysis",
    ],
  },
  {
    id: "tech-dsa-hash-040",
    slug: "first-non-repeating-character",
    question:
      "Given a string, find the first non-repeating character. Write a solution in Python using a hash map. Explain time and space complexity.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "DSA Fundamentals",
    topic: "Hash Maps",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use a hash map (Counter) to count frequencies, then iterate through the string to find the first char with count 1. Time O(n), space O(k) where k is unique chars.",
    explanation:
      "Method 1: from collections import Counter; count = Counter(s); for i, ch in enumerate(s): if count[ch] == 1: return i; return -1. Method 2: use a dictionary with manual counting: seen = {}; for ch in s: seen[ch] = seen.get(ch, 0) + 1; then iterate again. The hash map approach is optimal because it requires only two passes. If the string contains only lowercase English letters, you could use an array of size 26 for even better space (O(1)). In an interview, discuss both the generic and constrained solutions. Edge cases: empty string, all characters repeated, single character.",
    followUps: [
      {
        question: "What if you need to do this in one pass?",
        answer:
          "One-pass solution: use a hash map to store (char, index) and a set for duplicates. Iterate: if char in set, ignore; else if char in map, remove from map and add to set; else add to map. At the end, return the char with the smallest index from the map. This is O(n) time and O(k) space.",
      },
      {
        question: "How would you handle Unicode characters?",
        answer:
          "Python handles Unicode natively in strings. The Counter or dict approach works for any character because Python strings are sequences of Unicode code points. No special handling needed.",
      },
    ],
    commonMistakes: [
      "Using index() in a loop, which is O(n²).",
      "Not handling edge cases like empty string.",
      "Returning the character instead of its index.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-dsa-two-041",
    slug: "container-with-most-water",
    question:
      "Given an array of heights, find the maximum area of water that can be contained between two lines. Implement the two-pointer solution.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "DSA Fundamentals",
    topic: "Two Pointers",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use two pointers at both ends; move the pointer with the smaller height inward, calculating area at each step. Time O(n), space O(1).",
    explanation:
      "def maxArea(height): left, right = 0, len(height)-1; max_water = 0; while left < right: width = right - left; h = min(height[left], height[right]); area = width * h; max_water = max(max_water, area); if height[left] < height[right]: left += 1; else: right -= 1; return max_water. The logic: the area is limited by the shorter line. To potentially get a larger area, we move the shorter line inward because moving the taller line won't increase the height (it's already taller) and will decrease width. This is a classic two-pointer optimization.",
    followUps: [
      {
        question: "Prove why moving the shorter pointer works.",
        answer:
          "The area is width * min(h1, h2). If we move the taller pointer, the width decreases and the height cannot increase (it's bounded by the shorter). So the area cannot increase. If we move the shorter pointer, we may find a taller line that increases the height, potentially increasing area. This is the optimal strategy.",
      },
      {
        question: "What if heights can be negative?",
        answer:
          "Height represents a physical structure, so it should be non-negative. If negative values were allowed, we'd need to handle them (e.g., treat as 0). In practice, we'd validate input.",
      },
    ],
    commonMistakes: [
      "Moving the taller pointer instead of the shorter one.",
      "Using brute force O(n²) in an interview.",
      "Not updating max_water correctly.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-dsa-sort-042",
    slug: "binary-search-implementation",
    question:
      "Implement binary search on a sorted array. Write both iterative and recursive versions. Explain when to use each.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "DSA Fundamentals",
    topic: "Sorting & Searching",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Iterative: use while loop with left and right pointers. Recursive: use base case and recursion. Both are O(log n) time, O(1) for iterative, O(log n) for recursive due to call stack.",
    explanation:
      "Iterative: def binary_search(arr, target): left, right = 0, len(arr)-1; while left <= right: mid = (left+right)//2; if arr[mid] == target: return mid; elif arr[mid] < target: left = mid+1; else: right = mid-1; return -1. Recursive: def binary_search(arr, target, left, right): if left > right: return -1; mid = (left+right)//2; if arr[mid] == target: return mid; elif arr[mid] < target: return binary_search(arr, target, mid+1, right); else: return binary_search(arr, target, left, mid-1). The iterative version is preferred in production because it avoids recursion depth issues and is slightly faster. The recursive version is cleaner for understanding.",
    followUps: [
      {
        question: "How would you handle duplicates in binary search?",
        answer:
          "If searching for the first occurrence, modify: if arr[mid] == target: right = mid (continue left). For the last occurrence, left = mid. This finds the boundary. For a count, use two binary searches.",
      },
      {
        question: "What if the array is rotated? (e.g., [4,5,6,1,2,3])",
        answer:
          "Use a modified binary search: find the pivot (where rotation occurs), then search in the appropriate half. Or use the approach where you compare arr[mid] with arr[left] to decide which side is sorted and search there.",
      },
    ],
    commonMistakes: [
      "Off-by-one errors: using left < right instead of left <= right.",
      "Not handling empty arrays.",
      "Integer overflow when computing mid: use left + (right-left)//2 instead of (left+right)//2.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n\n```python\ndef analyze_metrics(data_stream: list[dict]) -> dict:\n    """Calculates rolling aggregates and isolates anomalies."""\n    aggregates = {}\n    for record in data_stream:\n        metric = record.get("metric_name")\n        val = record.get("value", 0)\n        if metric not in aggregates:\n            aggregates[metric] = {"count": 0, "sum": 0.0}\n        aggregates[metric]["count"] += 1\n        aggregates[metric]["sum"] += val\n    \n    return {k: v["sum"] / v["count"] for k, v in aggregates.items()}\n\n# Sample Execution:\nsample_events = [{"metric_name": "latency_ms", "value": 120}, {"metric_name": "latency_ms", "value": 180}]\nprint(analyze_metrics(sample_events))\n# Output: {\'latency_ms\': 150.0}\n```',
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-dbms-join-043",
    slug: "sql-join-performance",
    question:
      "What are the performance differences between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN? How does the query optimizer choose join algorithms?",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "DBMS",
    topic: "Joins",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "INNER JOIN and LEFT JOIN have similar performance if indexes are used; FULL OUTER JOIN is more expensive. Optimizer uses cost-based optimization to choose between Nested Loop, Hash Join, and Merge Join based on statistics.",
    explanation:
      "INNER JOIN only returns matching rows; LEFT JOIN returns all from left table, with NULLs for unmatched right rows. In practice, INNER JOIN can be faster because it may stop scanning earlier. FULL OUTER JOIN combines both LEFT and RIGHT joins, requiring more processing and often more memory. The query optimizer uses table statistics (row count, distribution) to estimate costs. For large tables, Hash Join is often used (build hash table on smaller table). For indexed columns, Nested Loop is used. For sorted data, Merge Join is efficient. Understanding join algorithms helps in writing performant queries. Use EXPLAIN PLAN to see the chosen algorithm.",
    followUps: [
      {
        question: "How would you improve the performance of a slow LEFT JOIN?",
        answer:
          "Add indexes on the join columns. If the left table is large, consider filtering it first with a subquery or CTE. Ensure statistics are up to date. If the query is still slow, consider denormalizing the data or using a materialized view.",
      },
      {
        question: "What is a hash join and when is it used?",
        answer:
          "A hash join builds a hash table on the smaller table (build input) and then probes the larger table (probe input). It's efficient when joining large tables and there are no useful indexes. It requires memory for the hash table, so it's not suitable for extremely large tables.",
      },
    ],
    commonMistakes: [
      "Using FULL OUTER JOIN when not necessary.",
      "Not analyzing query execution plans.",
      "Assuming all joins have the same performance.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider a table `orders` (order_id, user_id, amount, order_date) and `users` (user_id, name, city).\n\n```sql\n-- Example Query:\nSELECT \n  u.city,\n  COUNT(DISTINCT o.order_id) AS total_orders,\n  SUM(o.amount) AS total_revenue,\n  AVG(o.amount) OVER(PARTITION BY u.city) AS avg_order_value\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE o.order_date >= '2024-01-01'\nGROUP BY u.city, o.amount;\n```\n\n**Output Table:**\n| city | total_orders | total_revenue | avg_order_value |\n| :--- | :--- | :--- | :--- |\n| Mumbai | 1,420 | $85,200 | $60.00 |\n| Bangalore | 2,100 | $147,000 | $70.00 |\n| Delhi | 1,850 | $99,900 | $54.00 |",
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-net-044",
    slug: "osi-model-explanation",
    question:
      "Explain the OSI model layers and their functions. How does data travel from an application to the network?",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "Computer Fundamentals",
    topic: "Networks",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Data is encapsulated with headers as it moves down, and de-encapsulated as it moves up.",
    explanation:
      "Application Layer (Layer 7): provides network services to applications (HTTP, FTP). Presentation Layer (Layer 6): data formatting, encryption, compression. Session Layer (Layer 5): establishes, manages, and terminates sessions. Transport Layer (Layer 4): end-to-end communication (TCP, UDP). Network Layer (Layer 3): routing and addressing (IP). Data Link Layer (Layer 2): framing and error detection (Ethernet). Physical Layer (Layer 1): raw bit transmission (cables, signals). Data is encapsulated: at each layer, a header is added (PDU: Protocol Data Unit). At the receiving end, headers are stripped layer by layer. This model helps in troubleshooting network issues by identifying which layer is failing.",
    followUps: [
      {
        question: "What is the difference between TCP and UDP?",
        answer:
          "TCP is connection-oriented, reliable, and ordered (used for web browsing, email). UDP is connectionless, faster, but unreliable and unordered (used for streaming, DNS, gaming). TCP has overhead for acknowledgments and retransmissions.",
      },
      {
        question: "How does DNS work at the application layer?",
        answer:
          "DNS translates domain names to IP addresses. It uses UDP (or TCP for large responses) and is a distributed database. The client sends a query to a DNS resolver, which recursively queries root, TLD, and authoritative servers until it gets the IP address.",
      },
    ],
    commonMistakes: [
      "Confusing OSI model with TCP/IP model.",
      "Not knowing the layer of common protocols (e.g., HTTP at L7, TCP at L4).",
      "Assuming all layers are present in every network communication.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-ai-gen-045",
    slug: "llm-generation-parameters",
    question:
      "Explain the key parameters that control text generation in LLMs: temperature, top-k, top-p, and frequency penalty. How do they affect output?",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "AI & Cloud",
    topic: "GenAI Basics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Temperature controls randomness (higher = more creative), top-k limits the next-token pool to k most likely, top-p uses cumulative probability, frequency penalty reduces repetition.",
    explanation:
      "Temperature (0-1): scales the logits before softmax. Low temp (0.1) makes output more deterministic, high temp (0.9) makes it more creative and diverse. Top-k (e.g., 40): only the top k tokens are considered for the next word, others are set to -infinity. Top-p (nucleus sampling, e.g., 0.9): selects the smallest set of tokens whose cumulative probability exceeds p, allowing dynamic selection. Frequency penalty: adds a penalty to tokens based on their frequency in the generated text, discouraging repetition. Presence penalty: penalizes tokens that have already appeared, encouraging new topics. These parameters are crucial for controlling output quality, creativity, and coherence in applications like chatbots and content generation.",
    followUps: [
      {
        question:
          "How would you choose the right parameters for a specific use case?",
        answer:
          "For factual QA, use low temperature (0.1) and top-p (0.9) for determinism. For creative writing, use high temperature (0.8) and top-k (50). For code generation, temperature 0.2 and top-p 0.95. Always iterate with A/B testing to find the optimal settings.",
      },
      {
        question:
          "What is the difference between frequency penalty and presence penalty?",
        answer:
          "Frequency penalty penalizes tokens based on how often they appear in the generated text, reducing repetition. Presence penalty penalizes tokens if they appear at least once, encouraging the introduction of new tokens. They are used together for better diversity.",
      },
    ],
    commonMistakes: [
      "Using temperature alone without considering top-k/top-p.",
      "Setting temperature too high, leading to incoherent text.",
      "Not adjusting parameters for different use cases.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "tech-cloud-046",
    slug: "aws-vs-azure-vs-gcp",
    question:
      "Compare AWS, Azure, and GCP for a data analytics workload. Which would you choose and why?",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "AI & Cloud",
    topic: "Cloud Basics",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "AWS has the broadest services and maturity, Azure is strong in hybrid and enterprise, GCP excels in data and AI. Choose based on existing tech stack, team expertise, and specific analytics needs.",
    explanation:
      "AWS: market leader, extensive services (Redshift, Athena, EMR), large ecosystem. Good for generic data workloads. Azure: integrates well with Microsoft ecosystem (Power BI, Dynamics), strong in hybrid (Azure Arc), and has Synapse Analytics. GCP: best-in-class for data analytics with BigQuery, Dataflow, and AI/ML services. GCP's BigQuery is serverless and scales automatically. If your team uses .NET, choose Azure. If you need cutting-edge AI and data analytics, choose GCP. If you need the widest selection of services, choose AWS. Also consider: pricing (GCP often cheaper), data residency, and support.",
    followUps: [
      {
        question:
          "How would you handle data migration from on-premise to the cloud?",
        answer:
          "Use a phased approach: start with a pilot workload, then migrate data using tools like AWS DMS, Azure Data Factory, or GCP Transfer Service. Consider a hybrid setup initially. Plan for data validation and rollback.",
      },
      {
        question: "What are the cost implications of cloud analytics?",
        answer:
          "Cloud is pay-as-you-go. Costs include compute (EC2, VMs), storage (S3, Blob), and data transfer (egress). Use spot instances for non-critical jobs, and consider reserved instances for steady-state workloads. Always set up budget alerts.",
      },
    ],
    commonMistakes: [
      "Choosing a cloud provider solely based on cost.",
      "Not considering the existing stack and team skills.",
      "Underestimating the complexity of data migration.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "python-fizzbuzz-solution",
      "merge-two-sorted-lists",
      "decorator-for-timing-functions",
    ],
  },
  {
    id: "consult-case-047",
    slug: "electric-scooter-market-sizing",
    question:
      "Estimate the total market size for electric scooters in a mid-sized city (population 2 million). How many scooters could be sold annually?",
    directions: ["Consulting & Strategy"],
    type: "Guesstimate",
    category: "behavioral",
    subject: "Case Interviews",
    topic: "Market Sizing",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Break down by population segments: 30% of population are potential users (age 18-45), 40% would adopt, 1 scooter per adopter, replacement every 3 years. Answer: ~80,000 scooters/year.",
    explanation:
      "Start with population: 2 million. Assume 60% are in the target age group (18-45) = 1.2 million. Assume 50% are interested in electric scooters (urban commuters) = 600,000. Among them, 40% would actually buy = 240,000. However, this is a stock, not annual sales. If a scooter lasts 3 years on average, then annual sales = stock / lifespan = 240,000 / 3 = 80,000 scooters/year. Add commercial sales (rental fleets) perhaps 10% more. Adjust for price sensitivity: if scooters are expensive, penetration may be lower. This is a logical, top-down approach. Always state assumptions and offer a sanity check.",
    followUps: [
      {
        question: "How would you refine this estimate with more data?",
        answer:
          "I'd use a bottom-up approach: estimate number of daily commuters, average distance, and mode share shift. I'd also survey existing scooter users. I'd segment by income: high-income areas might have higher adoption. I'd also check regulatory policies.",
      },
      {
        question: "What if the city has excellent public transport?",
        answer:
          "That would reduce the addressable market. I'd adjust the 'interested' percentage downward. Also, electric scooters might complement public transit for first/last mile. I'd survey current transport habits to fine-tune.",
      },
    ],
    commonMistakes: [
      "Not breaking down the population logically.",
      "Confusing stock with flow (sales vs. total vehicles).",
      "Not offering a sanity check or sensitivity analysis.",
    ],
    example:
      "**Concrete Step-by-Step Calculation:**\n1. **Target Population Base:** 20,000,000 (Metro area).\n2. **Relevant Target Demographic (20–45 yrs):** 45% = 9,000,000 people.\n3. **Smartphone & App Penetration:** 70% = 6,300,000 users.\n4. **Usage Frequency:** 3 transactions / month per active user = 18,900,000 monthly transactions.\n5. **Average Order Value (AOV):** $15.00.\n6. **Total Estimated Monthly Market Size:** 18,900,000 × $15 = **$283.5 Million / month** (~$3.4 Billion Annualized).",
    relatedQuestions: [
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
      "new-health-drink-competition",
    ],
  },
  {
    id: "consult-case-profit-048",
    slug: "airline-profitability-analysis",
    question:
      "A regional airline is consistently losing money. How would you diagnose the problem and propose solutions?",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "behavioral",
    subject: "Case Interviews",
    topic: "Profitability",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Decompose profitability into revenue (passenger load, yield) and costs (fixed: aircraft, labor; variable: fuel, maintenance). Identify underperforming routes and cost drivers.",
    explanation:
      "Use the profit formula: Profit = (Revenue per passenger × Load Factor × Capacity) - (Fixed Costs + Variable Costs per flight × Number of Flights). Analyze each route: load factor (seats filled) and yield (average fare). Low load factor may indicate weak demand; low yield may indicate competitive pressure. Costs: fuel (can be hedged), labor (union contracts, productivity), maintenance, and airport fees. Compare with industry benchmarks. Solutions: optimize network (drop unprofitable routes), increase load factor (dynamic pricing, marketing), reduce costs (fuel hedging, renegotiate contracts), and increase ancillary revenue (baggage fees, onboard sales). Consider fleet optimization (more efficient aircraft). Present a phased turnaround plan.",
    followUps: [
      {
        question: "How would you prioritize which routes to cut?",
        answer:
          "Use a matrix: routes with high revenue and high profit are core; low revenue and low profit are candidates for cut. Consider strategic value (hub connectivity) and growth potential. Also analyze the competitive response—if you cut, will competitors take over the route?",
      },
      {
        question: "What role does customer loyalty play in the turnaround?",
        answer:
          "Loyalty programs are critical for retention. I'd analyze data on frequent flyers and ensure they are not alienated by changes. Maybe even enhance the program as a positive move. Also, consider customer satisfaction—poor service may be driving down demand.",
      },
    ],
    commonMistakes: [
      "Focusing only on cost-cutting without considering revenue levers.",
      "Ignoring the competitive environment and strategic positioning.",
      "Proposing changes without data on route profitability.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "coffee-chain-revenue-estimate",
      "new-health-drink-competition",
    ],
  },
  {
    id: "consult-guest-rev-049",
    slug: "coffee-chain-revenue-estimate",
    question:
      "Estimate the daily revenue of a Starbucks store in a busy downtown location. Walk us through your assumptions.",
    directions: ["Consulting & Strategy"],
    type: "Guesstimate",
    category: "behavioral",
    subject: "Guesstimates",
    topic: "Revenue Growth",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Daily revenue = Foot traffic × Conversion rate × Average ticket. Estimate: 1000 people pass by, 30% enter, 60% buy, average ticket $6 → $1,080/day.",
    explanation:
      "Downtown location: foot traffic of 1000 people per hour during peak hours (7-9am, 12-2pm), and 200 per hour off-peak. Let's say 15 hours open: 2 peak hours × 1000 + 13 off-peak × 200 = 2000 + 2600 = 4600 passersby/day. Conversion rate: 30% enter = 1380. Among those, 60% buy (others just look) = 828 customers. Average ticket: coffee ($4), pastry ($3) = some buy both, some just coffee. Estimate average $6. Daily revenue = 828 × $6 ≈ $4,968. But wait, this is in-store only; add drive-thru and mobile orders if available. This is a bottom-up approach. Provide a range and a sanity check.",
    followUps: [
      {
        question: "How would you incorporate seasonality?",
        answer:
          "Winter months may have lower foot traffic; summer might be higher. Also, holidays and local events. I'd estimate a seasonal index: e.g., 10% higher in December, 15% lower in July. Then adjust the daily revenue accordingly.",
      },
      {
        question: "What if the store has a drive-thru?",
        answer:
          "Add a separate stream: estimate cars passing, conversion rate, and average ticket. Drive-thru often has higher ticket (family orders) but lower traffic. Add to the total revenue.",
      },
    ],
    commonMistakes: [
      "Not breaking down the day into peak/off-peak.",
      "Using unrealistic conversion rates.",
      "Forgetting to multiply by operating days (e.g., 365 days/year).",
    ],
    example:
      "**Concrete Step-by-Step Calculation:**\n1. **Target Population Base:** 20,000,000 (Metro area).\n2. **Relevant Target Demographic (20–45 yrs):** 45% = 9,000,000 people.\n3. **Smartphone & App Penetration:** 70% = 6,300,000 users.\n4. **Usage Frequency:** 3 transactions / month per active user = 18,900,000 monthly transactions.\n5. **Average Order Value (AOV):** $15.00.\n6. **Total Estimated Monthly Market Size:** 18,900,000 × $15 = **$283.5 Million / month** (~$3.4 Billion Annualized).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "new-health-drink-competition",
    ],
  },
  {
    id: "consult-strategy-050",
    slug: "new-health-drink-competition",
    question:
      "Your company is launching a new health drink. How would you analyze the competitive landscape and position your product?",
    directions: ["Consulting & Strategy"],
    type: "Business / Strategy",
    category: "behavioral",
    subject: "Business Strategy",
    topic: "Competitive Analysis",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use Porter's Five Forces and competitor mapping. Analyze direct competitors (existing health drinks), substitutes (smoothies, juices), and new entrants. Position on differentiation (organic, superfoods, packaging).",
    explanation:
      "Porter's Five Forces: 1) Threat of new entrants: moderate (low barriers but established brands). 2) Bargaining power of buyers: high (many choices). 3) Bargaining power of suppliers: low (commodity ingredients). 4) Threat of substitutes: high (water, coffee, other beverages). 5) Industry rivalry: high. Competitor mapping: create a perceptual map with axes (healthiness vs. taste, price vs. quality). Direct competitors: existing health drinks (e.g., Gatorade, Vitaminwater). Position yourself: choose a niche, e.g., 'organic, low-sugar, with adaptogens'. Price slightly higher. Marketing: emphasize health benefits, sustainability, and unique ingredients. Also, analyze distribution: grocery, gyms, online. This creates a clear strategic position.",
    followUps: [
      {
        question: "What if competitors respond with a similar product?",
        answer:
          "We need a defensible moat: proprietary recipe, supply chain exclusivity, or strong brand. Also, build a community (loyalty program, social media). Continuously innovate: new flavors, limited editions. Monitor competitor moves and be ready to pivot.",
      },
      {
        question: "How would you estimate market share potential?",
        answer:
          "Estimate total market size for health drinks, then segment by sub-category. Use our positioning to target a specific segment (e.g., 20% of the market). Estimate achievable share based on marketing spend, distribution, and competitive intensity. Use a test market to validate.",
      },
    ],
    commonMistakes: [
      "Not analyzing substitutes and new entrants.",
      "Assuming competitors won't react.",
      "Not validating positioning with customer research.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-entry-051",
    slug: "european-market-entry-strategy",
    question:
      "A US-based organic food company wants to enter the European market. How would you develop a market entry strategy?",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "behavioral",
    subject: "Market Analysis",
    topic: "Market Entry",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Conduct PESTLE analysis, assess market attractiveness, choose entry mode (export, JV, acquisition), and develop a go-to-market plan with localization.",
    explanation:
      "PESTLE analysis: Political (EU regulations on organic labeling), Economic (GDP growth, disposable income), Social (high demand for organic), Technological (e-commerce adoption), Legal (EU organic certification, import tariffs), Environmental (sustainability trends). Market attractiveness: size (~$50B organic market), growth (8% annually). Entry modes: export (low risk, low control), joint venture with local distributor, or acquisition of a local brand (high control, high cost). Recommend a phased approach: start with online exports to test demand, then partner with a major retailer (e.g., Carrefour), and finally consider JV for local production. Localization: adapt recipes to local tastes, ensure EU-certified organic, and tailor marketing (emphasize sustainability).",
    followUps: [
      {
        question: "What are the biggest risks of entering Europe?",
        answer:
          "Regulatory compliance (EU certification), cultural differences in taste and marketing, competition from established local brands, and currency fluctuations. Mitigate with thorough due diligence, local partnerships, and hedging currency.",
      },
      {
        question: "How would you choose a distribution partner?",
        answer:
          "Evaluate partners on coverage (pan-European vs. regional), logistical capability, brand alignment, and financial stability. Conduct interviews and pilot a small product range to test the partnership before committing.",
      },
    ],
    commonMistakes: [
      "Assuming European market is homogeneous.",
      "Underestimating regulatory requirements.",
      "Ignoring the need for localization (packaging, taste, marketing).",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-analytics-052",
    slug: "store-sales-decline-root-cause",
    question:
      "A retail store's sales have declined 20% year-over-year. How would you conduct a root cause analysis?",
    directions: ["Consulting & Strategy"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Analytics",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Decompose sales into traffic and average transaction value. Then drill down into customer segments, product categories, and compare with local market trends.",
    explanation:
      "Sales = Traffic × Conversion Rate × Average Transaction Value. Analyze each component: Is traffic down (footfall, online visits)? Is conversion down (funnel drop-offs)? Is AOV down (discounting, product mix)? Use year-over-year comparison. Segment by customer type: new vs. returning, loyal vs. occasional. Product category analysis: which categories declined? Compare with competitors: is it a market-wide trend or store-specific? Also, consider external factors: local economy, new competitors, seasonality. Interview store staff and customers. Use this multi-layered approach to identify the true root cause and develop targeted actions.",
    followUps: [
      {
        question: "What if the decline is only in one product category?",
        answer:
          "That narrows the focus: look at that category's supply chain, pricing, quality, or competition. Maybe a new competitor entered with a better product. Or a supplier issue. Investigate customer feedback specifically about that category.",
      },
      {
        question:
          "How would you track the effectiveness of corrective actions?",
        answer:
          "Set up a dashboard tracking key metrics weekly. Compare before/after. Use a control group (other stores) to ensure changes are effective. Set a 3-month timeframe to see significant improvement. Adjust course if needed.",
      },
    ],
    commonMistakes: [
      "Not breaking down sales into components.",
      "Jumping to a conclusion (e.g., blaming the economy) without data.",
      "Not considering customer feedback.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-fit-lead-053",
    slug: "mentoring-junior-team-member",
    question:
      "Describe a time when you mentored a junior team member who was struggling. How did you approach it and what was the outcome?",
    directions: ["Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Fit & Behavioural",
    topic: "Leadership",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "I identified their strengths and weaknesses, provided structured guidance and regular feedback, and set achievable goals. They improved significantly and became a high performer.",
    explanation:
      "In a previous role, I mentored a junior analyst who was struggling with SQL and presenting insights. I started with a strengths assessment: they had strong domain knowledge but lacked technical skills. I created a learning plan: 1) Weekly SQL exercises with increasing complexity, 2) Shadowing senior analysts on projects, 3) Regular 1:1s for feedback. I also paired them with a peer for collaborative work. After 3 months, they became proficient in SQL and started delivering insights confidently. They later took ownership of a key reporting project. This experience taught me the importance of empathy, patience, and customized mentoring.",
    followUps: [
      {
        question: "What if the junior didn't improve despite your efforts?",
        answer:
          "I'd have a candid conversation to understand the barriers: is it a skill gap, lack of motivation, or personal issues? I'd adjust the approach: maybe a different learning style, or give them a different project that aligns with their passion. If still no improvement, I'd involve HR or management for additional support or a role reassessment.",
      },
      {
        question: "How do you balance mentoring with your own workload?",
        answer:
          "I allocate dedicated time (e.g., 30 minutes per week) and integrate mentoring into daily work (e.g., pair programming). I set clear expectations: I'm available for specific queries, but they should also be resourceful. This ensures efficiency without sacrificing quality.",
      },
    ],
    commonMistakes: [
      "Taking over the task instead of guiding.",
      "Not setting clear goals and milestones.",
      "Being too critical and demotivating.",
    ],
    example:
      "**Real-World STAR Framework Example:**\n- **Situation:** During a high-stakes cross-functional migration, the marketing team demanded early feature release while engineering flagged unmitigated security vulnerabilities.\n- **Task:** As lead analyst, I had to align stakeholders on a risk-adjusted timeline without slipping client delivery SLAs.\n- **Action:** Created an impact matrix quantifying downtime risk ($45k/hr) vs revenue upside ($20k launch promo). Facilitated a compromise with a gated beta rollout to 5% of users.\n- **Result:** Zero downtime recorded, marketing achieved 92% of target sign-ups, and the RACI model became standard practice across company squads.",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-fit-conflict-054",
    slug: "resolving-cross-functional-conflict",
    question:
      "Tell me about a time you had a conflict with a team from another department. How did you resolve it?",
    directions: ["Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Fit & Behavioural",
    topic: "Team Conflict",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "I facilitated a meeting to align on shared goals, listened to their concerns, and proposed a solution that addressed both sides. We established a regular communication protocol.",
    explanation:
      "In a project with engineering, we had a conflict over the data pipeline: they wanted a complex, scalable solution, but we needed a quick MVP for a client demo. I organized a joint meeting with both teams. I started by acknowledging their concerns (scalability) and shared ours (timeline). We mapped out a compromise: build a simple MVP with a clear roadmap for scalability. We defined specific milestones for both phases. I suggested weekly sync meetings to track progress and address blockers. The result: we delivered the MVP on time and later built the scalable version without delays. The conflict turned into a productive collaboration.",
    followUps: [
      {
        question: "What if the other team wasn't willing to compromise?",
        answer:
          "I'd escalate to a neutral stakeholder (e.g., project sponsor) to help mediate. I'd also gather data to support my position (e.g., impact of delay on business). Sometimes, you need to find common ground by appealing to company-wide objectives rather than departmental goals.",
      },
      {
        question: "How do you prevent future conflicts with the same team?",
        answer:
          "Establish a collaborative culture: share each other's goals and constraints early. Use a 'pre-mortem' to anticipate issues. Build relationships at the individual level to foster trust. Create a shared project charter with clear decision-making authority.",
      },
    ],
    commonMistakes: [
      "Being confrontational instead of collaborative.",
      "Not listening actively to the other side.",
      "Escalating too early without trying to resolve.",
    ],
    example:
      "**Real-World STAR Framework Example:**\n- **Situation:** During a high-stakes cross-functional migration, the marketing team demanded early feature release while engineering flagged unmitigated security vulnerabilities.\n- **Task:** As lead analyst, I had to align stakeholders on a risk-adjusted timeline without slipping client delivery SLAs.\n- **Action:** Created an impact matrix quantifying downtime risk ($45k/hr) vs revenue upside ($20k launch promo). Facilitated a compromise with a gated beta rollout to 5% of users.\n- **Result:** Zero downtime recorded, marketing achieved 92% of target sign-ups, and the RACI model became standard practice across company squads.",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-growth-055",
    slug: "bank-growth-strategy",
    question:
      "A regional bank wants to grow its customer base by 20% in the next year. How would you develop a growth strategy?",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "behavioral",
    subject: "Case Interviews",
    topic: "Growth Strategy",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use a 3-pronged strategy: deepen relationships with existing customers (cross-sell), acquire new customers (targeted marketing), and improve digital channels to reach younger demographics.",
    explanation:
      "Start with market analysis: current market share, customer segments, competitive landscape. Existing customers: analyze cross-sell opportunities (loans, credit cards, investment products). Use data analytics to identify high-potential customers. New customers: segment by demographics (millennials, small business owners), then design targeted campaigns (digital ads, community events, partnerships). Digital transformation: improve mobile app experience, offer online account opening, and use AI for personalized offers. Also consider geographic expansion (new branches) or M&A. Set clear KPIs: acquisition cost, customer lifetime value, and Net Promoter Score (NPS). Pilot campaigns in a few regions before scaling.",
    followUps: [
      {
        question: "What if the market is saturated with many competitors?",
        answer:
          "Then focus on differentiation: better customer service, lower fees, or niche segments (e.g., students, retirees). Also, consider inorganic growth: acquire a smaller bank or a fintech startup to gain new capabilities and customer base.",
      },
      {
        question: "How would you measure the success of the growth strategy?",
        answer:
          "Track new customer acquisition rate, customer retention, cross-sell success rate, and revenue growth. Also monitor brand awareness and customer satisfaction. Use quarterly reviews to adjust strategy based on performance.",
      },
    ],
    commonMistakes: [
      "Focusing only on new customers, ignoring existing ones.",
      "Not leveraging data for personalization.",
      "Underestimating the importance of digital channels.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-guest-056",
    slug: "taxi-market-size-mumbai",
    question:
      "Estimate the total number of taxi rides in Mumbai per year. How many taxis are on the road?",
    directions: ["Consulting & Strategy"],
    type: "Guesstimate",
    category: "behavioral",
    subject: "Guesstimates",
    topic: "Market Sizing",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Population of Mumbai = 20 million. Assume 30% use taxis regularly, average 2 rides per week. That's 20M × 0.3 × 2 × 52 = ~624M rides/year. Taxis in the city ≈ 60,000.",
    explanation:
      "Population breakdown: 20 million. Assume 50% are of working age and use taxis occasionally = 10M. Among them, 60% are regular users (at least once a week) = 6M. Average rides per week: 2 (some use more, some less) = 12M rides/week. Annual = 12M × 52 ≈ 624M rides. Taxis: average taxi does 10 rides/day (assuming 16-hour shift, 0.6 rides/hour) = 10 × 365 = 3650 rides/year. Number of taxis = 624M / 3650 ≈ 171,000. However, due to ride-sharing (Uber/Ola) and private cars, this might be lower. Also, official taxi count in Mumbai is ~60,000 but with ride-sharing, the effective capacity is higher. The estimate shows the market size is large.",
    followUps: [
      {
        question:
          "How would the introduction of ride-sharing affect your estimate?",
        answer:
          "Ride-sharing adds more vehicles (private cars) to the pool, but doesn't necessarily increase total rides—it may replace taxi rides. I'd adjust: assume 30% of rides are now via Uber/Ola, so taxi rides decrease. The total rides market may grow due to convenience, but the taxi-specific count would decline. I'd segment by service type.",
      },
      {
        question: "What if we consider only app-based rides?",
        answer:
          "Then we'd estimate based on app penetration. Assume 60% of smartphone users have a ride-hailing app. Smartphone users in Mumbai = 70% of population = 14M. Active users = 50% = 7M. Average rides per month = 4. Total annual app-based rides = 7M × 4 × 12 = 336M rides.",
      },
    ],
    commonMistakes: [
      "Not segmenting the population by usage frequency.",
      "Overestimating the average rides per day.",
      "Ignoring competition from other transport modes.",
    ],
    example:
      "**Concrete Step-by-Step Calculation:**\n1. **Target Population Base:** 20,000,000 (Metro area).\n2. **Relevant Target Demographic (20–45 yrs):** 45% = 9,000,000 people.\n3. **Smartphone & App Penetration:** 70% = 6,300,000 users.\n4. **Usage Frequency:** 3 transactions / month per active user = 18,900,000 monthly transactions.\n5. **Average Order Value (AOV):** $15.00.\n6. **Total Estimated Monthly Market Size:** 18,900,000 × $15 = **$283.5 Million / month** (~$3.4 Billion Annualized).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-pricing-057",
    slug: "gym-membership-pricing-strategy",
    question:
      "A new gym wants to set membership pricing. How would you develop a pricing strategy?",
    directions: ["Consulting & Strategy"],
    type: "Business / Strategy",
    category: "behavioral",
    subject: "Business Strategy",
    topic: "Pricing",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use value-based pricing: competitors' pricing, willingness to pay, and value proposition. Offer tiered memberships (Basic, Premium, VIP) and annual/monthly options. Test with early adopters.",
    explanation:
      "Start with competitor analysis: price of other gyms in the area, their services, and occupancy rates. Conduct surveys to understand willingness to pay and what customers value (equipment, classes, location, hours). Use Van Westendorp pricing model to find the acceptable price range. Recommend a tiered structure: Basic ($30/mo, access to equipment), Premium ($60/mo, +classes), VIP ($100/mo, +personal training, towel service). Offer discounts for annual payments (e.g., 20% off). Also consider add-ons: guest passes, parking. Launch with an introductory offer to build membership. Test pricing in a pilot or use data to optimize. Monitor conversion, retention, and profitability.",
    followUps: [
      {
        question: "How would you handle discounting for students or seniors?",
        answer:
          "Offer a separate student/senior discount (e.g., 15% off) to increase accessibility. Ensure it's strategically justified (e.g., lower peak usage times). This can also build a loyal customer base. Communicate the discount clearly to avoid cannibalizing full-price members.",
      },
      {
        question: "What if competitors are offering lower prices?",
        answer:
          "Compete on quality and unique services, not just price. If we match prices, we risk a price war. Instead, emphasize our differentiators: better equipment, expert trainers, cleaner facilities, or convenient location. If necessary, offer a limited-time promotion to attract customers, but avoid long-term discounting.",
      },
    ],
    commonMistakes: [
      "Setting prices without understanding customer value.",
      "Ignoring competitor pricing and market positioning.",
      "Not testing pricing with real customers.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-segment-058",
    slug: "retail-customer-segmentation",
    question:
      "A retail chain wants to improve marketing effectiveness through customer segmentation. How would you segment the customer base and what strategies would you recommend?",
    directions: ["Consulting & Strategy"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Market Analysis",
    topic: "Customer Segmentation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use RFM (Recency, Frequency, Monetary) analysis and demographic segmentation. Create personas and tailor marketing messages and promotions for each segment.",
    explanation:
      "Start with RFM analysis: Recency (how recently they shopped), Frequency (how often), Monetary (how much they spend). Score each customer from 1-5 on each dimension. Combine scores to create segments: Champions (high RFM), Loyal (high F, M), Potential (high R, low M), At-risk (low R, high F), Lost (low RFM). Also segment by demographics: age, location, family status. Combine RFM and demographics for richer personas. For Champions: VIP events, exclusive offers. Loyal: loyalty rewards, referrals. Potential: targeted promotions to increase spend. At-risk: re-engagement campaigns (offers, surveys). Lost: win-back campaigns. Use data analytics to track the ROI of each segment and adjust strategies.",
    followUps: [
      {
        question:
          "How would you implement these strategies without alienating customers?",
        answer:
          "Use personalization without being intrusive. Respect preferences: allow opt-outs. Ensure messages are relevant. Use A/B testing to find the right tone and frequency. Monitor customer satisfaction and churn to detect any negative reactions.",
      },
      {
        question:
          "What if the company doesn't have enough data for RFM analysis?",
        answer:
          "Start with simpler segmentation: demographics and purchase history. Gradually collect more data through loyalty programs and surveys. Use third-party data if needed. Even with limited data, basic segmentation (e.g., high-value vs. low-value) can improve marketing.",
      },
    ],
    commonMistakes: [
      "Segmenting without a clear goal or strategy.",
      "Using too many segments that are hard to action.",
      "Ignoring the cost and effort of implementing strategies for each segment.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-rev-059",
    slug: "online-course-revenue-growth",
    question:
      "An online education platform wants to increase revenue by 50% in 18 months. How would you develop a growth strategy?",
    directions: ["Consulting & Strategy"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analytics",
    topic: "Revenue Growth",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Focus on customer acquisition (new users), retention (upselling/cross-selling), and pricing optimization. Also expand into new markets (B2B, international) and new course categories.",
    explanation:
      "Revenue = Number of users × Average Revenue Per User (ARPU). To grow revenue 50%, we can increase either. Acquisition: improve marketing channels (SEO, paid ads, partnerships), reduce friction in sign-up, offer free trials. Retention: improve course quality, add interactive elements, create a community, send personalized recommendations. Upselling: from free to paid, from one course to bundles, and from courses to certificates. Pricing: test price points, offer annual plans vs. monthly, and tiered pricing. New markets: B2B (corporate training), international (localize content). Also, consider expanding content catalog to high-demand topics (e.g., AI, data science). Set clear KPIs for each initiative and use a data-driven approach to prioritize.",
    followUps: [
      {
        question: "How would you prioritize these initiatives?",
        answer:
          "Use an impact-effort matrix. High-impact, low-effort: pricing optimization, upsell emails. Medium-impact, medium-effort: improve retention. High-impact, high-effort: B2B expansion. Start with quick wins to build momentum, then tackle larger projects. Validate with experiments.",
      },
      {
        question:
          "What if competition is increasing and customer acquisition costs are rising?",
        answer:
          "Focus more on retention and upselling existing customers (lower cost). Improve product differentiation to justify higher prices. Use referral programs to lower acquisition costs. Also, consider niche marketing to acquire customers more cost-effectively.",
      },
    ],
    commonMistakes: [
      "Focusing too much on acquisition without retention.",
      "Ignoring the competitive landscape.",
      "Not setting clear, measurable goals.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** E-commerce churn spiked from 3.2% to 6.8% following an unannounced pricing change.\n- **Intervention:** Segmented users by activity level; introduced a 15% discount for at-risk annual subscribers and improved in-app onboarding guides.\n- **Outcome:** Churn dropped back to 3.4% within 45 days, saving an estimated $120,000 in Annual Recurring Revenue (ARR).",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },
  {
    id: "consult-fit-060",
    slug: "stakeholder-conflict-resolution",
    question:
      "You're leading a project with multiple stakeholders who have conflicting priorities. How would you manage the situation?",
    directions: ["Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Fit & Behavioural",
    topic: "Team Conflict",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Identify each stakeholder's needs and priorities, facilitate a joint session to find common ground, and propose a solution that balances trade-offs. Use a RACI matrix to clarify decision-making.",
    explanation:
      "In a complex project, I encountered stakeholders from marketing, product, and finance with conflicting priorities: marketing wanted a big launch, product wanted more features, finance wanted cost control. I held individual meetings to understand each perspective. Then I organized a workshop where we aligned on the project's overarching goal: to increase market share. I presented data on trade-offs and proposed a phased approach: launch with core features (satisfying product) and a moderate campaign (satisfying marketing) with a budget that met finance constraints. We created a RACI (Responsible, Accountable, Consulted, Informed) matrix to clarify decisions and avoid future conflicts. This approach created ownership and transparency.",
    followUps: [
      {
        question:
          "What if stakeholders still couldn't agree after the workshop?",
        answer:
          "I'd escalate to a senior leader or sponsor who has the authority to make the final decision. I'd present the options with pros/cons and recommended solution. I'd also document all viewpoints for transparency. Sometimes, a decision is needed to move forward, even if not everyone is fully satisfied.",
      },
      {
        question:
          "How would you maintain relationships with stakeholders after a conflict?",
        answer:
          "Continue regular communication, provide updates, and show how the project benefits them. Show appreciation for their input, even if not all was adopted. Acknowledge their concerns and be open to adjustments if new information arises. Building trust is a continuous process.",
      },
    ],
    commonMistakes: [
      "Ignoring stakeholder concerns or making decisions unilaterally.",
      "Not providing clear rationale for decisions.",
      "Failing to follow up and maintain communication.",
    ],
    example:
      "**Real-World STAR Framework Example:**\n- **Situation:** During a high-stakes cross-functional migration, the marketing team demanded early feature release while engineering flagged unmitigated security vulnerabilities.\n- **Task:** As lead analyst, I had to align stakeholders on a risk-adjusted timeline without slipping client delivery SLAs.\n- **Action:** Created an impact matrix quantifying downtime risk ($45k/hr) vs revenue upside ($20k launch promo). Facilitated a compromise with a gated beta rollout to 5% of users.\n- **Result:** Zero downtime recorded, marketing achieved 92% of target sign-ups, and the RACI model became standard practice across company squads.",
    relatedQuestions: [
      "electric-scooter-market-sizing",
      "airline-profitability-analysis",
      "coffee-chain-revenue-estimate",
    ],
  },

  // =============================================================================
  // ADDITIONAL QUESTIONS – Batch 2
  // =============================================================================

  // ----- Business & Operations: Business Analysis – Root Cause Analysis
  {
    id: "biz-root-081",
    slug: "subscriber-acquisition-cost-spike",
    question:
      "Our customer acquisition cost (CAC) has increased by 40% over the last quarter while conversion rates have remained flat. How would you diagnose the root cause?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analysis",
    topic: "Root Cause Analysis",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Break down CAC into marketing spend per channel and conversion funnel efficiency. Identify channels with rising costs or declining conversion, and analyze changes in targeting, competition, and creative effectiveness.",
    explanation:
      "Start by disaggregating CAC: total marketing spend divided by new customers acquired. Then break it down by channel (paid search, social, display, organic). For each channel, compute cost per lead and lead-to-customer conversion rate. Compare month-over-month trends. Investigate if CPC or CPM increased due to competition, or if conversion rates dropped because of landing page issues or ad relevance. Also check if the mix of channels shifted toward more expensive ones. Interview marketing team about recent campaign changes. Use A/B testing to validate hypotheses. Prioritize fixes: optimize high-cost channels, improve landing pages, or reallocate budget to more efficient channels.",
    followUps: [
      {
        question:
          "What if the spike is due to a new competitor entering the market?",
        answer:
          "I'd analyze competitive intelligence: are they bidding on our keywords? What is their value proposition? I'd recommend defensive actions: improve our ad relevance, offer promotions, or differentiate our messaging. Also, consider diversifying to less competitive channels.",
      },
      {
        question: "How would you reallocate budget to improve overall CAC?",
        answer:
          "Use a marginal cost analysis: allocate more budget to channels with the lowest incremental CAC and highest capacity. Set a target CAC and adjust spend dynamically. Implement automated bid management to optimize in real-time.",
      },
    ],
    commonMistakes: [
      "Looking only at total CAC without segmenting by channel.",
      "Ignoring the quality of acquired customers (e.g., high CAC might bring better LTV).",
      "Not considering seasonality or external factors.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** CAC jumped from $50 to $70 after a competitor launched a similar product.\n- **Intervention:** Shifted 30% of budget from branded search to content marketing and referral programs; improved landing page conversion by 15%.\n- **Outcome:** CAC dropped to $55 within 60 days, and LTV increased by 10% due to higher-quality referrals.",
    relatedQuestions: [
      "declining-online-sales-root-cause-analysis",
      "manufacturing-defect-rate-increase",
      "customer-churn-root-cause-analysis",
    ],
  },

  // ----- Business & Operations: Operations – Supply & Demand
  {
    id: "ops-supply-082",
    slug: "fleet-utilization-optimization",
    question:
      "Our logistics company has 200 delivery trucks, but utilization is only 70% during peak hours and 40% off-peak. How would you improve fleet utilization?",
    directions: ["Business & Operations"],
    type: "Business Case",
    category: "behavioral",
    subject: "Operations",
    topic: "Supply & Demand",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Analyze demand patterns, adjust scheduling and routing, offer incentives for off-peak deliveries, and consider sharing excess capacity with third parties.",
    explanation:
      "First, collect data on truck usage by hour/day. Identify peak and off-peak periods. For off-peak, explore demand-side initiatives: offer discounts for off-peak deliveries, or work with customers to shift their demand. On the supply side, adjust shift schedules to match demand – use part-time drivers for peak and full-time for base load. Implement dynamic routing to reduce empty miles. Consider a platform to rent out idle trucks to other businesses (Uber for trucks). Also, review maintenance scheduling to ensure trucks are available when needed. Monitor utilization metrics and customer satisfaction. Pilot with a few trucks to test before scaling.",
    followUps: [
      {
        question: "What if customers refuse to shift to off-peak times?",
        answer:
          "Then focus on operational efficiency: consolidate deliveries, use smaller vehicles for off-peak, or reduce fleet size and use on-demand rentals during peaks. Also, analyze if the cost of underutilization justifies the investment in incentives.",
      },
      {
        question: "How would you measure success?",
        answer:
          "Key metrics: utilization rate (truck hours used / available hours), cost per delivery, on-time delivery rate, and revenue per truck. I'd set targets for each and track weekly.",
      },
    ],
    commonMistakes: [
      "Reducing fleet size without considering peak demand.",
      "Ignoring driver availability and labor regulations.",
      "Not communicating with customers about schedule changes.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** 40% idle time cost the company $2M annually.\n- **Intervention:** Introduced dynamic pricing for off-peak slots and partnered with a local courier to share excess capacity.\n- **Outcome:** Utilization increased to 78%, generating an additional $1.2M in revenue and reducing costs by $0.8M.",
  },

  // ----- Business & Operations: Excel – Data Interpretation
  {
    id: "excel-interp-083",
    slug: "correlation-analysis-excel",
    question:
      "In Excel, you have two variables: advertising spend and sales revenue over 24 months. How would you perform a correlation analysis and determine if the relationship is significant?",
    directions: ["Business & Operations"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use CORREL function to get the Pearson correlation coefficient, then use a t-test to check significance. Visualize with a scatter plot and add a trendline with R².",
    explanation:
      "In Excel, enter the two columns. Use =CORREL(ad_spend_range, sales_range) to get the correlation coefficient (r). A value close to +1 indicates strong positive correlation. To test significance, you can use the formula: t = r * SQRT((n-2)/(1-r²)) and compare with a t-distribution table. Alternatively, use the Data Analysis Toolpak's Regression tool to get p-values. Create a scatter plot with a linear trendline and display R² and equation. Interpret: if R² is high and p-value < 0.05, the correlation is significant. But remember, correlation does not imply causation. Consider lag effects and other variables.",
    followUps: [
      {
        question:
          "What if there is a time lag between spend and revenue (e.g., ad spend affects sales after 2 months)?",
        answer:
          "I'd create a new column with lagged ad spend (shifted by 1 or 2 months) and run correlation again. The highest correlation indicates the effective lag. This is common in marketing mix modeling.",
      },
      {
        question: "How would you handle outliers in the data?",
        answer:
          "I'd identify outliers using standard deviation or box plots, then decide whether to remove them (if they are data errors) or cap them (if they are extreme but valid). Re-run correlation without outliers to see if the relationship holds.",
      },
    ],
    commonMistakes: [
      "Assuming causation from correlation.",
      "Not checking for non-linear relationships.",
      "Ignoring outliers that can skew the correlation.",
    ],
    example:
      "**Excel Formula & Model Structure:**\n- **Data:** Ad spend (B2:B25) and Sales (C2:C25).\n- **Correlation:** `=CORREL(B2:B25, C2:C25)` → 0.72.\n- **R²:** `=RSQ(C2:C25, B2:B25)` → 0.52.\n- **Regression:** Use Data Analysis Toolpak to get p-value (0.001), confirming significance.\n- **Result:** Strong positive correlation; each $1 spend yields ~$4 in sales, but causation requires further testing.",
    relatedQuestions: [
      "sales-data-trend-analysis-excel",
      "descriptive-statistics-excel",
      "saas-metrics-dashboard-excel",
    ],
  },

  // ----- Data & BI: SQL – CTEs & Subqueries (new)
  {
    id: "dbi-cte-084",
    slug: "employee-hierarchy-sql-cte",
    question:
      "Given an employee table with employee_id, manager_id, and salary, write a recursive CTE to find the organizational hierarchy and compute total salary by level.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "CTEs & Subqueries",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use a recursive CTE with anchor (top-level managers) and recursive part (join employees with CTE to find reports). Aggregate salary by level.",
    explanation:
      "WITH RECURSIVE hierarchy AS (SELECT employee_id, manager_id, salary, 1 as level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.manager_id, e.salary, h.level + 1 FROM employees e INNER JOIN hierarchy h ON e.manager_id = h.employee_id) SELECT level, COUNT(*) as employees, SUM(salary) as total_salary FROM hierarchy GROUP BY level ORDER BY level. This computes the number of employees and total salary at each organizational level. This is useful for understanding the cost structure by hierarchy depth.",
    followUps: [
      {
        question: "How would you find the longest chain of reporting?",
        answer:
          "Add a depth counter and then use MAX(depth) in a subquery. In the recursive CTE, you can track depth, and then select the employee_id with the maximum depth.",
      },
      {
        question:
          "What if the data has cycles (e.g., a manager reporting to their own subordinate)?",
        answer:
          "That is an error. I'd add a cycle detection using a path array or check for already visited nodes. In SQL, you can use a check like WHERE employee_id NOT IN (SELECT employee_id FROM hierarchy) to avoid cycles, but recursive CTEs often have a depth limit to prevent infinite loops.",
      },
    ],
    commonMistakes: [
      "Forgetting the base case (anchor) for the recursion.",
      "Not handling NULL manager_id correctly.",
      "Not limiting recursion depth to avoid infinite loops.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider an employee table with id, name, manager_id, salary.\n\n```sql\nWITH RECURSIVE org AS (\n  SELECT id, name, manager_id, 0 AS level FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, o.level + 1\n  FROM employees e JOIN org o ON e.manager_id = o.id\n)\nSELECT level, COUNT(*) AS emp_count, SUM(salary) AS total_salary\nFROM org\nGROUP BY level;\n```\n\n**Output:**\n| level | emp_count | total_salary |\n|-------|-----------|--------------|\n| 0     | 5         | $1,200,000   |\n| 1     | 20        | $3,400,000   |\n| 2     | 45        | $5,100,000   |",
  },

  // ----- Data & BI: Power BI – Dashboards (new)
  {
    id: "dbi-pbi-085",
    slug: "inventory-dashboard-powerbi",
    question:
      "Design a Power BI dashboard for inventory management that tracks stock levels, turnover, and write-offs. How would you visualize these metrics and enable drill-down?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Dashboards",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use cards for high-level KPIs (stock value, turnover, write-offs), bar charts for top/low-performing SKUs, and a matrix for detailed inventory by location. Add slicers for categories and time periods.",
    explanation:
      "The dashboard should show: total inventory value, average days of inventory, turnover ratio, and write-off percentage. Use a bar chart to show inventory by product category and a scatter plot (stock vs. sales) to identify overstocked and understocked items. A heatmap can show stock levels across warehouse locations. Add drill-through to see individual SKU details: suppliers, reorder point, lead time. Use conditional formatting to highlight items with low stock (red) or excess stock (orange). Enable date slicers to see trends. Publish to Power BI Service for access by supply chain managers.",
    followUps: [
      {
        question:
          "How would you handle slow-moving inventory in the dashboard?",
        answer:
          "Add a measure for days since last sale and highlight items with >180 days of no sales. Create a separate visual for obsolete inventory. This helps the team decide on markdowns or disposal.",
      },
      {
        question:
          "What if the company has multiple warehouses – how do you show consolidated vs. individual views?",
        answer:
          "Use bookmarks to switch between consolidated and individual warehouse views. Also, use a map visual to show stock levels geographically. The matrix can show inventory by warehouse and product category.",
      },
    ],
    commonMistakes: [
      "Including too many metrics, making the dashboard cluttered.",
      "Not providing actionable alerts (e.g., low stock warnings).",
      "Ignoring the need for refresh frequency – inventory data changes daily.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Inventory write-offs were 8% of total stock, costing $500K annually.\n- **Intervention:** Dashboard highlighted slow-moving items; implemented dynamic reorder points and automated alerts for low stock.\n- **Outcome:** Write-offs reduced to 3.5%, and stockouts decreased by 20% within 6 months.",
    relatedQuestions: [
      "executive-sales-dashboard-powerbi",
      "finance-kpi-dashboard-powerbi",
      "power-bi-chart-selection-guide",
    ],
  },

  // ----- Technical Analyst: Python – OOP Basics (new)
  {
    id: "tech-py-oop-086",
    slug: "vehicle-class-inheritance",
    question:
      "Design a Python class hierarchy for vehicles: Car, Truck, and Motorcycle. Include methods like start_engine, stop_engine, and fuel_efficiency. Use inheritance and polymorphism.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "Python",
    topic: "OOP Basics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Create a base Vehicle class with common attributes (make, model, year) and methods. Subclasses override fuel_efficiency with specific calculations. Use abstract base class for mandatory methods.",
    explanation:
      "from abc import ABC, abstractmethod; class Vehicle(ABC): def __init__(self, make, model, year): self.make = make; self.model = model; self.year = year; self._engine_running = False; @abstractmethod def fuel_efficiency(self): pass; def start_engine(self): self._engine_running = True; def stop_engine(self): self._engine_running = False. class Car(Vehicle): def __init__(self, make, model, year, doors): super().__init__(make, model, year); self.doors = doors; def fuel_efficiency(self): return 25.0  # miles per gallon. class Truck(Vehicle): def fuel_efficiency(self): return 15.0. class Motorcycle(Vehicle): def fuel_efficiency(self): return 40.0. This demonstrates inheritance, abstraction, and encapsulation. Add method overriding for specific behaviors.",
    followUps: [
      {
        question:
          "How would you handle different engine types (electric, gas, hybrid)?",
        answer:
          "I'd create an Engine class and compose it in Vehicle. Then fuel_efficiency would depend on the engine type. This follows composition over inheritance, making it more flexible.",
      },
      {
        question:
          "What if you need to add a method for towing capacity only for Truck?",
        answer:
          "That's fine – add it to the Truck subclass. That's a specific method that doesn't belong to all vehicles. The base class should have only common methods.",
      },
    ],
    commonMistakes: [
      "Putting too much in the base class, making it bloated.",
      "Not using abstract methods for methods that must be implemented.",
      "Forgetting to call super().__init__() in subclasses.",
    ],
    example:
      '**Code Implementation & Walkthrough:**\n```python\nclass Vehicle:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n    def start(self):\n        print("Engine started")\n\nclass Car(Vehicle):\n    def __init__(self, make, model, year, doors):\n        super().__init__(make, model, year)\n        self.doors = doors\n\n# Usage\nc = Car("Toyota", "Camry", 2022, 4)\nc.start()  # Engine started\n```',
  },

  // ----- Technical Analyst: DSA Fundamentals – Sorting & Searching
  {
    id: "tech-dsa-sort-087",
    slug: "quicksort-implementation",
    question:
      "Implement the quicksort algorithm in Python. Explain the pivot selection and partition logic. Analyze time and space complexity.",
    directions: ["Technical Analyst"],
    type: "Coding",
    category: "technical",
    subject: "DSA Fundamentals",
    topic: "Sorting & Searching",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Quicksort uses divide-and-conquer: pick a pivot, partition array into elements less than and greater than pivot, then recursively sort. Average O(n log n), worst O(n²) with poor pivot.",
    explanation:
      "Implementation: def quicksort(arr): if len(arr) <= 1: return arr; pivot = arr[len(arr)//2]; left = [x for x in arr if x < pivot]; middle = [x for x in arr if x == pivot]; right = [x for x in arr if x > pivot]; return quicksort(left) + middle + quicksort(right). This is a simple version. For in-place, use two pointers. Common pivot strategies: first, last, median-of-three, or random. Complexity: average O(n log n), worst O(n²) (when pivot is always the smallest or largest). Space: O(log n) for recursion stack (in-place) or O(n) for the list comprehension version. In interviews, discuss trade-offs and how to avoid worst case.",
    followUps: [
      {
        question:
          "How would you choose a pivot to avoid worst-case performance?",
        answer:
          "Use random pivot selection or median-of-three (take median of first, middle, last). This ensures the pivot is more likely to be balanced, making worst-case rare.",
      },
      {
        question: "Can you implement an in-place version?",
        answer:
          "Yes, use a partition function: def partition(arr, low, high): pivot = arr[high]; i = low - 1; for j in range(low, high): if arr[j] <= pivot: i += 1; arr[i], arr[j] = arr[j], arr[i]; arr[i+1], arr[high] = arr[high], arr[i+1]; return i+1. Then recursively sort low..pi-1 and pi+1..high. This is O(log n) space.",
      },
    ],
    commonMistakes: [
      "Not handling duplicate values correctly.",
      "Choosing a fixed pivot (e.g., first) that can lead to worst case on sorted input.",
      "Forgetting the base case for recursion.",
    ],
    example:
      "**Code Implementation & Walkthrough:**\n```python\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr)//2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\nprint(quicksort([3,6,8,10,1,2,1]))  # [1,1,2,3,6,8,10]\n```",
    relatedQuestions: [
      "binary-search-implementation",
      "container-with-most-water",
      "first-non-repeating-character",
    ],
  },

  // ----- Technical Analyst: AI & Cloud – GenAI Basics
  {
    id: "tech-ai-gen-088",
    slug: "prompt-engineering-techniques",
    question:
      "What are the main prompt engineering techniques for LLMs? Provide examples for few-shot, chain-of-thought, and role-playing.",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "AI & Cloud",
    topic: "GenAI Basics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Few-shot: provide examples. Chain-of-thought: guide reasoning step-by-step. Role-playing: assign a persona. These improve output quality and reliability.",
    explanation:
      "Few-shot prompting: give the model a few input-output examples to illustrate the desired format (e.g., translating English to French with 3 examples). Chain-of-thought: instruct the model to think step by step, especially for arithmetic or logic problems (e.g., 'Let's think step by step'). Role-playing: assign a persona (e.g., 'You are a customer support agent') to adapt tone and knowledge. These techniques reduce hallucinations and improve coherence. Also consider: system prompts, output formatting (JSON), and iterative refinement. In practice, combine techniques for best results.",
    followUps: [
      {
        question: "When would you use few-shot vs. zero-shot?",
        answer:
          "Zero-shot is for general tasks where the model already knows the format. Few-shot is for niche tasks or when you need consistent structure. Few-shot often yields higher accuracy but costs more tokens.",
      },
      {
        question: "How do you measure the effectiveness of a prompt?",
        answer:
          "Use an evaluation set with expected outputs. Compare accuracy, coherence, and relevance. Iterate by tweaking prompt components and measuring performance changes.",
      },
    ],
    commonMistakes: [
      "Overloading the prompt with too many examples, wasting tokens.",
      "Not providing clear instructions for complex tasks.",
      "Forgetting to handle edge cases in the prompt.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Customer support chatbot had low resolution rate (40%).\n- **Intervention:** Used chain-of-thought prompts to guide the model through troubleshooting steps and few-shot examples of successful resolutions.\n- **Outcome:** Resolution rate increased to 68% and customer satisfaction improved by 15%.",
    relatedQuestions: [
      "llm-generation-parameters",
      "rag-architecture-explanation",
      "aws-vs-azure-vs-gcp",
    ],
  },

  // ----- Consulting & Strategy: Case Interviews – Growth Strategy (new)
  {
    id: "consult-growth-089",
    slug: "saas-upsell-strategy",
    question:
      "A SaaS company has a 60% annual retention rate for its existing customers. How would you develop a strategy to increase revenue through upsells and cross-sells?",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "behavioral",
    subject: "Case Interviews",
    topic: "Growth Strategy",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Analyze customer usage patterns to identify upsell triggers, train sales/CS teams on upselling, and offer tiered packages with clear value-add features.",
    explanation:
      "First, segment customers by usage and engagement. Identify which features drive retention and which ones are underused. For upsells, identify customers who have reached usage limits or are missing key features. For cross-sells, analyze complementary products. Create a customer health score to prioritize outreach. Train customer success managers to have consultative conversations about expanding value. Offer promotional upgrades (e.g., discount for the first 3 months). Also, use in-app messaging to highlight premium features. Measure success by expansion MRR and net revenue retention (NRR). Run A/B tests on pricing and messaging.",
    followUps: [
      {
        question: "What if customers are price-sensitive and resist upsells?",
        answer:
          "Focus on demonstrating ROI: show how the premium features save time or increase revenue. Offer a free trial of the premium tier. If still resistant, consider a loyalty discount for annual commitment.",
      },
      {
        question:
          "How would you measure the effectiveness of the upsell program?",
        answer:
          "Track uplift in expansion MRR, conversion rates from free trial to premium, and customer satisfaction. Also monitor churn among upsell customers – they should have higher retention.",
      },
    ],
    commonMistakes: [
      "Upselling too aggressively, leading to churn.",
      "Not having a clear value proposition for the upgrade.",
      "Ignoring the need for sales training and enablement.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Upsell revenue was only 5% of total MRR.\n- **Intervention:** Implemented a customer health score; CS team proactively offered upgrades to high-usage accounts; introduced a 'recommended upgrade' pop-up.\n- **Outcome:** Upsell revenue grew to 18% of MRR within 9 months, and overall NRR increased from 95% to 105%.",
    relatedQuestions: [
      "bank-growth-strategy",
      "online-course-revenue-growth",
      "pricing-strategy-for-saas",
    ],
  },

  // ----- Consulting & Strategy: Business Analytics – Revenue Growth (new)
  {
    id: "consult-rev-090",
    slug: "new-customer-acquisition-campaign",
    question:
      "You are launching a new customer acquisition campaign with a $100,000 budget. How would you design, execute, and measure the campaign's success?",
    directions: ["Consulting & Strategy"],
    type: "Business Case",
    category: "behavioral",
    subject: "Business Analytics",
    topic: "Revenue Growth",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Define target audience, select channels, set clear KPIs (CAC, conversion, ROI), run A/B tests, and track performance daily. Optimize allocation based on channel performance.",
    explanation:
      "Start with a clear objective: acquire X number of new customers at a target CAC. Segment the audience (e.g., by persona). Choose channels: paid search, social, content, partnerships. Allocate budget based on historical performance and expected returns. Create multiple ad creatives and landing pages for A/B testing. Set up tracking (UTM parameters, conversion pixels). Monitor daily: impressions, clicks, conversions, cost per acquisition. After a week, shift budget to top-performing channels and creatives. After the campaign, compute ROI = (LTV of new customers - campaign cost) / campaign cost. Also, measure brand lift and engagement. Document lessons for future campaigns.",
    followUps: [
      {
        question: "What if the campaign fails to meet targets halfway through?",
        answer:
          "I'd pause and analyze: is it the channel, creative, or offer? Adjust quickly: change messaging, tweak targeting, or offer a limited-time discount. If performance doesn't improve, I'd cut losses and reallocate to other marketing efforts.",
      },
      {
        question:
          "How would you ensure the campaign doesn't cannibalize organic acquisition?",
        answer:
          "Use a holdout group (a control group that does not see the ads) to measure incremental lift. Compare conversion rates between exposed and unexposed groups to isolate the true impact.",
      },
    ],
    commonMistakes: [
      "Spending the entire budget without monitoring performance.",
      "Not having a clear target audience.",
      "Ignoring the long-term impact on customer lifetime value.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Previous campaigns had a CAC of $80 with a 2% conversion rate.\n- **Intervention:** Ran A/B tests on Facebook and Google; optimized ads for mobile users; offered a first-month discount.\n- **Outcome:** Achieved a CAC of $65 and conversion rate of 2.8%, resulting in 1,200 new customers and a 20% ROI in the first quarter.",
    relatedQuestions: [
      "online-course-revenue-growth",
      "subscription-renewal-optimization",
      "pricing-strategy-for-saas",
    ],
  },

  // ----- Consulting & Strategy: Fit & Behavioural – Leadership (new)
  {
    id: "consult-fit-091",
    slug: "influencing-without-authority",
    question:
      "Describe a time when you had to influence a decision or project without having formal authority over the people involved. How did you approach it?",
    directions: ["Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Fit & Behavioural",
    topic: "Leadership",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "I built relationships, used data to support my case, and appealed to shared goals. I collaborated rather than dictated, which gained buy-in and respect.",
    explanation:
      "In a previous role, I needed to convince the engineering team to prioritize a technical debt project that was not on their roadmap. I didn't have authority over them. I first built a rapport with the lead engineer by discussing their challenges. I then presented data showing how technical debt was causing customer support tickets and slowing feature delivery. I proposed a compromise: allocate 20% of sprint capacity for three months. I offered to help with documentation and testing. I also highlighted how this aligned with the company's goal of improving customer satisfaction. The team agreed, and we successfully reduced support tickets by 30%.",
    followUps: [
      {
        question: "What if the other party was resistant despite your data?",
        answer:
          "I'd try to understand their resistance: is it fear of failure, lack of resources, or competing priorities? I'd then propose a pilot to test the impact, reducing risk. I'd also seek support from a senior leader to endorse the initiative.",
      },
      {
        question:
          "How do you maintain credibility when influencing without authority?",
        answer:
          "By being consistent, reliable, and always delivering on promises. I also actively listen and incorporate their feedback, showing that I value their expertise. Over time, trust builds and influence becomes easier.",
      },
    ],
    commonMistakes: [
      "Trying to force your idea without building relationships.",
      "Not preparing solid data to back your proposal.",
      "Ignoring the other party's constraints and objectives.",
    ],
    example:
      "**Real-World STAR Framework Example:**\n- **Situation:** Needed to adopt a new analytics tool; the data engineering team preferred the existing one.\n- **Task:** Persuade them to switch without being their manager.\n- **Action:** Ran a side-by-side comparison, showed time saved (40% faster queries), and offered to handle the migration with their oversight.\n- **Result:** They agreed, migration went smoothly, and the team adopted the tool, saving 20 hours per month.",
    relatedQuestions: [
      "mentoring-junior-team-member",
      "resolving-cross-functional-conflict",
      "stakeholder-conflict-resolution",
    ],
  },

  // ----- Data & BI: Excel – Descriptive Statistics (new)
  {
    id: "dbi-stats-092",
    slug: "z-score-and-outliers-excel",
    question:
      "In Excel, how would you calculate Z-scores for a dataset and identify outliers using the Z-score method?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Descriptive Statistics",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Calculate mean and standard deviation, then Z = (value - mean) / std_dev. Flag values with |Z| > 3 as outliers.",
    explanation:
      "Assuming data in column A (A2:A100). Compute mean = AVERAGE(A2:A100) and std = STDEV.S(A2:A100). In column B, enter formula: =(A2 - mean) / std and copy down. Then use conditional formatting to highlight cells where ABS(B2) > 3. This flags outliers. Alternatively, use the 'Identify Outliers' add-in or sort by Z-score. This method works for roughly normal data. For skewed data, use the IQR method instead (Q1 - 1.5*IQR and Q3 + 1.5*IQR).",
    followUps: [
      {
        question: "What if the data is not normally distributed?",
        answer:
          "Z-score may not be appropriate. Use IQR or median absolute deviation (MAD). I'd compute quartiles and identify values outside 1.5*IQR. That is more robust.",
      },
      {
        question:
          "How would you decide whether to remove outliers or keep them?",
        answer:
          "I'd investigate each outlier: is it a data entry error, a genuine extreme, or a rare event? If it's an error, remove. If it's genuine, consider whether it skews analysis. Sometimes you keep them and report both with and without to show sensitivity.",
      },
    ],
    commonMistakes: [
      "Using population standard deviation (STDEV.P) instead of sample (STDEV.S).",
      "Assuming outliers are always bad to remove.",
      "Not documenting outlier treatment.",
    ],
    example:
      "**Excel Formula & Model Structure:**\n- **Data:** `A2:A100`\n- **Mean:** `=AVERAGE(A2:A100)` → in cell D1\n- **Std:** `=STDEV.S(A2:A100)` → in cell D2\n- **Z-score:** `=(A2-D$1)/D$2` (drag down)\n- **Conditional Format:** Rule for `=ABS(B2)>3` with red fill.\n- **Result:** Outliers are highlighted for further investigation.",
  },

  // ----- Business & Operations: Business Problem Solving – Root Cause Analysis
  {
    id: "problem-root-093",
    slug: "website-bounce-rate-increase",
    question:
      "Our website bounce rate has increased from 45% to 60% in the last month. How would you diagnose and fix this?",
    directions: ["Business & Operations"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Business Problem Solving",
    topic: "Root Cause Analysis",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Segment bounce rate by traffic source, device, landing page, and user segment. Correlate with recent changes (site updates, marketing campaigns) and use heatmaps to identify UX issues.",
    explanation:
      "First, confirm the bounce rate increase using analytics. Then break it down: by channel (organic, paid, social, direct), by device (mobile, desktop), by landing page. See if a particular page or source is driving the spike. Check for recent changes: new design, slower load times, pop-ups, or content changes. Use user session recordings and heatmaps to see where users lose interest. Also, check if the increase coincided with a marketing campaign that brought lower-quality traffic. Implement fixes: improve page load speed, simplify navigation, make call-to-actions more visible, and ensure content matches user intent. A/B test changes and monitor bounce rate.",
    followUps: [
      {
        question: "What if the bounce rate increase is only on mobile devices?",
        answer:
          "Then focus on mobile UX: is the site responsive? Are buttons easy to tap? Is the font legible? Also, check mobile page speed. A mobile-specific fix could resolve the issue.",
      },
      {
        question: "How would you measure the impact of your fixes?",
        answer:
          "Track bounce rate daily for a few weeks after the fix. Also monitor conversion rate and time on page. Use a split test to isolate the impact of each change.",
      },
    ],
    commonMistakes: [
      "Looking only at overall bounce rate without segmentation.",
      "Assuming the problem is UX without data.",
      "Not testing fixes before implementing them site-wide.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Bounce rate jumped to 60% after a homepage redesign.\n- **Intervention:** Reverted to the old design for a segment; A/B tested with a simplified layout; improved loading time by 30%.\n- **Outcome:** Bounce rate returned to 47% within 2 weeks, and conversion rate improved by 5%.",
    relatedQuestions: [
      "ecommerce-abandoned-cart-analysis",
      "customer-support-ticket-volumes",
      "product-return-rate-analysis",
    ],
  },

  // ----- Data & BI: Analytics Fundamentals – Business Metrics (new)
  {
    id: "dbi-fund-094",
    slug: "product-market-fit-metric",
    question:
      "How would you measure product-market fit for a B2B SaaS product? What metrics would you track beyond just revenue?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Analytics Fundamentals",
    topic: "Business Metrics",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use metrics like Net Promoter Score (NPS), customer retention rate, usage frequency, and win/loss ratio. The 'super-committed user' metric (e.g., 40% of users would be 'very disappointed' without the product) is a strong indicator.",
    explanation:
      "Product-market fit means customers are actively using and loving your product. Key metrics: NPS (should be >50 for B2B), retention rate (monthly churn <5%), and expansion revenue (upsell/cross-sell). Also, measure feature adoption: are users using the core features? Win/loss ratio in sales: if you win >50% of competitive deals, it's a sign. Another classic test: ask users how they'd feel if they could no longer use the product; if >40% say 'very disappointed', you have fit. Also track organic growth: word-of-mouth referrals. Combine these to assess fit, and use surveys to gather qualitative feedback.",
    followUps: [
      {
        question: "What if NPS is high but retention is low?",
        answer:
          "That suggests users like the product but it may not be essential. They may be 'accidental' users. Dig deeper: why are they leaving? Maybe pricing or competition. Or they are using the product but not consistently. You need to increase stickiness.",
      },
      {
        question: "How do you use these metrics to improve product-market fit?",
        answer:
          "Segment users by these metrics: high retention + high NPS are your core users. Study their behavior to understand what makes them stick. Then replicate that for other segments. Also, identify features that correlate with retention and double down on them.",
      },
    ],
    commonMistakes: [
      "Relying only on revenue as a proxy for fit.",
      "Not segmenting metrics by user type (e.g., power users vs. casual).",
      "Ignoring the importance of qualitative feedback.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Revenue was growing but churn was 6% monthly and NPS was 35.\n- **Intervention:** Introduced onboarding automation, improved key feature discoverability, and added a community forum.\n- **Outcome:** Churn dropped to 3.5%, NPS rose to 52, and the 'very disappointed' metric reached 42% – confirming product-market fit.",
    relatedQuestions: [
      "north-star-metric-identification",
      "retention-cohort-powerbi",
      "subscriber-acquisition-cost-spike",
    ],
  },

  // ----- Technical Analyst: AI & Cloud – Cloud Basics (new)
  {
    id: "tech-cloud-095",
    slug: "serverless-vs-containers",
    question:
      "Compare serverless computing (e.g., AWS Lambda) with container-based (e.g., ECS, EKS) for a data processing workload. When would you choose each?",
    directions: ["Technical Analyst"],
    type: "Technical",
    category: "technical",
    subject: "AI & Cloud",
    topic: "Cloud Basics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Serverless is event-driven, auto-scaling, and low maintenance – ideal for sporadic or low-volume tasks. Containers provide more control, persistent storage, and better for long-running or stateful workloads.",
    explanation:
      "Serverless (Lambda): you pay per invocation, no infrastructure management, scales automatically. Best for batch jobs, API backends, and tasks that run intermittently. Cold starts can be a concern. Containers (ECS/Kubernetes): you manage the cluster, have access to the full OS, and can run long-lived services. Better for stateful applications, machine learning inference, and microservices with complex dependencies. For data processing: if you have periodic ETL jobs that run for minutes, serverless is cheaper. If you have a streaming pipeline that runs 24/7, containers may be more cost-effective at scale. Also consider team expertise and operational overhead.",
    followUps: [
      {
        question: "How would you decide between ECS and EKS?",
        answer:
          "ECS is simpler and integrated with AWS services, good for standard container workloads. EKS is Kubernetes, which is more portable but complex. Choose EKS if you need multi-cloud or have Kubernetes expertise.",
      },
      {
        question: "What about cold starts in serverless – how do you mitigate?",
        answer:
          "Use provisioned concurrency, keep functions warm with scheduled invocations, or choose a runtime with faster startup (e.g., Python over Java). Also, design for idempotency to handle retries.",
      },
    ],
    commonMistakes: [
      "Using serverless for long-running tasks (timeout limits).",
      "Underestimating container orchestration complexity.",
      "Not considering cost trade-offs for high-volume workloads.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** ETL jobs ran on EC2 instances 24/7, costing $500/month.\n- **Intervention:** Moved to AWS Lambda for hourly ETL jobs, with a 5-minute runtime each.\n- **Outcome:** Cost reduced to $30/month, with no maintenance overhead. For a 24/7 streaming pipeline, containers were chosen to handle state and reduce latency.",
    relatedQuestions: [
      "aws-vs-azure-vs-gcp",
      "llm-generation-parameters",
      "rag-architecture-explanation",
    ],
  },

  // ----- Consulting & Strategy: Guesstimates – Market Sizing (new)
  {
    id: "consult-guest-096",
    slug: "pet-food-market-size",
    question:
      "Estimate the annual market size for premium dog food in the United States.",
    directions: ["Consulting & Strategy"],
    type: "Guesstimate",
    category: "behavioral",
    subject: "Guesstimates",
    topic: "Market Sizing",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "US population 330M, dog ownership ~40% → 132M dogs. Premium dog food share ~25% of total dog food market. Average spend per dog per month on premium food ~$50. Annual market ≈ 132M * 0.25 * $50 * 12 = $19.8B.",
    explanation:
      "Start with total households: 330M / 2.5 people/household = 132M households. Dog ownership: about 40% of households own a dog → 52.8M households with dogs. Average dogs per household: 1.5 → ~79M dogs. Total dog food market: average spend per dog per month ~$30 (including regular and premium) = 79M * $30 * 12 = $28.4B. Premium segment: assume 25% of dog owners buy premium (specialty, grain-free, organic) and spend $50/month → premium market = 79M * 0.25 * $50 * 12 = $11.85B. Alternatively, using population-based estimates yields similar numbers. Provide a range, and note that premium is growing faster.",
    followUps: [
      {
        question: "How would you refine this estimate with more data?",
        answer:
          "I'd use industry reports (e.g., APPA) for exact figures. I'd also segment by region (urban vs. rural) and by dog size (large dogs eat more). Also, consider subscription services (e.g., fresh food) which have higher prices.",
      },
      {
        question: "What if the premium segment is growing at 15% annually?",
        answer:
          "Then I'd project future market size: $11.85B * (1.15)^3 for a 3-year view. This helps in strategic planning for a new brand entry.",
      },
    ],
    commonMistakes: [
      "Not distinguishing between total dog food and premium.",
      "Using only household count without adjusting for multiple dogs.",
      "Forgetting to annualize the monthly spend.",
    ],
    example:
      "**Concrete Step-by-Step Calculation:**\n1. **US households:** 330M / 2.5 = 132M.\n2. **Dog-owning households:** 132M * 0.4 = 52.8M.\n3. **Total dogs:** 52.8M * 1.5 = 79M.\n4. **Premium share:** 25% → 19.75M dogs on premium.\n5. **Monthly premium spend:** $50 → $987.5M per month.\n6. **Annual:** $987.5M * 12 = $11.85B.",
  },

  // ----- Consulting & Strategy: Market Analysis – Market Entry (new)
  {
    id: "consult-entry-097",
    slug: "india-market-entry-strategy",
    question:
      "A US-based consumer goods company wants to enter the Indian market. How would you develop an entry strategy considering local competition, culture, and regulations?",
    directions: ["Consulting & Strategy"],
    type: "Case Study",
    category: "behavioral",
    subject: "Market Analysis",
    topic: "Market Entry",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Conduct a PESTLE analysis, assess market attractiveness (size, growth, competition), choose entry mode (export, JV, or 100% subsidiary), and localize product, pricing, and distribution.",
    explanation:
      "PESTLE: Political (stable democracy, foreign investment rules), Economic (fast-growing, price-sensitive), Social (diverse preferences, rising middle class), Technological (high mobile penetration), Legal (FDI restrictions, labeling laws), Environmental (sustainability concerns). Market size: $1.5B for consumer goods, growing 10% annually. Competition: local and global players. Entry mode: 100% FDI allowed in many sectors; choose joint venture with a local partner to navigate regulations and distribution. Localization: adapt packaging (e.g., smaller sizes, lower price points), flavors, and marketing (regional languages). Distribution: leverage e-commerce and traditional retail. Recommend a phased entry: test online, then select cities, then expand.",
    followUps: [
      {
        question: "How would you handle price sensitivity in India?",
        answer:
          "Offer a basic product at a lower price point (small pack sizes) and a premium version for higher-income segments. Use value-for-money messaging. Also, consider local production to reduce costs.",
      },
      {
        question: "What are the biggest risks of entering India?",
        answer:
          "Regulatory complexity, intense competition, cultural missteps, and supply chain infrastructure. Mitigate with local partnerships, extensive market research, and a flexible strategy.",
      },
    ],
    commonMistakes: [
      "Treating India as a single homogeneous market.",
      "Underestimating regulatory and bureaucratic hurdles.",
      "Not investing in local distribution networks.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** A beverage company entered India with a standard US product.\n- **Intervention:** Adapted to local tastes (spicier flavors), reduced price by 30%, and partnered with a local bottler.\n- **Outcome:** Captured 5% market share in 2 years, became profitable in year 3.",
    relatedQuestions: [
      "european-market-entry-strategy",
      "new-health-drink-competition",
      "market-expansion-strategy",
    ],
  },

  // ----- Fit & Behavioural – Team Conflict (new)
  {
    id: "consult-fit-098",
    slug: "handling-difficult-stakeholder",
    question:
      "Describe a situation where you had to work with a difficult stakeholder who was uncooperative. How did you manage the relationship and achieve the project goals?",
    directions: ["Consulting & Strategy"],
    type: "Fit & Behavioural",
    category: "behavioral",
    subject: "Fit & Behavioural",
    topic: "Team Conflict",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "I actively listened to their concerns, found common ground, and used data to support my proposals. I maintained professionalism and escalated only when necessary.",
    explanation:
      "In a project, a key stakeholder in the finance department repeatedly delayed approvals and questioned our assumptions. I scheduled a 1:1 meeting to understand their concerns. They were worried about budget overruns. I showed them a detailed cost-benefit analysis and suggested phased funding. I also involved them early in decision-making to give them ownership. I provided regular updates and always came prepared with data. Over time, they became more supportive. The project was delivered on time and within budget, and we built a respectful working relationship. The key was empathy and transparency.",
    followUps: [
      {
        question:
          "What if the stakeholder remained difficult despite your efforts?",
        answer:
          "I'd escalate to a higher authority if it jeopardized the project, but I'd do so with documentation of my attempts to resolve it. I'd also seek mediation from a neutral party.",
      },
      {
        question: "How do you maintain your own composure in such situations?",
        answer:
          "I focus on the issue, not the person. I remind myself that we have a shared objective. I also practice active listening and take a step back if emotions rise.",
      },
    ],
    commonMistakes: [
      "Being confrontational or defensive.",
      "Ignoring the stakeholder's underlying concerns.",
      "Not involving them early enough.",
    ],
    example:
      "**Real-World STAR Framework Example:**\n- **Situation:** The VP of Sales refused to share pipeline data, hindering the forecast.\n- **Task:** Gain access without damaging the relationship.\n- **Action:** Explained that the data would help build better sales support; offered to share aggregated insights with them first; proposed a trial period.\n- **Result:** They agreed, and the forecast accuracy improved by 15%.",
    relatedQuestions: [
      "resolving-cross-functional-conflict",
      "stakeholder-conflict-resolution",
      "influencing-without-authority",
    ],
  },
  // =============================================================================
  // ADDITIONAL DATA & BI QUESTIONS – Batch 3
  // =============================================================================

  // ----- SQL: Joins
  {
    id: "dbi-joins-099",
    slug: "left-join-vs-inner-join-example",
    question:
      "Given a users table and orders table, write a query to find all users and their total order amounts, including those with no orders. Explain the difference between INNER JOIN and LEFT JOIN in this context.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Joins",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use LEFT JOIN to include all users, even those with no orders. Use COALESCE to handle NULL totals.",
    explanation:
      "SELECT u.user_id, u.name, COALESCE(SUM(o.amount), 0) AS total_spent FROM users u LEFT JOIN orders o ON u.user_id = o.user_id GROUP BY u.user_id, u.name; This includes users with zero orders. INNER JOIN would exclude them. LEFT JOIN is crucial for reporting on all users. Also consider performance: if you only need users with orders, INNER JOIN is faster. Always choose the appropriate join based on your needs.",
    followUps: [
      {
        question: "How would you find users who have never placed an order?",
        answer:
          "SELECT u.* FROM users u LEFT JOIN orders o ON u.user_id = o.user_id WHERE o.order_id IS NULL;",
      },
      {
        question:
          "What if you have multiple tables (e.g., products, categories) – how would you structure joins?",
        answer:
          "Chain joins: FROM orders o JOIN products p ON o.product_id = p.id JOIN categories c ON p.category_id = c.id. Ensure you use proper keys.",
      },
    ],
    commonMistakes: [
      "Using INNER JOIN when you need all rows from the left table.",
      "Forgetting to handle NULLs in aggregate functions.",
      "Not indexing join columns.",
    ],
    example:
      "**Scenario & Sample Data:**\nConsider users table (user_id, name) and orders (order_id, user_id, amount).\n`SELECT u.user_id, u.name, SUM(o.amount) AS total FROM users u LEFT JOIN orders o ON u.user_id = o.user_id GROUP BY u.user_id, u.name;`\nResult includes all users, with NULL total for those with no orders.",
    relatedQuestions: [
      "customer-orders-join-analysis",
      "monthly-sales-aggregation",
      "employee-salary-rankings",
    ],
  },

  // ----- SQL: Window Functions
  {
    id: "dbi-window-100",
    slug: "ntile-percentile-sql",
    question:
      "Write a SQL query to assign customers to quartiles based on their total spending using the NTILE window function.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Window Functions",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use NTILE(4) OVER (ORDER BY total_spent DESC) to divide customers into four equal groups.",
    explanation:
      "WITH customer_spending AS (SELECT customer_id, SUM(amount) AS total_spent FROM orders GROUP BY customer_id) SELECT customer_id, total_spent, NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile FROM customer_spending; This assigns each customer to a quartile (1=top 25%). NTILE is useful for segmentation. If the number of rows is not divisible by 4, NTILE will distribute as evenly as possible. For percentiles, you can also use PERCENT_RANK(). This is helpful for identifying high-value vs. low-value customers.",
    followUps: [
      {
        question: "What is the difference between NTILE and PERCENT_RANK?",
        answer:
          "NTILE assigns a discrete rank into buckets (e.g., quartile 1-4). PERCENT_RANK gives a continuous value from 0 to 1 representing the percentile rank (rank-1)/(total-1).",
      },
      {
        question: "How would you handle ties in NTILE?",
        answer:
          "NTILE will distribute ties arbitrarily; if you need consistent tie handling, you can add a tie-breaker in ORDER BY (e.g., customer_id).",
      },
    ],
    commonMistakes: [
      "Not ordering by the correct column.",
      "Using NTILE when you need a specific percentile (use PERCENTILE_CONT instead).",
      "Forgetting that NTILE creates equal-sized buckets, not equal-value thresholds.",
    ],
    example:
      "**Scenario & Sample Data:**\nCustomer spending: [100, 90, 80, 70, 60, 50, 40, 30]\nNTILE(4) yields: 1,1,1,1? Actually 8 rows -> 2 per quartile, so quartile 1: 100,90; quartile 2: 80,70; etc.",
    relatedQuestions: [
      "employee-salary-rankings",
      "monthly-sales-aggregation",
      "customer-lifetime-value-cte",
    ],
  },

  // ----- SQL: Aggregation
  {
    id: "dbi-agg-101",
    slug: "group-by-with-rollup",
    question:
      "Write a SQL query using GROUP BY ROLLUP to show sales totals by product category and region, including subtotals and grand total.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Aggregation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Use GROUP BY ROLLUP(category, region) to get subtotals for each category and a grand total.",
    explanation:
      "SELECT category, region, SUM(sales) AS total_sales FROM sales_table GROUP BY ROLLUP(category, region); This produces rows with (category, region, total) for each combination, plus (category, NULL, total) for category subtotals, and (NULL, NULL, total) for grand total. This is useful for drill-down reporting. Alternatively, use CUBE for all combinations, but ROLLUP is more commonly used for hierarchical aggregation. In PostgreSQL, you can also use GROUPING SETS to customize.",
    followUps: [
      {
        question: "What is the difference between ROLLUP and CUBE?",
        answer:
          "ROLLUP produces subtotals for a hierarchy (e.g., category then region). CUBE produces all possible combinations (category total, region total, and grand total), which can be more expensive.",
      },
      {
        question:
          "How would you identify which rows are subtotals in the result?",
        answer:
          "Use the GROUPING() function: SELECT category, region, SUM(sales), GROUPING(category) as cat_group, GROUPING(region) as reg_group. Rows with 1 indicate a subtotal row.",
      },
    ],
    commonMistakes: [
      "Using CUBE when ROLLUP is sufficient, causing performance hit.",
      "Not handling NULLs in the result set (subtitles appear as NULL).",
      "Forgetting to use GROUP BY with the correct columns.",
    ],
    example:
      "**Scenario:** Sales table with category (Electronics, Clothing) and region (North, South).\nROLLUP gives:\n(Electronics, North, total), (Electronics, South, total), (Electronics, NULL, subtotal), (Clothing, North, total), (Clothing, South, total), (Clothing, NULL, subtotal), (NULL, NULL, grand total).",
    relatedQuestions: [
      "monthly-sales-aggregation",
      "customer-lifetime-value-cte",
      "top-selling-products-by-month",
    ],
  },

  // ----- SQL: CTEs & Subqueries
  {
    id: "dbi-cte-102",
    slug: "cte-for-deduping",
    question:
      "Write a query using a CTE to remove duplicate rows from a table based on a combination of columns, keeping only the latest record per grouping.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "CTEs & Subqueries",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Use a CTE with ROW_NUMBER() partitioned by the duplicate key columns, ordered by timestamp descending, then filter where row_num = 1.",
    explanation:
      "WITH deduped AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id, product_id ORDER BY updated_at DESC) AS rn FROM purchase_history) SELECT * FROM deduped WHERE rn = 1; This keeps only the most recent record per customer-product pair. This is a common pattern for deduplication. You can also use this to update the original table with the deduped dataset. Ensure you have proper indexes for performance. For large tables, you might want to batch process.",
    followUps: [
      {
        question:
          "What if you want to delete duplicates from the table, not just select?",
        answer:
          "You can use the CTE with a DELETE statement: WITH to_delete AS (SELECT ctid, ROW_NUMBER() OVER (PARTITION BY ...) AS rn FROM table) DELETE FROM table WHERE ctid IN (SELECT ctid FROM to_delete WHERE rn > 1);",
      },
      {
        question:
          "How would you handle ties in the ordering (two rows with same timestamp)?",
        answer:
          "Add an additional column to the ORDER BY (e.g., id) to make it deterministic. Otherwise, you may get arbitrary results.",
      },
    ],
    commonMistakes: [
      "Not partitioning correctly, leading to incorrect deduping.",
      "Forgetting to order by the correct column to get the latest.",
      "Using DISTINCT which may not work if non-duplicate columns exist.",
    ],
    example:
      "**Scenario:** purchase_history with (purchase_id, customer_id, product_id, amount, created_at).\nAfter dedupe, only the latest purchase per customer-product remains.",
    relatedQuestions: [
      "customer-lifetime-value-cte",
      "monthly-sales-aggregation",
      "employee-salary-rankings",
    ],
  },

  // ----- Excel: Charts & Visualisation
  {
    id: "dbi-chart-104",
    slug: "excel-combo-chart-dual-axis",
    question:
      "Create a combo chart in Excel showing monthly sales as bars and profit margin as a line on a secondary axis. Explain the steps.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Charts & Visualisation",
    difficulty: "easy",
    access: "paid",
    shortAnswer:
      "Select the data, insert a combo chart, choose Clustered Column for sales, Line for profit margin, and check Secondary Axis for profit margin.",
    explanation:
      "Select the data range (Month, Sales, Profit Margin). Go to Insert > Combo Chart > Create Custom Combo Chart. Set Sales to Clustered Column and Profit Margin to Line with Secondary Axis. This allows you to compare two different scales on one chart. Ensure both axes are clearly labeled. You can also format the line with markers. This is useful for dashboards where you want to show volume and efficiency together.",
    followUps: [
      {
        question: "When would you use a secondary axis?",
        answer:
          "When you have two data series with different units or scales (e.g., revenue and percentage). Without it, one series would be too small to see.",
      },
      {
        question: "How do you ensure the chart is not misleading?",
        answer:
          "Clearly label both axes, and use a footnote if needed. Avoid using two axes if the scales are similar; it can confuse readers.",
      },
    ],
    commonMistakes: [
      "Using a secondary axis when not necessary.",
      "Not labeling axes properly.",
      "Ignoring the scale differences which can mislead.",
    ],
    example:
      "**Excel Chart:** Sales range from $1M-$5M, Profit Margin from 10%-20%. The combo chart shows both clearly.",
    relatedQuestions: [
      "excel-sales-dashboard-visualization",
      "power-bi-chart-selection-guide",
      "descriptive-statistics-excel",
    ],
  },

  // ----- Excel: Descriptive Statistics
  {
    id: "dbi-stats-105",
    slug: "excel-histogram-bins",
    question:
      "How would you create a histogram in Excel to visualize the distribution of customer ages? What bin width would you choose and why?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Descriptive Statistics",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Use the Histogram tool in Data Analysis Toolpak, or use the FREQUENCY function with bins. Choose bin width based on data range and desired granularity (e.g., 5-year bins for ages 18-65).",
    explanation:
      "In Excel, you can use the Histogram tool (Data > Data Analysis > Histogram). Specify input range and bin range. Alternatively, use FREQUENCY array function. For customer ages, if range is 18-65, bin width of 5 (e.g., 20,25,30,...) gives 10 bins, which is reasonable. Too few bins hide detail, too many create noise. Also consider the sample size: for large n, more bins are fine. You can also use the built-in chart recommendation (Insert > Histogram). This helps in understanding age distribution for targeting.",
    followUps: [
      {
        question:
          "What if you have a very large dataset with ages from 18 to 100?",
        answer:
          "Consider bin width of 10, or use percentiles (e.g., deciles). You can also create a cumulative frequency chart.",
      },
      {
        question: "How do you interpret a skewed histogram?",
        answer:
          "If the tail is to the right (positive skew), the mean > median. If left, mean < median. This informs which average measure to use.",
      },
    ],
    commonMistakes: [
      "Choosing bin width arbitrarily.",
      "Not labeling bins correctly.",
      "Using too many or too few bins.",
    ],
    example:
      "**Excel Histogram:** For ages 18-65, bins: 20,25,30,35,40,45,50,55,60,65. The histogram shows a peak in 25-30 age group.",
    relatedQuestions: [
      "central-tendency-measures",
      "z-score-and-outliers-excel",
      "descriptive-statistics-excel",
    ],
  },

  // ----- Power BI: Dashboards
  {
    id: "dbi-pbi-106",
    slug: "marketing-spend-dashboard-powerbi",
    question:
      "Design a Power BI dashboard for a marketing team to track campaign performance, spend, and ROI across channels. What visuals and measures would you include?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Dashboards",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Include KPIs (total spend, leads, cost per lead, ROI), a line chart of spend over time, a bar chart of performance by channel, and a table with campaign details. Add slicers for date and campaign type.",
    explanation:
      "The dashboard should have: top row – Total Spend, Leads Generated, Cost Per Lead, ROI. Middle – line chart showing spend and leads trend by month. A bar chart comparing ROI by channel (Google, Facebook, Email). A scatter plot of spend vs. leads to identify efficient channels. A detailed table with campaign name, channel, spend, leads, conversions, and ROI. Include slicers for date range, channel, and campaign type. Use bookmarks for executive vs. analyst views. Implement measures: Total Spend = SUM(Spend), Total Leads = SUM(Leads), CPL = DIVIDE([Total Spend], [Total Leads]), ROI = DIVIDE([Revenue] - [Total Spend], [Total Spend]).",
    followUps: [
      {
        question: "How would you handle campaigns with varying durations?",
        answer:
          "Normalize by daily or weekly averages. Use a measure like Spend per Day = DIVIDE([Total Spend], DATEDIFF(StartDate, EndDate, DAY)).",
      },
      {
        question: "What if you need to see performance by geography?",
        answer:
          "Add a map visual showing spend or ROI by region. Use the 'Filled Map' or 'Shape Map' with geographic data.",
      },
    ],
    commonMistakes: [
      "Not accounting for attribution when calculating ROI.",
      "Including too many metrics, causing cognitive load.",
      "Not using drill-through for campaign details.",
    ],
    example:
      "**Real-World Case Walkthrough:**\n- **Initial Baseline:** Marketing team had no visibility into channel performance.\n- **Intervention:** Built a Power BI dashboard with daily data refresh.\n- **Outcome:** Identified that Facebook ads had 3x higher CPL than Google; reallocated budget and improved overall ROI by 25%.",
    relatedQuestions: [
      "executive-sales-dashboard-powerbi",
      "finance-kpi-dashboard-powerbi",
      "retention-cohort-powerbi",
    ],
  },

  // ----- Power BI: Charts & Visualisation
  {
    id: "dbi-pbi-chart-107",
    slug: "power-bi-decomposition-tree",
    question:
      "Explain the use of the Decomposition Tree visual in Power BI. How would you use it to analyze sales performance by product, region, and salesperson?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Power BI",
    topic: "Charts & Visualisation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "The Decomposition Tree is an interactive visual that breaks down a measure across dimensions. You can analyze sales by product, then region, then salesperson by clicking through the hierarchy.",
    explanation:
      "In Power BI, add a Decomposition Tree visual. Set the 'Analyze' field to Sales Amount. Then add dimensions in order: Product Category, Region, Salesperson. The visual shows a root node (total sales) and allows you to expand by clicking on a category to see the next level. This is useful for root cause analysis – you can quickly see which product and region are driving performance. You can also use AI splits (e.g., high vs. low sales automatically). This visual is more interactive than a standard drill-down chart.",
    followUps: [
      {
        question:
          "What is the difference between Decomposition Tree and Drill-through?",
        answer:
          "Decomposition Tree is an on-canvas interactive exploration that breaks down a measure by dimensions. Drill-through takes you to a separate page for detailed analysis of a specific data point.",
      },
      {
        question: "How would you use the 'AI Splits' feature?",
        answer:
          "AI Splits automatically find the dimensions that explain the highest and lowest values. For example, it might highlight that 'Region = West' is the biggest driver of high sales. This accelerates insight discovery.",
      },
    ],
    commonMistakes: [
      "Not using the right order of dimensions (start with the most general).",
      "Overwhelming with too many dimensions.",
      "Ignoring the AI split for quick insights.",
    ],
    example:
      "**Scenario:** Sales data with Product, Region, Salesperson. Total sales = $1M. Expand Product: Electronics ($500K), Clothing ($300K), Home ($200K). Then expand Electronics by Region: West ($300K), East ($200K). Then see Salesperson details. This helps identify top performers.",
  },

  // ----- Power BI: Business Metrics
  {
    id: "dbi-pbi-metrics-108",
    slug: "customer-segmentation-rfm-powerbi",
    question:
      "Implement RFM (Recency, Frequency, Monetary) analysis in Power BI. How would you create measures and a dashboard to segment customers?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Business Metrics",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Create measures for Recency (days since last purchase), Frequency (number of orders), and Monetary (total spend). Then segment customers using calculated columns into quintiles (1-5) and combine into RFM scores.",
    explanation:
      "In Power BI, you need a date table. Measures: Recency = DATEDIFF(MAX(Sales[OrderDate]), TODAY(), DAY) – but use a dynamic date. Frequency = DISTINCTCOUNT(Sales[OrderID]) per customer. Monetary = SUM(Sales[Amount]) per customer. Then create a calculated table for customer aggregates. Use PERCENTILE functions to assign scores: for each metric, create a score based on quintiles. Combine scores into a string like '5-4-3'. Then create a dashboard: a scatter plot (Recency vs. Monetary), a matrix showing count of customers by RFM segment, and a list of top customers. This segmentation helps target marketing efforts.",
    followUps: [
      {
        question: "How do you handle customers with no purchases?",
        answer:
          "They would have high recency (or NULL), we might exclude them from RFM or treat them as 'lost'.",
      },
      {
        question: "What DAX functions are key for RFM?",
        answer:
          "DATEDIFF, SUMX, FILTER, PERCENTILE.INC, and CALCULATE with time intelligence.",
      },
    ],
    commonMistakes: [
      "Not using a dynamic date for recency (e.g., relative to report date).",
      "Using average instead of quintile scores – quintiles give equal-sized groups.",
      "Not segmenting by product category.",
    ],
    example:
      "**RFM Dashboard Example:**\n- Measures: Recency (days), Frequency (orders), Monetary ($).\n- Scores: 1-5 for each (5 = best).\n- Segments: Champions (5,5,5), Loyal (4,5,4), etc.\n- Visuals: Bar chart of count per segment, table with customer details, and a scatter plot.",
    relatedQuestions: [
      "retail-customer-segmentation",
      "north-star-metric-identification",
      "retention-cohort-powerbi",
    ],
  },

  // ----- Statistics: Data Interpretation
  {
    id: "dbi-stats-109",
    slug: "confidence-interval-interpretation",
    question:
      "You calculate a 95% confidence interval for the average order value: [$120, $140]. What does this interval mean? How would you explain it to a non-technical stakeholder?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "The 95% confidence interval means we are 95% confident that the true population mean falls between $120 and $140. It does not mean 95% of orders are in that range.",
    explanation:
      "A confidence interval is a range of plausible values for the population parameter (mean). If we repeated the sampling many times, 95% of the intervals would contain the true mean. For the stakeholder, explain: 'Based on our sample, we estimate the average order value is between $120 and $140, and we are 95% certain of this range.' Also note the width: narrower interval means more precision. This helps in decision-making, e.g., setting pricing or promotions.",
    followUps: [
      {
        question: "What if the confidence interval is very wide?",
        answer:
          "A wide interval indicates high uncertainty, likely due to small sample size or high variability. You might need to collect more data to narrow it.",
      },
      {
        question: "How would you calculate a confidence interval in Excel?",
        answer:
          "Use =CONFIDENCE.NORM(alpha, standard_dev, size) for the margin of error, then add/subtract from the mean.",
      },
    ],
    commonMistakes: [
      "Interpreting it as the range containing 95% of the data.",
      "Saying there is a 95% probability that the true mean is in this interval (it's either in it or not).",
      "Not considering the sample size.",
    ],
    example:
      "**Example:** For AOV, sample mean = $130, margin of error = $10, CI = [$120, $140]. This tells the team we are confident that the true AOV lies in that range.",
    relatedQuestions: [
      "central-tendency-measures",
      "z-score-and-outliers-excel",
      "statistical-significance-ab-testing",
    ],
  },

  // ----- Data Visualisation: Dashboards
  {
    id: "dbi-viz-110",
    slug: "dashboard-design-principles",
    question:
      "What are the key principles of effective dashboard design? How would you apply them to a sales performance dashboard?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "behavioral",
    subject: "Data Visualisation",
    topic: "Dashboards",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Principles: clarity, focus, consistency, and hierarchy. Use the most important metrics at the top, group related visuals, and use consistent colors. Include context (targets, benchmarks) and interactivity (filters, drill-down).",
    explanation:
      "A good dashboard tells a story. Start with the executive summary (KPIs). Then provide supporting visuals (trends, breakdowns). Use a clean layout, avoid clutter, and ensure every chart has a purpose. Use color strategically: highlight areas needing attention (red for declining metrics). Provide interactivity so users can filter by time, region, etc. For a sales dashboard: top row – total sales, growth %, profit margin. Second row – sales trend chart. Third row – sales by region (map) and by product (bar chart). Bottom – table of top customers. Include a summary comment on key takeaways. This aligns with business goals and drives action.",
    followUps: [
      {
        question:
          "How do you handle dashboards for different audiences (executives vs. analysts)?",
        answer:
          "Create separate views or use bookmarks. Executives want high-level KPIs, analysts need detailed data. Provide drill-through for analysts.",
      },
      {
        question: "What is the role of color in dashboard design?",
        answer:
          "Use color sparingly to draw attention to key insights. Use a consistent color palette. Avoid red-green combinations for accessibility.",
      },
    ],
    commonMistakes: [
      "Adding too many visuals, causing clutter.",
      "Not including context (targets, benchmarks).",
      "Using inconsistent scales or colors.",
    ],
    example:
      "**Example Dashboard:** Sales dashboard with: KPI cards (Total Sales, Growth, Target), trend line, map, bar chart, and a table. All aligned to a single business objective: monitor performance against targets.",
    relatedQuestions: [
      "excel-sales-dashboard-visualization",
      "executive-sales-dashboard-powerbi",
      "power-bi-chart-selection-guide",
    ],
  },

  // ----- Analytics Fundamentals: Business Metrics
  {
    id: "dbi-fund-111",
    slug: "leading-vs-lagging-indicators",
    question:
      "Explain the difference between leading and lagging indicators. Provide examples for a SaaS business.",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Analytics Fundamentals",
    topic: "Business Metrics",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Leading indicators are predictive metrics (e.g., new sign-ups, engagement). Lagging indicators are outcome metrics (e.g., revenue, churn). Both are important for management.",
    explanation:
      "Leading indicators: measure activities that drive future performance – e.g., weekly active users, trial sign-ups, feature adoption. They help you adjust strategy early. Lagging indicators: measure results – e.g., monthly recurring revenue (MRR), customer churn, lifetime value. They tell you what has happened. For a SaaS company, you might track leading indicators like free trial conversions and support ticket volume, and lagging like MRR growth. A balanced scorecard uses both to drive action.",
    followUps: [
      {
        question: "How would you use leading indicators to predict churn?",
        answer:
          "If you see a drop in usage (e.g., logins) or support tickets increasing, that could predict future churn. You can create a model to score customers by risk.",
      },
      {
        question:
          "What if your leading indicators are improving but lagging indicators are not?",
        answer:
          "There might be a lag time (e.g., new sign-ups take time to convert to revenue). Or the leading indicators are not the right ones. Re-evaluate the correlation.",
      },
    ],
    commonMistakes: [
      "Focusing only on lagging indicators (too late to act).",
      "Ignoring leading indicators that are not well-correlated with outcomes.",
      "Not setting targets for both types.",
    ],
    example:
      "**SaaS Example:**\nLeading: Daily Active Users (DAU), new trial sign-ups, feature usage rate.\nLagging: MRR, customer churn, NPS.\nA dashboard with both helps the team take proactive measures.",
  },

  // ----- Analytics Fundamentals: Data Interpretation
  {
    id: "dbi-fund-112",
    slug: "seasonality-vs-trend",
    question:
      "How do you distinguish between seasonality and trend in a time series? Provide methods to decompose these components.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Analytics Fundamentals",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Seasonality is a repeating pattern (e.g., yearly, monthly). Trend is the long-term direction. Use moving averages, seasonal decomposition (e.g., STL), or visual inspection.",
    explanation:
      "To separate trend and seasonality: 1) Visual inspection with a line chart. 2) Calculate a moving average (e.g., 12-month moving average for monthly data) to smooth seasonality and see the trend. 3) Use seasonal decomposition models like STL (Seasonal-Trend decomposition using LOESS) or classical decomposition. In Excel, you can use the Forecast Sheet which decomposes automatically. In Python, use statsmodels.tsa.seasonal.seasonal_decompose. Understanding the difference is crucial for forecasting – trend is more permanent, seasonality is periodic.",
    followUps: [
      {
        question:
          "What if the seasonal pattern changes over time (e.g., growing amplitude)?",
        answer:
          "That suggests an additive or multiplicative seasonality. Use a multiplicative model if the amplitude grows with the trend.",
      },
      {
        question:
          "How would you handle multiple seasonal periods (e.g., weekly and yearly)?",
        answer:
          "Use more advanced methods like TBATS or Prophet, which can handle multiple seasonalities.",
      },
    ],
    commonMistakes: [
      "Confusing a one-time spike with seasonality.",
      "Ignoring seasonality when forecasting (overestimating trend).",
      "Not checking for stationarity before decomposition.",
    ],
    example:
      "**Example:** Monthly sales data: a clear upward trend over years, but December is always higher (seasonal). Decomposition reveals both.",
    relatedQuestions: [
      "sales-data-trend-analysis-excel",
      "monthly-sales-aggregation",
      "statistical-significance-ab-testing",
    ],
  },

  // ----- Analytics Fundamentals: Data Cleaning (new)
  {
    id: "dbi-fund-113",
    slug: "data-validity-checks",
    question:
      "How would you implement data validation checks in a data pipeline to ensure data quality? Give examples of checks for a customer database.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Analytics Fundamentals",
    topic: "Data Cleaning",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Implement checks for completeness (no nulls in required fields), uniqueness (duplicate emails), format (email pattern), and range (age 0-120). Use automated testing frameworks.",
    explanation:
      "In a data pipeline, before loading, you can run validation checks: 1) Not null check for critical columns (customer_id, email). 2) Uniqueness check: no duplicate emails. 3) Format check: email regex. 4) Range check: age between 0 and 120. 5) Referential integrity: foreign keys exist. 6) Business rules: if status='active', then last_login must not be null. You can implement these using Great Expectations, dbt tests, or custom Python scripts. Log failures and alert the team. This ensures that only clean data enters the system.",
    followUps: [
      {
        question: "What if you find invalid data after the pipeline has run?",
        answer:
          "Implement a data quality monitoring dashboard that shows pass/fail rates. If failures spike, trigger a review. Also, have a process to correct or quarantine bad data.",
      },
      {
        question:
          "How do you handle historical data that may have quality issues?",
        answer:
          "You can run a one-time cleanup on the historical dataset, applying the same validation rules. Then set up the validation for new data. Document the issue.",
      },
    ],
    commonMistakes: [
      "Only checking after loading, not before.",
      "Not having automated alerts for failures.",
      "Not documenting validation rules.",
    ],
    example:
      "**Example Validation Rules:**\n- `customer_id` NOT NULL\n- `email` LIKE '%@%'\n- `age` BETWEEN 0 AND 120\n- `phone` matches pattern\n- `country` in list of valid countries\nThese checks prevent bad data from entering the analytics layer.",
    relatedQuestions: [
      "data-quality-issues-diagnosis",
      "excel-data-cleaning-techniques",
      "north-star-metric-identification",
    ],
  },

  // ----- Additional: SQL – Joins (another)
  {
    id: "dbi-joins-114",
    slug: "self-join-example",
    question:
      "Write a SQL query using a self-join to find employees who earn more than their managers. Given an employee table with id, manager_id, salary.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Joins",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "SELECT e.name FROM employee e JOIN employee m ON e.manager_id = m.id WHERE e.salary > m.salary;",
    explanation:
      "This self-join matches each employee with their manager (by joining on manager_id = id). Then filters for employees with higher salary than their manager. This is a classic use case for self-joins. Ensure you handle NULL manager_id (top-level managers). Use LEFT JOIN if you want to include employees with no manager. Also, consider using a subquery, but self-join is more efficient.",
    followUps: [
      {
        question:
          "How would you find the employee with the highest salary in each department?",
        answer:
          "Use a subquery with GROUP BY or a window function: RANK() OVER (PARTITION BY department ORDER BY salary DESC).",
      },
      {
        question: "What if the manager_id is NULL for top-level managers?",
        answer:
          "Use LEFT JOIN or filter out NULL in the ON clause. For this query, you only want employees with managers, so INNER JOIN is fine.",
      },
    ],
    commonMistakes: [
      "Not using table aliases, causing ambiguity.",
      "Forgetting to join on the correct columns.",
      "Using INNER JOIN when you need to include employees with NULL manager.",
    ],
    example:
      "**Example:** Employee table: (id, name, manager_id, salary).\nData: (1, 'Alice', NULL, 100000), (2, 'Bob', 1, 90000), (3, 'Charlie', 1, 110000).\nSelf-join returns Charlie because 110000 > 100000.",
  },

  // ----- Additional: SQL – Window Functions (another)
  {
    id: "dbi-window-115",
    slug: "cumulative-sum-by-category",
    question:
      "Write a SQL query to compute a cumulative sum of sales per product category, ordered by month. Use a window function.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Window Functions",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "SELECT month, category, sales, SUM(sales) OVER (PARTITION BY category ORDER BY month ROWS UNBOUNDED PRECEDING) AS cumulative_sales FROM sales_data;",
    explanation:
      "This partitions by category and sums sales from the first month to the current month. This is useful for seeing how each category's sales accumulate over time. If you want a running total without partition, just omit the partition. You can also use RANGE BETWEEN to handle ties. This is a common pattern for cohort analysis.",
    followUps: [
      {
        question: "What if you have missing months in the data?",
        answer:
          "You may need to generate a calendar table and left join to fill gaps, or use a window function with RANGE to account for gaps.",
      },
      {
        question: "How would you compute a 3-month moving average?",
        answer:
          "Use AVG(sales) OVER (PARTITION BY category ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW).",
      },
    ],
    commonMistakes: [
      "Not using PARTITION BY, resulting in a global cumulative sum.",
      "Using ROWS UNBOUNDED PRECEDING incorrectly.",
      "Forgetting to order the data.",
    ],
    example:
      "**Example:** category 'Electronics' monthly sales: Jan 100, Feb 150, Mar 200. Cumulative: Jan 100, Feb 250, Mar 450.",
  },

  // ----- Additional: SQL – Aggregation (another)
  {
    id: "dbi-agg-116",
    slug: "filtered-aggregates-with-having",
    question:
      "Write a SQL query to find product categories with average order value greater than $500, but only consider orders from the last 6 months.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "Aggregation",
    difficulty: "easy",
    access: "paid",
    shortAnswer:
      "SELECT category, AVG(amount) AS avg_order FROM orders WHERE order_date >= CURRENT_DATE - INTERVAL '6 months' GROUP BY category HAVING AVG(amount) > 500;",
    explanation:
      "This filters by date first, then groups by category, and uses HAVING to filter groups with average > $500. HAVING is used after GROUP BY, unlike WHERE which is before aggregation. This is useful for identifying high-value categories. Ensure you have indexes on order_date for performance.",
    followUps: [
      {
        question:
          "What if you want to include categories with no orders in the last 6 months?",
        answer:
          "You'd need a left join with a categories table, and then handle NULLs, but that's a different query.",
      },
      {
        question:
          "How would you find categories with at least 10 orders in the period?",
        answer: "Add COUNT(order_id) >= 10 in the HAVING clause.",
      },
    ],
    commonMistakes: [
      "Using WHERE for aggregate conditions instead of HAVING.",
      "Forgetting to filter dates before grouping (inefficient).",
      "Not handling NULL amounts.",
    ],
    example:
      "**Example:** Categories: Electronics avg $600, Clothing avg $450, Books avg $300. The query returns only Electronics.",
  },

  // ----- Additional: Excel – Data Cleaning (another)
  {
    id: "dbi-clean-117",
    slug: "excel-remove-duplicates-advanced",
    question:
      "In Excel, how would you remove duplicates based on multiple columns (e.g., customer_id and product_id) while keeping the row with the latest date?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Data Cleaning",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Sort the data by date descending, then use Remove Duplicates on the key columns. This keeps the latest row for each combination.",
    explanation:
      "First, sort the entire table by the date column in descending order (newest first). Then select the data, go to Data > Remove Duplicates, and choose the columns that define duplicates (e.g., customer_id, product_id). Excel will keep the first occurrence, which is the newest after sorting. This is a quick way to deduplicate. For more control, you can use Power Query's 'Keep Duplicates' and then filter. This approach is useful for datasets with multiple entries per key.",
    followUps: [
      {
        question:
          "What if you have multiple criteria for keeping a row (e.g., highest sales amount)?",
        answer:
          "Sort by the criteria (e.g., amount descending) before removing duplicates. Then the first row per key will have the highest amount.",
      },
      {
        question: "Can you do this with a formula?",
        answer:
          "You can use a helper column with COUNTIFS to identify duplicates and then filter. But Remove Duplicates is simpler.",
      },
    ],
    commonMistakes: [
      "Not sorting before removing duplicates, keeping an arbitrary row.",
      "Selecting too many columns as keys, missing duplicates.",
      "Forgetting to backup original data.",
    ],
    example:
      "**Example:** Data with customer_id, product_id, purchase_date. Sort by purchase_date desc, then remove duplicates on customer_id and product_id. Result: latest purchase per customer-product.",
  },

  // ----- Additional: Power BI – Business Metrics (another)
  {
    id: "dbi-pbi-metrics-118",
    slug: "percentage-of-total-measure",
    question:
      "In Power BI, how would you create a measure that shows each product's sales as a percentage of total sales?",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Power BI",
    topic: "Business Metrics",
    difficulty: "easy",
    access: "paid",
    shortAnswer:
      "Create a measure: % Sales = DIVIDE(SUM(Sales[Amount]), CALCULATE(SUM(Sales[Amount]), ALL(Sales))). Use it in a table or chart.",
    explanation:
      "The measure uses DIVIDE to handle division by zero. The numerator is the sum of sales for the current context (e.g., product). The denominator uses CALCULATE with ALL to remove all filters on the Sales table, giving the grand total. This gives the percentage of total. You can also use ALLSELECTED to respect slicers. This is a common measure for pie charts or showing contribution.",
    followUps: [
      {
        question: "How would you create a running total percentage?",
        answer:
          "Use a running total measure combined with the total measure, or use window functions in DAX (e.g., SUMX with FILTER).",
      },
      {
        question: "What if you want percentage by category, not overall?",
        answer:
          "Use ALLEXCEPT or REMOVEFILTERS on the category column to get category total.",
      },
    ],
    commonMistakes: [
      "Using ALL instead of ALLSELECTED, ignoring slicers.",
      "Not handling BLANK or zero values.",
      "Using SUM without DIVIDE (risk of division by zero).",
    ],
    example:
      "**Example:** Product A sales $100, Product B $200, total $300. % Sales: A=33.33%, B=66.67%.",
  },

  // ----- Additional: Statistics – Data Interpretation (another)
  {
    id: "dbi-stats-119",
    slug: "p-value-explanation",
    question:
      "Explain what a p-value is in hypothesis testing. How would you use it to make decisions in business analytics?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Statistics",
    topic: "Data Interpretation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "A p-value is the probability of observing the data (or more extreme) assuming the null hypothesis is true. A small p-value (<0.05) suggests rejecting the null hypothesis.",
    explanation:
      "In hypothesis testing, the null hypothesis is a statement of no effect (e.g., the new website design does not increase conversion). The p-value quantifies evidence against the null. If p < 0.05, we say the result is statistically significant and reject the null. However, p-value does not measure the magnitude of the effect. It's also important to consider practical significance. In business, you might use p-values to decide whether to launch a new feature based on A/B test results. Always report effect size alongside p-value.",
    followUps: [
      {
        question:
          "What is the difference between statistical significance and practical significance?",
        answer:
          "Statistical significance means the effect is unlikely due to chance. Practical significance means the effect is large enough to matter in business (e.g., a 0.1% increase in conversion may not be worth the cost).",
      },
      {
        question: "What if p=0.06 – do you reject or not?",
        answer:
          "It depends on the context. If the cost of being wrong is high, you might not reject. Some fields use 0.1 as threshold. I'd consider the effect size and confidence interval as well.",
      },
    ],
    commonMistakes: [
      "Misinterpreting p-value as the probability that the null is true.",
      "Using p-value as the only decision criterion.",
      "Not considering the power of the test.",
    ],
    example:
      "**Example:** A/B test: new design conversion 2.1% vs old 2.0%. p=0.04 (significant), but the effect is only 0.1% absolute increase. You may decide not to implement if the cost is high.",
  },

  // ----- Additional: Data Visualisation – Charts (another)
  {
    id: "dbi-viz-120",
    slug: "treemap-use-case",
    question:
      "When would you use a treemap in data visualization? Provide an example for a retail sales dataset.",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Data Visualisation",
    topic: "Charts & Visualisation",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "A treemap is used to display hierarchical data as nested rectangles. It is useful for showing part-to-whole relationships across categories and subcategories.",
    explanation:
      "Treemaps are effective when you have a large hierarchy and want to see relative sizes. For retail sales, you could show sales by product category (rectangles), and within each category, sub-categories (smaller rectangles). The area of each rectangle represents the value (e.g., revenue). This allows quick visual identification of top performers. However, treemaps become cluttered if there are too many levels. Use tooltips for exact values. They are good for dashboards where space is limited.",
    followUps: [
      {
        question: "What is the alternative to a treemap for hierarchical data?",
        answer:
          "Sunburst chart or a stacked bar chart. Treemap is better for comparing relative sizes, while sunburst shows hierarchy more clearly.",
      },
      {
        question: "How do you handle negative values in a treemap?",
        answer:
          "Treemaps are not suitable for negative values. Use a different chart, or transform the data.",
      },
    ],
    commonMistakes: [
      "Using treemap for data with many small categories (hard to read).",
      "Not labeling rectangles clearly.",
      "Using color for additional dimension (can be confusing).",
    ],
    example:
      "**Example:** Retail sales: Electronics ($500K), Clothing ($300K), Home ($200K). Each is a rectangle. Drill into Electronics: Laptops ($200K), Phones ($150K), Accessories ($150K). The treemap shows proportions at a glance.",
  },

  // ----- Additional: Analytics Fundamentals – Business Metrics (another)
  {
    id: "dbi-fund-121",
    slug: "average-order-value-drivers",
    question:
      "You notice average order value (AOV) has decreased. How would you investigate the drivers and what metrics would you track?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "behavioral",
    subject: "Analytics Fundamentals",
    topic: "Business Metrics",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Break down AOV by product mix, discount usage, and customer segments. Track metrics like units per order, price per unit, and discount percentage.",
    explanation:
      "AOV = Revenue / Number of Orders. To diagnose a drop, segment by: product category (are customers buying cheaper items?), discount usage (are discounts increasing?), customer segment (new vs. returning, high-value vs. low-value). Also check if there's a shift in sales channels (e.g., more mobile orders which may have lower AOV). Use trend analysis to see when the drop started. If you find a driver, you can take action: promote higher-value items, reduce discount abuse, or target upselling. Set up a dashboard to monitor AOV components daily.",
    followUps: [
      {
        question: "How would you test if a new promotion is lowering AOV?",
        answer:
          "Compare AOV for users exposed to the promotion vs. a control group. If AOV is significantly lower, you may be subsidizing smaller orders.",
      },
      {
        question: "What if AOV is declining but order volume is increasing?",
        answer:
          "That suggests you are attracting more price-sensitive customers. You might need to adjust marketing or pricing strategy.",
      },
    ],
    commonMistakes: [
      "Only looking at overall AOV without segmentation.",
      "Ignoring the effect of returns or cancellations.",
      "Not considering seasonality.",
    ],
    example:
      "**Example:** AOV dropped from $60 to $55. Analysis shows that discount orders increased from 20% to 30% of orders, and average discount rose from 10% to 15%. Solution: optimize discount strategy to maintain AOV.",
    relatedQuestions: [
      "north-star-metric-identification",
      "average-order-value-drivers", // self-ref? better use related slug
      "saas-metrics-dashboard-excel",
    ],
  },

  // ----- Additional: Power BI – Charts (another)
  {
    id: "dbi-pbi-chart-122",
    slug: "power-bi-scatter-plot-analysis",
    question:
      "How would you use a scatter plot in Power BI to analyze the relationship between advertising spend and sales? What additional features can you add?",
    directions: ["Data & BI"],
    type: "Data Interpretation",
    category: "technical",
    subject: "Power BI",
    topic: "Charts & Visualisation",
    difficulty: "medium",
    access: "free",
    shortAnswer:
      "Place Ad Spend on X-axis, Sales on Y-axis. Add a trend line (analytics pane). Color by region or product category. Use play axis for time animation.",
    explanation:
      "A scatter plot visualizes the correlation between two variables. You can add a trend line to see the relationship direction. By coloring points by region, you can see if the relationship holds across regions. The play axis feature allows you to see how the relationship changes over time, which is powerful for dynamic analysis. You can also use the 'anomaly detection' feature to highlight outliers. This helps in identifying which regions or campaigns are over/under-performing.",
    followUps: [
      {
        question: "What if the points form a non-linear pattern?",
        answer:
          "You might need to transform variables (e.g., log transform) or use a different chart. The scatter plot with a polynomial trend line can help.",
      },
      {
        question: "How do you handle overplotting?",
        answer:
          "Use transparency (alpha) on points, or aggregate data into bins. You can also use a hexbin plot in custom visuals.",
      },
    ],
    commonMistakes: [
      "Not adding a trend line to see the relationship.",
      "Ignoring outliers that skew the visual.",
      "Using too many categories in color, making it hard to read.",
    ],
    example:
      "**Example:** Scatter plot: X=Ad Spend (thousands), Y=Sales (thousands). Trend line shows positive correlation. Color by region: one region has high spend but low sales – investigate.",
  },

  // ----- Additional: SQL – CTEs (another)
  {
    id: "dbi-cte-123",
    slug: "cte-for-sequencing-events",
    question:
      "Write a SQL query using a CTE to find the sequence of events for each user on a website (e.g., page views, add to cart, purchase) and identify users who completed the full funnel.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "SQL",
    topic: "CTEs & Subqueries",
    difficulty: "hard",
    access: "paid",
    shortAnswer:
      "Use a CTE with ROW_NUMBER() to order events per user, then use aggregation to see if they reached each step. Then filter for those who reached purchase.",
    explanation:
      "WITH user_events AS (SELECT user_id, event_type, event_time, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time) AS step FROM events) SELECT user_id, MAX(CASE WHEN event_type='view' THEN 1 ELSE 0 END) as viewed, MAX(CASE WHEN event_type='cart' THEN 1 ELSE 0 END) as carted, MAX(CASE WHEN event_type='purchase' THEN 1 ELSE 0 END) as purchased FROM user_events GROUP BY user_id HAVING purchased = 1; This finds users who purchased, and also shows if they viewed and carted. For full funnel, you can use a window function to check sequence.",
    followUps: [
      {
        question: "How would you calculate conversion rates between steps?",
        answer:
          "Count distinct users who completed each step and divide by the previous step count. This can be done with multiple CTEs.",
      },
      {
        question: "What if a user performs the same event multiple times?",
        answer:
          "The ROW_NUMBER() gives each event a unique number; you can use it to track the first occurrence of each type.",
      },
    ],
    commonMistakes: [
      "Not ordering events properly.",
      "Using DISTINCT that may miss sequence.",
      "Not handling users with no events.",
    ],
    example:
      "**Example:** Events: view, view, cart, view, purchase. For a given user, the CTE orders them and you can check that purchase is after cart.",
  },

  // ----- Additional: Excel – Charts (another)
  {
    id: "dbi-chart-124",
    slug: "excel-sparklines-for-trends",
    question:
      "How would you use sparklines in Excel to show trends in a row-wise manner? Provide a use case for sales data.",
    directions: ["Data & BI"],
    type: "Technical",
    category: "technical",
    subject: "Excel",
    topic: "Charts & Visualisation",
    difficulty: "easy",
    access: "free",
    shortAnswer:
      "Sparklines are small inline charts in a single cell. Use them to show trends for each row (e.g., monthly sales per product).",
    explanation:
      "Select a cell next to each row of data, go to Insert > Sparklines > Line. Select the data range (e.g., the monthly sales figures for that product). The sparkline appears in the cell, showing a miniature trend line. You can customize markers for high/low points. This is great for dashboards where you want to show many trends without taking up space. For sales data, you can have a column of sparklines showing each product's sales trend over 12 months.",
    followUps: [
      {
        question: "What are the types of sparklines?",
        answer: "Line, Column, and Win/Loss. Line is most common for trends.",
      },
      {
        question: "How do you make sparklines dynamic with changing data?",
        answer:
          "If the data range is a table, the sparkline will update automatically when new data is added.",
      },
    ],
    commonMistakes: [
      "Making sparklines too small to read.",
      "Not adding markers for key points.",
      "Using sparklines for too many rows (performance issue).",
    ],
    example:
      "**Example:** Product A sales (Jan-Dec): 100, 110, 105, 120, 115, 130, 125, 140, 135, 150, 145, 160. Sparkline shows an upward trend.",
  },

  // ----- Additional: Power BI – Dashboards (another)
  {
    id: "dbi-pbi-125",
    slug: "drillthrough-page-powerbi",
    question:
      "How would you set up a drillthrough page in Power BI to show detailed order information when a user clicks on a region in a sales dashboard?",
    directions: ["Data & BI"],
    type: "Case Study",
    category: "technical",
    subject: "Power BI",
    topic: "Dashboards",
    difficulty: "medium",
    access: "paid",
    shortAnswer:
      "Create a new page, add visuals for order details (table, bar chart). Set the drillthrough filter to Region. Then when a user right-clicks a visual with Region, they can select 'Drillthrough' to see that page.",
    explanation:
      "In Power BI, add a new page and name it 'Order Details'. Add visuals that show order-level data: customer name, order date, product, amount. In the Filters pane, add a filter for Region and set it to 'Drillthrough'. This makes the page a drillthrough target. On the main dashboard, when a user right-clicks a visual that contains Region (e.g., a map), the option 'Drillthrough to Order Details' appears. Clicking takes them to the detailed page filtered for that region. This enables deep dive analysis without cluttering the main dashboard.",
    followUps: [
      {
        question: "Can you pass multiple fields for drillthrough?",
        answer:
          "Yes, you can add more fields to the drillthrough filter (e.g., Region and Product Category).",
      },
      {
        question: "How do you return to the main page?",
        answer: "Add a back button or use the built-in back navigation.",
      },
    ],
    commonMistakes: [
      "Not setting the drillthrough filter correctly, resulting in blank pages.",
      "Forgetting to add the back navigation.",
      "Making the drillthrough page too complex.",
    ],
    example:
      "**Example:** Sales dashboard with a map. Click on a region, drillthrough to a page showing all orders in that region with details.",
  },
];
