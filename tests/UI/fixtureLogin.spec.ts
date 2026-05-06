import test, { expect, } from "../../fixtures/fixture";

test.describe('Login Page Tests', () => {
    
    test('Verify title', async ({ page, logger }) => {
    await expect(page).toHaveTitle("Testers Talk Practice Site");
    logger.info('Checking title');
    })

    test('click login button', async ({ loginPage, logger }) => {
    await loginPage.clickLoginButton();
    logger.info('Login button clicked');
    })
})






















