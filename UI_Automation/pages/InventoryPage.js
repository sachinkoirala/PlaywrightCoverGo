import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryTitle = '.title';
    this.productSortDropdown = '.product_sort_container';
    this.addToCartButtons = '.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
    this.productNames = '.inventory_item_name';
    this.productPrices = '.inventory_item_price';
  }

  async isInventoryPageVisible() {
    return await this.isVisible(this.inventoryTitle);
  }

  async sortProductsBy(optionValue) {
    await this.selectOption(this.productSortDropdown, optionValue);
  }

  async getProductCount() {
    return await this.countItems(this.productNames);
  }

  async addProductToCart(productName) {
    const addToCartBtn = `.inventory_item:has-text("${productName}") .btn_inventory`;
    await this.click(addToCartBtn);
  }

  async goToCart() {
    await this.click(this.cartIcon);
  }

  async getAllProductNames() {
    return await this.page.locator(this.productNames).allTextContents();
  }

  async getAllProductPrices() {
    return await this.page.locator(this.productPrices).allTextContents();
  }
}

