import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ProductCard{
    // Defining the locators
    readonly productImage: Locator;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    readonly quantitySelector: Locator;
    readonly quantityPlus: Locator;
    readonly quantityMinus: Locator;
    readonly quantityInput: Locator;
    readonly productNotification: Locator;
    readonly productRemovalButton: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.productImage = this.page.locator('.cart-product-image');
        this.productTitle = this.page.locator('a').locator('.font-semibold.text-text');
        this.productPrice = this.page.locator('.text-sm').filter({hasText:'$'});
        this.quantitySelector = this.page.locator('.quantity-picker');
        this.quantityPlus = this.quantitySelector.locator('.quantity-increase-button');
        this.quantityMinus = this.quantitySelector.locator('.quantity-decrease-button');
        this.quantityInput = this.quantitySelector.locator('[aria-label="Quantity"]');
        this.productNotification = this.page.locator('.text-danger');
        this.productRemovalButton = this.page.locator('.remove-line-item-button');
    }

    // functions


}