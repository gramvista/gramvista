# Cloudflare deployment

## Current configuration

- Pages project: `gramvista-corporate`; production deployment completed.
- Deployment: `https://gramvista-corporate.pages.dev`.
- Source repository: `https://github.com/gramvista/gramvista` (branch `main`).
- Production domain: `gramvistaempiregroup.com`.
- Actual hosting configuration: `wrangler.toml`.
- Contact email: `gramvistagroup@gmail.com`.
- WhatsApp: `255758443438`.

Contact and quote forms now prepare direct email and WhatsApp messages. The visitor must press Send in the chosen app. No Resend account, email API credentials, Turnstile widget or database binding is required.

The D1 database and rate-limit secret created during the earlier backend setup are unused. They have been left in your account; this website no longer binds to or calls them.

## Deploy from this computer

```sh
npm install
npm run lint
npm run build
npm test
npm run deploy
```

Use `npm.cmd` in PowerShell if execution policy blocks `npm.ps1`. Run `npm run cf:login` if authentication expires. Deployment uploads `dist` directly to the existing Pages project. `npm run cf:dev` previews the built site locally.

## Connect the main domain

The main domain has been attached to the Pages project. DNS activation is pending: create a proxied CNAME with Name `@`, Target `gramvista-corporate.pages.dev`, and TTL Auto in the domain DNS settings. The current Wrangler OAuth login cannot edit DNS records. Preserve existing DNS records for the SMS and Mteja portals. Wait for the domain and certificate to become Active.

Reference: https://developers.cloudflare.com/pages/configuration/custom-domains/

## Verify before announcing launch

- Open the homepage, Company, Services, Products, Projects, Contact, Quote, Privacy and Terms.
- Confirm both founder images load and product links point to their correct subdomains.
- Prepare a contact message and a quote; confirm the recipient and message in your email or WhatsApp app.
- The website must say nothing has been sent until the visitor sends it in their app. It cannot confirm delivery.
- Confirm HTTPS, responsive navigation and unique page metadata.

The build emits metadata and Organization structured data for all public routes. `_redirects` provides SPA fallback; `_headers` supplies security headers. No Function is needed for direct contact.

## Future maintenance

Update `src/data/company.ts` for contact information, `src/data/leadership.ts` for founders, `src/data/products.ts` for products, and `src/data/services.ts` for services. `.env.example` is a safe template for the public website URL, not a missing production secret.
