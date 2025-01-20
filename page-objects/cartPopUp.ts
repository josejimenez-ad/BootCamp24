import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {ProductCard} from "./commonSections/productCardPage";

export class CartPopUp{
    // Defining the locators
    readonly page: Page
    readonly window: Locator;
    readonly cartTitle: Locator;
    readonly cartContent: Locator;
    readonly cartSummary: Locator;
    readonly cartItemsList: Locator;
    readonly closeCartPopUp: Locator;
    readonly productCard: ProductCard;
    readonly checkoutButton: Locator;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.window = this.page.locator('#slideover-cart');
        this.cartTitle = this.window.locator('.text-xl').filter({hasText:"Cart"});
        this.closeCartPopUp = this.window.locator('button[aria-label="Close sidebar"]');
        this.cartContent = this.window.locator('#cart-contents');
        this.cartItemsList = this.window.locator('#line-items');
        this.cartSummary = this.window.locator('#cart_summary');
        this.productCard = new ProductCard(this.page.locator('cart-line-item'));
        this.checkoutButton = this.cartSummary.locator('[data-cart-target="checkoutButton"]');

    }

    // functions


}