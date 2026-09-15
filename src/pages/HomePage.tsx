import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/home/HeroSection";
import { TrustStrip } from "../components/home/TrustStrip";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { AboutPreview } from "../components/home/AboutPreview";
import { ProductShowcase } from "../components/home/ProductShowcase";
import { WhyGramvista } from "../components/home/WhyGramvista";
import { ProcessSection } from "../components/home/ProcessSection";
import { company } from "../data/company";
import { PortfolioPreview } from "../components/home/PortfolioPreview";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTASection } from "../components/home/CTASection";
import { ContactPreview } from "../components/home/ContactPreview";
import { Reveal } from "../components/common/Reveal";
export default function HomePage() {
  useDocumentTitle("Technology Solutions", company.seoDescription);
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <Reveal>
        <ServicesGrid />
      </Reveal>
      <Reveal>
        <AboutPreview />
      </Reveal>
      <ProductShowcase />
      <WhyGramvista />
      <Reveal>
        <ProcessSection />
      </Reveal>
      <IndustriesSection />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
      <ContactPreview />
    </>
  );
}
