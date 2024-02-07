import { expect, Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export const SignIn = async (page: Page) => {
  const FACTORIAL_USER = process.env.FACTORIAL_USER;
  const FACTORIAL_PASSWORD = process.env.FACTORIAL_PASSWORD;
  expect(FACTORIAL_USER).toBeDefined();
  expect(FACTORIAL_PASSWORD).toBeDefined();
  const factorialUser = FACTORIAL_USER || "wrong-email";
  const factorialPassword = FACTORIAL_PASSWORD || "wrong-password";
  const LoginUrl = "https://api.factorialhr.com/es/users/sign_in";
  await page.goto(LoginUrl);
  await page.getByLabel("Correo electrónico").click();
  await page.getByLabel("Correo electrónico").fill(factorialUser);
  await page.getByLabel("Contraseña").click();
  await page.getByLabel("Contraseña").fill(factorialPassword);
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  const dashBoardUrl = "https://app.factorialhr.com/dashboard";
  await page.waitForURL(dashBoardUrl);
  expect(page.url()).toBe(dashBoardUrl);
  return page;
};
