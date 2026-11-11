import { expect, test } from "@playwright/test";

test("onboarding begins with no topics and captures the responsive page", async ({ page }, testInfo) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto("/mockup/onboarding");

  await expect(page).toHaveTitle(/Choose Your Sections/);
  await expect(page.getByRole("heading", { level: 1, name: "Your paper. Your interests." })).toBeVisible();
  await expect(page.getByRole("button", { name: /Continue to your paper/ })).toBeDisabled();
  await expect(page.locator(".topic-counter")).toHaveText("0 of 5 chosen");
  await expect(page.getByRole("group", { name: "Choose five newspaper sections" }).getByRole("button")).toHaveCount(24);

  await page.screenshot({
    path: `../design/screenshots/onboarding-${testInfo.project.name}.png`,
    fullPage: true,
  });

  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }
  expect(pageErrors).toEqual([]);
});

test("selection requires five topics, allows replacement, and previews honestly", async ({ page }, testInfo) => {
  await page.goto("/mockup/onboarding");
  const continueButton = page.getByRole("button", { name: /Continue to your paper/ });
  const markets = page.getByRole("button", { name: /Markets/ });
  const selected = ["Markets", "Central Banks", "Personal Finance", "Banking", "Commodities"];

  for (const topic of selected) await page.getByRole("button", { name: new RegExp(topic) }).click();

  await expect(page.locator(".topic-counter")).toHaveText("5 of 5 chosen");
  await expect(continueButton).toBeEnabled();
  await expect(page.getByText("Five sections chosen. Remove one to make room for another.")).toBeVisible();
  await expect(page.getByRole("button", { name: /Stocks and Equities/ })).toBeDisabled();
  const selectedButtons = page.locator(".topic-tag[aria-pressed='true']");
  await expect(selectedButtons).toHaveCount(5);
  const selectedColor = await selectedButtons.first().evaluate((element) => getComputedStyle(element).backgroundColor);
  const unselectedColor = await page.getByRole("button", { name: /Stocks and Equities/ }).evaluate((element) => getComputedStyle(element).backgroundColor);
  expect(selectedColor).not.toBe(unselectedColor);
  await page.locator('label[for="knowledge-beginner"]').click();
  await expect(page.getByRole("radio", { name: /Beginner/ })).toBeChecked();
  await expect(page.locator('label[for="knowledge-beginner"]')).toHaveCSS("border-color", "rgb(25, 51, 77)");
  await page.screenshot({
    path: `../design/screenshots/onboarding-selected-${testInfo.project.name}.png`,
    fullPage: true,
  });
  if (testInfo.project.name === "mobile") {
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);
  }

  await page.getByRole("button", { name: /Markets/ }).click();
  await expect(page.locator(".topic-counter")).toHaveText("4 of 5 chosen");
  await expect(continueButton).toBeDisabled();
  await expect(page.getByRole("button", { name: /Stocks and Equities/ })).toBeEnabled();
  await page.getByRole("button", { name: /Stocks and Equities/ }).click();
  await expect(page.locator(".topic-counter")).toHaveText("5 of 5 chosen");

  await continueButton.click();
  await expect(page.getByRole("status")).toContainText("This static mockup does not save preferences");
  await expect(page.getByRole("status")).toContainText("Central Banks");
  expect(await markets.getAttribute("aria-pressed")).toBe("false");
});

test("knowledge level is optional, selectable and keyboard operable", async ({ page }) => {
  await page.goto("/mockup/onboarding");

  const beginner = page.getByRole("radio", { name: /Beginner/ });
  const intermediate = page.getByRole("radio", { name: /Intermediate/ });
  await expect(beginner).not.toBeChecked();
  await intermediate.focus();
  await page.keyboard.press("Space");
  await expect(intermediate).toBeChecked();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("radio", { name: /Advanced/ })).toBeChecked();

  const topic = page.getByRole("button", { name: /Markets/ });
  await topic.focus();
  await page.keyboard.press("Space");
  await expect(topic).toHaveAttribute("aria-pressed", "true");
});
