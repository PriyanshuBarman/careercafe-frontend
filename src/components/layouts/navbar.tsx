import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import NavMenu from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

export default function Navbar() {
  return (
    <header className="bg-background/10 sticky top-0 z-50 h-16 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden lg:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle
            enableHotKey
            className="bg-transparent sm:rounded-full sm:p-5"
          />

          <Button variant="secondary" className="p-5 max-sm:hidden">
            Signup
          </Button>

          <Button className="px-4 py-5 font-normal max-sm:hidden">
            Start Practicing Free
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
