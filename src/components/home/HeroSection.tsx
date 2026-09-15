import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../common/Button";
import { AssetImage } from "../common/AssetImage";
import { company } from "../../data/company";
export function HeroSection() {
  return (
    <section className="hero dark-surface">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Technology that
            <br />
            moves business
            <br />
            <span>forward.</span>
          </h1>
          <p>{company.heroDescription}</p>
          <div className="button-row">
            <Button to="/services">Explore Our Solutions</Button>
            <Button to="/quote" variant="secondary">
              Request a Quote
            </Button>
          </div>
          <Link className="hero-product-link" to="/products">
            View Our Products <ArrowRight size={17} />
          </Link>
        </div>
        <div className="hero-photo">
          <AssetImage
            src="/images/hero/hero-main.webp"
            alt="Illustrative technology workspace with laptop, network equipment, smartphone and security camera"
            eager
          />
          <div className="hero-photo-caption">
            <span>Software. Infrastructure. Everyday technology.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
