import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory where your test files are located
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Run tests in headless mode
    baseURL: 'https://www.saucedemo.com', // Base URL for tests
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'on', // Take screenshots on both success and failure
  },
  reporter: [
    ['list'], // Default console reporter
    ['allure-playwright'], // Allure reporter
  ],
  outputDir: 'test-results', // Directory for test results
});