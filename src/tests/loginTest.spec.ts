import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test('Test1', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('karthik.kn2093953@agentforce.com');
    await loginPage.fillPassword('System!123');
    const homePage = await loginPage.clickLoginButton(); 
    await page.waitForLoadState('load');
    await homePage.verifyPageTitle();
    
  });