import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class AddressSection {
    // Defining the locators
    readonly addressTitle: Locator;
    readonly countryDropDown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly streetAndHouseNumberInput: Locator;
    readonly apartmentInput: Locator; // optional field
    readonly cityInput: Locator;
    readonly stateDropDown: Locator;
    readonly postalCodeInput: Locator;
    readonly phoneInput: Locator //optional field
    readonly saveAndContinueButton: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.addressTitle = this.page.locator('h5').filter({hasText:"Shipping Address"});
        this.countryDropDown = this.page.locator('#order_ship_address_attributes_country_id');
        this.firstNameInput = this.page.getByPlaceholder('First name');
        this.lastNameInput = this.page.getByPlaceholder('Last name');
        this.streetAndHouseNumberInput = this.page.getByPlaceholder('Street and house number');
        this.apartmentInput = this.page.getByPlaceholder('Apartment, suite, etc. (optional)');
        this.cityInput = this.page.getByPlaceholder('City');
        this.stateDropDown = this.page.locator('#order_ship_address_attributes_state_id'); //only valid for USA
        this.postalCodeInput = this.page.getByPlaceholder('Postal Code');
        this.phoneInput = this.page.getByPlaceholder('Phone (optional)');
        this.saveAndContinueButton = this.page.getByRole('button', { name:'Save and Continue'});
    }

    // functions


}