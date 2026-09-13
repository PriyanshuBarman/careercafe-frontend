import { FunctionOfXIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, type Control } from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { CITIES } from "../../../constants/step-1";
import {
  ECONOMICS_METRIC_ROWS,
  FORMULAS,
  STRESS_TEST_METRICS,
} from "../../../constants/step-2";
import { type ChallengeFormData } from "../../../schemas/form-schema";

const CITY_KEYS = {
  Pune: "pune",
  Jaipur: "jaipur",
  Kochi: "kochi",
} as const;

type Step2FieldsProps = {
  control: Control<ChallengeFormData>;
};

export default function Step2Fields({ control }: Step2FieldsProps) {
  return (
    <div className="space-y-6">
      <Item variant="muted" className="border-border">
        <ItemMedia className="self-start">
          <HugeiconsIcon
            icon={FunctionOfXIcon}
            strokeWidth={1.5}
            className="size-4 sm:size-5"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs">FORMULA HELPER</ItemTitle>
          <ul className="mt-2 -ml-2 list-disc space-y-1 text-xs sm:text-xs">
            {FORMULAS.map((formula) => (
              <li key={formula}>{formula}</li>
            ))}
          </ul>
        </ItemContent>
      </Item>

      <div className="space-y-2">
        <div className="overflow-hidden rounded-xl border">
          <Table className="w-full text-xs sm:text-sm">
            <TableHeader className="bg-accent">
              <TableRow>
                <TableHead className="px-4 py-3 text-xs sm:text-sm">
                  Metric
                </TableHead>
                {CITIES.map((city) => (
                  <TableHead
                    key={city}
                    className="border-l px-4 py-3 text-right"
                  >
                    {city}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {ECONOMICS_METRIC_ROWS.map((row) => (
                <TableRow key={row.id} className="hover:bg-transparent">
                  <TableCell className="flex flex-wrap gap-1 px-4 py-3 font-medium whitespace-normal">
                    <span>{row.label}</span>
                    <span className="text-muted-foreground font-normal">
                      ({row.unit})
                    </span>
                  </TableCell>
                  {CITIES.map((city) => (
                    <TableCell key={city} className="border-l p-1.5 sm:p-2">
                      <Controller
                        name={`economics.${row.id}.${CITY_KEYS[city]}`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <Input
                            {...field}
                            type="number"
                            inputMode="decimal"
                            aria-invalid={fieldState.invalid}
                            className="text-right font-mono text-xs sm:h-9 sm:text-sm"
                          />
                        )}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <FieldGroup className="gap-10">
        <Controller
          name="prioritisedCity"
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
                    key={city}
                    htmlFor={`form-rhf-radiogroup-${city}`}
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={city}
                        id={`form-rhf-radiogroup-${city}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldTitle className="text-xs sm:text-sm">
                        {city}
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

        <Controller
          name="stressTestMetric"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Choose one metric you would stress-test before committing.
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3"
              >
                {STRESS_TEST_METRICS.map((metric) => (
                  <FieldLabel
                    key={metric}
                    htmlFor={`form-rhf-radiogroup-metric-${metric}`}
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={metric}
                        id={`form-rhf-radiogroup-metric-${metric}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldTitle className="text-xs sm:text-sm">
                        {metric}
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

        <Controller
          name="viewInterpretation"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  Write a short interpretation of what changed or strengthened
                  your view.
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
                  {field.value?.length || 0} / 70
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={70}
                placeholder="Explain what changed or strengthened your view based on the store-level economics..."
                aria-invalid={fieldState.invalid}
                className="min-h-24 text-xs sm:text-sm"
              />
              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>
    </div>
  );
}
