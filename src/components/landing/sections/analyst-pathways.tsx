import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ROLES } from "@/constants/analyst-pathways";
import {
  ArrowUpRight01Icon,
  BubbleChatQuestionIcon,
  Leaf01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import AnalystPathwayCard from "../analyst-pathways-card";

export default function AnalystPathways() {
  return (
    <section className="mx-auto flex max-w-350 flex-col px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <Badge className="text-cc-sage-900 dark:bg-cc-sage-900/30 text-2xs bg-cc-sage-100 rounded-full py-3 pr-3 pl-2 tracking-wider sm:gap-2 sm:py-3.5 sm:pr-3.5 sm:pl-2.5 sm:text-xs [&>svg]:size-5.25!">
          <HugeiconsIcon
            strokeWidth={1.75}
            icon={Leaf01Icon}
            className="fill-cc-sage-900 dark:text-cc-sage-900/30 text-cc-sage-100"
          />
          ANALYST PATHWAYS
        </Badge>

        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Explore Your Analyst Direction
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          Choose the path that fits your strengths, interests and interview
          goals.
        </p>
      </div>

      {/* Row 1: 4 role cards in a responsive grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {ROLES.map((item) => (
          <AnalystPathwayCard key={item.title} item={item} />
        ))}
      </div>

      {/* Row 2: "Not Sure Yet?" sage card as an Item component (full-width banner) */}
      <Item
        variant="outline"
        className="mx-auto mt-6 w-fit rounded-2xl sm:mt-12 sm:px-6 sm:py-4 md:gap-6"
      >
        <ItemMedia className="self-center!">
          <HugeiconsIcon
            strokeWidth={1.25}
            icon={BubbleChatQuestionIcon}
            className="text-cc-sage-900 size-8 sm:size-10"
          />
        </ItemMedia>

        <ItemContent>
          <ItemTitle className="sm:text-sm md:text-base">
            Not Sure Yet?
          </ItemTitle>
          <ItemDescription className="text-xs sm:text-sm">
            Start with a guided path recommendation based on your interests and
            current stage.
          </ItemDescription>
        </ItemContent>

        <ItemActions>
          <Button
            variant="ghost"
            className="text-cc-sage-900 hover:bg-cc-sage-900 hover:text-cc-sage-100 md:dark:border-cc-sage-700/50 dark:text-cc-sage-100 dark:hover:bg-cc-sage-900/50 md:border-cc-sage-700 size-8 rounded-full border text-xs md:h-9 md:w-fit md:rounded-md md:px-5 md:text-sm"
          >
            <span className="max-md:hidden">Help Me Choose</span>
            <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
          </Button>
        </ItemActions>
      </Item>
    </section>
  );
}
