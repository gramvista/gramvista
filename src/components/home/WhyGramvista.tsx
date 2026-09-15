const reasons = [
  [
    "Practical technology",
    "We focus on solutions that address a clear requirement rather than adding technology for its own sake.",
  ],
  [
    "Multiple capabilities",
    "Software, infrastructure, electronics and digital services can be handled through one technology partner.",
  ],
  [
    "Designed for growth",
    "Solutions are planned with future maintenance, expansion and integration in mind.",
  ],
  [
    "Support beyond installation",
    "Our role does not have to end after a product is delivered or equipment is installed.",
  ],
];
export function WhyGramvista() {
  return (
    <section className="section container why-section">
      <div>
        <h2>
          Why work with
          <br />
          Gramvista?
        </h2>
        <p>
          Clear requirements. Considered decisions. Technology that earns its
          place in your business.
        </p>
      </div>
      <div className="reasons-grid">
        {reasons.map(([title, description]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
