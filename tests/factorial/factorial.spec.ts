import { test, expect } from "@playwright/test";
import { SignIn } from "./fixtures/sign.in";
import { LocatorHelpers } from "./fixtures/locator.helpers";

test.describe("The Factorial page should", () => {
  test("clock in @clockIn", async ({ page }) => {
    const factorialPage = await SignIn(page);
    await expect(LocatorHelpers.ClockInButton(factorialPage)).toBeVisible();
    await LocatorHelpers.ClockInButton(factorialPage).click();
    await expect(LocatorHelpers.ClockOutButton(factorialPage)).toBeVisible();
  });

  test("clock out @clockOut", async ({ page }) => {
    const factorialPage = await SignIn(page);
    await expect(LocatorHelpers.ClockOutButton(factorialPage)).toBeVisible();
    await LocatorHelpers.ClockOutButton(factorialPage).click();
    await expect(LocatorHelpers.ConfirmEstimationButton(factorialPage)).toBeVisible();
    await LocatorHelpers.ConfirmEstimationButton(factorialPage).click();
    await expect(LocatorHelpers.ClockInButton(factorialPage)).toBeVisible();
  });

  test("clock out and clock in in order to split hours range @SplitClockIn", async ({ page }) => {
    const factorialPage = await SignIn(page);
    await expect(LocatorHelpers.ClockOutButton(factorialPage)).toBeVisible();
    await LocatorHelpers.ClockOutButton(factorialPage).click();
    await expect(LocatorHelpers.ClockInButton(factorialPage)).toBeVisible();
    await LocatorHelpers.ClockInButton(factorialPage).click();
    await expect(LocatorHelpers.ClockOutButton(factorialPage)).toBeVisible();
  });
});
