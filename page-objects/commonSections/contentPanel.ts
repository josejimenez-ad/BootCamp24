import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ContentPanel{
    // general locators
    readonly root: Locator;
    readonly headline: Locator;
    readonly description: Locator;
    readonly image: Locator;
    readonly button:Locator;

    // constructor
    constructor(root: Locator){
        this.root = root;
        this.headline = this.root.locator('.image-with-text--heading');
        this.description = this.root.locator('.image-with-text--text');
        this.image = this.root.locator('.image-with-text--image-wrapper');
        this.button = this.root.getByRole('button',{name:'Shop All'});
    }
}