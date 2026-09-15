import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { ProcessSection } from "../components/home/ProcessSection";
import { CTASection } from "../components/home/CTASection";
export default function ServicesPage() {
  useDocumentTitle(
    "Services",
    "Explore software, databases, social media, electronics, CCTV, networking, wireless internet and technical support.",
  );
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical expertise. Connected capabilities."
        description="Technology expertise across software, infrastructure and digital operations. Explore the services that connect your business to what’s next."
      />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
}
