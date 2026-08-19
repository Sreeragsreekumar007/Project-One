import test, { expect, } from "../../fixtures/fixture";
import { defineConfig } from '@playwright/test';

const config = defineConfig({
  use: {
    storageState: 'auth.json', // all tests reuse this auth state
  }
});

test.describe('Home Page Tests', () => {
    test('should display welcome message', async ({ homePage, logger }) => {
        await homePage.assertWelcomeMessage();
        logger.info('Welcome message verified');
    });
});