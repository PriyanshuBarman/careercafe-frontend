import {
  BriefcaseBusinessIcon,
  LightbulbIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, useWatch, type Control } from "react-hook-form";

import { useIsMobile } from "@/hooks/use-mobile";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  FINAL_MARKETS,
  PRIMARY_BOARD_METRICS,
} from "../../../constants/step-five";
import { type ChallengeFormValues } from "../../../schemas/challenge-form-schema";

type StepFiveFormProps = {
  control: Control<ChallengeFormValues>;
};

export default function StepFiveForm({ control }: StepFiveFormProps) {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6">
      <Item variant="muted" className="border-border">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={LightbulbIcon} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-2xs sm:text-xs">
            FINAL BOARD RECOMMENDATION
          </ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            Use your reasoning from the previous sections to make the final
            recommendation to the board.
          </ItemDescription>
        </ItemContent>
      </Item>

      <FieldGroup className="gap-10">
        <Controller
          name="finalTargetMarket"
          control={control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">Final market</FieldLegend>

              <RadioGroup
                value={field.value ?? null}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
              >
                {FINAL_MARKETS.map((city) => (
                  <FieldLabel
                    key={city}
                    htmlFor={`form-rhf-radiogroup-${city}`}
                    className="cursor-pointer"
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

        <FinalOperatingApproachCard control={control} />

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
                  className="flex-1 text-xs sm:text-sm sm:font-medium"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="p-2">
                  {PRIMARY_BOARD_METRICS.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="p-2 px-3 text-xs sm:text-sm"
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
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel htmlFor={field.name}>
                  State your final recommendation, explain why it is defensible,
                  identify the biggest trade-off or risk, and state the
                  operating/investment priority the board should approve.”
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
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
              <FieldContent className="flex-row justify-between gap-2">
                <FieldLabel
                  htmlFor={field.name}
                  className="flex flex-col items-start gap-0"
                >
                  What would make you change this final recommendation?
                  <span className="text-muted-foreground">
                    State the key condition or new evidence that would make you
                    reconsider.
                  </span>
                </FieldLabel>
                <FieldDescription className="shrink-0 text-xs sm:text-sm">
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

function FinalOperatingApproachCard({
  control,
}: {
  control: Control<ChallengeFormValues>;
}) {
  const finalTargetMarket = useWatch({ control, name: "finalTargetMarket" });
  const entryModel = useWatch({ control, name: "entryModel" });
  const strategicInitiatives =
    useWatch({ control, name: "strategicInitiatives" }) ?? [];

  if (!finalTargetMarket) return null;

  return (
    <Card className="bg-muted/40 p-4">
      <div>
        <div className="text-2xs flex items-center gap-2 font-medium tracking-wider uppercase sm:text-xs">
          <HugeiconsIcon
            icon={BriefcaseBusinessIcon}
            className="text-foreground size-4 sm:size-5"
            strokeWidth={2}
          />
          <span>Final Operating Approach</span>
        </div>

        {finalTargetMarket === "Jaipur" ? (
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="border-border/50 bg-card flex flex-1 flex-col gap-0.5 rounded-lg border px-2.5 py-2 sm:min-w-28 sm:p-2.5">
              <span className="text-2xs text-muted-foreground">
                Operating Model
              </span>
              <span className="truncate text-xs font-medium">{entryModel}</span>
            </div>
            <div className="border-border/50 bg-card flex flex-1 flex-col gap-0.5 rounded-lg border px-2.5 py-2 sm:min-w-48 sm:p-2.5">
              <span className="text-2xs text-muted-foreground">
                Funded Initiatives
              </span>
              <span className="truncate text-xs font-medium">
                {strategicInitiatives.join(" + ")}
              </span>
            </div>
          </div>
        ) : (
          <div className="border-border/50 bg-card mt-3 rounded-lg border p-3">
            <p className="text-muted-foreground text-xs sm:text-sm">
              Kochi operating model: not yet validated. No Kochi-specific
              operating economics have been provided.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
