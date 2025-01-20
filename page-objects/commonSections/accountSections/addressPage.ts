import {Locator} from "@playwright/test";
import {NewAddressPage} from "./newAddressPage";

export class AddressPage{
    // Defining the locators
    readonly root: Locator;
    readonly noAddressesNotification: Locator;
    readonly addAddressButton: Locator;
    readonly addAddressPage: NewAddressPage;

    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.noAddressesNotification = this.root.locator('.mb-2.font-medium');
        this.addAddressButton = this.root.locator('.btn-primary').filter({hasText:'Add'});
        this.addAddressPage = new NewAddressPage(this.root.locator('.new_address'));


    }
    
}