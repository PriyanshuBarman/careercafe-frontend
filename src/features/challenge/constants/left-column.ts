export const CASE_PILLS = [
  "Launch one city only",
  "Target ≥90% on-time delivery",
  "Use only the case exhibits",
];

interface ExhibitTableData {
  exhibitNumber: string;
  title: string;
  headers: string[];
  rows: string[][];
}

export const EXHIBIT_TABLES_BY_STEP: ExhibitTableData[] = [
  {
    exhibitNumber: "01",
    title: "Market attractiveness snapshot",
    headers: ["Metric", "Pune", "Jaipur", "Kochi"],
    rows: [
      ["Online grocery households", "5.2L", "3.6L", "2.9L"],
      ["Category growth", "28%", "34%", "25%"],
      ["Average basket value", "₹720", "₹590", "₹650"],
      ["Quick-commerce competitors", "5", "2", "3"],
      ["Dark-store rent / month", "₹10L", "₹6L", "₹7L"],
      ["Willing to pay fee", "31%", "40%", "52%"],
      ["Delivery radius", "4.6 km", "3.8 km", "5.2 km"],
    ],
  },
  {
    exhibitNumber: "02",
    title: "Month-9 operating economics",
    headers: ["Metric", "Pune", "Jaipur", "Kochi"],
    rows: [
      ["Monthly orders", "170k", "125k", "90k"],
      ["Average order value", "₹720", "₹590", "₹650"],
      ["Gross margin", "25%", "24%", "26%"],
      ["Discount / order", "₹50", "₹26", "₹30"],
      ["Last-mile / order", "₹72", "₹44", "₹60"],
      ["Pick, pack and shrink", "₹32", "₹29", "₹30"],
      ["Required dark stores", "5", "3", "3"],
      ["Monthly fixed ops", "₹70L", "₹34L", "₹42L"],
    ],
  },
  {
    exhibitNumber: "03",
    title: "Jaipur models and initiatives",
    headers: ["Metric", "Owned", "Partner", "Hybrid"],
    rows: [
      ["Setup cost", "₹250L", "₹70L", "₹150L"],
      ["Launch", "9 weeks", "4 weeks", "6 weeks"],
      ["Contribution / order", "₹45", "₹25", "₹38"],
      ["On-time delivery", "95%", "89%", "92%"],
      ["Capacity", "150k", "160k", "145k"],
    ],
  },
  {
    exhibitNumber: "04",
    title: "Updated Jaipur vs Kochi decision",
    headers: ["Metric", "Stay Jaipur", "Switch Kochi"],
    rows: [
      ["12-month operating contribution", "₹340L", "₹365L"],
      ["Transition cost", "—", "₹25L"],
      ["Festival-delay impact", "₹0", "₹22L"],
      ["Net 12-month value", "₹340L", "₹318L"],
      ["Net 24-month value", "₹620L", "₹828L"],
      ["Competitive intensity", "Medium", "Low after exit"],
      ["Execution speed", "Faster", "~5 weeks slower"],
      ["Jaipur preparation", "₹45L sunk", "₹45L sunk"],
    ],
  },
  {
    exhibitNumber: "05",
    title: "Board investment memo synthesis",
    headers: ["Metric", "Target"],
    rows: [
      ["Target market recommendation", "Single Metro Launch"],
      ["Target 12-month EBITDA margin", "-4.2% → Breakeven"],
      ["Projected monthly GMV (Month 12)", "₹3.8 crore"],
      ["Expected market share rank", "Top 3 entrant"],
      ["Risk mitigation protocol", "Tiered store rollback"],
    ],
  },
];
