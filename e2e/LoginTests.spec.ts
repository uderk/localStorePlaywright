import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage";
import { MyAccountPage } from "../PageObjects/MyAccountPage";

test.describe("Testing the login page", async () => {
  let loginPage: LoginPage;
  let page: Page;
  let userEmail = "testuser1@abv.bg";
  let password = "TestPassword!@1";
  let user = "testuser1";

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page, userEmail, password);
    await loginPage.goToLoginPage();
  });

  test("Validate Login Page", async ({ page }) => {
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
    await expect(loginPage.rememberMeCheckBoxLocator).not.toBeChecked();
  });

  test("Validate Login with valid user", async ({ page }) => {
    //definitions
    const myAccountPage = new MyAccountPage(page, user);
    //actions
    await loginPage.enterLoginName(loginPage.username);
    await loginPage.enterPassword(loginPage.password);
    await loginPage.clickLoginButton();
    //assertions
    await expect(myAccountPage.myAccountPageTitleLocator).toBeAttached();
    await expect(myAccountPage.myAccountHeaderLocator).toBeAttached();
    await expect(myAccountPage.myAccountHeaderLocator).toBeVisible();
    await expect(myAccountPage.myAccountHeaderLocator).toHaveText("My account");
    await expect(myAccountPage.usernameGreetingsLocator).toBeVisible();
    await expect(myAccountPage.notUserLocator).toBeVisible();
  });
});
