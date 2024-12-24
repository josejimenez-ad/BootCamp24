import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class DeliverySection {
    // Defining the locators
    readonly deliveryTitle: Locator;
    readonly deliverySelector: Locator;
    readonly deliveryRadioButton: Locator;
    readonly saveAndContinueButton: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.deliveryTitle = this.page.locator('h5').filter({hasText:"Delivery"});
        this.deliverySelector = this.page.locator('[checkout-delivery-target="shippingRate"]');
        this.deliveryRadioButton = this.page.locator('.radio-input');
        this.saveAndContinueButton = this.page.getByRole('button', { name:'Save and Continue'});
    }

    // functions


}