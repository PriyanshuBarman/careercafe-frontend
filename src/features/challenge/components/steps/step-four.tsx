import { CityIcon, LockKeyholeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, useWatch, type Control } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { DECISION_HORIZONS } from "../../../challenge/constants/step-four";
import { CITIES } from "../../../challenge/constants/step-one";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepFourProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepFour({ control }: StepFourProps) {
  const [
    dashCartCity,
    city,
    entryModel,
    strategicInitiatives,
    unfundedInitiative,
  ] = useWatch({
    control,
    name: [
      "dashCartCity",
      "city",
      "entryModel",
      "strategicInitiatives",
      "unfundedInitiative",
    ],
  });

  const selectedCity = dashCartCity || city || "Jaipur";
  const alternativeCity =
    CITIES.find((c) => c.title !== selectedCity) ?? CITIES[0];

  const decisionOptions = [
    {
      value: `Stick with ${selectedCity}`,
      title: `Stick with ${selectedCity}`,
    },
    {
      value: `Switch to ${alternativeCity.title}`,
      title: `Switch to ${alternativeCity.title}`,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-accent/50 p-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-2xs flex items-center gap-2 font-medium uppercase sm:text-xs">
              <HugeiconsIcon
                icon={LockKeyholeIcon}
                className="size-4"
                strokeWidth={2}
              />
              Locked Provisional Plan
            </div>
            <Badge
              variant="outline"
              className="text-2xs bg-background p-3 font-medium sm:p-4 sm:text-xs [&>svg]:size-3.5!"
            >
              <HugeiconsIcon icon={CityIcon} /> {selectedCity}
            </Badge>
          </div>

          <div className="mt-3 flex flex-col gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Selected Model:</span>
              <span className="text-foreground">{entryModel || "—"}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-muted-foreground">Initiatives:</span>
              {strategicInitiatives && strategicInitiatives.length > 0 ? (
                strategicInitiatives.map((Initiative) => (
                  <span key={Initiative} className="text-2xs sm:text-xs">
                    {Initiative}
                  </span>
                ))
              ) : (
                <span className="text-muted-foreground">—</span>
              )}
            </div>

            {unfundedInitiative && (
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Not Funding:</span>
                <span className="text-2xs sm:text-xs">
                  {unfundedInitiative}
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>

      <FieldGroup className="gap-10">
        <Controller
          name="decision"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Stick with {selectedCity} or switch to {alternativeCity.title}?
              </FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
              >
                {decisionOptions.map((option) => (
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
                {DECISION_HORIZONS.map((model) => (
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

                      <FieldTitle className="text-xs sm:text-sm">
                        {model.title}
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
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  How should the ₹45L already spent on Jaipur be treated?
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
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
          name="defenceText"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  Defend the choice and state the strongest counterargument
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
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
          name="assumptionToValidate"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  State one assumption to validate before going to the board
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
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
