import SimpleTable from "@/components/simple-table";
import { MARKET_TRANSITION_TABLE } from "../../../constants/step-4";

export default function Step4Info() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest sm:text-xs">
          EXHIBIT 04
        </span>
        <h2 className="text-base font-medium tracking-tight sm:text-lg">
          Updated Jaipur vs Kochi decision
        </h2>
      </div>

      <SimpleTable data={MARKET_TRANSITION_TABLE} />

      <ul className="text-muted-foreground list-disc space-y-3 pl-5 text-xs sm:text-sm">
        <li>
          Use the updated board forecasts for this decision. These figures
          already include the rider levy, transition cost and festival-delay
          effects. You do not need to recalculate them from your B3 plan.
        </li>
        <li>
          Assume the board will re-approve the capital envelope for Kochi; no
          additional funding constraint applies to this decision.
        </li>
      </ul>
    </div>
  );
}
