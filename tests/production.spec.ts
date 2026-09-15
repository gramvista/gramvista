import { readFileSync, existsSync } from 'node:fs';
import { test, expect } from '@playwright/test';
test('production HTML provides unique metadata and factual organization data without JavaScript', () => {
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(urls).toHaveLength(17);
  const titles = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const file = `dist${path === '/' ? '' : path}/index.html`;
    expect(existsSync(file)).toBe(true);
    const html = readFileSync(file, 'utf8');
    expect(html).toContain(`rel="canonical" href="${url}"`);
    expect(html).toContain('name="twitter:card"');
    expect(html).toContain('property="og:image"');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    expect(title).toBeTruthy(); expect(titles.has(title)).toBe(false); titles.add(title);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1]);
    expect(schema.email).toBe('gramvistagroup@gmail.com');
    expect(schema.address).toEqual({ '@type': 'PostalAddress', addressLocality: 'Arusha', addressCountry: 'TZ' });
    expect(schema.sameAs).toEqual(['https://instagram.com/gramvista_empire_group']);
  }
});
