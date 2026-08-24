import { HugeiconsIcon } from "@hugeicons/react";

import { LinkButton } from "@/components/link-button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ANALYST_ROLES } from "@/constants/analyst-roles";
import { ArrowUpRightIcon } from "@hugeicons/core-free-icons";

export default function AnalystDirections() {
  return (
    <section className="mx-auto max-w-350 px-4 pt-12 sm:px-6 md:pt-20 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <span className="text-primary text-xs font-medium tracking-wider text-balance sm:text-sm md:text-base">
          BUILT FOR ANALYST CAREERS
        </span>
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          One preparation system. Four career directions.
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          Start with shared analyst fundamentals. Explore a direction when
          you&apos;re ready.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-10 sm:mt-14 sm:gap-14">
        <ItemGroup className="grid grid-cols-2 md:grid-cols-4">
          {ANALYST_ROLES.map((item) => (
            <Item
              key={item.title}
              variant="outline"
              className="flex-col gap-4 rounded-2xl p-3 xl:flex-row"
            >
              <ItemMedia
                variant="icon"
                className="bg-cc-sage-100 dark:bg-cc-sage-900/40 rounded-xl p-3 sm:p-4"
              >
                <HugeiconsIcon
                  strokeWidth={1.75}
                  icon={item.icon}
                  className="size-5 sm:size-7"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-sm sm:text-base">
                  {item.title}
                </ItemTitle>
                <ItemDescription className="text-xs leading-tight sm:text-sm">
                  {item.description}
                </ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>

        <LinkButton
          href="/analyst-tracks"
          variant="link"
          className="text-cc-sage-900 text-xs sm:text-base"
        >
          Explore Analyst Directions
          <HugeiconsIcon strokeWidth={1.75} icon={ArrowUpRightIcon} />
        </LinkButton>
      </div>
    </section>
  );
}
