// import { BrowserContext, expect, Page, test } from "@playwright/test";
// import LoginPage from "../../pages/loginPage";

// test.describe('Login Page Tests', () => {
//         let page: Page;

//     test.beforeAll(async ({ browser }) => {
//         page = await browser.newPage();

//         console.log('URL:', process.env.URL);
//         await page.goto(process.env.url!);
//     });

//     test('has title', async () => {
//         const loginPage = new LoginPage(page);
//         await expect(page).toHaveTitle("Testers Talk Practice Site");
//     });
// })