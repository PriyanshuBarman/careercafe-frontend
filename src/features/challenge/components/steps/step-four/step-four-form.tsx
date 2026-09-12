import { useMemo } from "react";
import { InfoIcon, LockKeyholeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Controller,
  useWatch,
  type Control,
  type UseFormSetValue,
} from "react-hook-form";

import { Card } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import {
  DECISION_HORIZONS,
  SUNK_COST_OPTIONS,
} from "../../../constants/step-four";
import { type ChallengeFormValues } from "../../../schemas/challenge-form-schema";
import { calculatePlanMetrics } from "../../../utils/plan-summary";

const DECISION_OPTIONS = [
  {
    title: "Stick with Jaipur",
    value: "Jaipur",
  },
  {
    title: "Switch to Kochi",
    value: "Kochi",
  },
] as const;

type StepFourFormProps = {
  control: Control<ChallengeFormValues>;
  setValue: UseFormSetValue<ChallengeFormValues>;
};

export default function StepFourForm({ control, setValue }: StepFourFormProps) {
  return (
    <div className="space-y-6">
      <Item
        variant="muted"
        className="border-primary/50 text-primary dark:border-primary/25 dark:bg-primary/10 bg-primary/5"
      >
        <ItemMedia variant="icon" className="self-center!">
          <HugeiconsIcon icon={InfoIcon} className="size-4 sm:size-6" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs sm:font-semibold">
            BREAKING UPDATE
          </ItemTitle>
          <ItemDescription className="text-foreground line-clamp-none text-xs sm:text-sm">
            Jaipur now faces a ₹9/order rider-welfare levy. Kochi&apos;s largest
            competitor has exited. ₹45L has already been spent on Jaipur
            preparation. Switching to Kochi creates a ₹25L transition cost and
            ₹22L festival-period contribution loss.
          </ItemDescription>
        </ItemContent>
      </Item>
      <LockedPlanCard control={control} />

      <FieldGroup className="gap-10">
        <Controller
          name="strategicDecision"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                What should DashCart do now?
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={(val) => {
                  field.onChange(val);
                  setValue("finalTargetMarket", val as "Jaipur" | "Kochi", {
                    shouldValidate: true,
                  });
                }}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
              >
                {DECISION_OPTIONS.map((option) => (
                  <FieldLabel
                    key={option.value}
                    htmlFor={`decision-${option.value}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        id={`decision-${option.value}`}
                        value={option.value}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {option.title}
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
          name="decisionHorizon"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Select your decision horizon
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              >
                {DECISION_HORIZONS.map((horizon) => (
                  <FieldLabel
                    key={horizon}
                    htmlFor={`form-rhf-radiogroup-${horizon}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={horizon}
                        id={`form-rhf-radiogroup-${horizon}`}
                        aria-invalid={fieldState.invalid}
                      />

                      <FieldTitle className="text-xs sm:text-sm">
                        {horizon}
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
          name="sunkCostTreatment"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                How should the ₹45L already spent on Jaipur be treated?
              </FieldLegend>

              <RadioGroup
                value={field.value || null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2"
              >
                {SUNK_COST_OPTIONS.map((option, index) => (
                  <FieldLabel
                    key={option}
                    htmlFor={`sunk-cost-option-${index}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={option}
                        id={`sunk-cost-option-${index}`}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {option}
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
          name="decisionDefence"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  Defend the choice and state the strongest counterargument
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
                  {field.value?.length || 0} / 100
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={100}
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

        <Controller
          name="keyAssumptionToValidate"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  State one assumption to validate before going to the board
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
                  {field.value?.length || 0} / 40
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={40}
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
    </div>
  );
}

function LockedPlanCard({
  control,
}: {
  control: Control<ChallengeFormValues>;
}) {
  const entryModel = useWatch({ control, name: "entryModel" });
  const strategicInitiatives = useWatch({
    control,
    name: "strategicInitiatives",
  });
  const hardestUnfundedInitiative = useWatch({
    control,
    name: "hardestUnfundedInitiative",
  });

  const planMetrics = useMemo(
    () => calculatePlanMetrics(entryModel, strategicInitiatives),
    [entryModel, strategicInitiatives],
  );

  const fundedInitiatives = strategicInitiatives || [];
  const fundedText =
    fundedInitiatives.length > 0 ? fundedInitiatives.join(" + ") : "None";

  const validUnfunded =
    hardestUnfundedInitiative &&
    !fundedInitiatives.includes(hardestUnfundedInitiative)
      ? hardestUnfundedInitiative
      : undefined;
  const notFundedText = validUnfunded || "None";

  const planSummaryItems = [
    { label: "Market", value: "Jaipur" },
    { label: "Model", value: entryModel || "—" },
    { label: "Spend", value: planMetrics ? `₹${planMetrics.totalCost}L` : "—" },
    {
      label: "Service",
      value: planMetrics ? `${planMetrics.totalOnTime}%` : "—",
    },
    {
      label: "Capacity",
      value: planMetrics ? `${planMetrics.totalCapacity}k` : "—",
    },
    { label: "Funded initiatives", value: fundedText },
    { label: "Hardest unfunded initiative", value: notFundedText },
  ];

  return (
    <Card className="bg-muted/40 p-4">
      <div>
        <div className="text-2xs flex items-center gap-2 font-medium tracking-wider uppercase sm:text-xs">
          <HugeiconsIcon
            icon={LockKeyholeIcon}
            className="text-foreground size-4 sm:size-5"
            strokeWidth={2}
          />
          <span>Locked Provisional Plan</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {planSummaryItems.map((item) => (
            <div
              key={item.label}
              className="border-border/50 bg-card flex flex-1 flex-col gap-0.5 rounded-lg border px-2.5 py-2 sm:min-w-28 sm:p-2.5"
            >
              <span className="text-2xs text-muted-foreground">
                {item.label}
              </span>
              <span className="truncate text-xs font-medium" title={item.value}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
