import { products } from "../../data/products";
import { ProductCard } from "../products/ProductCard";
export function ProductShowcase() {
  return (
    <section className="section product-section dark-surface">
      <div className="container">
        <div className="section-top">
          <h2>
            Technology we build.
            <br />
            Products you can grow with.
          </h2>
          <p>
            Gramvista SMS connects your communications. Mteja Connect turns customer insight into engagement. Independent products, connected through Gramvista.
          </p>
        </div>
        {products
          .filter((p) => p.featured)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </section>
  );
}
