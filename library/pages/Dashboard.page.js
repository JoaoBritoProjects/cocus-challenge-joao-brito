const { expect } = require('@playwright/test');

class DashboardPage {

    constructor (page){
        // Creation of object comprising the dashboard page element locators
        this.page = page;
        this.pageTitle = page.locator('.sec__title');
    }

    test_data = {
        // dashboard page test data
        welcome_title_content : "Hi, Demo Welcome Back"
    }

    async verifyTitle(){
        // verify that the title is visible and has the expected value
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toContainText(this.test_data.welcome_title_content);
    }
    
}
module.exports = DashboardPage;