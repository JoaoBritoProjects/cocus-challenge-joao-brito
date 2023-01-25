const { expect } = require('@playwright/test');

class OffersTemplatePage {

    constructor (page){
        // Creation of object comprising the offers template page element locators
        this.page = page;
        this.offerTitle = page.locator('.card-title.font-size-28');
        this.offerPicture = page.locator('.card-img.before-none');
        this.offerDescription = page.locator('.card-body>p:nth-child(4)');
        this.offerPrice = page.locator('.card-body>p:nth-child(6)');
        this.offerPhoneNumber = page.locator('.card-body>p:nth-child(7)');
        this.offerEmailAddress = page.locator('.card-body>p:nth-child(8)');
        this.offerExpiryDate = page.locator('.card-body>p:nth-child(9)');
    }

    test_data = {
        // offers page test data
        expiry_date : 'January 1 1970'
    }

    async verifyOfferPictureIsVisible(){
        // Verify that the offer picture is visible
        await expect(this.offerPicture).toBeVisible();
    }

    async verifyOfferTitleIsVisible(){
        // Verify that the offer title is visible
        await expect(this.offerTitle).toBeVisible();
    }

    async verifyOfferDescriptionIsVisible(){
        // Verify that the offer description is visible
        await expect(this.offerDescription).toBeVisible();
    }

    async verifyOfferPriceIsBiggerThanZero(){
        // Verify that the offer price is visible and less than zero
        await expect(this.offerPrice).toBeVisible();
        let price_value = await this.offerPrice
            .innerText()
            .valueOf();
        
        // Parse price value to be an integer
        let price_value_integer = price_value.match(/\d+/)[0]

        // Confirm that the price value is positive
        await expect(price_value_integer).toMatch(/^[1-9]\d*$/);
    }

    async verifyOfferContactsAreVisible(){
        // Verify that phone number and email address are shown
        await expect(this.offerPhoneNumber).toBeVisible();
        await expect(this.offerEmailAddress).toBeVisible();
    }

    async verifyOfferExpiryDateContent(){
        // Verify that the expiry date is according to the expected
        await expect(this.offerExpiryDate).toBeVisible();       
        await expect(await this.offerExpiryDate
            .innerText()
            .valueOf())
            .toContain(this.test_data.expiry_date);
    }

    async validateOfferPageContent(){
        // Wrapper method for the page verifications
        await this.verifyOfferTitleIsVisible();
        await this.verifyOfferPictureIsVisible();
        await this.verifyOfferDescriptionIsVisible();
        await this.verifyOfferPriceIsBiggerThanZero();
        await this.verifyOfferContactsAreVisible();
        await this.verifyOfferExpiryDateContent();
    }
    
}
module.exports = OffersTemplatePage;