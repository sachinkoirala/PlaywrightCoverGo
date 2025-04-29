const BasePage = require('./base');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutButton = '#checkout';
    this.cartItemNames = '.inventory_item_name';
    this.removeItemButtons = '.cart_button';
  }

  async isCartItemPresent(productName) {
    const item = `.inventory_item_name:has-text("${productName}")`;
    return await this.isVisible(item);
  }

  async removeItemFromCart(productName) {
    const removeBtn = `.inventory_item:has-text("${productName}") .cart_button`;
    await this.click(removeBtn);
  }

  async clickCheckout() {
    await this.click(this.checkoutButton);
  }

  async getAllCartItems() {
    return await this.page.locator(this.cartItemNames).allTextContents();
  }
}

module.exports = CartPage;
