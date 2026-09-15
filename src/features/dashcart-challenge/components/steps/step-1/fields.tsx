import {
  CheckIcon,
  LightbulbIcon,
  LockKeyholeIcon,
} from "@hugeicons/core-free-icons";
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
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { CITIES, CONCERNS, SIGNALS } from "../../../constants/step-1";
import { type ChallengeFormData } from "../../../schemas/form-schema";

type Step1FieldsProps = {
  control: Control<ChallengeFormData>;
  isLocked: boolean;
};

export default function Step1Fields({ control, isLocked }: Step1FieldsProps) {
  return (
    <div className="space-y-6">
      {isLocked ? (
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
              HYPOTHESIS LOCKED
            </ItemTitle>
            <ItemDescription className="text-foreground text-xs sm:text-sm">
              Your initial hypothesis has been locked after moving to subsequent
              steps and cannot be modified.
            </ItemDescription>
          </ItemContent>
        </Item>
      ) : (
        <Item variant="muted" className="border-border">
          <ItemMedia variant="icon">
            <HugeiconsIcon icon={LightbulbIcon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-2xs sm:text-xs">
              STUDENT OBJECTIVE
            </ItemTitle>
            <ItemDescription className="text-xs sm:text-sm">
              Choose a working Hypothesis before full economics are available.
              Identify what looks atractive and what is still missing.
            </ItemDescription>
          </ItemContent>
        </Item>
      )}

      <FieldGroup className="gap-10">
        <Controller
          name="investigatedCity"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which city would you investigate first?
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                disabled={isLocked}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3"
              >
                {CITIES.map((city) => (
                  <FieldLabel
                    key={city}
                    htmlFor={`form-rhf-radiogroup-${city}`}
                    className="cursor-pointer"
                  >
                    <Field
                      data-disabled={isLocked ? "true" : "false"}
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        value={city}
                        id={`form-rhf-radiogroup-${city}`}
                        disabled={isLocked}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {city}
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
          name="attractiveSignals"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which two signals make this city attractive?
              </FieldLegend>

              <ToggleGroup
                multiple
                disabled={isLocked}
                value={field.value}
                onValueChange={field.onChange}
                className="flex flex-wrap pt-2"
              >
                {SIGNALS.map((signal) => {
                  const isSelected = field.value?.includes(signal.label);
                  const isDisabled =
                    isLocked ||
                    (!isSelected && (field.value?.length ?? 0) >= 2);

                  return (
                    <Toggle
                      key={signal.label}
                      value={signal.label}
                      aria-label={signal.label}
                      variant="outline"
                      disabled={isDisabled}
                      className="aria-pressed:bg-primary aria-pressed:text-background text-2xs rounded-full px-3 sm:text-xs"
                    >
                      <HugeiconsIcon
                        icon={CheckIcon}
                        strokeWidth={2.5}
                        className="hidden group-aria-pressed/toggle:block"
                      />
                      {signal.label}
                    </Toggle>
                  );
                })}
              </ToggleGroup>

              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </FieldSet>
          )}
        />

        <Controller
          name="primaryConcern"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                What is your biggest concern?
              </FieldLegend>

              <ToggleGroup
                disabled={isLocked}
                value={field.value ? [field.value] : []}
                onValueChange={(values) =>
                  field.onChange(values[0] ?? undefined)
                }
                className="flex flex-wrap pt-2"
              >
                {CONCERNS.map((concern) => (
                  <Toggle
                    key={concern.label}
                    value={concern.label}
                    aria-label={concern.label}
                    variant="outline"
                    disabled={isLocked}
                    className="aria-pressed:bg-primary aria-pressed:text-background text-2xs rounded-full px-3 disabled:cursor-not-allowed sm:text-xs"
                  >
                    <HugeiconsIcon
                      icon={CheckIcon}
                      strokeWidth={2.5}
                      className="hidden group-aria-pressed/toggle:block"
                    />
                    {concern.label}
                  </Toggle>
                ))}
              </ToggleGroup>

              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </FieldSet>
          )}
        />

        <Controller
          name="initialHypothesis"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  Explain your initial hypothesis and name one additional fact
                  you would want before investing.
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
                  {field.value?.length || 0} / 80
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                disabled={isLocked}
                id={field.name}
                maxLength={80}
                placeholder="Briefly state why this market creates defensible unit economics..."
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
