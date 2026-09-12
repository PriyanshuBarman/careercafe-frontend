import SimpleTable from "@/components/simple-table";
import { STEP_TWO_TABLE } from "../../../constants/step-two";

export default function StepTwoInfo() {
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

      <SimpleTable data={STEP_TWO_TABLE} />
    </div>
  );
}
