import { expect, test } from "@playwright/test";

test("illustrative article page and reading controls work at both viewport sizes", async ({ page }, testInfo) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto("/mockup/article");

  await expect(page).toHaveTitle(/When a smaller payment/);
  await expect(page.getByRole("heading", { level: 1, name: /When a smaller payment stretches a loan’s cost/ })).toBeVisible();
  await expect(page.getByText(/The story, source label and examples on this page are fictional/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Illustrative Desk" })).toHaveAttribute("href", "#illustrative-source");
  await expect(page.getByRole("heading", { name: "Basis points" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Ask the Correspondent" })).toBeVisible();
  await expect(page.locator(".question-chips li")).toHaveCount(3);
  await expect(page.getByRole("heading", { name: "Related stories" })).toBeVisible();
  await expect(page.locator(".related-story")).toHaveCount(2);
  await expect(page.getByRole("radio", { name: "Original" })).toBeChecked();
  await expect(page.locator(".article-version-original strong")).toHaveText("lower monthly payment");
  await expect(page.locator(".article-version-original em")).toHaveText("not the whole picture");

  await page.screenshot({
    path: `../design/screenshots/article-page-${testInfo.project.name}.png`,
    fullPage: true,
  });

  const plainEnglishOption = page.getByRole("radio", { name: "Plain English" });
  await page.locator('label[for="reading-plain-english"]').click();
  await expect(plainEnglishOption).toBeChecked();
  await expect(page.getByText(/In this made-up example, a household looks at two pretend loans/)).toBeVisible();
  await page.locator('label[for="reading-eli5"]').click();
  await expect(page.getByText(/Imagine two pretend loans/)).toBeVisible();

  await page.locator('label[for="rating-4"]').click();
  await expect(page.getByText("Your illustrative rating: 4 out of 5.")).toBeVisible();
  await page.getByText("Why this?").click();
  await expect(page.getByText(/No reader profile or recommendation system is active here/)).toBeVisible();
  expect(pageErrors).toEqual([]);

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

});
