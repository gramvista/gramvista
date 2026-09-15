import { MessageSquare, Users, Check } from "lucide-react";
import type { Product } from "../../types/product";
import { Button } from "../common/Button";
export function ProductCard({ product, detail = false }: { product: Product; detail?: boolean }) {
  const Icon = product.id === "gramvista-sms" ? MessageSquare : Users;
  return <article className="product-card dark-surface" id={product.slug}>
    <div className="product-copy">
      <div className="product-label"><span className="product-icon"><Icon size={25} /></span><span className="status">Live</span></div>
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3><h4>{product.tagline}</h4>
      <p>{product.description}</p>
      <ul className="product-features">{product.capabilities.slice(0, detail ? undefined : 5).map(f => <li key={f}><Check size={14} />{f}</li>)}</ul>
      <Button to={product.portalUrl} external variant="secondary">{product.cta}</Button>
    </div>
    <div className="product-visual product-identity" aria-hidden="true">
      <Icon size={88} strokeWidth={1} /><strong>{product.shortName}</strong>
      <span>{product.id === "gramvista-sms" ? "Connect. Communicate. Follow through." : "Know. Engage. Retain."}</span>
    </div>
  </article>;
}
