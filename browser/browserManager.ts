import { LaunchOptions, chromium, firefox, webkit } from "playwright-core"
import { PlaywrightTestConfig, devices } from "playwright/test"

const options:
 LaunchOptions = {
    headless: false,
}
export const invokeBrowser = async () => {
    const browserType = process.env.BROWSER || "chrome"; // Default to chrome if no env variable is set
    switch (browserType) {
        case "chrome":
            return await chromium.launch(options);
        case "firefox":
            return await firefox.launch(options);
        case "webkit":
            return await webkit.launch(options);
        default:
            throw new Error("Please set the proper browser! Use 'chrome', 'firefox', or 'webkit'.");
    }
}