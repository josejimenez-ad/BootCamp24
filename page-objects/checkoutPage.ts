import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {OrderSummary} from "./commonSections/checkoutSections/orderSummary";
import {AddressSection} from "./commonSections/checkoutSections/addressSection";
import {DeliverySection} from "./commonSections/checkoutSections/deliverySection";
import {Navbar} from "./commonSections/navBar";
import {SearchBox} from "./commonSections/searchBox";
import {ContentDivider} from "./commonSections/contentDivider";
import {ContentPanel} from "./commonSections/contentPanel";


export class CheckoutPage{
    // Defining the locators
    readonly logo: Locator;
    readonly breadcrumbsMenu: Locator;
    readonly cartBreadCrumb: Locator;
    readonly addressBreadCrumb: Locator;
    readonly deliverBreadCrumb: Locator;
    readonly paymentBreadCrumb: Locator;
    readonly checkoutSummary: OrderSummary;
    readonly mailModal: Locator;
    readonly addressForm: AddressSection;
    readonly deliveryForm: DeliverySection;
    readonly shipAddressModal: Locator;
    readonly editShipAddress: Locator;
    readonly paymentForm: PaymentSection;
    readonly deliveryMethodModal: Locator;
    readonly editDeliveryMethod: Locator;
    // constructor
    constructor(page:Page) {
        this.page = page;
        this.logo = this.page.locator('#site-logo');
        this.breadcrumbsMenu = this.page.locator('[aria-label="Checkout navigation"]');
        this.cartBreadCrumb = this.breadcrumbsMenu.locator('.breadcrumb-item').filter({hasText:"Cart"});
        this.addressBreadCrumb = this.breadcrumbsMenu.locator('.breadcrumb-item').filter({hasText:"Address"});
        this.deliverBreadCrumb = this.breadcrumbsMenu.locator('.breadcrumb-item').filter({hasText:"Delivery"});
        this.paymentBreadCrumb = this.breadcrumbsMenu.locator('.breadcrumb-item').filter({hasText:"Payment"});
        this.mailModal = this.page.locator('.border.text-sm').filter({hasText:"Account"});
        this.checkoutSummary = new OrderSummary(this.page.locator('.checkout-summary-container'));
        this.addressForm = new AddressSection(this.page.locator('[data-controller="checkout-address-book"]'));
        this.shipAddressModal = this.page.locator('.border.text-sm').locator('.justify-between.pt-3.border-default');
        this.editShipAddress = this.shipAddressModal.locator('a').filter({hasText:"Edit"});
        this.deliveryForm = new DeliverySection(this.page.locator('#shipping-method'));
        this.deliveryMethodModal = this.page.locator('.border.text-sm').locator('.justify-between.border-t.border-default');
        this.editDeliveryMethod = this.deliveryMethodModal.locator('a').filter({hasText:"Edit"});
    }

    // functions


}