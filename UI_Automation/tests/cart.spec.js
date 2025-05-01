
import  { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';
import credentials from '../config/credentials.json' assert { type: 'json' };

test.describe('Cart Tests', () => {
  let loginPage, inventoryPage, cartPage;

  test.beforeEach(async ({ page , baseURL}) => {
    // Initialize page objects
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    

    // Open the login page and log in
    await loginPage.open();
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
  });

  // TC7: Navigate to cart and verify items
  test('should navigate to cart and verify items', async () => {
     await inventoryPage.addProductToCart('Sauce Labs Bike Light');
    await inventoryPage.goToCart();
    const itemExists = await cartPage.isCartItemPresent('Sauce Labs Bike Light');
    expect(itemExists).toBe(true);
  });

  // TC8: Remove item from cart
  test('should remove an item from cart', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Bolt T-Shirt');
    await inventoryPage.goToCart();
    await cartPage.removeItemFromCart('Sauce Labs Bolt T-Shirt');
    const exists = await cartPage.isCartItemPresent('Sauce Labs Bolt T-Shirt');
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
    const productNames = await inventoryPage.getAllProductNames();
    expect(productNames.length).toBe(6);
  });
});