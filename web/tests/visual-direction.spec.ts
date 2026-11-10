import { expect, test } from "@playwright/test";

test("visual direction study renders palette, components and the article hero", async ({ page }, testInfo) => {
  await page.goto("/mockup/visual-direction");

  await expect(page).toHaveTitle(/Visual direction exploration/);
  await expect(page.getByRole("heading", { name: "The Daily Ledger" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "A little room for the month ahead" })).toBeVisible();
  await expect(page.locator(".palette-swatch")).toHaveCount(5);
  await expect(page.locator(".direction-story-card")).toHaveCount(5);
  await expect(page.getByText(/New colours are local to this page/)).toBeVisible();
  await expect(page.locator(".component-specimen")).toHaveCount(7);
  await expect(page.locator("svg.budget-illustration")).toBeVisible();

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  await page.screenshot({
    path: `../design/screenshots/visual-direction-${testInfo.project.name}.png`,
    fullPage: true,
  });
});
