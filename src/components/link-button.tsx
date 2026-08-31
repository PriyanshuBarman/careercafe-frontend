import React from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type LinkButtonProps = {
  href: string;
} & VariantProps<typeof buttonVariants> &
  Omit<React.ComponentProps<"a">, "href">;

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href);
}

export default function LinkButton({
  href,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const classes = cn(buttonVariants({ className, ...props }));

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
