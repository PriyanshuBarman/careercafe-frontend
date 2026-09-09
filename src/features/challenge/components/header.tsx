import { AlarmClockIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";

// import { NavigationSheet } from "./navigation-sheet";

export default function ChallengeHeader() {
  return (
    <header className="bg-background/10 sticky top-0 z-50 h-16 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />

          <div className="flex flex-col max-sm:hidden">
            <span className="text-2xs text-muted-foreground">
              BUSINESS ANALYST CHALLENGE
            </span>
            <span className="text-sm sm:text-base">DashCart Case 01</span>
          </div>
        </div>

        {/* Desktop Menu */}

        <div className="flex items-center gap-3">
          <ThemeToggle
            enableHotKey
            className="bg-transparent max-sm:hidden sm:rounded-xl sm:p-5"
          />

          <Button
            variant="secondary"
            className="gap-2 p-4 text-xs sm:p-5 sm:text-sm"
          >
            <HugeiconsIcon icon={AlarmClockIcon} strokeWidth={2} /> 01:20:00
            remaining
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">{/* <NavigationSheet /> */}</div>
        </div>
      </div>
    </header>
  );
}
