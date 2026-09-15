const steps = [
  [
    "Understand",
    "We begin by understanding the objective, existing environment and practical requirements.",
  ],
  [
    "Plan",
    "We select an approach, architecture, equipment or implementation plan appropriate to the project.",
  ],
  [
    "Implement",
    "Gramvista develops, installs, configures or integrates the required solution.",
  ],
  [
    "Test & Deliver",
    "The completed solution is tested and prepared for practical use.",
  ],
  [
    "Support",
    "Where required, Gramvista continues with troubleshooting, maintenance and future improvements.",
  ],
];
export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container">
        <h2>A clear path from requirement to delivery.</h2>
        <div className="process-grid">
          {steps.map(([title, description], i) => (
            <div key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
