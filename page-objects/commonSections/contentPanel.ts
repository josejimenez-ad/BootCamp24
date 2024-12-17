import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ContentPanel{
    // general locators
    readonly headline: Locator;
    readonly description: Locator;
    readonly image: Locator;
    readonly button:Locator;

    // constructor
    constructor(page:Page){
        this.page = page;
        this.headline = this.page.locator('.image-with-text--heading');
        this.description = this.page.locator('.image-with-text--text');
        this.image = this.page.locator('.image-with-text--image-wrapper');
        this.button = this.page.getByRole('button',{name:'Shop All'});
    }
}