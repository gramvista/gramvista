import { company } from "../data/company";
export function prepareInquiry(data: Record<string, string>, quote: boolean) {
  const subject = quote ? "Quote request for Gramvista" : "Inquiry for Gramvista";
  const fields = [["Name", data.name], ["Organization", data.company], ["Email", data.email], ["Phone", data.phone], ["Service / solution", data.service], ["Preferred contact", data.preferredContact]];
  const body = `${subject}\n\n${fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${data.message}`;
  return { body, emailUrl: `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, whatsappUrl: `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(body)}` };
}
