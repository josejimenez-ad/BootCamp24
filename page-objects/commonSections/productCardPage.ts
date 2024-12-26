import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ProductCard{
    // Defining the locators
    readonly root: Locator;
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
    constructor(root: Locator) {
        this.root = root;
        this.productImage = this.root.locator('.cart-product-image');
        this.productTitle = this.root.locator('a').locator('.font-semibold.text-text');
        this.productPrice = this.root.locator('.text-sm').filter({hasText:'$'});
        this.quantitySelector = this.root.locator('.quantity-picker');
        this.quantityPlus = this.quantitySelector.locator('.quantity-increase-button');
        this.quantityMinus = this.quantitySelector.locator('.quantity-decrease-button');
        this.quantityInput = this.quantitySelector.locator('[aria-label="Quantity"]');
        this.productNotification = this.root.locator('.text-danger');
        this.productRemovalButton = this.root.locator('.remove-line-item-button');
    }

    // functions


}