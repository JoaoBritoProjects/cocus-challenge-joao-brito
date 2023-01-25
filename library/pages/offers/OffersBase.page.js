const { expect } = require('@playwright/test');

class OffersBasePage {

    constructor (page){
        // Creation of object comprising the offers base page element locators
        this.page = page;
        this.fullCard = page.locator('.card-item.blog-card');
        this.imageInCard = page.locator('.card-img');
        this.descriptionInCard = page.locator('.author-content.d-flex.align-items-center');
    }

    test_data = {
        // offers base page test data
        offers : {
            cheap_flights_tickets : "Cheap Flights Tickets",
            hotels_deals : "Hotels Deals",
            lunch_discount : "Lunch Discount",
            rent_car : "Rent Car",
            summer_vacation : "Summer Vacation",
            three_nights_aegean_cruise : "3 Nights Aegean Cruise"
        }
    }

    async navigate(){
        // Navigate to the Offers page URL
        await this.page.goto('/offers');
    }

    async clickOnOffer(offer){
        // Click on the offer passed by input
        await this.page.getByText(offer).click();
    }
    
}
module.exports = OffersBasePage;