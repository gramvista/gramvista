import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
import { ContactPreview } from "../components/home/ContactPreview";
export default function ContactPage() {
  useDocumentTitle(
    "Contact",
    "Start a conversation with Gramvista about software, equipment, infrastructure or digital services.",
  );
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss what you need."
        description="Whether you need software, equipment, connectivity, security or technical support, tell us what you are trying to achieve."
      />
      <ContactPreview standalone />
    </>
  );
}
