import {
  DashboardSpeed01Icon,
  DocumentValidationIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  TIMELINE_STEPS,
  WORKING_RULES,
} from "@/features/start-challenge/constants";

export default function RightColumn() {
  return (
    <section className="flex flex-col justify-between p-8 sm:p-10">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-cc-sage-900 text-xs font-semibold tracking-widest uppercase">
          BEFORE YOU BEGIN
        </span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Your case briefing
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm">
          This challenge rewards defensible reasoning—not a decorative deck or a
          lucky first guess.
        </p>
      </div>

      {/* Stepper Timeline */}
      <div className="relative my-8 space-y-6 sm:space-y-7">
        {/* Continuous vertical timeline connector line */}
        <div className="bg-border absolute top-4 bottom-4 left-4 w-px -translate-x-1/2" />

        {TIMELINE_STEPS.map((item) => (
          <Item
            key={item.step}
            className="relative z-10 border-transparent p-0"
          >
            <ItemMedia className="bg-background size-8 rounded-full border text-xs">
              {item.step}
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-xs sm:text-sm">{item.title}</ItemTitle>
              <ItemDescription className="text-2xs text-muted-foreground sm:text-xs">
                {item.description}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge
                variant="secondary"
                className="text-2xs rounded-lg px-3 py-4"
              >
                {item.duration}
              </Badge>
            </ItemActions>
          </Item>
        ))}
      </div>

      {/* Working Rules Box */}
      <div className="bg-cc-sage-100/70 dark:bg-cc-sage-900/30 space-y-3 rounded-2xl border p-4">
        <div className="text-cc-sage-900 flex items-center gap-2">
          <HugeiconsIcon
            icon={InformationCircleIcon}
            strokeWidth={2}
            className="size-4"
          />
          <span className="text-xs font-medium sm:text-sm">Working rules</span>
        </div>
        <ul className="text-cc-sage-900 list-inside list-disc space-y-2 pl-1 text-xs">
          {WORKING_RULES.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Footer Metadata */}
      <div className="text-muted-foreground mt-6 flex items-center justify-between border-t pt-4 text-xs font-medium">
        <div className="flex items-center gap-1.5">
          <HugeiconsIcon
            icon={DashboardSpeed01Icon}
            strokeWidth={1.75}
            className="size-4.5"
          />
          <span>100 points</span>
        </div>

        <div className="flex items-center gap-1.5">
          <HugeiconsIcon
            icon={DocumentValidationIcon}
            strokeWidth={1.75}
            className="size-4.5"
          />
          <span>Autosave enabled</span>
        </div>
      </div>
    </section>
  );
}
