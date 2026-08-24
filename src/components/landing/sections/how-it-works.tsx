import { ArrowRight02Icon, Chart03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";
import HowItWorksCard from "../how-it-works-card";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <span className="text-primary text-xs font-medium tracking-wider text-balance sm:text-sm md:text-base">
          HOW CAREERCAFE WORKS
        </span>
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          From practice to interview readiness.
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          Build skills, simulate real analyst interviews, and finish with expert
          human validation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-18 sm:grid-cols-4 sm:*:col-span-2 sm:*:last:col-start-2 lg:grid-cols-3 lg:gap-6 lg:*:col-span-1 lg:*:last:col-start-auto">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <HowItWorksCard key={step.step} step={step} />
        ))}
      </div>

      <Item
        variant="outline"
        className="mx-auto mt-12 gap-4 rounded-2xl p-4 sm:w-fit sm:gap-6 sm:px-6"
      >
        <ItemMedia
          variant="icon"
          className="border-cc-sage-900 rounded-full border p-2"
        >
          <HugeiconsIcon
            icon={Chart03Icon}
            className="text-cc-sage-900 size-4 sm:size-6"
          />
        </ItemMedia>
        <ItemContent className="sm:flex-row sm:gap-4">
          <ItemTitle className="text-[0.8125rem] sm:text-base">
            One preparation flow:
          </ItemTitle>
          <div className="flex flex-wrap items-center gap-1 text-xs sm:gap-4 sm:text-sm sm:font-medium">
            <span className="text-cc-sage-900">Practice</span>
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="text-muted-foreground size-3 sm:size-4"
            />
            <span className="text-primary">Interview</span>
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="text-muted-foreground size-3 sm:size-4"
            />
            <span className="text-cc-sage-900">Human Validation</span>
          </div>
        </ItemContent>
      </Item>
    </section>
  );
}
