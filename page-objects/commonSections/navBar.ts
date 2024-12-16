import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class Navbar{
    // general locators
    readonly searchBox: Locator;
    readonly logo: Locator;
    readonly accountIcon: Locator;
    readonly favoritesIcon: Locator;
    readonly cartIcon: Locator;
    // specific locators for menu options
    readonly bathAndFeelGood: Locator;
    readonly beauty: Locator;
    readonly skinCare: Locator;
    readonly fashion: Locator;
    readonly beautyGifts: Locator;

    // constructor
    constructor(page:Page){
    this.page = page;

    }

}