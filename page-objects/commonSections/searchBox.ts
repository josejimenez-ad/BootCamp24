import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";

export class SearchBox{
    // general locators
    readonly searchInput: Locator;
    readonly closeSearchBox: Locator;
    readonly clearSearch: Locator;
    //readonly searchSuggestions: SearchSuggestions;

    // constructor
    constructor(page:Page){
        this.page = page;
        this.searchInput = this.page.getByPlaceholder('Search');
        this.closeSearchBox = this.page.getByRole('button',{name:'Close'});
        this.clearSearch = this.page.getByRole('button',{name:'Clear'});
        //this.searchSuggestions = new SearchSuggestions(this.page.locator('#search-suggestions-content'));
    }

}