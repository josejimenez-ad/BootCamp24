import {Locator} from "@playwright/test";

export class CarouselComponent{
    // Defining the locators
    readonly root:Locator;
    readonly carouselTitle: Locator;
    readonly productCardImage: Locator;
    readonly productCardName: Locator;
    readonly productCardPrice: Locator;
    readonly productCardWishList: Locator;
    readonly moveRightButton: Locator;
    readonly moveLeftButton: Locator;

    // constructor
    constructor(root: Locator) {
        this.root = root;
        this.carouselTitle = this.root.locator('h3').locator('.uppercase.text-left');
        this.productCardImage = this.root.locator('.product-card-featured-image');
        this.productCardName = this.root.locator('h3').locator('.product-card-title');
        this.productCardPrice = this.root.locator('.product-card-price');
        this.productCardWishList = this.root.locator('.add-to-wishlist');
        this.moveRightButton = this.root.locator('[aria-label="Next slide"]');
        this.moveLeftButton = this.root.locator('[aria-label="Previous slide"]');

        }
    // functions


}