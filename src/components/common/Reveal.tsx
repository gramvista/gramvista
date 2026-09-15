import type { ReactNode } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useIntersectionObserver();
  return <div ref={ref}>{children}</div>;
}
