import {Locator} from "@playwright/test";

export class PersonalDetails{
    // Defining the locators
    readonly root: Locator;
    readonly title: Locator;
    readonly firstNameEntry: Locator;
    readonly lastNameEntry: Locator;
    readonly phoneEntry: Locator;
    readonly emailEntry: Locator;
    readonly changePasswordButton: Locator;
    readonly updateButton: Locator;

    // constructor
    constructor(root:Locator) {
        this.root = root;
        this.firstNameEntry = this.root.getByPlaceholder('First Name');
        this.lastNameEntry = this.root.getByPlaceholder('Last Name');
        this.phoneEntry = this.root.getByPlaceholder('Phone');
        this.emailEntry = this.root.getByPlaceholder('Email');
        this.changePasswordButton = this.root.locator('a').filter({hasText:'Change Password'});
        this.updateButton = this.root.locator('.btn-primary');
    }

    // functions


}