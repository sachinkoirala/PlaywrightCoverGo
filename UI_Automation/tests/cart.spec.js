const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');
const InventoryPage = require('../pages/inventory');
const CartPage = require('../pages/cart');
const credentials = require('../config/credentials.json');

test.describe('Cart Tests', () => {
  let loginPage, inventoryPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.open('https://www.saucedemo.com');
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
  });

  // TC7: Navigate to cart and verify items
  test('should navigate to cart and verify items', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');
    await inventoryPage.goToCart();
    const itemName = await cartPage.isCartItemPresent('Sauce Labs Bike Light');
    expect(itemName).toBe(true);
  });

  // TC8: Remove item from cart
  test('should remove an item from cart', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Fleece Jacket');
    await inventoryPage.goToCart();
    await cartPage.removeItemFromCart('Sauce Labs Fleece Jacket');
    const exists = await cartPage.isCartItemPresent('Sauce Labs Fleece Jacket');
    expect(exists).toBe(false);
  });

  // TC9: Checkout button navigates correctly
  test('should navigate to checkout page', async () => {
    await inventoryPage.addProductToCart('Test.allTheThings() T-Shirt (Red)');
    await inventoryPage.goToCart();
    await cartPage.clickCheckout();
    expect(await cartPage.page.url()).toContain('checkout-step-one.html');
  });

  // TC10: Verify default sorting
  test('should display correct number of products', async () => {
    const names = await inventoryPage.getAllProductNames();
    expect(names.length).toBe(6);
  });
});
