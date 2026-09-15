import SimpleTable from "@/components/simple-table";
import { UNIT_ECONOMICS_TABLE } from "../../../constants/step-2";

export default function Step2Info() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest sm:text-xs">
          EXHIBIT 02
        </span>
        <h2 className="text-base font-medium tracking-tight sm:text-lg">
          Month-9 operating economics
        </h2>
      </div>

      <SimpleTable data={UNIT_ECONOMICS_TABLE} />
    </div>
  );
}
