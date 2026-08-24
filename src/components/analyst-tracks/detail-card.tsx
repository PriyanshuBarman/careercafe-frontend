import { ArrowUpRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
import type { AnalystTrack } from "@/constants/analyst-tracks";
import { Separator } from "../ui/separator";

type DetailCardProps = {
  activeRole: AnalystTrack;
};

export default function DetailCard({ activeRole }: DetailCardProps) {
  return (
    <Card className="flex-1 p-6 sm:p-8">
      <CardHeader className="px-0">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1 sm:gap-2">
            <CardTitle className="text-md sm:text-lg md:text-xl md:font-[550] lg:text-2xl">
              {activeRole.name}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              {activeRole.description}
            </CardDescription>
          </div>
          <HugeiconsIcon
            strokeWidth={1.25}
            icon={activeRole.icon}
            className="text-cc-sage-700 ml-auto size-20 md:size-28"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6 px-0">
        <Separator />

        <div>
          <p className="text-sm font-medium sm:text-lg">
            What you&apos;ll typically work on
          </p>
          <ul className="mt-5 list-inside list-disc space-y-2 sm:space-y-3">
            {activeRole.typicalWork.map((item, index) => (
              <li key={index} className="sm:text-md text-[0.8125rem] sm:gap-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div>
          <p className="text-sm font-medium sm:text-lg">Core Skills</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-3">
            {activeRole.skills.map((skill) => (
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
        </div>

        <Separator />

        <div>
          <p className="text-sm font-medium sm:text-lg">
            What interviews usually test
          </p>
          <ul className="mt-5 grid list-inside list-disc grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3.5">
            {activeRole.interviewFocus.map((item, index) => (
              <li key={index} className="sm:text-md text-[0.8125rem] sm:gap-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="bg-card flex-wrap gap-4 border-none px-0 py-8">
        <Button className="flex-1 p-5 text-xs sm:text-sm">
          Practice Relevant Skills
        </Button>
        <Button
          variant="outline"
          className="border-primary! text-primary flex-1 p-5 text-xs sm:text-sm"
        >
          Explore Interview Question
          <HugeiconsIcon icon={ArrowUpRightIcon} className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
