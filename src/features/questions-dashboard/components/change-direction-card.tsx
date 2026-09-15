import { useId, useState } from "react";
import { Edit03Icon, Target02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ANALYST_DIRECTIONS } from "../constants/directions";
import type { AnalystDirection } from "../types/direction";

const DIRECTION_DETAILS: Record<
  AnalystDirection,
  { title: string; description: string }
> = {
  "Consulting & Strategy": {
    title: "Consulting & Strategy",
    description: "Cases, numbers, recommendations and fit interviews.",
  },
  "Data & BI": {
    title: "Data & BI",
    description: "SQL, dashboards, business metrics and data-driven insights.",
  },
  "Technical Analyst": {
    title: "Technical Analyst",
    description:
      "Technical architecture, databases, problem solving and systems.",
  },
  "Business & Operations": {
    title: "Business & Operations",
    description: "Process improvement, stakeholder management and execution.",
  },
};

type ChangeDirectionCardProps = {
  selectedDirection: AnalystDirection;
  onDirectionChange: (direction: AnalystDirection) => void;
};

export default function ChangeDirectionCard({
  selectedDirection,
  onDirectionChange,
}: ChangeDirectionCardProps) {
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const currentDetails =
    DIRECTION_DETAILS[selectedDirection] ?? DIRECTION_DETAILS["Data & BI"];

  const handleSelectDirection = (direction: AnalystDirection) => {
    onDirectionChange(direction);
    setOpen(false);
  };

  return (
    <Card className="sticky h-fit w-full lg:top-26">
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <HugeiconsIcon
            icon={Target02Icon}
            className="text-primary size-8 sm:size-10"
          />
          <CardDescription className="text-xs font-medium sm:text-sm">
            Preparing for
          </CardDescription>
        </div>

        <div>
          <CardTitle className="text-sm sm:text-base">
            {currentDetails.title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            {currentDetails.description}
          </CardDescription>
        </div>
      </CardContent>

      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button className="w-full text-xs sm:text-sm">
                <HugeiconsIcon icon={Edit03Icon} strokeWidth={2} />
                Change Direction
              </Button>
            }
          />

          <DialogContent className="p-6">
            <DialogHeader>
              <DialogTitle>Select Analyst Direction</DialogTitle>
              <DialogDescription>
                Choose the career track you want to practice interview questions
                for.
              </DialogDescription>
            </DialogHeader>

            <RadioGroup
              value={selectedDirection}
              onValueChange={(val) =>
                handleSelectDirection(val as AnalystDirection)
              }
              className="max-w-sm"
            >
              {ANALYST_DIRECTIONS.map((direction) => {
                const id = `${baseId}-${direction}`;
                const details = DIRECTION_DETAILS[direction];

                return (
                  <FieldLabel
                    key={direction}
                    htmlFor={id}
                    className="cursor-pointer"
                    onClick={() => handleSelectDirection(direction)}
                  >
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle className="text-xs sm:text-sm">
                          {details.title}
                        </FieldTitle>
                        <FieldDescription className="text-muted-foreground text-2xs sm:text-xs">
                          {details.description}
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value={direction} id={id} />
                    </Field>
                  </FieldLabel>
                );
              })}
            </RadioGroup>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
