import { industries } from "../../data/industries";
export function IndustriesSection() {
  return (
    <section className="section industries-section">
      <div className="container industries">
        <div>
          <h2>Technology that can adapt to different organizations.</h2>
          <p>
            Our solutions can be adapted to the requirements of different
            sectors.
          </p>
        </div>
        <ul>
          {industries.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
