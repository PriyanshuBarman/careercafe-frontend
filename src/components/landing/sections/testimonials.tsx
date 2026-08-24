import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Loved by job seekers worldwide.
        </h2>
        <p className="text-muted-foreground text-sm text-balance sm:text-base lg:text-xl">
          See what thousands of successful applicants are saying about how
          we&apos;ve helped them land their dream jobs.
        </p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TESTIMONIALS.map((item, index) => (
          <Card
            key={index}
            className="rounded-xl p-5 sm:[--card-spacing:--spacing(5)]"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <HugeiconsIcon
                  icon={StarIcon}
                  key={i}
                  className="size-4 fill-amber-400 text-amber-400"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>

            <CardContent className="px-0">
              <p className="text-sm sm:text-base">{item.message}</p>
            </CardContent>

            <CardFooter className="bg-card mt-auto px-0">
              <Item className="p-0">
                <ItemMedia>
                  <Avatar className="size-10">
                    <AvatarImage alt={item.name} src={item.avatar} />
                    <AvatarFallback />
                  </Avatar>
                </ItemMedia>
                <ItemContent className="flex flex-col">
                  <ItemTitle className="text-xs font-medium sm:text-sm">
                    {item.name}
                  </ItemTitle>
                  <ItemDescription className="text-muted-foreground text-xs">
                    {item.role}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
