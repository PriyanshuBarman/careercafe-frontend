"use client";

import {
  AiMagicIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckmarkCircle02Icon,
  File02Icon,
  InformationCircleIcon,
  UserMultiple02Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { COMPANIES } from "@/constants/companies";
import CompanyFilterButtons from "../company-filter-buttons";

export default function CompanyPrep() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCompany = COMPANIES[selectedIndex];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <span className="text-primary text-xs font-medium tracking-wider text-balance sm:text-sm md:text-base">
          COMPANY-SPECIFIC PREPARATION
        </span>

        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Prepare for the Companies You&apos;re Targeting
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          Role preparation gets you interview-ready. Company preparation gets
          you ready for how a specific employer evaluates analysts.
        </p>
      </div>

      <CompanyFilterButtons
        selectedIndex={selectedIndex}
        onSelectCompany={setSelectedIndex}
      />

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 md:flex-row">
        {/* Card 1 */}
        <Card className="flex-1 p-6">
          <CardHeader className="px-0">
            <div className="flex items-center gap-4">
              <img
                src={selectedCompany.img}
                alt={`${selectedCompany.title} logo`}
                className="size-16 sm:size-24"
              />

              <div className="flex flex-col gap-1 sm:gap-2">
                <CardTitle className="text-md sm:text-lg md:font-[550] lg:text-xl">
                  {selectedCompany.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {selectedCompany.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-0 sm:px-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-3">
              {selectedCompany.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="text-2xs gap-1.5 rounded-md px-2 py-3 font-[450] sm:gap-2 sm:px-3 sm:py-3.5 sm:text-xs [&>svg]:size-4! sm:[&>svg]:size-4!"
                >
                  {skill.icon && (
                    <HugeiconsIcon icon={skill.icon} strokeWidth={1.75} />
                  )}
                  <span>{skill.name}</span>
                </Badge>
              ))}
            </div>

            <div>
              <p className="mt-6 text-sm font-medium sm:text-lg">
                What CareerCafe focuses on
              </p>
              <ul className="mt-5 space-y-3 sm:space-y-4">
                {selectedCompany.features.map((feature, index) => (
                  <li
                    key={index}
                    className="sm:text-md flex items-center gap-3 text-[0.8125rem] sm:gap-4"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      strokeWidth={1.75}
                      className="text-cc-sage-900 size-4.5 shrink-0 sm:size-5"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="bg-card mt-4 px-0 sm:px-4 sm:py-6">
            <div className="text-muted-foreground flex items-center gap-4 text-xs sm:text-sm">
              <HugeiconsIcon
                icon={InformationCircleIcon}
                className="size-4 shrink-0 sm:size-5"
              />
              Company names indicate preparation context only. No partnership is
              implied.
            </div>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="p-6 sm:p-6 md:w-1/3">
          <CardHeader className="px-0">
            <CardTitle className="text-sm sm:text-base">
              Your {selectedCompany.title} Preparation
            </CardTitle>
          </CardHeader>

          <CardContent className="mt-4 flex flex-col px-0">
            <ItemGroup>
              {[
                {
                  icon: File02Icon,
                  title: "Practice questions",
                },
                {
                  icon: AiMagicIcon,
                  title: "Al mock interview",
                },
                {
                  icon: UserMultiple02Icon,
                  title: "Recent interview experiences",
                },
              ].map(({ icon, title }) => (
                <Item
                  key={title}
                  variant="outline"
                  className="rounded-xl sm:gap-4"
                >
                  <ItemMedia
                    variant="icon"
                    className="bg-cc-sage-100 dark:bg-cc-sage-900/30 rounded-lg p-2.5 sm:p-3"
                  >
                    <HugeiconsIcon icon={icon} className="size-4 sm:size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="text-xs sm:text-sm">
                      {title}
                    </ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <HugeiconsIcon icon={ArrowRightIcon} className="size-4" />
                  </ItemActions>
                </Item>
              ))}
            </ItemGroup>
          </CardContent>

          <CardFooter className="bg-card mt-auto flex-col gap-4 border-none px-0">
            <Button className="w-full p-5 text-xs sm:text-sm">
              Start {selectedCompany.title} Mock
            </Button>
            <Button variant="link" className="w-full text-xs sm:text-sm">
              Explore {selectedCompany.title} Preparation
              <HugeiconsIcon icon={ArrowUpRightIcon} className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
