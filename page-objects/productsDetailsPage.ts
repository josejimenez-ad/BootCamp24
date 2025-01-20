import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {CarouselComponent} from "./commonSections/carouselComponent";

export class ProductsDetailsPage{
    // Defining the locators
    readonly page: Page;
    readonly navigationBreadCrumbs: Locator;
    readonly productDetails: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly stripePaymentSuggestions: Locator;
    readonly quantitySelectorBlock: Locator;
    readonly quantityMinus: Locator;
    readonly quantityPlus: Locator;
    readonly quantityInput: Locator;
    readonly addToCartButton: Locator;
    readonly addToWishListButton: Locator;
    readonly removeFromWishListButton: Locator;
    readonly productDeliveryInfo: Locator;
    readonly productReadMoreInfo: Locator;
    readonly readModeButton: Locator;
    readonly productPageAccordion: Locator;
    readonly productShippingPolicy: Locator;
    readonly productShippingContent: Locator;
    readonly productReturnsPolicy: Locator;
    readonly productReturnsContent: Locator;
    readonly productCarousel: CarouselComponent;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.navigationBreadCrumbs = this.page.locator('#breadcrumbs');
        this.productDetails = this.page.locator('[data-product-form-target="productDetails"]');
        this.productName = this.productDetails.locator('h1');
        this.productPrice = this.productDetails.locator('.my-4').filter({hasText:'$'});
        this.stripePaymentSuggestions = this.productDetails.locator('[data-controller="stripe-payment-method-messaging-element"]');
        this.quantitySelectorBlock = this.productDetails.locator('[data-controller="turbo-stream-form"]');
        this.quantityMinus = this.quantitySelectorBlock.locator('.decrease-quantity');
        this.quantityPlus = this.quantitySelectorBlock.locator('.increase-quantity');
        this.quantityInput = this.quantitySelectorBlock.locator('#quantity');
        this.addToCartButton = this.page.getByRole('button').locator('.add-to-cart-button');
        this.addToWishListButton = this.page.getByRole('button').locator('[aria-label="Add to wishlist"]');
        this.removeFromWishListButton = this.page.getByRole('button').locator('[aria-label="Remove from wishlist"]');
        this.productDeliveryInfo = this.page.locator('.main-product--delivery-info-box');
        this.productReadMoreInfo = this.page.locator('.product-description-truncated');
        this.readModeButton = this.page.getByRole('button',{name:'Read more'});
        this.productPageAccordion = this.page.locator('.st-accordion');
        this.productShippingPolicy = this.productPageAccordion.locator('a').filter({hasText:'Shipping Policy'});
        this.productShippingContent = this.productPageAccordion.locator('[data-accordion-id="property_shipping_policy"]');
        this.productReturnsPolicy = this.productPageAccordion.locator('a').filter({hasText:'Returns Policy'});
        this.productReturnsContent = this.productPageAccordion.locator('[data-accordion-id="property_returns_policy"]');
    }

    // functions
    async toggleAccordionOption(info:Locator) {
        await info.hover();
        await info.click();
    }

}