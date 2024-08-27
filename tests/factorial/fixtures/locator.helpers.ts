import { Locator, Page } from "@playwright/test";

const ClockInButton = (page: Page): Locator => {
  return page.locator('button span', { hasText: "Fichar" });
};

const ClockOutButton = (page: Page): Locator => {
  return page.locator('button span', { hasText: "Salida" });
};

const ConfirmEstimationButton = (page: Page): Locator => {
  return  page.getByRole('button', { name: 'Confirmar estimación' });
}

export const LocatorHelpers = {
  ClockInButton,
  ClockOutButton,
  ConfirmEstimationButton
};
