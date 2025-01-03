import {Locator} from "@playwright/test";

export class LeftNavMenu {
    // Defining the locators
    readonly root: Locator;
    readonly menuTitle: Locator;
    readonly ordersAndReturns: Locator;
    readonly addresses: Locator;
    readonly personalDetails: Locator;
    readonly wishlist: Locator;
    readonly giftCards: Locator;
    readonly storeCredits: Locator;
    readonly managePreferences: Locator;
    readonly logOut: Locator;


    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.menuTitle = this.root.locator('h1');
        this.ordersAndReturns = this.root.getByText('Orders & Returns');
        this.addresses = this.root.getByText('Addresses');
        this.personalDetails = this.root.getByText('Personal Details');
        this.wishlist = this.root.getByText('Wishlist');
        this.giftCards = this.root.getByText('Gift cards');
        this.storeCredits = this.root.getByText('Store Credits');
        this.managePreferences = this.root.getByText('Manage preferences');
        this.logOut = this.root.getByRole('button',{name:'Log out'});
    }

    // functions


}