import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";

import { Separator } from "@/components/ui/separator";
import LinkButton from "@/components/link-button";
import Logo from "@/components/logo";
import { FOOTER_SECTIONS } from "@/constants/footer";
import { SITE_INFO, SOCIALS } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 px-6 py-12 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0">
          <div className="col-span-full xl:col-span-2">
            <Logo />

            <p className="text-muted-foreground mt-4 max-sm:text-sm">
              {SITE_INFO.description}
            </p>
          </div>

          {FOOTER_SECTIONS.map(({ title, links }) => (
            <div key={title} className="max-sm:last:hidden">
              <h6 className="font-medium max-sm:text-sm">{title}</h6>
              <ul className="mt-2 space-y-1 sm:mt-6 sm:space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      className="text-muted-foreground hover:text-foreground max-sm:text-sm"
                      href={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground max-sm:text-xs">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              {SITE_INFO.name}
            </Link>
            . All rights reserved.
          </span>

          <div className="text-muted-foreground flex items-center gap-2">
            {SOCIALS.map((social) => (
              <LinkButton
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                size="icon-lg"
                variant="ghost"
                className="rounded-full"
              >
                <HugeiconsIcon strokeWidth={2} icon={social.icon} />
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
