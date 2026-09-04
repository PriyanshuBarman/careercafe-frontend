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
import { CASE_PILLS, EXHIBIT_METRICS } from "@/features/b1/constants";

export function LeftColumn() {
  return (
    <section className="flex w-full flex-col gap-6 px-6 sm:gap-7 sm:px-8 lg:w-[40%] lg:shrink-0 lg:px-10">
      {/* Case Brief Header */}
      <div className="space-y-2">
        <span className="text-cc-sage-900 inline-block text-xs font-semibold tracking-widest uppercase">
          CASE BRIEF
        </span>
        <h1 className="text-xl font-medium tracking-tight sm:text-3xl">
          DashCart&apos;s expansion decision
        </h1>
        <p className="text-muted-foreground sm:text-md text-xs">
          DashCart is a 15-minute grocery-delivery company operating in
          Bengaluru and Hyderabad. The board has approved up to ₹4.2 crore to
          enter one new market.
        </p>
      </div>

      {/* Board Question Box */}
      <Item variant="muted" className="bg-cc-sage-100/70 p-4">
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
            className="text-2xs bg-cc-sage-100/70 rounded-md p-3 sm:text-xs"
          >
            {pill}
          </Badge>
        ))}
      </div>

      <Separator />

      {/* Exhibit 01 Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="text-cc-sage-900 text-2xs inline-block font-semibold tracking-widest sm:text-xs">
            EXHIBIT 01
          </span>
          <h2 className="text-base font-medium tracking-tight sm:text-xl">
            Market attractiveness snapshot
          </h2>
        </div>

        {/* Exhibit Table */}
        <div className="overflow-hidden rounded-xl border">
          <Table className="w-full text-xs sm:text-sm">
            <TableHeader className="bg-accent">
              <TableRow>
                <TableHead className="w-[75%] px-4 py-3">Metric</TableHead>
                <TableHead className="border-l px-4 py-3">Pune</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {EXHIBIT_METRICS.map((row) => (
                <TableRow key={row.metric}>
                  <TableCell className="px-4 py-3 whitespace-normal">
                    {row.metric}
                  </TableCell>
                  <TableCell className="border-l px-4 py-3">
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
