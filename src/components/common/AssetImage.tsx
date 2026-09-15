import { useState } from "react";
export function AssetImage({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      className={className}
      src={failed ? "/images/hero/hero-main.svg" : src}
      alt={alt}
      width="1200"
      height="800"
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
