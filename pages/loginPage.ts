import { expect, Page, Locator } from "@playwright/test";
import { HelperPage } from "../helper/helper";
export default class LoginPage {
private base: HelperPage;

readonly loginButton: Locator;
readonly loginError: Locator;
readonly username: Locator;
readonly password: Locator;

     
    constructor(private page: Page) {
    this.base = new HelperPage(page);
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.loginError = page.locator("//p[@id='loginError']");
    this.username= page.getByPlaceholder("Username");
    this.password= page.getByPlaceholder("Password");

    };
    
//With helper (base) we can use the waitAndClick method to click on the login button. This method will wait for the element to be visible before clicking on it, which can help avoid issues with elements not being ready for interaction.
    async clickLoginButton() {
    await this.base.waitAndClick(this.loginButton);
    }
/* Without helper (base) we can directly use the locator to click on the login button. However, this approach may not wait for the element to be visible before clicking, which can lead to issues if the element is not ready for interaction.
    async clickLoginButton() {
    await this.loginButton.click(); */
    async assertLoginError() {
    await expect(this.loginError).toBeVisible();
    }
    async enterCredentials(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    }
}