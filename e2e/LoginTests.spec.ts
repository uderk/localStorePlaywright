import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage";

test.describe("Testing the login page", async () => {
  // test.beforeEach(async ({ page }) => {
  // const loginPage = new LoginPage(
  //   page,
  //   "testUser1@abv.bg",
  //   "TestPassword!@1"
  // );

  test("Validate Login Page", async ({ page }) => {
    const loginPage = new LoginPage(
      page,
      "testUser1@abv.bg",
      "TestPassword!@1"
    );
    await loginPage.goToLoginPage();
    await expect(loginPage.titleLocator).toBeAttached();
    await expect(page).toHaveTitle("My account – mystore");
    await expect(loginPage.loginHeaderLocator).toBeVisible();
    await expect(loginPage.usernameLabelLocator).toBeVisible();
    await expect(loginPage.usernameLabelLocator).toContainText(
      "Username or email address "
    );
    await expect(loginPage.passwordLabelLocator).toBeVisible();
    await expect(loginPage.passwordLabelLocator).toContainText("Password ");
    await expect(loginPage.rememberMeCheckBoxLocator).toBeEnabled();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    // await loginPage.enterLoginName(loginPage.username);
    // await loginPage.enterPassword(loginPage.password);
    // await loginPage.clickLoginButton();
  });
});
