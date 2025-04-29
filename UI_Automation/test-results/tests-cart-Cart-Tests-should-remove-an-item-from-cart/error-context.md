# Test info

- Name: Cart Tests >> should remove an item from cart
- Location: /Users/sachinkoirala/Desktop/covergo/PlaywrightCoverGo/UI_Automation/tests/cart.spec.js:27:3

# Error details

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.inventory_item:has-text("Sauce Labs Fleece Jacket") .cart_button')

    at CartPage.click (/Users/sachinkoirala/Desktop/covergo/PlaywrightCoverGo/UI_Automation/pages/base.js:11:21)
    at CartPage.removeItemFromCart (/Users/sachinkoirala/Desktop/covergo/PlaywrightCoverGo/UI_Automation/pages/cart.js:18:16)
    at /Users/sachinkoirala/Desktop/covergo/PlaywrightCoverGo/UI_Automation/tests/cart.spec.js:30:20
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs 1 Your Cart QTY Description 1
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Remove"
- button "Go back Continue Shopping":
  - img "Go back"
  - text: Continue Shopping
- button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | class BasePage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |   }
   5 |
   6 |   async open(url = '') {
   7 |     await this.page.goto(url);
   8 |   }
   9 |
  10 |   async click(selector) {
> 11 |     await this.page.click(selector);
     |                     ^ Error: page.click: Test timeout of 30000ms exceeded.
  12 |   }
  13 |
  14 |   async type(selector, text) {
  15 |     await this.page.type(selector, text);
  16 |   }
  17 |
  18 |   async getText(selector) {
  19 |     return await this.page.textContent(selector);
  20 |   }
  21 |
  22 |   async isVisible(selector) {
  23 |     return await this.page.isVisible(selector);
  24 |   }
  25 |
  26 |   async selectOption(selector, value) {
  27 |     await this.page.selectOption(selector, value);
  28 |   }
  29 |
  30 |   async countItems(selector) {
  31 |     return await this.page.locator(selector).count();
  32 |   }
  33 | }
  34 |
  35 | module.exports = BasePage;
  36 |
```