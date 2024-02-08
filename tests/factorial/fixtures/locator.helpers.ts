import { Locator, Page } from "@playwright/test";

const ClockInButton = (page: Page): Locator => {
  return page.getByRole("button", { name: "Entrada" });
};

const ClockOutButton = (page: Page): Locator => {
  return page.getByRole("button", { name: "Detener" });
};

const ConfirmEstimationButton = (page: Page): Locator => {
  return  page.getByRole('button', { name: 'Confirmar estimación' });
}

export const LocatorHelpers = {
  ClockInButton,
  ClockOutButton,
  ConfirmEstimationButton
};
