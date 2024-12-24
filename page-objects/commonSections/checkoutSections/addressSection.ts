import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class AddressSection {
    // Defining the locators
    readonly root: Locator;
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
    constructor(root: Locator) {
        this.root = root;
        this.addressTitle = this.root.locator('h5').filter({hasText:"Shipping Address"});
        this.countryDropDown = this.root.locator('#order_ship_address_attributes_country_id');
        this.firstNameInput = this.root.getByPlaceholder('First name');
        this.lastNameInput = this.root.getByPlaceholder('Last name');
        this.streetAndHouseNumberInput = this.root.getByPlaceholder('Street and house number');
        this.apartmentInput = this.root.getByPlaceholder('Apartment, suite, etc. (optional)');
        this.cityInput = this.root.getByPlaceholder('City');
        this.stateDropDown = this.root.locator('#order_ship_address_attributes_state_id'); //only valid for USA
        this.postalCodeInput = this.root.getByPlaceholder('Postal Code');
        this.phoneInput = this.root.getByPlaceholder('Phone (optional)');
        this.saveAndContinueButton = this.root.getByRole('button', { name:'Save and Continue'});
    }

    // functions


}