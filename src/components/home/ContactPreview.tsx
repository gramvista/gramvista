import { ContactForm } from "../contact/ContactForm";
import { ContactCard } from "../contact/ContactCard";
export function ContactPreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="section container contact-grid">
      <div>
        <h2>{standalone ? 'Start with your goals.' : 'Let’s discuss what you need.'}</h2>
        <p>{standalone ? 'You don’t need a technical specification. Share the problem, who it affects and what a useful outcome would look like.' : 'Whether you need software, equipment, connectivity, security or technical support, tell us what you are trying to achieve.'}</p>
        <ContactCard />
      </div>
      <ContactForm />
    </section>
  );
}
