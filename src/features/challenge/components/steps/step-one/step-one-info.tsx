import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import SimpleTable from "@/components/simple-table";
import { STEP_ONE_TABLE } from "../../../constants/step-one";

const CASE_PILLS = [
  "Launch one city only",
  "Target ≥90% on-time delivery",
  "Use only the case exhibits",
];

export default function StepOneInfo() {
  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Case Brief Header, Board Question, and Pills */}
      <div className="space-y-2">
        <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest uppercase sm:text-xs">
          CASE BRIEF
        </span>
        <h1 className="text-lg font-medium tracking-tight sm:text-2xl">
          DashCart&apos;s expansion decision
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm">
          DashCart is a 15-minute grocery-delivery company operating in
          Bengaluru and Hyderabad. The board has approved up to ₹4.2 crore to
          enter one new market.
        </p>
      </div>

      <Item variant="muted" className="p-4">
        <ItemContent>
          <ItemDescription className="text-2xs font-semibold tracking-wider">
            BOARD QUESTION
          </ItemDescription>
          <ItemTitle className="text-xs font-normal sm:text-sm">
            Which city, operating model and capital allocation create the most
            defensible path to positive economics?
          </ItemTitle>
        </ItemContent>
      </Item>

      <div className="flex flex-wrap gap-2">
        {CASE_PILLS.map((pill) => (
          <Badge
            variant="secondary"
            key={pill}
            className="text-2xs rounded-md p-3 sm:text-xs"
          >
            {pill}
          </Badge>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest sm:text-xs">
            EXHIBIT 01
          </span>
          <h2 className="text-base font-medium tracking-tight sm:text-lg">
            Market attractiveness snapshot
          </h2>
        </div>

        <SimpleTable data={STEP_ONE_TABLE} />
      </div>
    </div>
  );
}
