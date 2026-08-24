import {
  ArrowRight02Icon,
  Coffee02Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { COMPANIES } from "@/constants/companies";
import StudentShowcase from "../students-showcase";

 const HERO_PATHWAYS = [
  "Business",
  "Data",
  "Technical",
  "Consulting",
]

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-350 items-center gap-20 px-4 py-18 sm:px-6 lg:grid-cols-2 lg:gap-2 lg:px-8">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <div className="text-primary flex items-center gap-2 text-sm font-medium sm:text-base">
          <HugeiconsIcon
            icon={Coffee02Icon}
            strokeWidth={1.75}
            className="sm:size-7"
          />
          Brewing Future Analysts
        </div>

        <h1 className="mt-6 w-full max-w-[20ch] text-center text-3xl leading-[1.2] font-medium tracking-tight md:text-5xl lg:text-start lg:text-[2.75rem] xl:text-[3.75rem]">
          Built to Simulate Real Analyst Interviews.
        </h1>

        <p className="mt-4 text-center leading-snug font-[425] text-balance sm:mt-6 sm:text-xl lg:text-start">
          The gap between knowing and performing is where most candidates
          struggle.
        </p>

        <p className="text-muted-foreground mt-4 text-center text-sm leading-snug text-balance sm:mt-4 sm:text-lg lg:text-start">
          Choose your analyst pathway. Practise for the way that role actually
          interviews.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-4 md:gap-x-8 md:gap-y-4">
          {HERO_PATHWAYS.map((item) => (
            <div
              key={item}
              className="group text-cc-sage-900 flex items-center gap-2 text-[0.8125rem] font-medium sm:gap-4 sm:text-base"
            >
              {item}
              <span className="group-last:hidden">•</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-4 lg:justify-start">
          <Button className="flex-1 p-5.5 text-xs sm:flex-0 sm:p-6 sm:text-sm">
            Start Practicing Free
            <HugeiconsIcon
              strokeWidth={2}
              icon={ArrowRight02Icon}
              className="size-5"
            />
          </Button>
          <Button
            variant="outline"
            className="flex-1 p-5.5 text-xs sm:flex-0 sm:p-6 sm:text-sm"
          >
            Explore Programs
            <HugeiconsIcon
              strokeWidth={1.75}
              icon={ArrowRight02Icon}
              className="size-5"
            />
          </Button>
        </div>

        <Item
          variant="outline"
          className="mt-8 w-fit rounded-xl py-1 sm:px-4 md:px-5"
        >
          <ItemMedia variant="icon">
            <HugeiconsIcon
              icon={SecurityCheckIcon}
              className="fill-cc-sage-900 text-background size-6 sm:size-7 md:size-10"
            />
          </ItemMedia>
          <ItemContent className="flex-0">
            <ItemTitle className="text-xs tracking-tighter text-nowrap sm:text-sm md:text-base">
              100+ analysts placed
            </ItemTitle>
          </ItemContent>

          <Separator orientation="vertical" className="sm:mx-2" />

          <ItemContent className="flex flex-row items-center gap-2 sm:gap-4">
            {COMPANIES.map((company) => (
              <img
                key={company.title}
                src={company.img}
                alt={company.title}
                className="size-10 max-sm:last:hidden sm:size-12 md:size-16"
              />
            ))}
          </ItemContent>
        </Item>
      </div>

      <StudentShowcase />
    </section>
  );
}
