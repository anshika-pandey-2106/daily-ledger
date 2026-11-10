import { expect, test } from "@playwright/test";

test("illustrative front page renders and fits the viewport", async ({ page }, testInfo) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/The Daily Ledger/);
  await expect(page.getByRole("heading", { name: "The Daily Ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Markets at a glance" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The Wild Card" })).toBeVisible();
  await expect(page.getByText(/Every story, market figure and scenario.*fictional/)).toBeVisible();
  await expect(page.locator("details.story-why")).toHaveCount(12);
  await expect(page.locator("svg.story-art").first()).toBeVisible();

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images.filter((image) => !(image instanceof HTMLImageElement) || !image.complete || image.naturalWidth === 0).length,
  );
  expect(brokenImages).toBe(0);

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  await page.screenshot({
    path: `../design/screenshots/front-page-${testInfo.project.name}.png`,
    fullPage: true,
  });
});
