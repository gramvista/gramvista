import { readFileSync, existsSync } from 'node:fs';
import { test, expect } from '@playwright/test';
test('production HTML provides unique metadata and factual organization data without JavaScript', () => {
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(urls).toHaveLength(17);
  const titles = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const file = path === '/' ? 'dist/index.html' : `dist${path}.html`;
    expect(existsSync(file)).toBe(true);
    const html = readFileSync(file, 'utf8');
    expect(html).toContain(`rel="canonical" href="${url}"`);
    expect(html).toContain('name="twitter:card"');
    expect(html).toMatch(/<h1[ >]/);
    expect(html).toContain('href="/services"');
    expect(html).not.toContain('<div id="root"></div>');
    expect(html).not.toContain('src="/src/');
    expect(html).toContain('property="og:image"');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    expect(title).toBeTruthy(); expect(titles.has(title)).toBe(false); titles.add(title);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1]);
    expect(schema.email).toBe('gramvistagroup@gmail.com');
    expect(schema.address).toEqual({ '@type': 'PostalAddress', addressLocality: 'Arusha', addressCountry: 'TZ' });
    expect(schema.sameAs).toEqual(['https://instagram.com/gramvista_empire_group']);
  }
});

test('unknown routes have an index-excluded static error document', () => {
  const html = readFileSync('dist/404.html', 'utf8');
  expect(html).toContain('noindex, follow');
  expect(html).toContain('404');
  expect(readFileSync('public/_redirects', 'utf8')).not.toContain('/* /index.html 200');
});
