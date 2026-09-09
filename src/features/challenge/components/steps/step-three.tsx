import { InfoIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, type Control } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
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
import { Textarea } from "@/components/ui/textarea";
import {
  ENTRY_MODES,
  STRATEGIC_INITIATIVES,
  SUMMARY_TABLE,
} from "../../../challenge/constants/step-three";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepThreeProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepThree({ control }: StepThreeProps) {
  const handleStrategicInitiativeToggle = (
    title: string,
    checked: boolean | "indeterminate",
    currentValues: string[],
    onChange: (values: string[]) => void,
  ) => {
    if (checked) {
      if (currentValues.length >= 2) return;
      onChange([...currentValues, title]);
    } else {
      onChange(currentValues.filter((val) => val !== title));
    }
  };

  return (
    <div className="space-y-6">
      <Item variant="muted" className="border-border">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={InfoIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs">BOARD DECISION</ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            Management selected Jaipur. Choose one model, optionally fund up to
            two initiatives and review factual feasibility.
          </ItemDescription>
        </ItemContent>
      </Item>

      <FieldGroup className="gap-10">
        <Controller
          name="entryModel"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">Choose one entry model?</FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              >
                {ENTRY_MODES.map((model) => (
                  <FieldLabel
                    key={model.title}
                    htmlFor={`form-rhf-radiogroup-${model.title}`}
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={model.title}
                        id={`form-rhf-radiogroup-${model.title}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {model.title}
                        </FieldTitle>
                        <FieldDescription className="text-2xs sm:text-xs">
                          {model.description}
                        </FieldDescription>
                      </FieldContent>
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
          name="strategicInitiatives"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Fund up to two strategic initiatives:
              </FieldLegend>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {STRATEGIC_INITIATIVES.map((initiative) => {
                  const isChecked = field.value?.includes(initiative.title);
                  const isDisabled =
                    !isChecked && (field.value?.length ?? 0) >= 2;

                  return (
                    <FieldLabel
                      key={initiative.title}
                      htmlFor={`initiative-${initiative.title}`}
                      className={
                        isDisabled
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer"
                      }
                    >
                      <Field
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`initiative-${initiative.title}`}
                          aria-invalid={fieldState.invalid}
                          name={field.name}
                          disabled={isDisabled}
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleStrategicInitiativeToggle(
                              initiative.title,
                              checked,
                              field.value || [],
                              field.onChange,
                            )
                          }
                        />
                        <FieldContent>
                          <FieldTitle className="text-xs sm:text-sm">
                            {initiative.title}
                          </FieldTitle>
                          <FieldDescription className="text-2xs sm:text-xs">
                            {initiative.description}
                          </FieldDescription>
                        </FieldContent>
                      </Field>
                    </FieldLabel>
                  );
                })}
              </div>

              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </FieldSet>
          )}
        />

        <Controller
          name="unfundedInitiative"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Choose one initiative to not fund:
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
              >
                {STRATEGIC_INITIATIVES.map((initiative) => (
                  <FieldLabel
                    key={initiative.title}
                    htmlFor={`unfunded-${initiative.title}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        id={`unfunded-${initiative.title}`}
                        value={initiative.title}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {initiative.title}
                        </FieldTitle>
                        <FieldDescription className="text-2xs sm:text-xs">
                          {initiative.description}
                        </FieldDescription>
                      </FieldContent>
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
          name="tradeoffText"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  Write your trade-off explanation
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
                  {field.value?.length || 0} / 120
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={120}
                aria-invalid={fieldState.invalid}
                className="text-xs sm:text-sm"
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

      <div className="overflow-hidden rounded-xl border">
        <Table className="w-full text-xs sm:text-sm">
          <TableHeader className="bg-accent">
            <TableRow>
              {SUMMARY_TABLE.headers.map((header, index) => (
                <TableHead
                  key={header}
                  className={`px-4 py-3 text-center ${index > 0 ? "border-l" : ""}`}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {SUMMARY_TABLE.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={`px-4 py-3 text-center ${cellIndex > 0 ? "border-l" : ""}`}
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
  );
}
