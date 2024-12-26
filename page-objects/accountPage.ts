import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {LeftNavMenu} from "./commonSections/accountSections/leftNavigationMenu";
import {Navbar} from "./commonSections/navBar";
import {SearchBox} from "./commonSections/searchBox";
import {ContentDivider} from "./commonSections/contentDivider";
import {ContentPanel} from "./commonSections/contentPanel";
import {CarouselComponent} from "./commonSections/carouselComponent";

export class AccountPage{
    // Defining the locators
    readonly page: Page;
    readonly leftNavigationMenu: LeftNavMenu;
    readonly ordersPage: OrdersPage;
    readonly addressesPage: AddressPage;
    readonly personalDetailsPage: PersonalDetails;
    readonly wishlistPage: Wishlist;
    readonly giftCardsPage: GiftCards;
    readonly storeCredits: StoreCredits;
    readonly managePreferences: ManagePreferences;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.leftNavigationMenu = new LeftNavMenu(this.page.locator('[data-controller="account-nav"]'));


    }

    // functions


}