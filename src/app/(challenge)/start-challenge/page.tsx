import type { Metadata } from "next";

import StartChallenge from "@/features/start-challenge/components/start-challenge";

export const metadata: Metadata = {
  title: "DashCart: The ₹4.2 Crore Expansion Bet | Business Analyst Challenge",
  description:
    "Take on the DashCart expansion challenge. A real-world business analyst case study where you evaluate data, solve round-by-round decisions, and build practical analytical intuition.",
};

export default function Page() {
  return <StartChallenge />;
}
