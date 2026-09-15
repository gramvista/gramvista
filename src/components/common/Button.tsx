import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
export function Button({
  to,
  children,
  variant = "primary",
  external = false,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      <ArrowUpRight size={17} />
    </>
  );
  return external ? (
    <a className={`button ${variant}`} href={to}>
      {content}
    </a>
  ) : (
    <Link className={`button ${variant}`} to={to}>
      {content}
    </Link>
  );
}
