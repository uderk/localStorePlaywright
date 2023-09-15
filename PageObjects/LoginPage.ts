import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  constructor(
    readonly page: Page,
    readonly username: string,
    readonly password: string
  ) {
    this.page = page;
    this.username = username;
    this.password = password;
  }

  //page elements
  readonly titleLocator = this.page.locator("//title");
  readonly loginHeaderLocator = this.page.locator(
    '//h2[contains(text(),"Login")]'
  );
  readonly usernameLabelLocator = this.page.locator('//label[@for="username"]');
  readonly passwordLabelLocator = this.page.locator('//label[@for="password"]');
  readonly usernameInputLocator = this.page.locator('//input[@id="username"]');
  readonly passwordInputLocator = this.page.locator('//input[@id="password"]');
  readonly loginButtonLocator = this.page.locator('//button[@name="login"]');
  readonly rememberMeCheckBoxLocator = this.page.locator(
    '//input[@id="rememberme"]'
  );

  //actions
  async goToLoginPage() {
    await this.page.goto("http://mystore.local/my-account/");
  }
  async enterLoginName(username: string) {
    await this.usernameInputLocator.type(username);
  }
  async enterPassword(password: string) {
    await this.passwordInputLocator.type(password);
  }
  async clickLoginButton() {
    await this.loginButtonLocator.click();
  }
  async clickRememberMe() {
    await this.rememberMeCheckBoxLocator.click();
  }
}
