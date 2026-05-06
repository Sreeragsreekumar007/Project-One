import { expect, Page } from "@playwright/test";
import { HelperPage } from "../helper/helper";


export default class LoginPage {
private base: HelperPage;
    constructor(private page: Page) {
        this.base = new HelperPage(page);
    }
 private Elements = {
        loginButton: "//button[normalize-space()='Login']",
        
    }

    async clickLoginButton(){
        await this.base.waitAndClick(this.Elements.loginButton);
    }
    
}