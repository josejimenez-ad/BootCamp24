import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class SignUpForm{
    // Defining the locators
    readonly window: Locator;
    readonly signUpTitle: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordConfirmation: Locator;
    readonly loginButton: Locator;
    readonly signUpButton: Locator;
    readonly closeSignUpPopUp: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.window = this.page.locator('.relative.sidebar-pane');
        this.signUpTitle = this.window.locator('h2').filter({hasText:"Sign Up"});
        this.closeSignUpPopUp = this.window.locator('button[aria-label="Close account sidebar"]');
        this.emailInput = this.window.locator('#user_email');
        this.passwordInput = this.window.locator('#user_password');
        this.passwordConfirmation = this.window.locator('#user_password_confirmation');
        this.signUpButton = this.window.locator('.btn-btn-primary');
        this.loginButton = this.window.locator('a').filter({hasText:"Login"});
    }

    // functions


}