import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'
// import DashboardPage from '../pageobjects/dashboard.page.js'
import LogoutPage from '../pageobjects/logout.page.js'
import { addAttachment } from "@wdio/allure-reporter"
// import * as fs from "fs"

describe('My Logout application', () => {
    it('should logout of the profile', async () => {
        // await LoginPage.open();
        // await LoginPage.login('john.mird@gmail.com', '123123Aa@');

        // await expect.stringContaining("Should We Always Trust This Browser?");

        // await SecurePage.trustAuth();
        // await DashboardPage.infoLogo.isDisplayed();

        await LogoutPage.logout();
        await expect(LogoutPage.afterLogoutPageElement).toBeDisplayed();
        
    });

    it("Test Authentication", async () => {
        await addAttachment("Text", "This is the file content.", "text/plain");
        await addAttachment("Screenshot", "image/png");
    });

})