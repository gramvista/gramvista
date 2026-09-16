import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/products/ProductCard";
import { projects, projectCategories } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHero } from "../components/common/PageHero";
import { AssetImage } from "../components/common/AssetImage";
import { PortfolioPreview } from "../components/home/PortfolioPreview";
import { CTASection } from "../components/home/CTASection";
export default function ProjectsPage() {
  useDocumentTitle(
    "Projects",
    "Explore Gramvista project areas across software, networking, CCTV, digital management and electronics.",
  );
  const [category, setCategory] = useState("All");
  const filtered = projects.filter(
    (p) => category === "All" || p.category === category,
  );
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Practical solutions. Work with purpose."
        description="Explore Gramvista-built products and the software, digital and infrastructure capabilities we offer organizations."
      />
      <section className="container">
        <div className="filters" aria-label="Filter projects">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <div aria-live="polite">
          {filtered.length ? (
            <div className="project-grid">
              {filtered.map((p) => (
                <article key={p.id}>
                  <AssetImage src={p.image} alt={p.title} />
                  <span className="eyebrow">
                    {p.category}
                    {p.year && ` · ${p.year}`}
                  </span>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  {p.location && <p>{p.location}</p>}
                  {p.clientPermission && p.clientName && (
                    <p>Client: {p.clientName}</p>
                  )}
                  {p.challenge && (
                    <>
                      <h3>Challenge</h3>
                      <p>{p.challenge}</p>
                    </>
                  )}
                  {p.solution && (
                    <>
                      <h3>Solution</h3>
                      <p>{p.solution}</p>
                    </>
                  )}
                  {p.outcome && (
                    <>
                      <h3>Outcome</h3>
                      <p>{p.outcome}</p>
                    </>
                  )}
                  {p.gallery?.map((image) => (
                    <AssetImage
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                  <div className="feature-chips">
                    {p.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="products-list"><h2>{category === "All" ? "Selected Gramvista work: our own products" : `${category} capabilities`}</h2>
              {category === "All" || category === "Software" ? products.map(product => <ProductCard key={product.id} product={product} />) : <p>Explore our service capabilities below. Client case studies are published only with permission.</p>}
            </div>
          )}
        </div>
      </section>
      <PortfolioPreview showLink={false} />
      <CTASection />
    </>
  );
}
