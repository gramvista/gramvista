# SEO and security

## Search visibility

The live website has unique titles, descriptions, canonical URLs, Open Graph and Twitter metadata. Production builds render all 17 public routes to HTML using the same React components shown to visitors. JavaScript hydrates that HTML for navigation and interactive forms; crawlers and visitors without JavaScript can read the page content and links immediately.

The sitemap is https://gramvistaempiregroup.com/sitemap.xml. Robots permits crawling. Unknown routes serve a dedicated 404 document marked noindex. The Pages project and preview hostnames are marked noindex; canonical links point to the main domain. Product portals remain separate websites.

Google indexing and rankings are not controlled by this code. In Google Search Console:

1. Add the URL-prefix property `https://gramvistaempiregroup.com/`.
2. Choose HTML tag verification and supply the generated public meta tag for installation (not an account password).
3. After verification, submit `sitemap.xml` under Sitemaps.
4. Inspect the homepage URL and request indexing once. Repeat for Company, Services and Products if useful.
5. Monitor Page indexing and Core Web Vitals reports. Initial crawling may take days or weeks and indexing is not guaranteed.

Do not add invented reviews, customer counts, keyword-stuffed copy or fake business addresses. Company information and Instagram are centralized in data files.

## Performance

Founder portraits use optimized WebP copies; original PNGs remain in source control. Large pages and their JavaScript are lazy-loaded. Noncritical images use lazy loading and asynchronous decoding. Content-hashed assets have one-year immutable caching. Static rendering removes the initial empty page shell. No analytics, remote fonts or advertising scripts are loaded.

## Security

The corporate site is static: it has no account login, public submission API or backend database connection. Contact forms prepare mailto and WhatsApp links in the visitor's browser; visitors send messages from their chosen app. No delivery is claimed by the website.

Cloudflare serves HTTPS. Headers enforce a self-only script policy, disallow framing and plugins, prevent MIME sniffing, restrict browser permissions and enable HSTS for this hostname. HSTS intentionally does not cover product subdomains. Inline styles remain permitted for existing responsive UI styling, while inline JavaScript is not permitted.

No runtime API keys are bundled. Local secrets, Wrangler authentication artifacts and dependencies are excluded from Git. The earlier unused D1 resource and rate-limit secret are not connected to this site. Keep GitHub, Cloudflare and Google accounts protected with multifactor authentication and limited access. Dependency audits are point-in-time checks, not a guarantee of complete security.

## Maintenance and checks

Run `npm run build`, `npm run lint`, and `npm test`. Inspect source HTML and response headers after deployment, verify 404 responses, and check hydration/console errors. Resubmit the sitemap only when needed; repeated indexing requests do not accelerate crawling.

References:
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
