import {Locator} from "@playwright/test";

export class Wishlist{
    // Defining the locators
    readonly root: Locator;
    readonly noSavedItems:Locator;
    readonly shopAllButton: Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.noSavedItems = this.root.locator('p');
        this.shopAllButton = this.root.locator('.btn-primary').filter({hasText:'Shop All'});
    }

    // functions


}