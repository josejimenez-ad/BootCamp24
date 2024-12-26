import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {Navbar} from "./commonSections/navBar";
import {SearchBox} from "./commonSections/searchBox";
import {ContentDivider} from "./commonSections/contentDivider";
import {ContentPanel} from "./commonSections/contentPanel";
import {CarouselComponent} from "./commonSections/carouselComponent";

export class AccountPage{
    // Defining the locators
    readonly page: Page;


    // constructor
    constructor(page:Page) {
        this.page = page;


    }

    // functions


}