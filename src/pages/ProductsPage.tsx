import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { products } from "../data/products";
import { PageHero } from "../components/common/PageHero";
import { ProductCard } from "../components/products/ProductCard";
export default function ProductsPage() {
  useDocumentTitle(
    "Products",
    "Gramvista SMS business messaging and Mteja Connect customer intelligence: connected business technology products by Gramvista.",
  );
  return (
    <div className="products-page">
      <PageHero
        eyebrow="Products"
        title="Technology products built by Gramvista."
        description="In addition to delivering technology services, Gramvista develops digital platforms designed to solve recurring business and communication challenges."
      />
      <section className="container products-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} detail />
        ))}
      </section>
      <section className="section container future-product">
        <h2>A growing product ecosystem.</h2>
        <p>
          Gramvista SMS provides communication infrastructure. Mteja Connect provides customer intelligence and engagement. Each works independently, while their integration connects customer insight with business communication.
        </p>
      </section>
    </div>
  );
}
