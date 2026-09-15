import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import { services } from "../data/services";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { AssetImage } from "../components/common/AssetImage";
import { Button } from "../components/common/Button";
import { ServiceCard } from "../components/services/ServiceCard";
import NotFoundPage from "./NotFoundPage";
export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  useDocumentTitle(
    service?.title || "Service not found",
    service?.shortDescription,
  );
  if (!service) return <NotFoundPage />;
  return (
    <div
      className={`service-detail accent-${service.accent} layout-${service.layout}`}
    >
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.title}</span>
        </nav>
        <section className="service-intro">
          <div className="service-intro-copy">
            <p className="service-name">{service.title}</p>
            <h1>{service.statement}</h1>
            <p>{service.shortDescription}</p>
            <Button to={`/quote?service=${encodeURIComponent(service.title)}`}>
              Request This Service
            </Button>
          </div>
          <AssetImage
            src={service.image}
            alt={`Illustrative photograph: ${service.imageAlt}`}
            eager
          />
        </section>
      </div>
      <section className="section container service-overview">
        <h2>What Gramvista provides</h2>
        <div>
          <p className="lead-copy">{service.longDescription}</p>
          <ul className="feature-list">
            {service.features.map((f) => (
              <li key={f}>
                <Check size={17} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section service-use-cases">
        <div className="container detail-grid">
          <div>
            <h2>Built for practical requirements.</h2>
            <p>{service.explanation}</p>
          </div>
          <div>
            <h3>Typical use cases</h3>
            {service.solutions.map((s) => (
              <p className="solution-line" key={s}>
                {s}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="section container service-approach">
        <h2>How we approach your project</h2>
        <div>
          <p>{service.approach}</p>
          <p>
            Scope, equipment, delivery timelines and any ongoing support are
            agreed after we understand your requirements.
          </p>
        </div>
      </section>
      <section className="section container related-services">
        <h2>Related technology services</h2>
        <div className="related-grid">
          {service.relatedServices
            .slice(0, 3)
            .map((slug) => services.find((s) => s.slug === slug))
            .filter((s) => s !== undefined)
            .map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
        </div>
      </section>
      <section className="service-quote dark-surface">
        <div className="container">
          <div>
            <h2>Let’s discuss your requirements.</h2>
            <p>
              Share the details of your project so we can help define the right
              solution.
            </p>
          </div>
          <Button to={`/quote?service=${encodeURIComponent(service.title)}`}>
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
