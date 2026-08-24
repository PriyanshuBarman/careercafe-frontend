"use client";

import { useEffect, useState } from "react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ScrollToTopProps = {
  scrollThreshold?: number;
  className?: string;
};

export default function ScrollToTop({
  scrollThreshold = 1200,
  className,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scroll-to-top"
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          className={cn("fixed right-6 bottom-6 z-50", className)}
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="size-12 rounded-full active:scale-95"
            aria-label="Scroll to top"
          >
            <HugeiconsIcon
              strokeWidth={2}
              icon={ArrowUp02Icon}
              className="size-6"
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
