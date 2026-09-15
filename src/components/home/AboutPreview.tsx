import { Button } from "../common/Button";
import { AssetImage } from "../common/AssetImage";
import { company } from "../../data/company";
export function AboutPreview() {
  return (
    <section className="section container about-grid">
      <figure className="about-photo">
        <AssetImage
          src="/images/company/about-office.webp"
          alt="Illustrative scene of technology professionals discussing a project in a modern office"
        />
        <figcaption>
          One company. A practical, connected approach to technology.
        </figcaption>
      </figure>
      <div>
        <h2>Technology solutions under one trusted company.</h2>
        <p>{company.aboutDescription}</p>
        <p>{company.productDirection}</p>
        <Button to="/company" variant="text">
          Discover Gramvista
        </Button>
      </div>
    </section>
  );
}
