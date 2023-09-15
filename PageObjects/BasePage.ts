import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {
    this.page = page;
  }

  //common page elements
  readonly cartPageLocator = this.page.locator(
    '//li/a[@href="http://mystore.local/cart/"]'
  );
  readonly checkOutPageLocator = this.page.locator(
    '//li/a[@href="http://mystore.local/checkout/"]'
  );
  readonly myAccountPageLocator = this.page.locator(
    '//li/a[@href="http://mystore.local/my-account/"]'
  );
  readonly samplePageLocator = this.page.locator(
    '//li/a[@href="http://mystore.local/sample-page/"]'
  );
  readonly shopPageLocator = this.page.locator(
    '//li/a[@href="http://mystore.local/"]'
  );

  //actions
  navigateTo(url: string) {
    this.page.goto(url);
  }
}
