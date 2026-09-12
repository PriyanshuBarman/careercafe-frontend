import { useEffect, useMemo } from "react";
import {
  Alert02Icon,
  BriefcaseBusinessIcon,
  CheckmarkCircle02Icon,
  InfoIcon,
  LockKeyholeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Controller,
  useWatch,
  type Control,
  type UseFormSetValue,
} from "react-hook-form";

import { cn } from "@/lib/utils";
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
import { Separator } from "@/components/ui/separator";
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
  INITIATIVES,
  JAIPUR_CONSTRAINTS,
  MODELS,
  SUMMARY_TABLE_HEADERS,
  type InitiativeTitle,
} from "../../../constants/step-three";
import { type ChallengeFormValues } from "../../../schemas/challenge-form-schema";
import {
  calculatePlanMetrics,
  formatPlanSummaryRow,
  getPlanConstraintWarnings,
} from "../../../utils/plan-summary";

type StepThreeFormProps = {
  control: Control<ChallengeFormValues>;
  setValue: UseFormSetValue<ChallengeFormValues>;
  isLocked?: boolean;
};

export default function StepThreeForm({
  control,
  setValue,
  isLocked = false,
}: StepThreeFormProps) {
  const strategicInitiatives = useWatch({
    control,
    name: "strategicInitiatives",
  });
  const hardestUnfundedInitiative = useWatch({
    control,
    name: "hardestUnfundedInitiative",
  });
  const prioritisedCity = useWatch({ control, name: "prioritisedCity" });
  const entryModel = useWatch({ control, name: "entryModel" });
  const budgetAcknowledged = useWatch({ control, name: "budgetAcknowledged" });

  const planMetrics = useMemo(
    () => calculatePlanMetrics(entryModel, strategicInitiatives),
    [entryModel, strategicInitiatives],
  );

  const constraintWarnings = useMemo(
    () => (planMetrics ? getPlanConstraintWarnings(planMetrics) : []),
    [planMetrics],
  );

  const isBudgetExceeded = planMetrics ? planMetrics.totalCost > 420 : false;

  const summaryRow = useMemo(
    () => formatPlanSummaryRow(planMetrics),
    [planMetrics],
  );

  useEffect(() => {
    setValue("isBudgetExceeded", isBudgetExceeded);
    if (!isBudgetExceeded && budgetAcknowledged) {
      setValue("budgetAcknowledged", false);
    }
  }, [isBudgetExceeded, budgetAcknowledged, setValue]);

  useEffect(() => {
    if (
      hardestUnfundedInitiative &&
      strategicInitiatives?.includes(hardestUnfundedInitiative)
    ) {
      setValue(
        "hardestUnfundedInitiative",
        undefined as unknown as InitiativeTitle,
      );
    }
  }, [strategicInitiatives, hardestUnfundedInitiative, setValue]);

  const handleStrategicInitiativeToggle = (
    title: InitiativeTitle,
    checked: boolean | "indeterminate",
    currentValues: InitiativeTitle[],
    onChange: (values: InitiativeTitle[]) => void,
  ) => {
    if (isLocked) return;
    if (checked) {
      if (currentValues.length >= 2) return;
      onChange([...currentValues, title]);
    } else {
      onChange(currentValues.filter((val) => val !== title));
    }
  };

  const initiativesToNotFund = INITIATIVES.filter(
    (initiative) => !strategicInitiatives?.includes(initiative),
  );

  const boardDecisionMessage =
    prioritisedCity === "Jaipur"
      ? "Management has also selected Jaipur for provisional planning."
      : `You recommended ${prioritisedCity}. Management has nevertheless selected Jaipur for provisional planning.`;

  return (
    <div className="space-y-6">
      {isLocked && (
        <Item
          variant="muted"
          className="border-cc-sage-500/50 dark:border-cc-sage-900/50 dark:bg-cc-sage-900/30 bg-cc-sage-100/50"
        >
          <ItemMedia variant="icon" className="self-center!">
            <HugeiconsIcon
              icon={LockKeyholeIcon}
              className="size-4 sm:size-6"
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-2xs sm:text-xs sm:font-semibold">
              PLAN LOCKED
            </ItemTitle>
            <ItemDescription className="text-foreground text-xs sm:text-sm">
              Your capital allocation plan has been locked after moving to
              subsequent steps and cannot be modified.
            </ItemDescription>
          </ItemContent>
        </Item>
      )}

      <Item
        variant="muted"
        className="border-cc-sage-500/50 dark:border-cc-sage-900/50 dark:bg-cc-sage-900/30 bg-cc-sage-100/50"
      >
        <ItemContent className="space-y-3">
          <div>
            <ItemTitle className="text-2xs sm:text-xs">
              <HugeiconsIcon
                icon={BriefcaseBusinessIcon}
                className="size-4 sm:size-5"
              />
              BOARD DECISION
            </ItemTitle>
            <ItemDescription className="text-foreground pt-1 pl-1 text-xs sm:text-sm">
              {boardDecisionMessage}
            </ItemDescription>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-4">
            {JAIPUR_CONSTRAINTS.map((item) => (
              <div
                key={item.label}
                className="bg-card border-border/50 flex flex-col gap-0.5 rounded-lg px-2.5 py-2 sm:p-2.5"
              >
                <span className="text-2xs text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-xs font-medium">{item.value}</span>
              </div>
            ))}
          </div>
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
                disabled={isLocked}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              >
                {MODELS.map((mode) => (
                  <FieldLabel
                    key={mode}
                    htmlFor={`form-rhf-radiogroup-${mode}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                      data-disabled={isLocked ? "true" : "false"}
                    >
                      <RadioGroupItem
                        value={mode}
                        id={`form-rhf-radiogroup-${mode}`}
                        disabled={isLocked}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldTitle className="text-xs sm:text-sm">
                        {mode}
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
          name="strategicInitiatives"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between gap-2">
                <FieldLegend variant="label">
                  Fund up to two strategic initiatives:
                </FieldLegend>
                <span className="border-border/70 bg-muted/60 text-foreground text-2xs shrink-0 rounded-full border px-2.5 py-0.5 font-medium tabular-nums">
                  {field.value?.length || 0} of 2 funded
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {INITIATIVES.map((initiative) => {
                  const isChecked = field.value.includes(initiative);
                  const isDisabled =
                    isLocked || (!isChecked && field.value.length >= 2);

                  return (
                    <FieldLabel
                      key={initiative}
                      htmlFor={`initiative-${initiative}`}
                      className="cursor-pointer"
                    >
                      <Field
                        orientation="horizontal"
                        data-disabled={isDisabled ? "true" : "false"}
                      >
                        <Checkbox
                          id={`initiative-${initiative}`}
                          name={field.name}
                          disabled={isDisabled}
                          checked={isChecked}
                          onCheckedChange={(checked) =>
                            handleStrategicInitiativeToggle(
                              initiative,
                              checked,
                              field.value || [],
                              field.onChange,
                            )
                          }
                        />
                        <FieldContent>
                          <FieldTitle className="text-xs sm:text-sm">
                            {initiative}
                          </FieldTitle>
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
          name="hardestUnfundedInitiative"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which unfunded initiative was hardest to leave out?
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                disabled={isLocked}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
              >
                {initiativesToNotFund.map((initiative) => (
                  <FieldLabel
                    key={initiative}
                    htmlFor={`unfunded-${initiative}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                      data-disabled={isLocked ? "true" : "false"}
                    >
                      <RadioGroupItem
                        id={`unfunded-${initiative}`}
                        value={initiative}
                        disabled={isLocked}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {initiative}
                        </FieldTitle>
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
          name="tradeoffExplanation"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  Explain why you chose this model and funding mix, and why you
                  left the selected initiative unfunded.
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
                  {field.value?.length || 0} / 120
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                disabled={isLocked}
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

      <div>
        <div className="overflow-hidden rounded-xl border">
          <Table className="w-full text-xs sm:text-sm">
            <TableHeader className="bg-accent">
              <TableRow>
                {SUMMARY_TABLE_HEADERS.map((header, index) => (
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
              <TableRow>
                {summaryRow.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={`px-4 py-3 text-center font-medium ${cellIndex > 0 ? "border-l" : ""}`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="text-muted-foreground mt-2 flex items-center gap-2 px-2 text-xs sm:mt-3 sm:text-sm">
          <HugeiconsIcon
            icon={InfoIcon}
            className="size-4 shrink-0"
            strokeWidth={2}
          />
          <p>
            The Plan Summary applies steady-state effects only; timing effects
            are for your judgement.
          </p>
        </div>
      </div>

      {planMetrics && (
        <>
          <Separator />
          <div className="space-y-6">
            <ul className="space-y-2">
              {constraintWarnings.map((warning) => (
                <li
                  key={warning.id}
                  className={cn(
                    "flex items-center gap-2 text-xs sm:text-sm",
                    warning.isMet ? "text-green-600" : "text-amber-600",
                  )}
                >
                  <HugeiconsIcon
                    icon={warning.isMet ? CheckmarkCircle02Icon : Alert02Icon}
                    className="size-4 shrink-0"
                    strokeWidth={2}
                  />
                  <span>{warning.message}</span>
                </li>
              ))}
            </ul>

            {isBudgetExceeded && (
              <Controller
                name="budgetAcknowledged"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="pt-1">
                    <FieldLabel
                      htmlFor="budgetAcknowledged"
                      className="cursor-pointer"
                    >
                      <Field
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                        data-disabled={isLocked ? "true" : "false"}
                      >
                        <Checkbox
                          id="budgetAcknowledged"
                          checked={field.value ?? false}
                          disabled={isLocked}
                          onCheckedChange={field.onChange}
                          aria-invalid={fieldState.invalid}
                        />
                        <FieldTitle className="text-xs text-amber-600 sm:text-sm">
                          I acknowledge that this plan exceeds the ₹420L budget
                          limit
                        </FieldTitle>
                      </Field>
                    </FieldLabel>
                    {fieldState.invalid && (
                      <FieldError className="pt-1 text-xs">
                        {fieldState.error?.message}
                      </FieldError>
                    )}
                  </div>
                )}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
