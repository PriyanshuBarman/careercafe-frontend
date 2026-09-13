import SimpleTable from "@/components/simple-table";
import {
  OPERATING_MODELS_TABLE,
  STRATEGIC_INITIATIVES_TABLE,
} from "../../../constants/step-3";

export default function Step3Info() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest sm:text-xs">
          EXHIBIT 03
        </span>
        <h2 className="text-base font-medium tracking-tight sm:text-lg">
          Jaipur models and initiatives
        </h2>
      </div>

      {/* Table 1 */}
      <div className="space-y-2">
        <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
          Operating Models
        </h3>
        <SimpleTable data={OPERATING_MODELS_TABLE} />
      </div>

      {/* Table 2 */}
      <div className="space-y-2">
        <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
          Strategic Initiatives
        </h3>
        <SimpleTable data={STRATEGIC_INITIATIVES_TABLE} />
      </div>
    </div>
  );
}
