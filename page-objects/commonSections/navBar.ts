import {Locator, expect} from "@playwright/test";
import {Page} from "@playwright/test";

export class Navbar{
    // general locators
    readonly openSearch: Locator;
    readonly logo: Locator;
    readonly accountIcon: Locator;
    readonly favoritesIcon: Locator;
    readonly cartIcon: Locator;
    readonly mobileBurgerMenu: Locator;
    // specific locators for menu options
    readonly bathAndFeelGood: Locator;
    readonly beauty: Locator;
    readonly skinCare: Locator;
    readonly fashion: Locator;
    readonly beautyGifts: Locator

    // constructor
    constructor(page:Page){
    this.page = page;
    this.logo = this.page.locator('#site-logo');
    this.openSearch = this.page.locator('#open-search');
    this.mobileBurgerMenu = this.page.getByRole('button',{name:"Toggle menu"})
    this.bathAndFeelGood = this.page.locator('[data-title="bath & feelgood"]');
    this.beauty = this.page.locator('[data-title="beauty"]');
    this.skinCare = this.page.locator('[data-title="skin care"]');
    this.fashion = this.page.locator('[data-title="fashion"]');
    this.beautyGifts = this.page.locator('[data-title="beauty gifts"]');
    this.accountIcon = this.page.locator('button[data-action*="slideover-account#toggle"]');
    this.favoritesIcon = this.page.locator('#wishlist-icon');
    this.cartIcon = this.page.locator('#cart-icon-');
    }

    async confirmTheRedirections(destiny: Locator,page) {
        const desiredUrl = await destiny.getAttribute('href');
        await Promise.all([
            page.waitForNavigation(),
            destiny.click()
        ]);
        const currentUrl = page.url();
        expect(currentUrl).toContain(desiredUrl);
    }
}