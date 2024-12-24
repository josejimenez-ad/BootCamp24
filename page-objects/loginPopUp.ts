import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class LoginPopUp{
    // Defining the locators
    readonly window: Locator;
    readonly loginTitle: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberCheckBox: Locator;
    readonly loginButton: Locator;
    readonly signUpButton: Locator;
    readonly forgotPasswordButton: Locator;
    readonly closeLoginPopUp: Locator;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.window = this.page.locator('.relative.sidebar-pane');
        this.loginTitle = this.window.locator('.text-xl').filter({hasText:"Account"});
        this.closeLoginPopUp = this.window.locator('button[aria-label="Close account sidebar"]');
        this.emailInput = this.window.locator('#user_email');
        this.passwordInput = this.window.locator('#user_password');
        this.rememberCheckBox = this.window.locator('#user_remember_me');
        this.loginButton = this.window.locator('.btn-btn-primary');
        this.signUpButton = this.window.locator('a').filter({hasText:"Sign Up"});
        this.forgotPasswordButton = this.window.locator('a').filter({hasText:"Forgot password?"});
    }

    // functions


}