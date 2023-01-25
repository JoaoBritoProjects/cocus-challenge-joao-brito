const { expect } = require('@playwright/test');

class LoginPage {

    constructor (page){
        // Creation of object comprising the login page element locators
        this.page = page;
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.loginBtn = page.locator('button[type="submit"].btn-lg');
        this.errorMessage = page.locator('.alert.alert-danger.failed');
    }

    test_data = {
        // login page test data
        login: {
            inexistent_user: {
                username: "notAUser@notAnEmail.com",
                password: "demouser"
            },
            invalid_password: {
                username: "user@phptravels.com",
                password: "invalidPassword"
            },
            missing_password: {
                username: "user@phptravels.com",
                password: ""
            },
            valid_user: {
                email: "user@phptravels.com",
                password: "demouser"
            }
        },
        error_messages : {
            wrong_credentials : "Wrong credentials. try again!"
        }       
    }

    async navigate(){
        // Navigate to the login page URL
        await this.page.goto('/login');
    }

    async inputLogInData(userDetails) {
        // Fill user details input in email and password field

        let {password, email} = userDetails;

        await expect(this.loginBtn).toBeVisible();
        if (email) await this.emailInput.fill(email);
        if (password) await this.passwordInput.fill(password);
    }

    async pressLogInButton(){
        // Press login button
        await this.loginBtn.click()
    }

    async verifyWrongCredentialsErrorMessage(){
        // Verify content of the error message
        await expect(this.errorMessage).toContainText(this.test_data.error_messages.wrong_credentials);
    }

    async verifyLogInButtonDisabled(){
        // Verify that the login button is disabled
        await this.loginBtn.isDisabled();
    }
    
}
module.exports = LoginPage;