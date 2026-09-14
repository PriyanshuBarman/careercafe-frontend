import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import CountdownTimer from "./countdown-timer";

export default function ChallengeHeader() {
  return (
    <header className="bg-background/10 sticky top-0 z-50 h-16 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
          <div className="flex flex-col max-sm:hidden">
            <span className="text-2xs text-muted-foreground font-medium">
              BUSINESS ANALYST CHALLENGE
            </span>
            <span className="text-sm sm:text-base sm:font-medium">
              DashCart Case 01
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle
            enableHotKey
            className="bg-transparent max-sm:hidden sm:rounded-xl sm:p-5"
          />

          <CountdownTimer />
        </div>
      </div>
    </header>
  );
}
