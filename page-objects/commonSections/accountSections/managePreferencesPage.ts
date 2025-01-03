import {Locator} from "@playwright/test";

export class ManagePreferences{
    // Defining the locators
    readonly root: Locator;
    readonly managePreferencesDescription: Locator;
    readonly newslettersTitle: Locator;
    readonly subscribeToNewsletterButton: Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.managePreferencesDescription = this.root.locator('p').first();
        this.newslettersTitle = this.root.locator('h3').last();
        this.subscribeToNewsletterButton = this.root.getByRole('button',{name:'subscribe'});
    }

    // functions


}