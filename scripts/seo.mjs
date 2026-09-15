import { createServer } from 'vite';
import { dirname } from 'node:path';
import { render } from '../.wrangler/ssr/entry-server.js';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { company } = await server.ssrLoadModule('/src/data/company.ts');
  const { services } = await server.ssrLoadModule('/src/data/services.ts');
  const pages = [
    ['/', 'Technology Solutions & Digital Products in Tanzania', company.seoDescription],
    ['/company', 'About Gramvista Empire Group Limited', company.introduction],
    ['/services', 'Technology Services', 'Software, databases, digital management, electronics, CCTV, networking, wireless connectivity and technical support from Gramvista.'],
    ['/products', 'Gramvista SMS & Mteja Connect', 'Business messaging, customer intelligence, retention and engagement platforms built by Gramvista.'],
    ['/projects', 'Selected Gramvista Work & Capabilities', 'Explore Gramvista-built products and our software, digital and infrastructure capabilities.'],
    ['/contact', 'Contact Gramvista', 'Contact Gramvista in Arusha, Tanzania for technology solutions, product inquiries and business partnerships.'],
    ['/quote', 'Request a Quote', 'Request a tailored quotation for software, equipment, security, connectivity or technical support.'],
    ['/privacy', 'Privacy Policy', 'How Gramvista handles contact inquiries, quote requests and website information.'],
    ['/terms', 'Terms of Use', 'Terms for using the Gramvista corporate website and requesting services.'],
    ...services.map(s => [`/services/${s.slug}`, s.title, s.shortDescription]),
  ];
  const template = await readFile('dist/index.html', 'utf8');
  const esc = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: company.brandName, legalName: company.legalName, url: company.website, logo: new URL('/images/brand/gramvista-logo.svg', company.website).href, email: company.email, telephone: company.phones[0], address: { '@type': 'PostalAddress', addressLocality: 'Arusha', addressCountry: 'TZ' }, sameAs: ['https://instagram.com/gramvista_empire_group'] }).replaceAll('<', '\\u003c');
  for (const [path, heading, description] of [...pages, ['/404', 'Page not found', 'This page could not be found. Explore Gramvista technology solutions.']]) {
    const title = path === '/' ? `${company.legalName} | ${heading}` : heading.includes(company.legalName) ? heading : `${heading} | ${company.legalName}`;
    const url = new URL(path, company.website).href;
    const image = new URL('/images/hero/social-preview.jpg', company.website).href;
    let html = template.replace(/<title>.*?<\/title>/s, '').replace(/<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[\s\S]*?>/g, '').replace(/<link rel="canonical"[^>]+>/g, '');
    html = html.replace('</head>', `<title>${esc(title)}</title>\n<meta name="description" content="${esc(description)}">\n<link rel="canonical" href="${esc(url)}">\n` + Object.entries({ 'og:type': 'website', 'og:title': title, 'og:description': description, 'og:url': url, 'og:image': image, 'twitter:card': 'summary_large_image', 'twitter:title': title, 'twitter:description': description, 'twitter:image': image }).map(([key,value]) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${esc(value)}">`).join('\n') + `\n<script type="application/ld+json">${schema}</script>\n</head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${await render(path)}</div>`);
    html = html.replace('</head>', `<meta name="robots" content="${path === '/404' ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">\n<meta property="og:site_name" content="Gramvista">\n<meta property="og:image:alt" content="Gramvista Empire Group Limited technology solutions">\n</head>`);
    if (path === '/') {
      const websiteSchema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: company.brandName, alternateName: company.legalName, url: company.website }).replaceAll('<', '\\u003c');
      html = html.replace('</head>', `<script type="application/ld+json">${websiteSchema}</script>\n</head>`);
    }
    if (path === '/404') { await writeFile('dist/404.html', html); continue; }
    const filename = path === '/' ? 'dist/index.html' : `dist${path}.html`;
    await mkdir(dirname(filename), { recursive: true });
    await writeFile(filename, html);
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(([path]) => `<url><loc>${esc(new URL(path,company.website).href)}</loc></url>`).join('')}</urlset>`);
  console.log(`Generated static SEO metadata for ${pages.length} routes.`);
} finally { await server.close(); }
