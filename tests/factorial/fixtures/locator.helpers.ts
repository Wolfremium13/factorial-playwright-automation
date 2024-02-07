import { Locator, Page } from "@playwright/test";

const ClockInButton = (page: Page): Locator => {
  return page.getByRole("button", { name: "Entrada" });
};

const ClockOutButton = (page: Page): Locator => {
  return page.getByRole("button", { name: "Detener" });
};

export const LocatorHelpers = {
  ClockInButton,
  ClockOutButton,
};
