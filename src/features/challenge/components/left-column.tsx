import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CASE_PILLS,
  EXHIBIT_TABLES_BY_STEP,
} from "../../challenge/constants/left-column";

type LeftColumnProps = {
  currentStep?: number;
};

export default function LeftColumn({ currentStep = 0 }: LeftColumnProps) {
  const currentExhibit =
    EXHIBIT_TABLES_BY_STEP[currentStep] ?? EXHIBIT_TABLES_BY_STEP[0];

  return (
    <section className="flex w-full flex-col gap-6 px-6 sm:gap-7 sm:px-8 lg:w-[40%] lg:px-10">
      {/* Case Brief Header */}
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

      {/* Board Question Box */}
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

      {/* Case Pills */}
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

      {/* Dynamic Exhibit Section */}
      <div className="space-y-4">
        <div>
          <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest">
            EXHIBIT {currentExhibit.exhibitNumber}
          </span>
          <h2 className="text-base font-medium tracking-tight sm:text-lg">
            {currentExhibit.title}
          </h2>
        </div>

        {/* Exhibit Table */}
        <div className="overflow-hidden rounded-xl border">
          <Table className="w-full text-xs sm:text-sm">
            <TableHeader className="bg-accent">
              <TableRow>
                {currentExhibit.headers.map((header, idx) => (
                  <TableHead
                    key={header}
                    className={idx === 0 ? "px-4 py-3" : "border-l px-4 py-3"}
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentExhibit.rows.map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <TableCell
                      key={cellIdx}
                      className={
                        cellIdx === 0
                          ? "px-4 py-3 whitespace-normal"
                          : "border-l px-4 py-3"
                      }
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
