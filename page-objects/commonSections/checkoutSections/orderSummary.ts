import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class OrderSummary {
    // Defining the locators
    readonly root: Locator;
    readonly lineItems: Locator;
    readonly itemFulfillment: Locator;
    readonly productImage: Locator;
    readonly productQuantity: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly couponArea: Locator;
    readonly couponInput: Locator;
    readonly applyCouponButton: Locator;
    readonly subtotalCost: Locator;
    readonly shippingCost: Locator;
    readonly totalCost: Locator;

    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.lineItems = this.root.locator('[data-checkout-summary-target="line_items"]');
        this.itemFulfillment = this.lineItems.locator('p');
        this.productImage = this.lineItems.locator('img');
        this.productQuantity = this.lineItems.locator('.text-sidebar-text');
        this.productName = this.lineItems.locator('.font-bold.word-break');
        this.productPrice = this.lineItems.locator('').filter({hasText:'$'});
        this.couponArea = this.root.locator('[data-checkout-summary-target="coupon_area"]');
        this.couponInput = this.couponArea.locator('[aria-label="ADD PROMO CODE"]');
        this.applyCouponButton = this.couponArea.getByRole('button').filter({hasText:"Apply"});
        this.subtotalCost = this.couponArea.locator('[data-hook="order_summary"]').locator('.justify-between').first();
        this.shippingCost = this.couponArea.locator('[data-hook="order_summary"]').locator('.justify-between').nth(1);
        this.totalCost = this.couponArea.locator('[data-hook="order_summary"]').locator('.justify-between').last();
    }

    // functions


}