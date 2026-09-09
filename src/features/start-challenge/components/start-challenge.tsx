import {
  ArrowRight02Icon,
  CheckIcon,
  MonitorIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import LinkButton from "@/components/link-button";
import { BADGES, CARDS } from "../constants";
import BannerBackground from "./banner-background";
import Timeline from "./timeline";

export default function StartChallenge() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="relative text-white">
        <BannerBackground />

        <div className="relative flex flex-col justify-between space-y-10 px-4 py-8 sm:space-y-12 sm:px-6 sm:pt-10 sm:pb-36 lg:px-10 lg:pt-18 lg:pb-44">
          <div className="max-w-2xl space-y-6 sm:space-y-7">
            <span className="text-2xs block font-semibold tracking-wider text-neutral-400 sm:text-xs">
              BUSINESS ANALYST CHALLENGE · CASE 01
            </span>

            <h1 className="flex flex-col text-2xl font-bold tracking-tight sm:gap-1.5 sm:text-5xl lg:text-7xl lg:leading-none">
              <span>DashCart:</span>
              <span className="text-white/70">
                The ₹4.2 Crore Expansion Bet
              </span>
            </h1>

            <p className="max-w-xl text-xs leading-relaxed text-neutral-300 sm:text-base">
              A fast-growing quick-commerce company.
              <br />A real business decision. No single right answer.
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {BADGES.map((metric) => (
                <Badge
                  key={metric.label}
                  className="text-2xs sm:text-md bg-black p-3 font-normal text-neutral-200 hover:bg-transparent sm:gap-3 sm:p-4 [&>svg]:size-4! sm:[&>svg]:size-5.5!"
                >
                  <HugeiconsIcon icon={metric.icon} strokeWidth={1.75} />
                  {metric.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Timeline />

        <div className="mx-auto mt-1 w-full max-w-7xl space-y-6 px-4 sm:mt-10 sm:space-y-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-10">
            {CARDS.map((card, index) => (
              <Card key={index} className="flex-1 px-4 py-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={card.icon}
                    strokeWidth={2}
                    className="size-4 sm:size-5"
                  />
                  <span className="text-xs font-medium sm:text-base">
                    {card.title}
                  </span>
                </div>

                <ul className="space-y-2 sm:mt-2 sm:space-y-4">
                  {card.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <HugeiconsIcon
                        icon={CheckIcon}
                        strokeWidth={2}
                        className="size-4 text-green-600 sm:size-5"
                      />
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Alert className="flex items-center border-blue-500 bg-blue-500/10 p-3 text-blue-500 sm:gap-4!">
            <HugeiconsIcon
              icon={MonitorIcon}
              strokeWidth={2}
              className="size-4 sm:size-5"
            />
            <AlertDescription className="text-2xs text-current sm:text-xs">
              Laptop/Desktop recomended for best experience{" "}
            </AlertDescription>
          </Alert>

          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <LinkButton
              href="/challenges/dashcart-expansion"
              className="sm:text-md w-full rounded-xl p-5 text-xs text-white sm:w-lg sm:p-6"
            >
              Start challenge
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                strokeWidth={2}
                className="size-4 sm:size-4.5"
              />
            </LinkButton>

            <p className="text-2xs text-muted-foreground mx-auto sm:text-sm">
              Start Challenge keeps real gating. Review All Rounds opens the
              prototype for evaluation.
            </p>
          </div>

          {/* Bottom Metadata */}
          <div className="text-muted-foreground text-2xs flex items-center justify-between border-t py-6 sm:text-xs">
            <span>CareerCafe Brewing Future Analysts </span>
            <span>DashCart Case 01</span>
          </div>
        </div>
      </section>
    </div>
  );
}
