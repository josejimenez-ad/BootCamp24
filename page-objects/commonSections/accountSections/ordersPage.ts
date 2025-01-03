import {Locator} from "@playwright/test";

export class OrdersPage{
    // Defining the locators
    readonly root: Locator;
    readonly noPrevOrders:Locator;
    readonly shopAllButton: Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.noPrevOrders = this.root.locator('p');
        this.shopAllButton = this.root.locator('.btn-primary').filter({hasText:'Shop All'});
    }

    // functions


}