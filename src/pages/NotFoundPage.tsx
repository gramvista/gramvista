import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Button } from "../components/common/Button";
export default function NotFoundPage() {
  useDocumentTitle(
    "Page not found",
    "This page could not be found. Explore Gramvista services or return to the homepage.",
  );
  return (
    <section className="container not-found">
      <span className="error-code">404</span>
      <span className="eyebrow">A CONNECTION WE COULDN’T FIND</span>
      <h1>Let’s get you back on track.</h1>
      <p>The page you’re looking for may have moved or doesn’t exist.</p>
      <div className="button-row">
        <Button to="/">Back to Home</Button>
        <Button to="/services" variant="secondary">
          Explore Services
        </Button>
      </div>
    </section>
  );
}
