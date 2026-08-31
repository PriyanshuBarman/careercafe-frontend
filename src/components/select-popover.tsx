"use client";

import { useId } from "react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SelectPopoverProps<T extends string> = {
  buttonLabel: string;
  options: readonly T[];
  selectedItems: T[];
  onCheckedChange: (item: T) => void;
  align?: "start" | "center" | "end";
};

export default function SelectPopover<T extends string>({
  buttonLabel,
  options,
  selectedItems,
  onCheckedChange,
  align = "start",
}: SelectPopoverProps<T>) {
  const isSelected = selectedItems.length > 0;
  const baseId = useId();

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "w-fit text-xs sm:h-10 sm:px-4 sm:text-sm",
              isSelected && "ring-primary text-accent-foreground ring",
            )}
          >
            {isSelected && (
              <span className="bg-primary text-primary-foreground text-2xs mr-1 flex size-4 items-center justify-center rounded-full font-semibold">
                {selectedItems.length}
              </span>
            )}
            {buttonLabel}
            <HugeiconsIcon strokeWidth={2} icon={ArrowDown01Icon} />
          </Button>
        }
      />
      <PopoverContent
        align={align}
        className="max-h-72 w-52 overflow-y-auto p-1.5"
      >
        <FieldGroup className="gap-1">
          {options.map((option) => {
            const isChecked = selectedItems.includes(option);
            const id = `${baseId}-${option}`;

            return (
              <Field
                key={option}
                orientation="horizontal"
                className="hover:bg-accent cursor-pointer rounded-md p-2"
              >
                <Checkbox
                  id={id}
                  checked={isChecked}
                  onCheckedChange={() => onCheckedChange(option)}
                />
                <FieldLabel
                  htmlFor={id}
                  className="cursor-pointer font-normal capitalize"
                >
                  {option}
                </FieldLabel>
              </Field>
            );
          })}
        </FieldGroup>
      </PopoverContent>
    </Popover>
  );
}
