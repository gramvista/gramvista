export function TrustStrip() {
  return (
    <div className="trust-strip dark-surface">
      <div className="container">
        <span>Technology, working together.</span>
        <div>
          {[
            "Software & data",
            "Digital services",
            "Networks & security",
            "Devices & support",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
