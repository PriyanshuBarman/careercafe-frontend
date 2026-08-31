import type { Question } from "../types/question";

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
      {
        question:
          "How would you sanity check this using a bottom-up approach (stations, trains, frequency)?",
        answer:
          "Bottom-up check: ~288 active stations across 12 lines. Peak hours run trains every 2.5-3 mins, off-peak every 5-6 mins (~350 train sets in total). With ~2,400 passenger crush capacity per 8-coach train running 16 hours/day (~15-20 trips/train), daily system capacity is ~6M passenger-trips. Factoring ~80% peak load yields ~4.8M to 5.2M daily riders.",
      },
      {
        question:
          "How would peak-hour congestion affect your train capacity assumptions?",
        answer:
          "Peak hours (8:30-11:00 AM & 5:30-8:30 PM) account for ~55-60% of daily traffic. During these windows, train crush load reaches 6-8 passengers/m² (exceeding nominal 4-6 design limits). Capacity models adjust by applying a 1.25x crush multiplier to peak runs while discounting off-peak load factors to ~30-40%.",
      },
    ],
    commonMistakes: [
      "Confusing total daily passenger boardings (system trips) with unique individual commuters (which is ~half if counting round-trips).",
      "Ignoring peak-hour versus off-peak capacity constraints and assuming uniform ridership throughout the day.",
      "Using Delhi municipal population (~19M) instead of the full National Capital Region (NCR ~30M+) served by the metro network.",
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
      {
        question:
          "What impact does work-from-home policy have on retail footfall?",
        answer:
          "Hybrid/WFH models reduce weekday morning takeaway footfall in commercial IT corridors (BKC, Cyber Hub, Whitefield) by ~25-35%, but increase mid-afternoon and weekend footfall in suburban residential cafes with longer dwell times and higher food-pairing ticket sizes.",
      },
      {
        question:
          "How does delivery apps (Zomato/Swiggy) factor into total retail outlet revenue?",
        answer:
          "Delivery aggregators contribute ~20-30% of total cafe sales. While extending catchment radius beyond physical seating, platforms levy 18-25% take rates and face product temperature/foam degradation, prompting cafes to emphasize cold brews, bottled concentrates, and bakery items.",
      },
    ],
    commonMistakes: [
      "Extrapolating Tier-1 metro coffee consumption habits to the entire Indian population.",
      "Overestimating transaction frequencies by treating daily tea drinkers as daily retail specialty cafe visitors.",
      "Failing to separate in-store retail revenue from third-party delivery aggregator GMV and wholesale bean sales.",
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
      {
        question:
          "How would trade-in programs and extended manufacturer support (5+ years) shift the replacement cycle?",
        answer:
          "Extended OS updates (5-7 years by Apple/Samsung) lengthen the organic replacement cycle from 2.5 to 3.2-3.5 years, suppressing annual unit volume. However, carrier trade-in bill credits ($800-$1000 over 36 months) artificially compress upgrades back to 3 years for postpaid contracts.",
      },
      {
        question:
          "Which segment (budget vs flagship) is growing faster in market share?",
        answer:
          "In the US market, premium flagships ($800+) maintain the largest revenue share due to carrier installment financing. However, refurbished/certified pre-owned flagships are the fastest-growing sub-segment (>10% CAGR) as consumers seek premium camera and display hardware at mid-tier price points.",
      },
    ],
    commonMistakes: [
      "Assuming an annual 1-year replacement cycle instead of the realistic 2.5 to 3.5-year average upgrade cadence.",
      "Forgetting enterprise/corporate fleet purchases and second-hand/refurbished device churn.",
      "Confusing the installed base (total active smartphones) with annual new unit sales volume.",
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
      {
        question:
          "How do order frequencies change during weekends and IPL/Cricket matches?",
        answer:
          "Order volume surges by 35-50% during weekend dinner windows and spikes 60-80% during high-stakes cricket matches. Demand shifts heavily toward group sharing dishes (biryani, pizza) and late-night snacks, requiring dynamic surge pricing and delivery partner incentive scaling.",
      },
      {
        question:
          "What is the average order value (AOV) and gross merchandise value (GMV) implication?",
        answer:
          "At ~4.8M daily orders with an Average Order Value (AOV) of INR 400-450, daily platform GMV reaches ~INR 190-215 Crores (~INR 70k-78k Crores annualized). Platform net revenue from commissions (18-24%), customer delivery fees, and ad placements equals ~INR 40-50 Crores per day.",
      },
    ],
    commonMistakes: [
      "Assuming equal order penetration across all city tiers rather than heavy concentration (>70%) in the top 15 metros.",
      "Confusing Gross Merchandise Value (GMV) with platform Net Take-Rate revenue.",
      "Overlooking dual-meal ordering patterns and weekend/event volume spikes.",
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
      {
        question:
          "How does EV charging station installation change the profitability per square foot?",
        answer:
          "EV charging offers lower margins per kWh than diesel volume, but extends customer dwell time from 5 minutes to 30-45 minutes. This dwell time dramatically boosts footfall and revenue for high-margin attached retail (QSRs, convenience marts, cafes at 30-45% gross margin vs 2-3% fuel margins).",
      },
      {
        question:
          "What is the margin difference between fuel retail and attached convenience stores?",
        answer:
          "Fuel retail operates on thin commissions of ~2-4% (~INR 2.0 to 3.5 per liter), relying strictly on high volume. Attached retail convenience marts and QSR franchises operate at 25-50% gross margins, often contributing 35-50% of the station's total net operating income.",
      },
    ],
    commonMistakes: [
      "Underestimating commercial diesel volume which accounts for >70% of highway station fuel throughput.",
      "Assuming 100% nozzle utilization around the clock instead of modeling night vs daytime traffic peaks.",
      "Confusing gross fuel revenue with actual dealer commissions / net retail margins.",
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
      {
        question:
          "How would you account for time zone differences across North America, Europe, and Asia?",
        answer:
          "Global air traffic forms a diurnal wave: maximum airborne density happens between 12:00-16:00 UTC when European daytime operations, US East Coast morning departures, and transatlantic corridors overlap. Weight peak-hour multipliers by regional airspace density rather than assuming global uniformity.",
      },
      {
        question:
          "What data sources (ADS-B, FlightRadar) would you query to validate this empirically?",
        answer:
          "Query terrestrial and satellite ADS-B flight tracking feeds (e.g. FlightRadar24 API, OpenSky Network) or official FAA SWIM and Eurocontrol data. Filter by airborne status, altitude > 10,000 ft, and commercial ICAO operator codes to evaluate live transponder counts.",
      },
    ],
    commonMistakes: [
      "Ignoring timezone differences and assuming peak daytime traffic occurs everywhere at the same moment.",
      "Counting total commercial aircraft fleet without applying active utilization and maintenance grounding rates (~40%).",
      "Confusing commercial passenger aircraft with general aviation, military, and cargo flights.",
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
      {
        question: "How does ball pressure decay affect court performance?",
        answer:
          "As pressurized tennis balls lose gas and their felt fluffs up after 7-9 games, rebound velocity decreases and aerodynamic drag increases. This slows down aces, alters trajectory predictability, and slightly favors defensive baseliners over big servers.",
      },
      {
        question:
          "What happens to the used balls after the tournament concludes?",
        answer:
          "Thousands of match-used balls are sold daily to tournament attendees with proceeds benefiting the Wimbledon Foundation. Remaining practice balls are donated to the LTA for grassroots coaching, schools, and clubs, or recycled into synthetic equestrian surfaces.",
      },
    ],
    commonMistakes: [
      "Calculating balls used strictly for championship match play while ignoring practice, warmup, and qualifying rounds.",
      "Assuming ball changes occur every set rather than the official rule (first after 7 games, then every 9 games).",
      "Double counting unopened reserve canisters as tournament-used inventory.",
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
      {
        question:
          "What storage infrastructure and video transcoding pipelines are required to handle this?",
        answer:
          "Ingestion requires custom Google Video (VCU) hardware accelerators, Borg distributed task management, and parallelized chunk transcoding into VP9/AV1 codecs across multiple bitrates (144p to 4K), distributed across multi-region Google Cloud storage and edge cache points.",
      },
      {
        question:
          "How have YouTube Shorts impacted the number of uploads vs total storage consumed?",
        answer:
          "Shorts increased the raw count of daily video uploads by over 3x due to mobile creation ease, but because each Short is <=60s and lower bitrate, the storage footprint per upload is negligible compared to 4K 20-minute videos, shifting load to real-time feed ranking systems.",
      },
    ],
    commonMistakes: [
      "Treating all 2.5 billion registered YouTube viewers as active content creators who upload regularly.",
      "Failing to differentiate high-frequency short-form content (Shorts) from high-bitrate long-form video uploads.",
      "Overestimating average video duration (assuming 30+ mins instead of realistic 8-12 minute median uploads).",
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
      {
        question:
          "How has UPI penetration impacted cash withdrawal velocity over the last 5 years?",
        answer:
          "UPI has reduced micro and small-ticket ATM transactions (INR 100 - INR 1,000) by over 45%, but increased average ATM ticket size (from ~INR 2,000 to ~INR 3,800) as cash is now reserved for bulk, unorganized sector, or emergency transactions.",
      },
      {
        question:
          "How do banks optimize cash-in-transit replenishment routes to avoid ATM stock-outs?",
        answer:
          "Banks and cash management firms use time-series predictive modeling (incorporating salary cycles, festivals, and merchant cash flows) with Vehicle Routing Problem (VRP) algorithms to balance idle cash holding interest costs against armured transit logistics fees.",
      },
    ],
    commonMistakes: [
      "Ignoring the massive shift toward digital UPI payments for small-ticket retail transactions.",
      "Assuming all registered ATMs are operational 24/7 with zero cash stock-outs or maintenance downtime.",
      "Overestimating average withdrawal ticket size by generalizing salary-day withdrawals across the entire month.",
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
      {
        question:
          "How does OEM demand vs aftermarket replacement demand split in margin contribution?",
        answer:
          "OEM sales represent ~35-40% of unit volume but deliver single-digit operating margins (7-10%) due to automaker pricing power. The replacement aftermarket accounts for ~60% of units and delivers 20-25% gross margins due to brand loyalty and retail pricing.",
      },
      {
        question:
          "What impact does EV 2-wheeler weight and instant torque have on tyre wear rate?",
        answer:
          "EV 2-wheelers exhibit 20-30% faster tread wear due to instant torque delivery and heavier curb weights from battery packs. This has created a premium market for specialized EV tyres engineered with low rolling resistance silica compounds and reinforced sidewalls.",
      },
    ],
    commonMistakes: [
      "Assuming both front and rear tyres wear out and get replaced at the exact same frequency (rear tyres wear faster).",
      "Confusing total OEM new vehicle production demand with aftermarket replacement market demand.",
      "Underestimating rural two-wheeler tyre lifespans where owners delay replacements longer than urban commuters.",
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
      {
        question:
          "How would you analyze Net Revenue Retention (NRR) and LTV:CAC ratio to substantiate this?",
        answer:
          "Segment NRR by cohort: if enterprise NRR is >115% while SMB NRR is <80%, low-margin churn is masking top-line growth. For LTV:CAC, track CAC payback periods by acquisition channel; if SMB CAC payback extended beyond 24 months, blended unit economics are deteriorating.",
      },
      {
        question:
          "What concrete cost-containment measures would you recommend without stalling top-line growth?",
        answer:
          "1) Cloud FinOps: Enforce instance auto-scaling, storage tiering, and query optimization to reduce COGS. 2) Sales efficiency: Automate product-led onboarding for self-serve SMBs to eliminate SDR overhead, and refocus high-touch sales teams on high-LTV enterprise accounts.",
      },
    ],
    commonMistakes: [
      "Immediately assuming top-line revenue growth means overall business health is fine without inspecting gross margin compression.",
      "Treating Customer Acquisition Cost (CAC) as a blended number instead of segmenting by SMB vs Enterprise acquisition channels.",
      "Focusing solely on head-count cuts without investigating cloud compute / infrastructure scaling inefficiencies (COGS).",
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
      {
        question:
          "Write a SQL query to compute step-by-step conversion drop-off rates across checkout funnel stages.",
        answer:
          "Use conditional aggregation over checkout event logs:\n```sql\nWITH funnel AS (\n  SELECT \n    COUNT(DISTINCT user_id) AS cart_views,\n    COUNT(DISTINCT CASE WHEN step = 'shipping' THEN user_id END) AS shipping_completed,\n    COUNT(DISTINCT CASE WHEN step = 'payment' THEN user_id END) AS payment_reached,\n    COUNT(DISTINCT CASE WHEN step = 'success' THEN user_id END) AS order_placed\n  FROM checkout_events\n  WHERE created_at >= NOW() - INTERVAL '3 weeks'\n)\nSELECT \n  cart_views,\n  shipping_completed, ROUND(100.0 * shipping_completed / cart_views, 2) AS cart_to_shipping_pct,\n  payment_reached, ROUND(100.0 * payment_reached / shipping_completed, 2) AS shipping_to_payment_pct,\n  order_placed, ROUND(100.0 * order_placed / payment_reached, 2) AS payment_to_order_pct\nFROM funnel;\n```",
      },
      {
        question:
          "How would you set up an automated anomaly detection alert on payment gateway failure rates?",
        answer:
          "Stream payment webhook status codes into an alerting pipeline (e.g. Datadog or Prometheus). Compute a 15-minute rolling error rate against the 30-day baseline for the same day-of-week hour. Trigger P1 Slack/PagerDuty alerts if failure rates exceed 3 standard deviations (Z-score > 3) or absolute failure rate crosses 5%.",
      },
    ],
    commonMistakes: [
      "Treating cart abandonment as purely a UI/UX problem without checking payment gateway telemetry, API timeouts, or OTP delivery latencies.",
      "Analyzing aggregated site-wide drop-off rates rather than segmenting by browser, device OS (iOS vs Android), and payment method.",
      "Overlooking newly introduced friction points such as surprise shipping fees, mandatory registration walls, or voucher validation errors.",
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
      {
        question:
          "How would you design an A/B test to measure conversion uplift without leaking the promotion to the control group?",
        answer:
          "Use server-side experimentation hashed on verified student status (e.g. SheerID / .edu domain authentication). Keep landing pages unindexed by search engines and exclude promotional banners from general user sessions to avoid control group contamination.",
      },
      {
        question:
          "What metrics indicate successful monetization of student cohorts post-graduation?",
        answer:
          "Track: 1) Graduation Transition Rate (% of student subscribers converting to standard full-price plans within 60 days of graduation). 2) Post-graduation 12-month cohort churn. 3) Cumulative 4-year Customer Lifetime Value (LTV) including subsidized student years.",
      },
    ],
    commonMistakes: [
      "Failing to model cannibalization where existing full-paying subscribers downgrade to the student tier.",
      "Not implementing robust third-party verification (e.g. SheerID) leading to widespread fraud and margin leak.",
      "Evaluating success strictly on short-term signup volume rather than post-graduation conversion to full-price plans.",
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
      {
        question:
          "How would you optimize rider batching to balance throughput with strict SLA guarantees?",
        answer:
          "Implement dynamic batching constraints: combine orders only when destinations share delivery corridors within 1 km and order preparation timestamps align within a 4-minute window. Restrict batch sizes to 2 orders during peak rush hours to preserve 10-15 minute delivery SLAs.",
      },
      {
        question:
          "What KPI dashboard would you build for dark-store managers to monitor operations in real-time?",
        answer:
          "Key real-time tiles: 1) Median Picking & Packing duration (< 2.5 mins). 2) Staging-to-Rider Handover latency (< 90 secs). 3) Active Rider Queue & idle fleet ratio. 4) Out-of-Stock (OOS) picking cancellations. 5) SLA breach risk indicator (% orders with < 4 mins buffer remaining).",
      },
    ],
    commonMistakes: [
      "Blaming delivery riders immediately without analyzing dark-store picking, packing, and dispatch staging bottlenecks.",
      "Over-batching orders to maximize rider utilization at the expense of strict 10-15 minute SLA delivery commitments.",
      "Ignoring external micro-location factors like apartment elevator wait times, gated community access delays, or weather conditions.",
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
      {
        question:
          "What are the key differences in unit economics between UPI in India vs digital wallets in Southeast Asia?",
        answer:
          "India's UPI features zero Merchant Discount Rate (MDR) on P2M, requiring platforms to monetize via lending, soundboxes, and insurance cross-sells. In Southeast Asia, digital wallets charge standard 1.5-2.5% merchant take rates, providing direct transaction revenue but requiring higher customer acquisition marketing.",
      },
      {
        question:
          "How would you structure a post-merger integration plan if entering via local acquisition?",
        answer:
          "Execute a 100-day PMI framework: Days 1-30: Regulatory ownership transfer, leadership retention, and financial reporting alignment. Days 31-60: Risk engine, anti-fraud algorithms, and cloud infrastructure integration. Days 61-100: Unified merchant onboarding APIs and consumer rewards alignment.",
      },
    ],
    commonMistakes: [
      "Assuming payment rails and unit economics from India (zero-MDR UPI) directly map to Southeast Asian market dynamics.",
      "Underestimating local regulatory licensing barriers and foreign ownership caps in target jurisdictions.",
      "Choosing an organic build approach without evaluating the distribution moat of local dominant digital wallets (e.g., MoMo, GrabPay).",
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
      {
        question:
          "How would you implement predictive admission modeling using historical triage data?",
        answer:
          "Train gradient boosting models (XGBoost/LightGBM) on Emergency Department triage records using arrival vitals, chief complaint, age, and ESI triage acuity score. Generate real-time admission probability within 30 minutes of arrival to notify inpatient wards to prep beds ahead of physical boarding.",
      },
      {
        question:
          "What process changes in hospital pharmacy and billing can shave 2 hours off the discharge cycle?",
        answer:
          "Implement bedside discharge: complete insurance pre-authorization and discharge medication packaging the evening prior, process mobile POS billing in patient rooms by 10 AM, and utilize a comfortable transition lounge for patients awaiting family pick-up to free beds immediately.",
      },
    ],
    commonMistakes: [
      "Assuming high ER wait times must mean the hospital lacks overall bed capacity when the real bottleneck is discharge turnaround time.",
      "Overlooking the rigid specialization of beds (ICU vs general ward vs isolation beds) that prevents cross-utilization.",
      "Ignoring the conflict between predictable elective surgery schedules and unpredictable emergency trauma admissions.",
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
      {
        question:
          "How would you train a random forest or logistic regression model to predict HNW churn 90 days in advance?",
        answer:
          "Extract rolling 30/60/90-day time-series features: net outflow velocity, drop in average monthly balance, cessation of recurring salary credits, and declining RM touchpoints. Train a calibrated Random Forest / XGBoost model with class weighting, outputting high-risk alerts to relationship managers.",
      },
      {
        question:
          "What proactive retention incentives (fee waivers, lifestyle perks) offer the highest ROI?",
        answer:
          "High-ROI retention levers include: 1) Preferential fixed-deposit interest bumps (+25-50 bps) on large deposits. 2) Dedicated senior private banker assignment for accounts with service friction. 3) Zero-forex markup debit cards and airport concierge access, offering high perceived luxury at low bank cost.",
      },
    ],
    commonMistakes: [
      "Waiting for formal account closure notices instead of monitoring early leading signals like salary credit cessation or balance erosion.",
      "Treating high-net-worth (HNW) clients with generic mass-retail retention offers rather than personalized wealth management interventions.",
      "Ignoring relationship manager (RM) turnover as a primary catalyst for client portfolio migration to competing institutions.",
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
      {
        question:
          "How does corporate booking flexibility (refundable vs non-refundable tickets) affect no-show probability p?",
        answer:
          "Corporate flexible fare classes have significantly higher no-show/cancellation rates (20-35%) compared to non-refundable leisure fares (2-5%). Dynamic overbooking algorithms must parameterize no-show binomial distributions based on passenger fare class composition rather than a flat flight-level average.",
      },
      {
        question:
          "What real-time seat auction mechanisms can reduce the cash cost of involuntary denied boarding?",
        answer:
          "Implement mobile app reverse auctions during 24-hour online check-in. Invite flexible passengers to submit minimum acceptable travel voucher bids ($200-$500 + guaranteed seat on next flight), securing voluntary seat stand-downs at 50-70% lower cost than mandatory regulatory cash compensation.",
      },
    ],
    commonMistakes: [
      "Using a single uniform no-show rate for all flights instead of factoring in day-of-week, route type, and fare class flexibility.",
      "Ignoring the severe non-linear regulatory compensation penalties and brand damage associated with involuntary denied boarding.",
      "Overlooking proactive digital voluntary rebooking auctions during online check-in.",
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
      {
        question:
          "How do you evaluate whether a stricter free tier increases conversions or destroys viral top-of-funnel acquisition?",
        answer:
          "Run an A/B test tracking Product Qualified Leads (PQLs), viral invitation K-factor, and Net New ARR. If a restrictive paywall increases conversion rate from 2% to 4% but collapses top-of-funnel signups by 60%, total revenue declines. Optimize for Net Paid Volume = Top-of-Funnel Signups * Conversion %.",
      },
      {
        question:
          "What role does product-led growth (PLG) analytics play in identifying high-intent accounts?",
        answer:
          "PLG tools (PostHog, Amplitude) detect high-intent behavior (approaching 80% free tier capacity in 3 days, adding 5+ teammates, exporting advanced reports). Scoring these as Product Qualified Accounts triggers automated in-app promotional discounts or notifies sales reps for outbound outreach.",
      },
    ],
    commonMistakes: [
      "Tightening the free tier so aggressively that it kills viral top-of-funnel acquisition and user word-of-mouth.",
      "Placing upgrade paywalls behind obscure features rather than at the user's primary 'aha!' moment of maximum engagement.",
      "Failing to track Product Qualified Leads (PQLs) based on specific high-intent usage triggers.",
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
      {
        question:
          "Can you use aggregate functions like COUNT() inside a WHERE clause? Why or why not?",
        answer:
          "No. In SQL's logical execution order, `WHERE` evaluates individual row records before grouping and aggregation (`GROUP BY`) occur. Because aggregate values do not exist yet during the `WHERE` evaluation stage, filtering on aggregate results must be performed in `HAVING` or a wrapping subquery/CTE.",
      },
      {
        question:
          "How do query optimizers handle queries containing both WHERE, GROUP BY, and HAVING clauses?",
        answer:
          "The optimizer executes: 1) `WHERE` filters base table rows (utilizing index scans and partition pruning). 2) Remaining rows are grouped and hashed (`GROUP BY`). 3) Aggregations (SUM, AVG, COUNT) are computed. 4) `HAVING` filters aggregated buckets. Optimizers also automatically push down non-aggregate conditions from `HAVING` to `WHERE`.",
      },
    ],
    commonMistakes: [
      "Attempting to use aggregate functions (like `COUNT()` or `SUM()`) inside a `WHERE` clause.",
      "Filtering grouped dimensions in `HAVING` instead of `WHERE`, preventing query engines from utilizing indexes and partition pruning.",
      "Confusing row-level filtering with post-aggregation group-level filtering in analytical queries.",
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
      {
        question:
          "What supply-demand ratio ensures less than 15-minute booking confirmation without idle worker overhead?",
        answer:
          "Target a concurrent active supply-to-demand ratio of ~1.2 to 1.4 available professionals per active booking in a tight geographic cluster (2-3 km radius). Employ dynamic dispatch radii and surge multiplier incentives during peak demand to ensure rapid acceptance without excessive idle wage guarantees.",
      },
      {
        question:
          "How do you prevent platform leakage (technicians taking clients offline for direct cash)?",
        answer:
          "1) Provide warranty & insurance protection exclusively for in-app bookings. 2) Enable masked in-app calling and automated digital invoicing. 3) Link technician search ranking and priority dispatch algorithms to booking fulfillment integrity and customer repeat scores.",
      },
    ],
    commonMistakes: [
      "Spreading marketing budget thinly across an entire city instead of dominating a single dense micro-neighborhood first.",
      "Focusing purely on demand generation before securing reliable, vetted supply with guaranteed response SLAs.",
      "Failing to provide standalone SaaS / utility value to service professionals before marketplace transaction volume matures.",
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
      {
        question:
          "What are the hidden operational costs of maintaining fine-tuned model weights and evaluation benchmarks?",
        answer:
          "Hidden costs include: dedicated GPU cluster provisioning (VRAM allocation, autoscaling, cold starts), ongoing MLOps maintenance, synthetic training data curation & human-in-the-loop validation, automated evaluation harness maintenance, and recurring re-tuning costs whenever upstream base models update.",
      },
      {
        question:
          "How does Retrieval-Augmented Generation (RAG) shift the build vs buy trade-off?",
        answer:
          "RAG decouples dynamic domain knowledge from static model parameters. By querying vector databases (pgvector, Pinecone) at runtime, organizations can achieve high domain accuracy using off-the-shelf APIs or lightweight models, avoiding the steep overhead and static obsolescence of full model fine-tuning.",
      },
    ],
    commonMistakes: [
      "Underestimating hidden MLOps, continuous evaluation, and GPU infrastructure costs when choosing to fine-tune open-source models.",
      "Choosing full model fine-tuning when Retrieval-Augmented Generation (RAG) with prompt engineering solves the business need faster and cheaper.",
      "Ignoring data compliance, residency, and latency trade-offs between commercial API gateways and self-hosted models.",
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
      {
        question:
          "How does incremental dbt modeling differ from full-table rebuilds in terms of cloud compute cost?",
        answer:
          "Full-table rebuilds (`table` materialization) re-scan and transform entire historical datasets on every scheduled run, causing compute costs to scale linearly with total historical volume O(N). Incremental dbt models only process newly inserted or modified records (`WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})`), reducing query runtime and cloud compute costs by 70-95% on large tables.",
      },
      {
        question: "What KPIs should be tracked on FinOps executive dashboards?",
        answer:
          "1) Cost per Pipeline Run / Query Execution. 2) Compute Credit Burn Rate vs Monthly Budget. 3) Percentage of queries performing unpartitioned full table scans. 4) Warehouse Auto-Suspend Efficiency (% idle vs compute time). 5) Unit Economic Metric: Cloud Cost per Daily Active User (DAU) or Transaction.",
      },
    ],
    commonMistakes: [
      "Focusing solely on compute instance sizes while ignoring unpartitioned queries performing full-table scans across terabytes of data.",
      "Scheduling heavy full-table rebuild ETL pipelines every hour instead of leveraging incremental models (e.g., in dbt).",
      "Failing to set automatic warehouse suspend timeouts and credit usage limit kill-switches.",
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
      {
        question:
          "Why is early stopping ('peeking') dangerous in classical hypothesis testing, and how does sequential testing address it?",
        answer:
          "Repeatedly checking p-values and stopping as soon as p < 0.05 inflates Type I false positive rates from 5% to >30%. Sequential testing frameworks (Wald's SPRT, Always Valid p-values) adjust significance boundaries continuously, enabling real-time monitoring and early stopping without inflating error rates.",
      },
      {
        question:
          "What is the difference between Type I (false positive) and Type II (false negative) errors in business decisions?",
        answer:
          "Type I error (alpha): Concluding a feature produces an uplift when it is actually ineffective or harmful (wasting engineering deployment resources). Type II error (beta): Missing a genuine positive uplift and mistakenly abandoning a winning feature. Teams calibrate alpha/beta based on product risk tolerance.",
      },
    ],
    commonMistakes: [
      "Stopping experiments early ('peeking') as soon as p-values cross 0.05 without utilizing sequential testing corrections.",
      "Setting an unrealistically low Minimum Detectable Effect (MDE) that requires unattainable sample sizes and months of runtime.",
      "Evaluating multiple secondary metrics simultaneously without applying family-wise error rate corrections (e.g., Bonferroni).",
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
      {
        question:
          "How do discount rates (Cost of Capital) factor into multi-year enterprise LTV projections?",
        answer:
          "For multi-year enterprise contracts, future cash flows must be discounted to present value using the company's cost of capital r: LTV = Sum( Margin_t / (1 + r)^t ). Omitting discount rates artificially inflates long-term LTV, leading to unsustainable CAC spending thresholds.",
      },
      {
        question:
          "Why is cohort-based historical LTV more reliable than blended cross-sectional LTV formulas?",
        answer:
          "Blended formulas assume constant churn across all user tenures, whereas real customer churn is heavily front-loaded in months 1-3 and flattens into a sticky retention curve over time. Cohort LTV tracks actual realized retention and expansion curves across specific acquisition vintages without cross-sectional distortion.",
      },
    ],
    commonMistakes: [
      "Using revenue instead of gross profit margin when calculating LTV, leading to unsustainable customer acquisition budgets.",
      "Applying simple cross-sectional LTV formulas to non-contractual business models where customer churn is unobservable.",
      "Failing to discount multi-year enterprise cash flows with the company's cost of capital (WACC).",
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
      {
        question:
          "How do stock-outs impact brand loyalty differently online versus in-store?",
        answer:
          "Online stock-outs face zero switching friction: customers instantly navigate to a competitor within clicks, causing immediate revenue loss and hurting SEO rank. In-store stock-outs create greater physical frustration, but store associates can preserve the sale via in-store ordering kiosks for home delivery.",
      },
      {
        question:
          "What inventory turnover ratio targets indicate a healthy fashion apparel supply chain?",
        answer:
          "Fast-fashion retailers (Zara, H&M) target inventory turnover ratios of 4.5 to 7.0 turns/year (inventory clearing every 50-80 days). Standard department apparel targets 3.0 to 4.5 turns. Turnovers below 2.0 risk severe markdown write-downs, while above 8.0 may indicate frequent stock-outs.",
      },
    ],
    commonMistakes: [
      "Maintaining isolated, siloed inventory buffers for online vs physical retail without cross-channel inventory pooling.",
      "Ignoring the last-mile shipping cost economics when fulfilling small e-commerce orders from distant physical storefronts.",
      "Failing to establish dynamic safety stock thresholds that adjust for seasonal and regional promotional volatility.",
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
      {
        question:
          "What would you do if the executive still insists on their original strategy despite clear data evidence?",
        answer:
          "Acknowledge the strategic context and propose a low-risk phased rollout (e.g., pilot with a 10% canary cohort or single test region) with predefined guardrail metrics and automatic rollback criteria, testing the hypothesis safely while protecting business KPIs.",
      },
      {
        question:
          "How do you handle statistical ambiguity when sample sizes are borderline inconclusive?",
        answer:
          "Be transparent about confidence intervals and Bayesian probability distributions (e.g., '80% likelihood of uplift, but confidence interval spans [-0.5%, +3.2%]'). Recommend either extending test runtime, increasing sample allocation, or weighing asymmetric upside vs downside risk.",
      },
    ],
    commonMistakes: [
      "Presenting data aggressively as a personal victory ('proving the boss wrong') rather than a collaborative business discovery.",
      "Overwhelming business stakeholders with complex statistical formulas and raw code instead of business impact narratives.",
      "Failing to offer constructive, actionable alternative strategies after invalidating the original hypothesis.",
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
      {
        question:
          "How do you decide when data is 'good enough' to take irreversible actions?",
        answer:
          "Distinguish two-way door (reversible) from one-way door (irreversible) decisions. For reversible choices, ~70% directional certainty is optimal to preserve velocity. For irreversible decisions, conduct stress-testing on worst-case bounds and corroborate core assumptions across multiple independent proxies.",
      },
      {
        question:
          "What post-launch checkpoints did you establish to validate your early assumptions?",
        answer:
          "Configured automated telemetry dashboards monitoring leading metrics at Day 1, Day 7, and Day 30 post-launch. Defined explicit deviation thresholds (>15% variance from baseline assumptions) that automatically trigger emergency recalibration reviews.",
      },
    ],
    commonMistakes: [
      "Falling into 'analysis paralysis' and missing critical decision windows in pursuit of 100% data certainty.",
      "Failing to explicitly document underlying assumptions and sensitivity boundaries in the final recommendation.",
      "Not establishing post-launch checkpoint telemetry to validate early assumptions and trigger course corrections.",
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
      {
        question:
          "How do you communicate 'No' to high-performing sales directors without demotivating them?",
        answer:
          "Reframe 'No' as strategic trade-offs backed by data (e.g., 'Delivering bespoke Feature A for $50k ARR delays Core Platform Feature B which unlocks $500k across 10 pending deals'). Offer modular alternatives (webhooks/APIs) and log request volume in the product backlog for future consideration.",
      },
      {
        question:
          "How do you incorporate technical debt paydown into roadmap capacity planning?",
        answer:
          "Establish an agreed engineering bandwidth split (e.g., 70% new feature development, 20% technical debt & infrastructure scaling, 10% bug fixes/experimentation). Frame debt paydown in commercial terms such as deployment velocity improvements, cloud cost savings, and reduced outage risk.",
      },
    ],
    commonMistakes: [
      "Giving a flat, uncollaborative 'No' to business leaders without presenting trade-offs and quantified impact data.",
      "Building custom, one-off tech debt forks for every vocal sales lead instead of designing modular, reusable platform features.",
      "Failing to use an objective prioritization framework (like RICE) to make decision rationale transparent across departments.",
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
      {
        question:
          "What mechanisms did you put in place to catch similar failure signals earlier in future sprints?",
        answer:
          "Instituted blameless retrospectives with root-cause tracking, shifted metric tracking from lagging outputs to early leading indicators (Day-1 / Day-3 activation), added automated synthetic monitoring, and introduced staged milestone checkpoints before full deployment.",
      },
      {
        question:
          "How did you rebuild stakeholder confidence following the setback?",
        answer:
          "Delivered complete transparency by publishing a concise incident report detailing what failed and concrete prevention guardrails. Rebuilt trust through consistent execution of immediate quick wins and maintaining proactive communication on subsequent sprint deliverables.",
      },
    ],
    commonMistakes: [
      "Deflecting blame onto external factors, junior team members, or shifting requirements instead of taking clear ownership.",
      "Focusing on the emotional setback rather than extracting concrete architectural or process lessons learned.",
      "Failing to communicate the prevention mechanisms implemented to prevent the exact failure from recurring.",
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
      {
        question:
          "How do you handle a team member who misses agreed deadlines and doesn't report to you?",
        answer:
          "Conduct a private, supportive 1-on-1 to understand underlying blockers or conflicting team priorities. Assist in removing operational bottlenecks, clarify the dependency impact on the overall team launch, and coordinate with their functional lead to align bandwidth if necessary.",
      },
      {
        question:
          "What communication cadences work best for keeping executive sponsors updated without micromanagement?",
        answer:
          "Send concise weekly asynchronous updates structured with a Red/Yellow/Green status badge, 3 key milestone bullets, and explicit requests for assistance on blockers. Supplement with monthly 20-minute alignment syncs for major roadmap decisions.",
      },
    ],
    commonMistakes: [
      "Attempting to dictate tasks using pseudo-managerial authority rather than building alignment around shared goals.",
      "Escalating peer performance issues to senior leadership prematurely before having open 1-on-1 discovery conversations.",
      "Failing to acknowledge and celebrate the contributions of individual cross-functional partners in steering meetings.",
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
      {
        question:
          "How do you gauge whether your audience is truly understanding or just nodding along?",
        answer:
          "Ask interactive, open-ended application questions (e.g., 'How would this metric change your quarterly campaign strategy?'). Watch for non-verbal engagement cues and pause regularly to invite questions and summarize key takeaways in plain language.",
      },
      {
        question:
          "What visual storytelling techniques do you use in executive slide decks?",
        answer:
          "Use conclusion-first action titles for every slide (e.g. 'Automating Feature X reduces support tickets by 32%'), clean side-by-side comparison graphics, highlighted key metric callouts, and reserve mathematical formulas or query scripts for appendix slides.",
      },
    ],
    commonMistakes: [
      "Using dense algorithmic jargon, mathematical notations, or raw code blocks in executive presentation decks.",
      "Focusing on how the algorithm works technically rather than what commercial outcome or strategic advantage it unlocks.",
      "Talking continuously without pausing to gauge stakeholder understanding through interactive checkpoints.",
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
      {
        question:
          "Write a query to find the second highest salary in each department using DENSE_RANK().",
        answer:
          "```sql\nWITH ranked_salaries AS (\n  SELECT \n    emp_id,\n    emp_name,\n    department_id,\n    salary,\n    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS salary_rank\n  FROM employees\n)\nSELECT emp_id, emp_name, department_id, salary\nFROM ranked_salaries\nWHERE salary_rank = 2;\n```",
      },
      {
        question:
          "What is the performance implication of PARTITION BY on high-cardinality columns?",
        answer:
          "`PARTITION BY` on high-cardinality columns requires distributed query engines to shuffle and sort large data volumes across worker nodes. Without proper indexing or physical clustering on partition keys, this can cause excessive memory spills to disk and network bottlenecking.",
      },
    ],
    commonMistakes: [
      "Confusing `RANK()` and `DENSE_RANK()` when identifying the Nth highest value where ties exist.",
      "Using `PARTITION BY` on high-cardinality columns in large distributed datasets without index support, causing out-of-memory errors.",
      "Attempting to filter window function results in the same `WHERE` clause without wrapping the query in a CTE or subquery.",
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
      {
        question:
          "How does the React 19 compiler affect manual useMemo and useCallback optimization?",
        answer:
          "The React 19 Compiler automatically analyzes component dependencies and memoizes render outputs and function references at build time. This removes the need for manual `useMemo` and `useCallback` boilerplate in standard application code while eliminating human error in dependency arrays.",
      },
      {
        question:
          "What causes infinite re-render loops when using objects as dependencies in useEffect?",
        answer:
          "Objects and arrays in JavaScript are compared by reference (`===`). Defining an object inline inside a component body creates a new memory reference on every render. When passed into `useEffect([config])`, it triggers the effect every cycle, causing state changes and infinite loops. Fix by memoizing with `useMemo` or passing primitive values.",
      },
    ],
    commonMistakes: [
      "Wrapping every single trivial function and primitive computation in `useMemo`/`useCallback`, adding unnecessary memory overhead.",
      "Passing unstable object or array references inside dependency arrays, causing infinite re-render loops.",
      "Confusing `useMemo` (which caches the evaluated return value) with `useCallback` (which caches the function reference itself).",
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
      {
        question:
          "How do you optimize memory consumption when loading large 10GB+ CSV files into Pandas?",
        answer:
          "1) Define explicit `dtypes` (downcast `float64` to `float32`, `int64` to `int32`/`int16`, strings to `category`). 2) Use `usecols` to load only required columns. 3) Process in streaming chunks with `pd.read_csv(..., chunksize=100000)`. 4) Switch to Parquet format or use DuckDB/Polars for high-performance out-of-core queries.",
      },
      {
        question:
          "What is the difference between vectorized operations and apply() in execution speed?",
        answer:
          "Vectorized operations in Pandas run via compiled C/SIMD instructions in NumPy across continuous memory blocks with zero Python interpreter overhead. In contrast, `.apply()` iterates element-by-element in pure Python with function call and boxing overhead, often executing 50x-200x slower.",
      },
    ],
    commonMistakes: [
      "Using slow Python row-by-row iteration (`for` loops or unoptimized `.apply()`) instead of vectorized Pandas operations.",
      "Loading massive multi-gigabyte CSVs into memory without specifying optimal `dtypes` (like `category` or downcasted floats).",
      "Forgetting that `groupby()` can produce multi-index columns that require `.reset_index()` for downstream DataFrame operations.",
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
      {
        question:
          "What is a composite index and how does the leftmost prefix rule apply?",
        answer:
          "A composite index spans multiple columns `(col_a, col_b, col_c)`. Under the leftmost prefix rule, the B-Tree index can only optimize queries filtering on leading subsets: `(col_a)`, `(col_a, col_b)`, or `(col_a, col_b, col_c)`. A query filtering solely on `(col_b)` cannot utilize the index because ordering is rooted on `col_a`.",
      },
      {
        question:
          "How do excessive indexes degrade INSERT/UPDATE/DELETE write throughput?",
        answer:
          "Every table write (`INSERT`/`DELETE`) must synchronously update every associated B-Tree index structure. An `UPDATE` modifying indexed columns causes tree node rebalancing, page splits, and Write-Ahead Log (WAL) amplification, turning a fast write into multiple synchronous disk I/O operations.",
      },
    ],
    commonMistakes: [
      "Creating composite indexes without respecting the leftmost prefix rule, rendering the index useless for trailing columns.",
      "Over-indexing tables indiscriminately, which severely degrades write, update, and delete transaction performance.",
      "Assuming Hash indexes can optimize range queries (`BETWEEN`, `<`, `>`) or `ORDER BY` clauses.",
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
      {
        question:
          "How do you mitigate serverless cold start latencies in Java or Python runtimes?",
        answer:
          "1) Provision Lambda Provisioned Concurrency to keep warm execution instances. 2) Minimize deployment package size by tree-shaking unused libraries. 3) Lazy-load heavy initialization code and reuse database connection pools across handler invocations. 4) For Java, compile with GraalVM native binaries or AWS SnapStart.",
      },
      {
        question:
          "What strategies prevent database connection pool exhaustion when thousands of Lambdas spin up concurrently?",
        answer:
          "1) Deploy database connection proxies (AWS RDS Proxy, PgBouncer, Prisma Accelerate) that multiplex thousands of ephemeral Lambda connections into a fixed pool of persistent backend connections. 2) Utilize serverless-native HTTP database endpoints (PlanetScale, DynamoDB, Aurora Serverless Data API). 3) Set Lambda reserved concurrency caps.",
      },
    ],
    commonMistakes: [
      "Deploying heavy, long-running monolithic workloads to AWS Lambda where predictable container instances would be far cheaper.",
      "Ignoring database connection pool limits when thousands of concurrent serverless instances spin up simultaneously.",
      "Failing to optimize container cold starts or initialize heavy SDK clients outside of the Lambda handler function.",
    ],
  },
];
