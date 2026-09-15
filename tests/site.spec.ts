import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/company",
  "/services",
  "/products",
  "/projects",
  "/contact",
  "/quote",
  "/privacy",
  "/terms",
  "/services/software-solutions",
  "/services/database-management",
  "/services/social-media-management",
  "/services/computers-electronics",
  "/services/cctv-security",
  "/services/networking",
  "/services/wireless-internet",
  "/services/technical-support",
  "/missing",
  "/services/missing",
];
test("every route renders with metadata and working local assets", async ({
  page,
}) => {
  test.setTimeout(90000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(/Gramvista Empire Group Limited/);
    await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
      "href",
      `https://gramvistaempiregroup.com${route}`,
    );
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty("complete", true);
      expect(
        await img.evaluate((el: HTMLImageElement) => el.naturalWidth),
      ).toBeGreaterThan(0);
    }
    if (route.includes("missing"))
      await expect(
        page.getByText("Let’s get you back on track."),
      ).toBeVisible();
  }
  expect(errors).toEqual([]);
});
test("responsive layouts do not overflow", async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/services/software-solutions",
      "/services/database-management",
      "/services/wireless-internet",
      "/services/computers-electronics",
      "/company",
      "/products",
      "/projects",
      "/contact",
      "/quote",
    ]) {
      await page.goto(route);
      await expect(page.locator("h1"), `${route} at ${width}px`).toBeVisible({timeout:15000});
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} at ${width}px`,
      ).toBe(true);
    }
  }
});
test("mobile navigation supports keyboard and route changes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Company" })
    .click();
  await expect(page).toHaveURL(/company$/);
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});
test("inquiries validate and never claim delivery without a backend", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Prepare Message" }).click();
  await expect(
    page.getByText("Please enter a valid email address."),
  ).toBeVisible();
  await expect(page.getByLabel("Full name")).toBeFocused();
  await page.getByLabel("Full name").fill("Test Visitor");
  await page.getByLabel("Email address").fill("test@example.com");
  await page
    .getByLabel("Service required")
    .selectOption("Networking & Connectivity");
  await page
    .getByLabel("How can we help?")
    .fill("We need a network plan for a small office.");
  await page.getByRole("button", { name: "Prepare Message" }).click();
  await expect(page.getByRole("status")).toContainText("Nothing has been sent yet");
  await expect(page.getByLabel("Full name")).toHaveValue("Test Visitor");
});
test("service quote prefills selection and checks preferred contact", async ({
  page,
}) => {
  await page.goto("/services/networking");
  await page.getByRole("link", { name: "Request This Service" }).click();
  await expect(page.getByLabel("Service required")).toHaveValue(
    "Networking & Connectivity",
  );
  await page.getByLabel("Full name").fill("Test Visitor");
  await page.getByLabel("Email address").fill("test@example.com");
  await page.getByLabel("Preferred contact method").selectOption("WhatsApp");
  await page
    .getByLabel("Project description")
    .fill("Please help design our new office network.");
  await page.getByRole("button", { name: "Prepare Message" }).click();
  await expect(
    page.getByText(
      "Please add a phone number for your preferred contact method.",
    ),
  ).toBeVisible();
  await page.getByLabel("Phone / WhatsApp").fill("+255700000000");
  await page.getByRole("button", { name: "Prepare Message" }).click();
  await expect(page.getByRole("status")).toContainText("Nothing has been sent yet");
});
test("internal work and both live product portals are presented honestly", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Selected Gramvista work: our own products" })).toBeVisible();
  await page.getByRole("button", { name: "CCTV", exact: true }).click();
  await expect(page.getByText("Client case studies are published only with permission.", { exact: false })).toBeVisible();
  await page.goto("/products");
  for (const [name, url] of [["Gramvista SMS", "sms"], ["Mteja Connect", "mteja"]]) {
    await expect(page.getByRole("link", { name: `Open ${name}`, exact: true })).toHaveAttribute("href", `https://${url}.gramvistaempiregroup.com`);
  }
  await expect(page.getByText("Live", { exact: true })).toHaveCount(2);
  await expect(page.getByText(/in development|coming soon/i)).toHaveCount(0);
});

test("direct message links preserve inquiry details and never call an API", async ({ page }) => {
  const apiCalls: string[] = [];
  page.on("request", request => { if (request.url().includes('/api/')) apiCalls.push(request.url()); });
  await page.goto("/contact?service=Mteja%20Connect");
  await page.getByLabel("Full name").fill("Test Visitor");
  await page.getByLabel("Email address").fill("test@example.com");
  const message = "Please explain pricing & support for our business.";
  await page.getByLabel("How can we help?").fill(message);
  await page.getByRole("button", { name: "Prepare Message" }).click();
  const email = await page.getByRole("link", { name: "Open Email", exact: true }).getAttribute("href");
  expect(email).toMatch(/^mailto:gramvistagroup@gmail.com\?/);
  expect(new URL(email!).searchParams.get('body')).toContain(message);
  const whatsapp = await page.getByRole("link", { name: "Open WhatsApp", exact: true }).getAttribute("href");
  expect(new URL(whatsapp!).pathname).toBe('/255758443438');
  expect(new URL(whatsapp!).searchParams.get('text')).toContain('Mteja Connect');
  expect(new URL(whatsapp!).searchParams.get('text')).toContain(message);
  await expect(page.getByRole('status')).toContainText('Nothing has been sent yet');
  await page.getByLabel("Full name").fill("Changed name");
  await expect(page.getByRole("link", { name: "Open Email", exact: true })).toHaveCount(0);
  expect(apiCalls).toEqual([]);
});

test("captures desktop and mobile previews", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.screenshot({ path: "test-results/hero-desktop.png" });
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.screenshot({ path: "test-results/hero-mobile.png" });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/services/database-management");
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.service-intro > img')).toHaveJSProperty('complete',true);
  await page.screenshot({
    path: "test-results/service-desktop.png",
    fullPage: true,
  });
  await page.goto("/products");
  await expect(page.locator('h1')).toBeVisible();
  await page.screenshot({
    path: "test-results/products-desktop.png",
    fullPage: true,
  });
});

test("service navigation is contextual and imagery is unique", async ({
  page,
}) => {
  test.setTimeout(60000);
  const images = new Set<string>();
  for (const route of routes.filter(
    (r) => r.startsWith("/services/") && !r.endsWith("missing"),
  )) {
    await page.goto(route);
    await expect(page.locator(".related-grid a")).toHaveCount(3);
    const src = await page.locator(".service-intro > img").getAttribute("src");
    expect(src).toMatch(/\.webp$/);
    expect(images.has(src!)).toBe(false);
    images.add(src!);
    await expect(
      page
        .getByRole("navigation", { name: "Breadcrumb" })
        .getByRole("link", { name: "Services", exact: true }),
    ).toHaveAttribute("href", "/services");
  }
  await page.goto("/services/cctv-security");
  for (const slug of ["networking", "wireless-internet", "technical-support"])
    await expect(
      page.locator(`.related-grid a[href="/services/${slug}"]`),
    ).toHaveCount(1);
});

test("light and dark pages retain accessible contrast and semantics", async ({
  page,
}) => {
  test.setTimeout(120000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of [
      "/",
      "/services/networking",
      "/company",
      "/projects",
      "/privacy",
      "/terms",
      "/products",
      "/contact",
      "/quote",
    ]) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations,
        `${route} at ${width}px: ${JSON.stringify(results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
      ).toEqual([]);
    }
  }
});

test("all rendered local links have route or anchor targets", async ({ page }) => {
  test.setTimeout(60000);
  for (const route of routes.filter(route => !route.includes('missing'))) {
    await page.goto(route);
    await expect(page.locator('h1')).toBeVisible();
    const links = await page.locator('a').evaluateAll(elements => elements.map(el => el.getAttribute('href')));
    for (const href of links) {
      expect(href, `Empty link on ${route}`).toBeTruthy();
      expect(href).not.toBe('#');
      if (href!.startsWith('#')) expect(await page.locator(`[id="${href!.slice(1)}"]`).count()).toBe(1);
      else if (href!.startsWith('/')) expect(routes).toContain(href!.split(/[?#]/)[0]);
    }
  }
});
