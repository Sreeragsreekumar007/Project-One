# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\fixtureLogin.spec.ts >> Login Page Tests >> Verify title
- Location: tests\UI\fixtureLogin.spec.ts:8:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Testers Talk Practice Site"
Received: "Site not found · GitHub Pages"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × unexpected value "Site not found · GitHub Pages"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "404" [level=1] [ref=e3]
  - paragraph [ref=e4]:
    - strong [ref=e5]: There isn't a GitHub Pages site here.
  - paragraph [ref=e6]:
    - text: If you're trying to publish one,
    - link "read the full documentation" [ref=e7] [cursor=pointer]:
      - /url: https://help.github.com/pages/
    - text: to learn how to set up
    - strong [ref=e8]: GitHub Pages
    - text: for your repository, organization, or user account.
  - generic [ref=e9]:
    - link "GitHub Status" [ref=e10] [cursor=pointer]:
      - /url: https://githubstatus.com
    - text: —
    - link "@githubstatus" [ref=e11] [cursor=pointer]:
      - /url: https://twitter.com/githubstatus
  - link [ref=e12] [cursor=pointer]:
    - /url: /
```

# Test source

```ts
  1  | import test, { expect, } from "../../fixtures/fixture";
  2  | import { getEnv } from "../../env/env";
  3  | 
  4  | test.describe('Login Page Tests', () => {
  5  |     test.beforeEach(async ({ page }) => {
  6  |     await page.goto("/");
  7  |     });
  8  |     test('Verify title', async ({ page, logger }) => {
> 9  |     await expect(page).toHaveTitle(process.env.expectedtitle!);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  10 |     logger.info('Checking title');
  11 |     })
  12 | 
  13 |     test('click login button', async ({ loginPage, logger }) => {
  14 |     await loginPage.clickLoginButton();
  15 |     logger.info('Login button clicked');
  16 |     })
  17 | })
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
```