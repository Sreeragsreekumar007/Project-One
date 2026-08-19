import { expect, Page, Locator } from "@playwright/test";
import { HelperPage } from "../helper/helper";

export default class HomePage {
    private base: HelperPage;

readonly welcomeMessage: Locator;


     
    constructor(private page: Page) {
    this.base = new HelperPage(page);
    this.welcomeMessage = page.getByText('Welcome to Testers Talk!', { exact: true })

    };
    
//With helper (base) we can use the waitAndClick method to click on the login button. This method will wait for the element to be visible before clicking on it, which can help avoid issues with elements not being ready for interaction.
    async assertWelcomeMessage() {
    await expect(this.welcomeMessage).toBeVisible();
    }
}