import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CtaBanner />
    </>
  );
}
