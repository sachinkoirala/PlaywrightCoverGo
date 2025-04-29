const BasePage = require('./base');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
    this.loginLogo = '.login_logo';
  }

  async login(username, password) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async isLoginLogoVisible() {
    return await this.isVisible(this.loginLogo);
  }
}

module.exports = LoginPage;
