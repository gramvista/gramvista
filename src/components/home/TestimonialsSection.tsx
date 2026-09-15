import { testimonials } from "../../data/testimonials";
export function TestimonialsSection() {
  if (!testimonials.length) return null;
  return (
    <section className="section container">
      <h2>In our clients’ words.</h2>
      {testimonials.map((t) => (
        <blockquote key={t.name}>
          <p>{t.quote}</p>
          <cite>
            {t.name}, {t.organization}
          </cite>
        </blockquote>
      ))}
    </section>
  );
}
