import {Locator, expect} from "@playwright/test";

export class Navbar{
    // general locators
    readonly root: Locator;
    readonly openSearch: Locator;
    readonly logo: Locator;
    readonly accountIcon: Locator;
    readonly favoritesIcon: Locator;
    readonly cartIcon: Locator;
    readonly mobileBurgerMenu: Locator;
    readonly successSignUp: Locator;
    // specific locators for menu options
    readonly bathAndFeelGood: Locator;
    readonly beauty: Locator;
    readonly skinCare: Locator;
    readonly fashion: Locator;
    readonly beautyGifts: Locator;

    // constructor
    constructor(root:Locator){
    this.root = root;
    this.logo = this.root.locator('#site-logo');
    this.openSearch = this.root.locator('#open-search');
    this.mobileBurgerMenu = this.root.getByRole('button',{name:"Toggle menu"});
    this.bathAndFeelGood = this.root.locator('[data-title="bath & feelgood"]');
    this.beauty = this.root.locator('[data-title="beauty"]');
    this.skinCare = this.root.locator('[data-title="skin care"]');
    this.fashion = this.root.locator('[data-title="fashion"]');
    this.beautyGifts = this.root.locator('[data-title="beauty gifts"]');
    this.accountIcon = this.root.locator('button[data-action*="slideover-account#toggle"]');
    this.favoritesIcon = this.root.locator('#wishlist-icon');
    this.cartIcon = this.root.locator('#cart-icon-');
    this.successSignUp = this.root.locator('[data-controller="alert"]').locator('.p-2');
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