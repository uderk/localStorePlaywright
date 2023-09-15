import { expect, Locator, Page } from "@playwright/test";

export class MyAccountPage {
  constructor(readonly page: Page, readonly username: string) {
    this.page = page;
    this.username = username;
  }

  //Page elements
  readonly myAccountHeaderLocator = this.page.locator(
    `//h1[contains(text(),"My account")]`
  );
  readonly usernameGreetingsLocator = this.page
    .locator(`//p/strong[contains(text(),${this.username})]`)
    .first();
  readonly notUserLocator = this.page
    .locator(`//p/strong[contains(text(),${this.username})]`)
    .nth(1);
  readonly dashboardLocator = this.page.locator(
    '//li/a[contains(text(),"Dashboard")]'
  );
  readonly ordersLocator = this.page.locator(
    '//li/a[contains(text(),"Orders")]'
  );
  readonly downloadsLocator = this.page.locator(
    '//li/a[contains(text(),"Downloads")]'
  );
  readonly addressesLocator = this.page.locator(
    '//li/a[contains(text(),"Addresses")]'
  );
  readonly accountDetailsLocator = this.page.locator(
    '//li/a[contains(text(),"Account details")]'
  );
  readonly logOutLocator = this.page.locator(
    '//li/a[contains(text(),"Log out")]'
  );

  //actions
  async logOut() {
    await this.logOutLocator.click();
  }
  async goToAccountDetails() {
    await this.accountDetailsLocator.click();
  }
  async goToAddressLocator() {
    await this.addressesLocator.click();
  }
  async goToDownloads() {
    await this.downloadsLocator.click();
  }
  async goToOrders() {
    await this.ordersLocator.click();
  }
}
