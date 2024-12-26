import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class ContentDivider{
    // general locators
    readonly root: Locator;
    readonly headline: Locator;
    readonly description: Locator;
    readonly image: Locator;

    // constructor
    constructor(root: Locator){
        this.root = root;
        this.headline = this.root.locator('.image-banner--heading');
        this.description = this.root.locator('.image-banner--text');
        this.image = this.root.locator('.image-banner--image-wrapper');
    }
}