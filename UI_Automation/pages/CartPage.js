
import {BasePage} from './BasePage';
import { SELECTORS } from '../utils/constants';
import { generateRemoveButtonSelector } from '../utils/helpers';


 export class CartPage extends BasePage {
  
  async isCartItemPresent(productName) {
    const itemSelector = `${SELECTORS.cartItemName}:has-text("${productName}")`;
    return await this.isVisible(itemSelector);
  }

  async removeItemFromCart(productName) {
    const removeButton = generateRemoveButtonSelector(productName);
    console.log(`Remove button selector: ${removeButton}`);
    await this.click(removeButton);
  }

  async clickCheckout() {
    await this.click(SELECTORS.checkoutButton);
  }
}
