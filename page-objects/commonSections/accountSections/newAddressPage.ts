import {Locator} from "@playwright/test";

export class NewAddressPage{
    // Defining the locators
    readonly root: Locator;
    readonly countrySelection: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly streetAndHouseNumber: Locator;
    readonly apartment: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly postalCode: Locator;
    readonly phone: Locator;
    readonly checkDefaultDelivery: Locator;
    readonly checkDefaultBilling: Locator;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;

    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.countrySelection = this.root.locator('#address_country_id');
        this.firstName = this.root.locator('#address_firstname');
        this.lastName = this.root.locator('#address_lastname');
        this.streetAndHouseNumber = this.root.getByPlaceholder('Street and house number');
        this.apartment = this.root.locator('#address_address2');
        this.city = this.root.locator('#address_city');
        this.state = this.root.locator('#address_state_id');
        this.postalCode = this.root.locator('#address_zipcode');
        this.phone = this.root.getByPlaceholder('Phone (optional)');
        this.checkDefaultDelivery = this.root.locator('#default_shipping');
        this.checkDefaultBilling = this.root.locator('#default_billing');
        this.saveButton = this.root.locator('.btn-primary');
        this.cancelButton = this.root.locator('a').filter({hasText:'Cancel'});
    }
    
}