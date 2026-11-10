import { expect, test } from "@playwright/test";

const treatments = ["typewriter", "editorial", "hybrid", "approved"] as const;

test("typography specimens render the same article and capture each treatment", async ({ page }, testInfo) => {
  await page.goto("/mockup/typography");
  await page.evaluate(() => document.fonts.ready);

  await expect(page).toHaveTitle(/Typography study/);
  await expect(page.getByRole("heading", { name: "One story, four typographic voices" })).toBeVisible();

  const activeFonts = await page.locator(".type-treatment--approved").evaluate(async (specimen) => {
    await document.fonts.ready;
    const roles = {
      masthead: ".type-brand",
      headline: ".type-story-heading h2",
      body: ".type-article-body",
      support: ".type-summary",
      metadata: ".type-byline",
    } as const;

    return Object.fromEntries(Object.entries(roles).map(([role, selector]) => {
      const element = specimen.querySelector(selector);
      if (!element) return [role, { family: "", loaded: false }];
      const family = getComputedStyle(element).fontFamily.split(",")[0].replaceAll('"', "").trim();
      return [role, { family, loaded: document.fonts.check(`16px "${family}"`) }];
    }));
  }) as Record<string, { family: string; loaded: boolean }>;

  for (const role of Object.values(activeFonts)) expect(role.loaded).toBe(true);
  expect(activeFonts.headline.family).toContain("Fraunces");
  expect(activeFonts.body.family).toContain("Special Elite");
  expect(activeFonts.support.family).toContain("Literata");

  for (const treatment of treatments) {
    const specimen = page.locator(`[data-treatment="${treatment}"]`);
    await expect(specimen).toBeVisible();
    await expect(specimen.locator(".type-article-body > p")).toHaveCount(3);
    await expect(specimen.locator(".type-article-body mark")).toHaveText("basis points");
    await expect(specimen.locator(".type-margin-note")).toBeVisible();
    await expect(specimen.locator(".type-pull-quote")).toBeVisible();

    await specimen.screenshot({
      path: `../design/screenshots/typography-${treatment}-${testInfo.project.name}.png`,
    });
  }

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }
});
