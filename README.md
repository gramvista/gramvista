# Gramvista corporate website

The existing React, TypeScript and Vite website for **Gramvista Empire Group Limited**, with its original visual design and service routes preserved.

## Run locally

```sh
npm install
npm run dev
npm run build
npm run lint
npm test
```

On PowerShell systems that block npm.ps1, use `npm.cmd`. Node 22.12+ is recommended. Production output is `dist`. The build also generates unique HTML metadata and Organization JSON-LD for all 17 public routes so social previews do not depend on JavaScript. Page content uses the existing React application and lazy-loaded routes.

## Content maintenance

| Content | File |
| --- | --- |
| Company, current email, phones, location, mission and vision | `src/data/company.ts` |
| Instagram and future real social URLs | `src/data/socialLinks.ts` |
| Founders and role-based biographies | `src/data/leadership.ts` |
| Live products, capabilities and portal links | `src/data/products.ts` |
| Eight service categories and detail pages | `src/data/services.ts` |
| Verified client work only | `src/data/projects.ts` |
| Permission-backed testimonials only | `src/data/testimonials.ts` |
| Industries and navigation | `src/data/industries.ts`, `src/data/navigation.ts` |
| Static route metadata | `scripts/seo.mjs` |

Both product portals use HTTPS and open in the same tab. Add products through the data file; the homepage, Products page, contact choices and footer update automatically. Projects currently presents the company's own products and capabilities; no client projects or testimonials are fabricated.

Founder portraits are imported from `src/assets/lussa.png` and `src/assets/pinto.png` in `src/data/leadership.ts`. Replace the images or update these imports for future portraits. Equal cards and responsive crops are provided; missing or failed images show initials. Existing service/office photographs remain illustrative, not claimed as Gramvista staff or client premises.

Only Instagram is currently published. Add future social accounts as real URLs in `socialLinks.ts`. Future corporate email aliases are recorded in `company.futureEmails`, but are not displayed as active mailboxes. After a mailbox is configured, change `company.email` and the backend `INQUIRY_TO` secret independently.

## Contact and quote messages

Forms prepare a message locally, then offer **Open Email** and **Open WhatsApp** links. Visitors review and send the message in their chosen app. No website API, Resend, Turnstile or D1 database is needed. There is no automated delivery or delivery confirmation. Form values remain on the page and are not saved in browser storage. A copyable message is available when no email app is configured.

Recipients come from `src/data/company.ts`; link construction is in `src/utils/directContact.ts`.

## Validation

Playwright tests cover routes, assets, metadata, responsive overflow (320–1920 px), keyboard navigation, accessibility and form behavior. Direct-contact tests inspect prepared links without sending any messages. Run `npx playwright install chromium` if a browser is missing.

The one-off draft upgrade scripts were retired to prevent overwriting maintained production content. Asset preparation scripts remain available.
