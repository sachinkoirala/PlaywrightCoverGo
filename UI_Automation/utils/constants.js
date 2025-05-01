// User credentials
const CREDENTIALS = {
  VALID_USER: { username: 'standard_user', password: 'secret_sauce' },
  INVALID_USER: { username: 'invalid_user', password: 'wrong_password' },
};

// Product data
const PRODUCTS = {
  BIKE_LIGHT: 'Sauce Labs Bike Light',
  BOLT_T_SHIRT: 'Sauce Labs Bolt T-Shirt',
  RED_T_SHIRT: 'Test.allTheThings() T-Shirt (Red)',
};

// URLs
const URLS = {
  BASE_URL: 'https://www.saucedemo.com',
  INVENTORY_PAGE: '/inventory.html',
  CHECKOUT_STEP_ONE: '/checkout-step-one.html',
};

// CSS Selectors
const SELECTORS = {
  checkoutButton: '#checkout',
  cartItemName: '.inventory_item_name',
  removeButton: (productName) => `#remove-${productName.replace(/\s+/g, '-').toLowerCase()}`,
};

// Export all constants
export { CREDENTIALS, PRODUCTS, URLS, SELECTORS };