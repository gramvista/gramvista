import { company } from "../data/company";
export function updateSeo(title: string, description: string, path: string) {
  document.title =
    path === "/"
      ? `${company.legalName} | Technology Solutions & Digital Products in Tanzania`
      : title.includes(company.legalName) ? title : `${title} | ${company.legalName}`;
  for (const [key, content] of Object.entries({
    description,
    robots: /not found/i.test(title) ? "noindex, follow" : "index, follow, max-image-preview:large",
    "og:title": document.title,
    "og:description": description,
    "og:url": new URL(path, company.website).href,
    "og:image": new URL("/images/hero/social-preview.jpg", company.website).href,
    "twitter:card": "summary_large_image",
    "twitter:title": document.title,
    "twitter:description": description,
    "twitter:image": new URL("/images/hero/social-preview.jpg", company.website).href,
  })) {
    const attr = key.startsWith("og:") ? "property" : "name";
    let meta = document.querySelector<HTMLMetaElement>(
      `meta[${attr}="${key}"]`,
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      document.head.append(meta);
    }
    meta.content = content;
  }
  let canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  canonical.href = new URL(path, company.website).href;
}
