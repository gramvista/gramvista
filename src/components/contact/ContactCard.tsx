import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { company } from "../../data/company";
import { Button } from "../common/Button";
export function ContactCard() {
  return <div className="contact-details">
    <a href={`mailto:${company.email}`}><Mail /><div><span>Email</span><strong>{company.email}</strong></div></a>
    {company.phones.map((phone, i) => <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`}><Phone /><div><span>{i ? "Secondary phone" : "Primary phone"}</span><strong>{phone}</strong></div></a>)}
    <a href={`https://wa.me/${company.whatsapp}`}><MessageCircle /><div><span>WhatsApp</span><strong>Talk to Gramvista</strong></div></a>
    <div><MapPin /><div><span>Location</span><strong>{company.location}</strong></div></div>
    <Button to="/quote" variant="text">Request a Quote</Button>
  </div>;
}
