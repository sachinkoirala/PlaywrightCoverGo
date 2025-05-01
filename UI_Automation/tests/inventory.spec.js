
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import credentials from '../config/credentials.json' assert { type: 'json' };
import { test, expect } from '@playwright/test';


test.describe('Inventory Tests', () => {
  let loginPage, inventoryPage;

  test.beforeEach(async ({ page , baseURL}) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.open();
    await loginPage.login(credentials.validUser.username, credentials.validUser.password);
  });

  // TC4: Check if inventory items are displayed
  test('should display all inventory items', async () => {
    const itemCount = await inventoryPage.getProductCount();
    expect(itemCount).toBe(6);
  });

  // TC5: Sort products by price low to high
  test('should sort products by price low to high', async () => {
    await inventoryPage.sortProductsBy('lohi');
    const prices = await inventoryPage.getAllProductPrices();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
    const sorted = [...numericPrices].sort((a, b) => a - b);
    expect(numericPrices).toEqual(sorted);
  });

  // TC6: Add product to cart
  test('should add a single product to cart', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    const itemName = await inventoryPage.page.locator('.inventory_item_name').textContent();
    expect(itemName).toBe('Sauce Labs Backpack');
  });
});
