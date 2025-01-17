import {Locator} from "@playwright/test";

export class StoreCredits{
    // Defining the locators
    readonly root: Locator;
    readonly noCredit:Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.noCredit= this.root.locator('p');
    }

}