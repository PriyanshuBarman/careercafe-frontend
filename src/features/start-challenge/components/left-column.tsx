import {
  ArrowRight02Icon,
  EyeIcon,
  SecurityCheckIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import LinkButton from "@/components/link-button";
import {
  CHALLENGE_METRICS,
  STAGES,
} from "@/features/start-challenge/constants";

export default function LeftColumn() {
  return (
    <div className="bg-cc-charcoal relative flex flex-col justify-between space-y-10 p-8 text-white sm:space-y-12 sm:p-10 lg:p-12">
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Item className="w-auto border-transparent p-0">
          <ItemMedia variant="image">
            <Avatar className="after:border-none">
              <AvatarImage src="/logo.webp" />
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-0">
            <ItemTitle className="text-sm">CareerCafe</ItemTitle>
            <ItemDescription className="text-2xs font-semibold tracking-widest text-neutral-400 uppercase">
              BREWING FUTURE ANALYSTS
            </ItemDescription>
          </ItemContent>
        </Item>

        <Badge
          variant="outline"
          className="text-2xs border-white/50 p-3 tracking-wider text-white"
        >
          BUSINESS CHALLENGE · CASE 01
        </Badge>
      </div>

      {/* Main Content Area */}
      <div className="space-y-6 sm:space-y-8">
        <div className="text-primary flex items-center gap-2 text-xs font-medium tracking-wider">
          <HugeiconsIcon
            icon={SparklesIcon}
            strokeWidth={2}
            className="size-4"
          />
          <span>90-MINUTE DECISION SIMULATION</span>
        </div>

        <h1 className="flex flex-col text-3xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          DashCart:
          <span className="text-neutral-300/70">
            The ₹4.2 Crore Expansion Bet
          </span>
        </h1>

        <p className="max-w-xl text-sm text-neutral-300 sm:text-base">
          Form a hypothesis. Test the economics. Allocate scarce capital. Then
          update your decision when the market changes.
        </p>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {CHALLENGE_METRICS.map((metric) => (
            <Badge
              key={metric.label}
              variant="outline"
              className="text-2xs gap-1.5 border-white/15 p-3! font-normal text-neutral-200 sm:p-4 sm:text-xs"
            >
              <HugeiconsIcon
                icon={metric.icon}
                strokeWidth={1.75}
                className="size-3.5"
              />
              {metric.label}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <LinkButton
            href="/challenges/dashcart-expansion"
            className="flex-1 p-5 text-xs text-white sm:text-sm"
          >
            Start challenge
            <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} />
          </LinkButton>

          <Button
            variant="outline"
            className="flex-1 border-white/20 bg-transparent p-5 text-xs sm:text-sm"
          >
            <HugeiconsIcon
              icon={EyeIcon}
              strokeWidth={1.75}
              className="size-4"
            />
            Review all rounds
          </Button>
        </div>

        {/* Subtext info */}
        <div className="text-2xs flex items-center gap-2 text-neutral-400 sm:text-xs">
          <HugeiconsIcon
            icon={SecurityCheckIcon}
            strokeWidth={1.75}
            className="size-4 text-neutral-400"
          />
          <span>
            Start Challenge keeps real gating. Review All Rounds opens the
            prototype for evaluation.
          </span>
        </div>
      </div>

      {/* Bottom Stage Progress */}
      <div className="flex flex-wrap items-center justify-between gap-y-6 border-t border-white/10 pt-6">
        {STAGES.map((stage) => (
          <div key={stage.step} className="flex flex-col gap-1">
            <span className="text-primary text-sm font-semibold">
              {stage.step}
            </span>
            <span className="text-2xs font-medium text-neutral-300 sm:text-xs">
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
