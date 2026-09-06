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
  ItemTitle,
} from "@/components/ui/item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { DECISION_HORIZONS } from "../../../challenge/constants/step-four";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepFourProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepFour({ control }: StepFourProps) {
  return (
    <div className="space-y-6">
      <Item variant="muted" className="border-border">
        <ItemContent>
          <span className="text-2xs text-primary font-medium sm:text-xs">
            BREAKING UPDATE FOUR WEEKS BEFORE LAUNCH
          </span>
          <ItemTitle>
            The market has moved. Your provisional plan is under pressure.
          </ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            Jaipur adds ₹9/order rider levy. Kochi&apos;s largest competitor
            exits.
          </ItemDescription>
        </ItemContent>
      </Item>

      <FieldGroup className="gap-10">
        <Controller
          name="decisionHorizon"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">
                Which city would you investigate first?
              </FieldLegend>

              <RadioGroup
                value={field.value}
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
          name="defendDecision"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  Defend your updated decision
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
