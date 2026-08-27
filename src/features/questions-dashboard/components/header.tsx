import { Notification01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

export default function DashboardHeader() {
  return (
    <header className="bg-background/10 sticky top-0 z-50 h-16 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 my-auto data-[orientation=vertical]:h-4"
          />

          <Logo />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle enableHotKey size="icon-lg" variant="ghost" />

          <Button size="icon-lg" variant="ghost" aria-label="Notifications">
            <HugeiconsIcon icon={Notification01Icon} />
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
