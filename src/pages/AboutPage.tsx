import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { company } from "../data/company";
import { services } from "../data/services";
import { PageHero } from "../components/common/PageHero";
import { AssetImage } from "../components/common/AssetImage";
import { Button } from "../components/common/Button";
import { CTASection } from "../components/home/CTASection";
import { Leadership } from "../components/common/Leadership";
export default function AboutPage() {
  useDocumentTitle("About Gramvista Empire Group Limited", company.introduction);
  return (
    <div className="company-page">
      <PageHero
        eyebrow="Company"
        title="Building practical technology for a connected future."
        description={company.introduction}
      />
      <figure className="container company-photo">
        <AssetImage
          src="/images/company/about-office.webp"
          alt="Illustrative scene of professionals discussing technology requirements"
          eager
        />
        <figcaption>
          Our focus: practical expertise, connected capabilities and useful
          products.
        </figcaption>
      </figure>
      <section className="section container company-direction">
        <h2>Who we are. What we do.</h2>
        <p className="lead-copy">
          Our long-term direction goes beyond providing individual technical
          services. Gramvista is building an ecosystem where professional
          services, technology products and digital platforms can work together
          under one trusted brand.
        </p>
        <div className="company-pillars">
          <article>
            <h3>Technology services</h3>
            <p>
              Client-focused work, shaped around your organization’s
              requirements.
            </p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Button to={`/services/${s.slug}`} variant="text">
                    {s.title}
                  </Button>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Gramvista products</h3>
            <p>
              Technology platforms developed and owned by Gramvista, designed to
              address recurring business needs.
            </p>
            <h4>Gramvista SMS &amp; Mteja Connect</h4>
            <p>
              Live platforms for business messaging, customer intelligence, retention and engagement.
            </p>
            <Button to="/products" variant="text">
              Explore Gramvista products
            </Button>
          </article>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container mission-grid">
          <article>
            <h2>Our mission</h2>
            <p>{company.mission}</p>
          </article>
          <article>
            <h2>Our vision</h2>
            <p>{company.vision}</p>
          </article>
        </div>
      </section>
      <Leadership />
      <section className="section container">
        <h2>The values behind our work.</h2>
        <div className="values">
          {company.values.map((v) => (
            <div key={v}>
              <h3>{v}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="section container philosophy">
        <h2>
          Choose technology for a reason.
          <br />
          Build it to last.
        </h2>
        <p>
          Good technology should solve a clear problem, be understandable to the
          people using it and remain maintainable over time. We choose tools to
          suit the job, make security part of the design and plan for future
          integration and growth.
        </p>
      </section>
      <CTASection />
    </div>
  );
}
