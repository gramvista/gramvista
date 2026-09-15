import { Check } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
import { ContactForm } from "../components/contact/ContactForm";
export default function QuotePage() {
  useDocumentTitle(
    "Request a Quote",
    "Tell Gramvista about your project and request a tailored technology quotation.",
  );
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Tell us about your requirement."
        description="Share your goals, the service you need and any practical constraints. We’ll use these details to help define the scope."
      />
      <section className="section container quote-layout">
        <aside>
          <h2>A little context helps.</h2>
          <p>
            You don’t need a complete technical brief. Start with your goals,
            and share what you know.
          </p>
          <ul className="feature-list">
            {[
              "What would you like to achieve?",
              "Who will use the solution?",
              "Do you have existing systems?",
              "Is there a target launch date?",
            ].map((s) => (
              <li key={s}>
                <Check size={17} />
                {s}
              </li>
            ))}
          </ul>
          <p className="quiet-note">
            A request helps us understand your needs. It does not create a
            purchase or service commitment.
          </p>
        </aside>
        <ContactForm quote />
      </section>
    </>
  );
}
