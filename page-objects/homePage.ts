import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

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



    }


    // functions


}