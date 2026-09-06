import { cn } from "@/lib/utils";
import LinkButton from "@/components/link-button";

export default function Logo({ className }: { className?: string }) {
  return (
    <LinkButton
      href="/"
      variant="ghost"
      className={cn("w-fit overflow-hidden px-0", className)}
    >
      <div className="size-32 sm:size-38">
        <img
          src="/careercafe.png"
          alt="CareerCafe Logo"
          className="aspect-square size-full object-cover"
        />
      </div>
    </LinkButton>
  );
}
