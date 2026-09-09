import { LightbulbIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, type Control } from "react-hook-form";

import { useIsMobile } from "@/hooks/use-mobile";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PRIMARY_BOARD_METRICS } from "../../../challenge/constants/step-five";
import { CITIES } from "../../../challenge/constants/step-one";
import { type ChallengeFormValues } from "../../../challenge/schemas/challenge-form-schema";

type StepFiveProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepFive({ control }: StepFiveProps) {
  const isMobile = useIsMobile();
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
          name="finalMarket"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">Final market</FieldLegend>

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

        <Controller
          name="primaryBoardMetric"
          control={control}
          render={({ field, fieldState }) => (
            <Field
              orientation={isMobile ? "vertical" : "horizontal"}
              data-invalid={fieldState.invalid}
            >
              <FieldContent>
                <FieldLabel htmlFor="form-rhf-select-board-metric">
                  Select the primary board metric
                </FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
              <Select
                name={field.name}
                value={field.value ?? null}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="form-rhf-select-board-metric"
                  aria-invalid={fieldState.invalid}
                  className="flex-1 text-xs sm:text-sm"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="p-2">
                  {PRIMARY_BOARD_METRICS.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-xs sm:text-sm"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}
        />

        <Controller
          name="ceoMemo"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>Write the CEO memo</FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
                  {field.value?.length || 0} / 180
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={180}
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
          name="reversalCondition"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row justify-between">
                <FieldLabel htmlFor={field.name}>
                  What would make you change this final recommendation?
                </FieldLabel>
                <FieldDescription className="text-xs sm:text-sm">
                  {field.value?.length || 0} / 50
                </FieldDescription>
              </FieldContent>
              <Textarea
                {...field}
                id={field.name}
                maxLength={50}
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
