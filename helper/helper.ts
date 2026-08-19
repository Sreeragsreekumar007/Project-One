import { Page,Locator } from '@playwright/test';

export class HelperPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }
// For accepting both string and locator as input, we can use union type in typescript.
  async waitAndClick(locator: string | Locator) {

    const element =
        typeof locator === "string"
            ? this.page.locator(locator)
            : locator;

    await element.waitFor({
        state: "visible",
        timeout: 20000
    });
        await element.click();
    }

  
}