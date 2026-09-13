import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type TableCell = string | number | boolean | null | undefined;

export type TableColumn<K extends string | number = string> = {
  key: K;
  header: string | number;
};

export type TableData<K extends string | number = string> = {
  columns: readonly TableColumn<K>[];
  rows: readonly Record<K, TableCell>[];
};

type SimpleTableProps<K extends string | number> = {
  data: TableData<K>;
  className?: string;
};

export default function SimpleTable<K extends string | number>({
  data,
  className,
}: SimpleTableProps<K>) {
  return (
    <div className={cn("overflow-hidden rounded-xl border text-xs", className)}>
      <Table className="text-xs sm:text-sm">
        <TableHeader className="bg-accent">
          <TableRow>
            {data.columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className="px-4 py-3 not-first:border-l"
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {data.columns.map((col) => (
                <TableCell
                  key={String(col.key)}
                  className="px-4 py-3 whitespace-normal not-first:border-l"
                >
                  {row[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
