class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(url = '') {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async type(selector, text) {
    await this.page.type(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async countItems(selector) {
    return await this.page.locator(selector).count();
  }
}

module.exports = BasePage;
