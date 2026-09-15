import { company } from "../data/company";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
export default function TermsPage() {
  useDocumentTitle(
    "Terms of Use",
    "Terms for use of the Gramvista corporate website and service inquiries.",
  );
  return (
    <>
      <PageHero
        eyebrow="Terms of use"
        title="Clear expectations. Better partnerships."
      />
      <article className="container legal">
        <p>Last updated: {company.legalUpdated}.</p>
        <h2>About this website</h2>
        <p>
          This website introduces {company.legalName}, its service capabilities
          and its products. Content is provided for general
          business information.
        </p>
        <h2>Inquiries and quotations</h2>
        <p>
          Submitting a form does not create a contract or confirm availability,
          price, scope or delivery dates. These details must be agreed
          separately in a written proposal or service agreement.
        </p>
        <h2>Product platforms</h2><p>Gramvista SMS and Mteja Connect operate through their respective portals. Access, account use, pricing and product-specific obligations are governed by the terms published or agreed for each platform.</p>
        <h2>Appropriate use</h2>
        <p>
          Please use this site lawfully, submit accurate inquiry details and do
          not attempt to interfere with its operation or access systems without
          authorization.
        </p>
        <h2>Content and external links</h2>
        <p>
          Website content and branding are intended for presentation of the
          company. Contact Gramvista to request permission for reuse. External
          product and service websites operate independently, and their
          information should be reviewed directly.
        </p>
        <h2>Service agreements and review</h2>
        <p>
          Project-specific rights, responsibilities, warranties, payment terms,
          liability and dispute arrangements must be defined in the relevant
          service agreement. This website does not replace those project-specific agreements.
        </p>
        <h2>Questions</h2>
        <p>
          For questions about this website or its terms, email <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </article>
    </>
  );
}
