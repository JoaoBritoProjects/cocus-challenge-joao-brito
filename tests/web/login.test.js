// Define browser
const { chromium } = require('playwright');

// Import test lib
const { test } = require('@playwright/test');

// Import page classes
const LoginPage = require('../../library/pages/Login.page');
const DashboardPage = require('../../library/pages/Dashboard.page');

test.describe('Login Test Suite', () => {
  // Test suite for the login functionality
  
  let browser = null
  let context = null
  let page = null
  let loginPage = null

  test.beforeEach( async () => {
    // Open new browser/page and create object before each test, then go to the login page
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });
    
  test.afterEach( async () => {
    // Close browser/page after each test
    await context.close();
    await browser.close();
  });
  
  test('Valid Login', async () => {
    // Validate login with valid credentials and welcome message
    await loginPage.inputLogInData(loginPage.test_data.login.valid_user);
    await loginPage.pressLogInButton();

    // Create object of DashboardPage
    let dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyTitle();
  });
  
  test('Invalid Password', async () => {
    // Validate login attempt with invalid password and error message
    await loginPage.inputLogInData(loginPage.test_data.login.invalid_password);
    await loginPage.pressLogInButton();
    await loginPage.verifyWrongCredentialsErrorMessage();
  });

  test('Inexistent User', async () => {
    // Validate login attempt with inexistent user and error message
    await loginPage.inputLogInData(loginPage.test_data.login.inexistent_user);
    await loginPage.pressLogInButton();
    await loginPage.verifyWrongCredentialsErrorMessage();
  });

  test('Missing Password', async () => {
    // Validate that the login button is disabled without password input
    await loginPage.inputLogInData(loginPage.test_data.login.missing_password);
    await loginPage.verifyLogInButtonDisabled();
  });

})

