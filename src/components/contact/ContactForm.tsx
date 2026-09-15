import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { company } from "../../data/company";
import { products } from "../../data/products";
import { services } from "../../data/services";
import { validateInquiry } from "../../utils/validators";
import { prepareInquiry } from "../../utils/directContact";
export function ContactForm({ quote = false }: { quote?: boolean }) {
  const [params] = useSearchParams();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState<ReturnType<typeof prepareInquiry> | null>(null);
  const serviceOptions = [
    ...services.map((s) => s.title),
    ...products.map(p => p.name),
    "Partnership / Business Inquiry",
    "General Inquiry",
    "Other",
  ];
  const preset = params.get("service") || "";
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(null);
    const form = event.currentTarget;
    const data = Object.fromEntries(
      [...new FormData(form)].map(([key, value]) => [
        key,
        String(value).trim(),
      ]),
    );
    const validation = validateInquiry(data);
    setErrors(validation);
    if (Object.keys(validation).length) {
      form
        .querySelector<HTMLElement>(`[name="${Object.keys(validation)[0]}"]`)
        ?.focus();
      return;
    }
    setDraft(prepareInquiry(data, quote));
  }

  function input(name: string, label: string, type = "text", required = false) {
    return (
      <div className="form-field">
        <label htmlFor={name}>
          {label}
          {required && <span> *</span>}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          maxLength={name === "email" ? 254 : name === "phone" ? 40 : 200}
          autoComplete={
            name === "name"
              ? "name"
              : name === "company"
                ? "organization"
                : name === "phone"
                  ? "tel"
                  : name === "email"
                    ? "email"
                    : "off"
          }
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
        {errors[name] && (
          <span className="field-error" id={`${name}-error`}>
            {errors[name]}
          </span>
        )}
      </div>
    );
  }
  return (
    <form className="inquiry-form" onSubmit={submit} onChange={() => setDraft(null)} noValidate>
      <div className="form-heading">
        <h2>
          {quote
            ? "Your project details"
            : "Let’s start a conversation."}
        </h2>
        <p>Prepare your message, then choose email or WhatsApp. You will send it from that app. Fields marked * are required.</p>
      </div>
      <div className="form-grid">
        {input("name", "Full name", "text", true)}
        {input("email", "Email address", "email", true)}
        {input("phone", quote ? "Phone / WhatsApp" : "Phone (optional)", "tel")}
        {input("company", "Company / organization (optional)")}
        <div className="form-field">
          <label htmlFor="service">
            Service required <span>*</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue={serviceOptions.includes(preset) ? preset : ""}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <span className="field-error" id="service-error">
              {errors.service}
            </span>
          )}
        </div>
        {quote && (
          <>
            <div className="form-field">
              <label htmlFor="preferredContact">Preferred contact method</label>
              <select id="preferredContact" name="preferredContact">
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>

          </>
        )}
        <div className="form-field full">
          <label htmlFor="message">
            {quote ? "Project description" : "How can we help?"} <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={20}
            maxLength={5000}
            placeholder="Tell us what you have in mind, the challenge you’re facing and what a good outcome looks like."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className="field-error" id="message-error">
              {errors.message}
            </span>
          )}
        </div>

      </div>
      <p className="form-privacy">
        Your details stay in this page until you choose email or WhatsApp. Read our <Link to="/privacy">Privacy Policy</Link>.
      </p>
      <button className="button primary" type="submit">Prepare Message <ArrowUpRight size={17} /></button>
      {draft && <div className="direct-contact-draft">
        <p role="status">Your message is ready. Choose an app below, then press Send there. Nothing has been sent yet.</p>
        <div className="button-row">
          <a className="button primary" href={draft.emailUrl}><Mail size={18} />Open Email</a>
          <a className="button secondary" href={draft.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Open WhatsApp</a>
        </div>
        <details><summary>View or copy your message</summary><pre>{draft.body}</pre></details>
        <p>If your email app does not open, copy the message into your email service and send it to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
      </div>}
    </form>
  );
}
