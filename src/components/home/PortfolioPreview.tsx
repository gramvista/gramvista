import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectAreas } from "../../data/projects";
import { services } from "../../data/services";
import { AssetImage } from "../common/AssetImage";
export function PortfolioPreview({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="section container portfolio-section">
      <div className="section-top">
        <div>
          <h2>What we can help you build.</h2>
          <p>
            Explore our project capabilities across software, infrastructure and
            digital operations.
          </p>
        </div>
        {showLink && (
          <Link className="button text" to="/projects">
            View project areas
            <ArrowRight size={17} />
          </Link>
        )}
      </div>
      <div className="project-areas">
        {projectAreas.map((p) => {
          const service = services.find((s) => s.slug === p.slug)!;
          return (
            <Link to={`/services/${p.slug}`} key={p.slug}>
              <AssetImage
                src={service.image}
                alt={`Illustrative ${p.title.toLowerCase()} capability`}
              />
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span>
                  Explore capability
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
