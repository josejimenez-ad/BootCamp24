import {Page} from "@playwright/test";
import {LeftNavMenu} from "./commonSections/accountSections/leftNavigationMenu";
import {OrdersPage} from "./commonSections/accountSections/ordersPage";
import {AddressPage} from "./commonSections/accountSections/addressPage";
import {PersonalDetails} from "./commonSections/accountSections/personalDetailsPage";
import {Wishlist} from "./commonSections/accountSections/wishlistPage";
import {GiftCards} from "./commonSections/accountSections/giftCardsPage";
import {StoreCredits} from "./commonSections/accountSections/storeCreditsPage";
import {ManagePreferences} from "./commonSections/accountSections/managePreferencesPage";


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
        this.ordersPage = new OrdersPage((this.page.locator('.col-span-8')));
        this.addressesPage = new AddressPage((this.page.locator('.col-span-8')));
        this.personalDetailsPage = new PersonalDetails(this.page.locator('#account_form'));
        this.wishlistPage = new Wishlist(this.page.locator('#wishlist'));
        this.giftCardsPage = new GiftCards(this.page.locator('.col-span-8'));
        this.storeCredits = new StoreCredits(this.page.locator('.col-span-8'));
        this.managePreferences = new ManagePreferences(this.page.locator('.col-span-8'));
    }

    // functions


}