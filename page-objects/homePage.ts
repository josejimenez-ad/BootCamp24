import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {Navbar} from "./commonSections/navBar";
import {SearchBox} from "./commonSections/searchBox";
import {ContentDivider} from "./commonSections/contentDivider";
import {ContentPanel} from "./commonSections/contentPanel";
import {CarouselComponent} from "./commonSections/carouselComponent";
import {Footer} from "./commonSections/footer";

export class HomePage{
    // Defining the locators
    readonly page: Page;
    readonly navBar: Navbar;
    readonly contentPanel: ContentPanel;
    readonly creativeDivider: ContentDivider;
    readonly fashionCarousel: CarouselComponent;
    readonly welcomeToOurShop: ContentDivider;
    readonly skinCareCarousel: CarouselComponent;
    readonly beautyGifts: CarouselComponent;
    //readonly subscription: mailForm;
    readonly pageFooter: Footer;
    readonly searchBox: SearchBox;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.navBar = new Navbar(this.page.locator('.page-container').first());
        this.searchBox = new SearchBox(this.page.locator('.page-container.bg-background'));
        this.contentPanel = new ContentPanel(this.page.locator('.image-with-text.right-aligned'));
        this.creativeDivider = new ContentDivider(this.page.locator('.relative.image-banner').filter({hasText:"PLUSH'S FOCUS"}));

        this.welcomeToOurShop = new ContentDivider(this.page.locator('.relative.image-banner').filter({hasText:"WELCOME TO OUR ONLINE STORE!"}));
        this.skinCareCarousel = new CarouselComponent(this.page.locator('.animate-fadeIn').nth(1));
        this.pageFooter = new Footer(this.page.locator('#footer'));

    }

    // functions


}