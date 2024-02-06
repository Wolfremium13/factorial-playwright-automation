import { test, expect, Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

const SignIn = async (page: Page) => {
  expect(process.env.FACTORIAL_USER).toBeDefined();
  expect(process.env.FACTORIAL_PASSWORD).toBeDefined();
  await page.goto("https://api.factorialhr.com/es/users/sign_in");
  await page.getByLabel("Correo electrónico").click();
  await page
    .getByLabel("Correo electrónico")
    .fill(process.env.FACTORIAL_USER || "wrong-email");
  await page.getByLabel("Contraseña").click();
  await page
    .getByLabel("Contraseña")
    .fill(process.env.FACTORIAL_PASSWORD || "wrong-password");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.waitForURL("https://app.factorialhr.com/dashboard");
  expect(page.url()).toBe("https://app.factorialhr.com/dashboard");
  return page;
};

test.describe("The Factorial page should", () => {
  let factorialPage: Page;
  test.beforeEach(async ({ page }) => {
    factorialPage = await SignIn(page);
  });

  test("mark the when I start working", async () => {
    await expect(
      factorialPage.getByRole("button", { name: "Entrada" })
    ).toBeVisible();
    await factorialPage.getByRole("button", { name: "Entrada" }).click();
    await expect(
      factorialPage.getByRole("button", { name: "Detener" })
    ).toBeVisible();
  });
});
