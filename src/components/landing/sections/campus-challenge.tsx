import { Fragment } from "react";
import {
  ArrowRight02Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { FLOW_STEPS, CHALLENGES } from "@/constants/campus-challenge";

export default function CampusChallenge() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 md:gap-18">
        {/* Col 1 */}
        <div>
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:items-start sm:justify-start sm:gap-5 sm:text-start">
            <span className="text-primary text-xs font-medium tracking-wider text-balance sm:text-sm md:text-base">
              FOR COLLEGES AND STUDENT COMMUNITIES
            </span>
            <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Bring a real analyst challenge to your campus.
            </h2>
            <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
              Run a structured acquisition event that reveals how students
              think, communicate and defend their work then routes them into
              relevant CareerCafe practice.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button className="dark:text-foreground flex-1 rounded-xl p-5 text-xs sm:p-6 sm:text-sm">
              Host a Campus Challange
              <HugeiconsIcon strokeWidth={2} icon={ArrowUpRight01Icon} />
            </Button>
            <Button
              variant="outline"
              className="flex-1 border p-5 text-xs hover:bg-transparent sm:p-6 sm:text-sm"
            >
              Explore Event Format
            </Button>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col items-center justify-center">
          <ItemGroup>
            {CHALLENGES.map((item) => (
              <Item
                key={item.title}
                variant="outline"
                className="gap-4 rounded-2xl p-3"
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
                  <ItemDescription className="text-xs sm:text-sm">
                    {item.description}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}

            <Item variant="muted" className="border-border rounded-2xl p-4">
              <ItemContent>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium sm:gap-x-4 sm:text-sm">
                  {FLOW_STEPS.map((step, index) => (
                    <Fragment key={step}>
                      <span>
                        {index + 1}. {step}
                      </span>
                      {index < FLOW_STEPS.length - 1 && (
                        <HugeiconsIcon
                          icon={ArrowRight02Icon}
                          strokeWidth={2}
                          className="text-muted-foreground size-4 shrink-0"
                        />
                      )}
                    </Fragment>
                  ))}
                </div>
              </ItemContent>
            </Item>
          </ItemGroup>
        </div>
      </div>
    </section>
  );
}
