import { company } from "../data/company";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
export default function PrivacyPage() {
  useDocumentTitle(
    "Privacy Policy",
    "How information submitted through the Gramvista corporate website is handled.",
  );
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="Respect for your information."
      />
      <article className="container legal">
        <p>Last updated: {company.legalUpdated}.</p>
        <h2>Information you choose to share</h2>
        <p>
          Inquiry and quotation forms request your name, email, optional phone
          and organization, service preferences and project details. Please
          avoid including passwords, payment details or sensitive personal
          information.
        </p>
        <h2>How information is used</h2>
        <p>
          {company.legalName} uses submitted information to respond to your request, prepare proposals and coordinate relevant services.
        </p>
        <h2>Service providers and retention</h2>
        <p>
          Cloudflare hosts this website. Contact and quote details are prepared in your browser and are not submitted to a website backend. When you choose email or WhatsApp, your details are passed to that service so you can review and send the message. Those services have their own privacy practices and may process information outside Tanzania. Messages we receive are used for follow-up and relevant business records, and reviewed for deletion when no longer needed. We do not sell inquiry information.
        </p>
        <h2>Cookies and browser storage</h2>
        <p>
          This website does not set advertising cookies, include analytics
          trackers or persist form content in browser storage. Hosting
          infrastructure may process access logs. Independent product platforms
          may have their own privacy policies.
        </p>
        <h2>Data security and external links</h2><p>We use HTTPS and server-side access controls to protect submissions. No system can guarantee complete security. Linked product portals and external websites have their own privacy practices. Email and WhatsApp messages are handled by the service you choose.</p><h2>Your choices</h2>
        <p>
          You may choose not to submit information. To request access,
          correction or deletion  use the official
          email: <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <h2>Policy updates</h2>
        <p>
          This policy should be reviewed as services, providers and data
          practices change. The date above identifies the current version.
        </p>
      </article>
    </>
  );
}
