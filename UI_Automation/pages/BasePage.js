 export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path = '/') {
    await this.page.goto(path); // Use relative path to leverage baseURL
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }
  async type(selector, text) {
    await this.page.fill(selector, text);
  }
  async waitForSelector(selector, options = {}) {
    await this.page.waitForSelector(selector, options);
  }
  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }
  async countItems(selector) {
    return await this.page.locator(selector).count();
  }
  async getAttribute(selector, attribute) {
    return await this.page.getAttribute(selector, attribute);
  }
  async getAllTextContents(selector) {
    return await this.page.locator(selector).allTextContents();
  }
  async getAllTextContents(selector) {
    return await this.page.locator(selector).allTextContents();
  }
}

