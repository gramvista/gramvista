import { services } from "../../data/services";
import { ServiceCard } from "../services/ServiceCard";
import { SectionHeader } from "../common/SectionHeader";
export function ServicesGrid() {
  return (
    <section className="section container services-section" id="capabilities">
      <SectionHeader
        title="Technology services built around your business."
        description="From software and digital platforms to connectivity, security and electronics, Gramvista brings multiple technology capabilities together under one company."
      />
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard service={service} key={service.slug} />
        ))}
      </div>
    </section>
  );
}
