import { expect, test } from "@playwright/test";

test("token showcase renders its design system sections", async ({ page }, testInfo) => {
  await page.goto("/tokens");

  await expect(page).toHaveTitle(/Design tokens/);
  await expect(page.getByRole("heading", { name: "Token Gazette" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Colour & paper" })).toBeVisible();
  await expect(page.getByText("--paper-bright", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("UnifrakturCook", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("--motion-slow", { exact: true })).toBeVisible();

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  const screenshotPath = `../design/screenshots/tokens-${testInfo.project.name}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });
});
