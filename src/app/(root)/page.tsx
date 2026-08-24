import CampusChallenge from "@/components/landing/sections/campus-challenge";
import CompanyPrep from "@/components/landing/sections/company-prep";
import Hero from "@/components/landing/sections/hero";
import HowItWorks from "@/components/landing/sections/how-it-works";
import Programmes from "@/components/landing/sections/programmes";
import AnalystDirections from "@/components/landing/sections/analyst-directions";
import Testimonials from "@/components/landing/sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <AnalystDirections />
      <Programmes />
      <HowItWorks />
      <CompanyPrep />
      <Testimonials />
      <CampusChallenge />
    </div>
  );
}
