import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {Navbar} from "./commonSections/navBar";

export class HomePage{
    // Defining the locators
    readonly navBar: Navbar;
    readonly contentPanel: ContentPanel;
    readonly creativeDivider: ContentDivider;
    readonly fashionCarousel: CarouselComponent;
    readonly welcomeToOurShop: ContentDivider;
    readonly skinCareCarousel: CarouselComponent;
    readonly beautyGifts: CarouselComponent;
    readonly subscription: mailForm;
    readonly pageFooter: Footer;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.navBar = new Navbar(this.page.locator('.page-container').first());



    }

    // functions


}