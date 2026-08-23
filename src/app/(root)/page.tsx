import BringToCampus from "@/components/landing/sections/bring-to-campus";
import CompanyPrep from "@/components/landing/sections/company-prep";
import Hero from "@/components/landing/sections/hero";
import HowItWorks from "@/components/landing/sections/how-it-works";
import Programmes from "@/components/landing/sections/programmes";
import AnalystPathways from "@/components/landing/sections/analyst-pathways";

export default function Home() {
  return (
    <div>
      <Hero />
      <Programmes />
      <HowItWorks />
      <AnalystPathways />
      <CompanyPrep />
      <BringToCampus />
    </div>
  );
}
