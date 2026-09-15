import { Button } from "../common/Button";
export function CTASection() {
  return (
    <section className="cta dark-surface">
      <div className="container">
        <div>
          <h2>
            Let’s build the right
            <br />
            solution for your business.
          </h2>
          <p>
            Tell us what you need to achieve. We’ll help you identify a
            practical way forward.
          </p>
        </div>
        <Button to="/quote">Request a Quote</Button>
      </div>
    </section>
  );
}
