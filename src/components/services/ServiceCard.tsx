import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Service } from "../../types/service";
export function ServiceCard({
  service,
  compact = false,
}: {
  service: Service;
  compact?: boolean;
}) {
  const Icon = service.icon;
  return (
    <Link
      className={`service-card accent-${service.accent} ${compact ? "compact" : ""}`}
      to={`/services/${service.slug}`}
    >
      <Icon className="service-icon" size={28} strokeWidth={1.5} />
      <h3>{service.title}</h3>
      {!compact && <p>{service.shortDescription}</p>}
      <span className="card-link">
        View service
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}
