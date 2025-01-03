import {Locator} from "@playwright/test";

export class ProductCardInListing{

    readonly root: Locator;
    readonly productImage: Locator;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    readonly addToWishlist: Locator;

    // constructor
    constructor(root: Locator){
        this.root = root;
        this.productImage= this.root.locator('.product-card-featured-image');
        this.productTitle= this.root.locator('.product-card-title');
        this.productPrice = this.root.locator('.product-card-price');
        this.addToWishlist = this.root.locator('.add-to-wishlist');
    }

}