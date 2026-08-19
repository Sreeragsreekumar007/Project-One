import test, { expect, } from "../../fixtures/fixture";
import { getEnv } from "../../env/env";


test.describe('Login Page Tests', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto("");
    });

    test('Verify title', async ({ page, logger }) => {
    await expect(page).toHaveTitle(process.env.expectedtitle!);
    logger.info('Checking title');
    })

    test('Verify login error when clicking on login button without entering credentials', async ({ loginPage, logger }) => {
    await loginPage.clickLoginButton();
    await loginPage.assertLoginError();
    logger.info('Login error verified');
    })
    
    test('Verify successful login', async ({ loginPage, logger, page, browser }) => {
    await loginPage.enterCredentials(process.env.appusername!, process.env.apppassword!);
    await loginPage.clickLoginButton();
    logger.info('Successful login verified');
    await page.context().storageState({ path: 'auth.json' });
    await browser.close();
    })
})






















