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
  ENTRY_MODES,
  STRATEGIC_INITIATIVES,
} from "../../../challenge/constants/step-three";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepThreeProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepThree({ control }: StepThreeProps) {
  const handleInitiativeToggle = (
    title: string,
    checked: boolean | "indeterminate",
    currentValues: string[],
    onChange: (values: string[]) => void,
  ) => {
    if (checked) {
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
          name="entryModel"
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

              <div className="flex flex-col gap-2.5 pt-2">
                {STRATEGIC_INITIATIVES.map((initiative) => (
                  <FieldLabel
                    key={initiative.title}
                    htmlFor={`initiative-${initiative.title}`}
                    className="cursor-pointer"
                  >
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <Checkbox
                        id={`initiative-${initiative.title}`}
                        aria-invalid={fieldState.invalid}
                        name={field.name}
                        checked={field.value?.includes(initiative.title)}
                        onCheckedChange={(checked) =>
                          handleInitiativeToggle(
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
                ))}
              </div>

              {fieldState.invalid && (
                <FieldError className="text-xs">
                  {fieldState.error?.message}
                </FieldError>
              )}
            </FieldSet>
          )}
        />
      </FieldGroup>

      <Item variant="muted" className="border-border">
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs">PLAN CHECKPOINT</ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            The selected model and zero, one or two initiatives form one
            complete allocation. Factual warnings stay visible: no
            recommendation or score is revealed.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
