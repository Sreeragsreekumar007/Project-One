import { Page } from '@playwright/test';

export class HelperPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible", timeout: 20000
        });
        await element.click();
    }
}