import { CheckIcon, LightbulbIcon } from "@hugeicons/core-free-icons";
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
import {
  CITIES,
  CONCERNS,
  SIGNALS,
} from "../../../challenge/constants/step-one";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepOneProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepOne({ control }: StepOneProps) {
  return (
    <div className="space-y-6">
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

      <FieldGroup className="gap-10">
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which city would you investigate first?
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
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {city.title}
                        </FieldTitle>
                        <FieldDescription className="text-2xs sm:text-xs">
                          {city.description}
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
          name="attractiveSignals"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which two signals make this city attractive?
              </FieldLegend>

              <ToggleGroup
                multiple
                value={field.value}
                onValueChange={field.onChange}
                className="flex flex-wrap pt-2"
              >
                {SIGNALS.map((signal) => {
                  const isSelected = field.value?.includes(signal.label);
                  const isDisabled = !isSelected && field.value?.length >= 2;

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
          name="concern"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                What is your biggest concern?
              </FieldLegend>

              <ToggleGroup
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
                    className="aria-pressed:bg-primary aria-pressed:text-background text-2xs rounded-full px-3 sm:text-xs"
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
          name="hypothesis"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  Explain your initial hypothesis.
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
                  {field.value?.length || 0} / 80
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={80}
                placeholder="Briefly state why this market creates defensible unit economics..."
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
