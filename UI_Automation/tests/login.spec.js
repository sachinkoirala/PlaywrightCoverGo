const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');
const credentials = require('../config/credentials.json');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open('https://www.saucedemo.com');
  });

  // TC1: Successful login with valid credentials
  test('should login successfully with valid credentials', async () => {
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
    expect(await loginPage.page.url()).toContain('inventory.html');
  });

  // TC2: Error displayed on invalid credentials
  test('should display error message for invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Epic sadface:');
  });

  // TC3: Locked out user gets correct error
  test('should show specific error for locked-out user', async () => {
    await loginPage.login(credentials.lockedOutUser.username, credentials.lockedOutUser.password);
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Epic sadface: Sorry, this user has been locked out.');
  });
});
