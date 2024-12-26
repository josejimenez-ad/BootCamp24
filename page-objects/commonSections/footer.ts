import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class Footer{
    // general locators
    readonly root: Locator;
    readonly siteLogo: Locator;
    readonly followUs: Locator;
    readonly shopFooter: Locator;
    readonly shopAll: Locator;
    readonly brands: Locator;
    readonly accountFooter: Locator;
    readonly myAccount: Locator;
    readonly favorites:Locator;
    readonly companyFooter: Locator;
    readonly infoFooter:Locator;
    readonly privacyPolicy: Locator;
    readonly termsOfService: Locator;

    // constructor
    constructor(root: Locator){
        this.root = root;
        this.siteLogo = this.root.locator('#site-logo');
        this.followUs = this.root.locator('h3').filter({hasText:'Follow Us'});
        this.shopFooter = this.root.locator('[data-editor-name="Shop]');
        this.shopAll = this.shopFooter.locator('a').filter({hasText:'Shop All'});
        this.brands = this.shopFooter.locator('a').filter({hasText:'Brands'});
        this.accountFooter = this.root.locator('[data-editor-name="Account"]');
        this.myAccount = this.accountFooter.locator('a').filter({hasText:'My Account'});
        this.favorites = this.accountFooter.locator('a').filter({hasText:'Favorites'});
        this.companyFooter = this.root.locator('[data-editor-name="Company"]');
        this.infoFooter = this.root.locator('[data-editor-name="Info"');
        this.privacyPolicy = this.infoFooter.locator('a').filter({hasText:'Privacy Policy'});
        this.termsOfService = this.infoFooter.locator('a').filter({hasText:'Terms of Service'});
    }

}