import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { socialLinks } from "../../data/socialLinks";
import { products } from "../../data/products";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" aria-label="Gramvista home">
            <img
              src={company.logo}
              alt={company.legalName}
              width="205"
              height="42"
            />
          </Link>
          <p>{company.description}</p><p>{company.location}</p><a href={`mailto:${company.email}`}>{company.email}</a>{company.phones.map(phone => <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>)}
          <div>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <Link to="/company">About Gramvista</Link>
          <Link to="/projects">Our projects</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/quote">Request a quote</Link>
        </div>
        <div>
          <h3>Services</h3>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Products & support</h3>
          {products.map(product => <a key={product.id} href={product.portalUrl}>{product.name}</a>)}
          <Link to="/services/technical-support">Technical support</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </span>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
