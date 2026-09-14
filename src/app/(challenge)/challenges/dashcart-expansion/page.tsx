import type { Metadata } from "next";

import ChallengeContainer from "@/features/dashcart-challenge/components/challenge-container";

export const metadata: Metadata = {
  title: "DashCart Expansion Challenge",
  description:
    "Evaluate data, analyze risk, and make pivotal expansion decisions in the DashCart business analyst challenge.",
};

export default function Page() {
  return <ChallengeContainer />;
}
