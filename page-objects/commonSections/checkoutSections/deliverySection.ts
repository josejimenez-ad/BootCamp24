import {Locator} from "@playwright/test";

export class DeliverySection {
    // Defining the locators
    readonly root: Locator;
    readonly deliveryTitle: Locator;
    readonly deliverySelector: Locator;
    readonly deliveryRadioButton: Locator;
    readonly saveAndContinueButton: Locator;

    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.deliveryTitle = this.root.locator('h5').filter({hasText:"Delivery"});
        this.deliverySelector = this.root.locator('[checkout-delivery-target="shippingRate"]');
        this.deliveryRadioButton = this.root.locator('.radio-input');
        this.saveAndContinueButton = this.root.getByRole('button', { name:'Save and Continue'});
    }

    // functions


}