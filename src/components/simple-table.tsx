import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableCell = string | number | boolean | null | undefined;

export type TableData = {
  headers: readonly (string | number)[];
  rows: readonly (readonly TableCell[])[];
};

type SimpleTableProps = {
  data: TableData;
  className?: string;
};

export default function SimpleTable({ data, className }: SimpleTableProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border", className)}>
      <Table>
        <TableHeader className="bg-accent">
          <TableRow>
            {data.headers.map((header, index) => (
              <TableHead key={index} className="px-4 py-3 not-first:border-l">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className="px-4 py-3 whitespace-normal not-first:border-l"
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
