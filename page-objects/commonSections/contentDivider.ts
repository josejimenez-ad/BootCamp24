import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ContentDivider{
    // general locators
    readonly headline: Locator;
    readonly description: Locator;
    readonly image: Locator;

    // constructor
    constructor(page:Page){
        this.page = page;
        this.headline = this.page.locator('.image-banner--heading');
        this.description = this.page.locator('.image-banner--text');
        this.image = this.page.locator('.image-banner--image-wrapper');
    }
}