import LoginPage from "../pages/loginPage";
import winston from 'winston';
import { options } from "../config/loggerConfig";
import {test as baseTest} from "@playwright/test";

// type page={
//     loginPage: LoginPage
// }

const test = baseTest.extend<{
    loginPage: LoginPage
    logger: winston.Logger;
    //add other pages here as well
    }>({
    logger: async ({}, use, testInfo) => {
    const name = testInfo.title.replace(/[^\w\d]+/g, '_');
    const logger = winston.createLogger(options(name));

    await use(logger);
  },




    loginPage: async ({page}, use) => 
    { 
    await page.goto(process.env.URL ,{ waitUntil: 'domcontentloaded' });
    await use(new LoginPage(page))
    }
    //need to add other pages here as well
    })

export default test;
export const expect = test.expect;
export const describe = test.describe;
export const beforeAll = test.beforeAll;


type Fixtures = {
  logger: winston.Logger;
};

