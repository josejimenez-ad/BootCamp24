import {Locator} from "@playwright/test";

export class GiftCards{
    // Defining the locators
    readonly root: Locator;
    readonly noSavedItems:Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.noSavedItems = this.root.locator('p');
    }

    // functions


}