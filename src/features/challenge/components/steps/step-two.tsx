import { Controller, type Control } from "react-hook-form";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CITIES,
  ECONOMICS_METRICS,
} from "../../../challenge/constants/step-two";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepTwoProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepTwo({ control }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <Item variant="muted" className="border-border">
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs">FORMULA HELPER</ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            Contribution/order = AOV x margin - discount - last-mile - pick &
            pack - shrink
          </ItemDescription>
        </ItemContent>
      </Item>

      <div className="overflow-hidden rounded-xl border">
        <Table className="w-full text-xs sm:text-sm">
          <TableHeader className="bg-accent">
            <TableRow>
              <TableHead className="w-[40%] px-4 py-3">Metric</TableHead>
              <TableHead className="border-l px-4 py-3 text-right">
                Pune
              </TableHead>
              <TableHead className="border-l px-4 py-3 text-right">
                Jaipur
              </TableHead>
              <TableHead className="border-l px-4 py-3 text-right">
                Kochi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ECONOMICS_METRICS.map((row) => (
              <TableRow key={row.metric}>
                <TableCell className="px-4 py-3 font-medium whitespace-normal">
                  {row.metric}
                </TableCell>
                <TableCell className="border-l px-4 py-3 text-right">
                  {row.pune}
                </TableCell>
                <TableCell className="border-l px-4 py-3 text-right">
                  {row.jaipur}
                </TableCell>
                <TableCell className="border-l px-4 py-3 text-right">
                  {row.kochi}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <FieldGroup className="gap-10">
        <Controller
          name="dashCartCity"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which city should DashCart prioritise now?
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              >
                {CITIES.map((city) => (
                  <FieldLabel
                    key={city.title}
                    htmlFor={`form-rhf-radiogroup-${city.title}`}
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={city.title}
                        id={`form-rhf-radiogroup-${city.title}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldTitle className="text-xs sm:text-sm">
                        {city.title}
                      </FieldTitle>
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </FieldSet>
          )}
        />
      </FieldGroup>
    </div>
  );
}
