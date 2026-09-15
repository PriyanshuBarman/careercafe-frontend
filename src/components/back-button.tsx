"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button, type buttonVariants } from "@/components/ui/button";

type BackButtonProps = {
  hideIcon?: boolean;
} & VariantProps<typeof buttonVariants> &
  Omit<React.ComponentProps<"button">, "onClick">;

export default function BackButton({
  children = "Back",
  hideIcon = false,
  variant = "secondary",
  className,
  ...props
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      className={cn("text-xs sm:text-sm", className)}
      {...props}
    >
      {!hideIcon && <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />}
      {children}
    </Button>
  );
}
