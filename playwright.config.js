import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './UI_Automation/tests', // Directory where your test files are located
  retries: 0, // Retry failed tests once
  use: {
    headless: false, // Run tests in headless mode
    baseURL: 'https://www.saucedemo.com', // Base URL for tests
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'on', // Take screenshots on both success and failure
    video: 'retain-on-failure', // Optional: Retain video on failure
  },
  reporter: [
    ['list'], // Default console reporter
    ['allure-playwright', { outputFolder: 'test-results/allure-results' }], // Save Allure results here
  ],
  outputDir: 'test-results', // Directory for test results
  projects: [
    {
      name: 'chromium',
      use: {
        screenshot: 'on',
        outputDir: 'test-results/screenshots/', // Save screenshots here
      },
    },
  ],
});