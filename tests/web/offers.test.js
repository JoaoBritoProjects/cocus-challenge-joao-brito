// Define browser
const { chromium } = require('playwright');

// Import test lib
const { test } = require('@playwright/test');

// Import page classes and test data
const OffersBasePage = require('../../library/pages/offers/OffersBase.page');
const OffersTemplatePage = require('../../library/pages/offers/Offers.template.page');

test.describe('Offers Test Suite', () => {
  // Verify each of the offers pages
  
  let browser = null
  let context = null
  let page = null
  let offersBasePage = null
  let offersTemplatePage = null

  test.beforeEach( async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    offersBasePage = new OffersBasePage(page);
    offersTemplatePage = new OffersTemplatePage(page);
    await offersBasePage.navigate();
  });
    
  test.afterEach( async () => {
    await context.close();
    await browser.close();
  });
  
  test('Cheap Flights Tickets Offer Content', async () => {
    // Validate the Cheap Flights Tickets offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.cheap_flights_tickets);
    await offersTemplatePage.validateOfferPageContent()
  
  });

  test('Hotels Deals Offer Content', async () => {
    // Validate the Hotels Deals offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.hotels_deals);
    await offersTemplatePage.validateOfferPageContent()
  
  });

  test('Lunch Discount Content', async () => {
    // Validate the Lunch Discount offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.lunch_discount);
    await offersTemplatePage.validateOfferPageContent()
  
  });

  test('Rent Car Offer Content', async () => {
    // Validate the Rent Car offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.rent_car);
    await offersTemplatePage.validateOfferPageContent()
  
  });

  test('Summer Vacation Offer Content', async () => {
    // Validate the Summer Vacation offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.summer_vacation);
    await offersTemplatePage.validateOfferPageContent()
  
  });

  test('3 Nights Aegean Cruise Offer Content', async () => {
    // Validate the 3 Nights Aegean Cruise offer page
    await offersBasePage.clickOnOffer(offersBasePage.test_data.offers.three_nights_aegean_cruise);
    await offersTemplatePage.validateOfferPageContent()
  
  });
  
})

