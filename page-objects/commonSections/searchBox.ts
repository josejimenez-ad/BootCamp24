import {Locator} from "@playwright/test";

export class SearchBox{
    // general locators
    readonly root: Locator;
    readonly searchInput: Locator;
    readonly closeSearchBox: Locator;
    readonly clearSearch: Locator;
    //readonly searchSuggestions: SearchSuggestions;

    // constructor
    constructor(root: Locator){
        this.root = root;
        this.searchInput = this.root.getByPlaceholder('Search');
        this.closeSearchBox = this.root.getByRole('button',{name:'Close'});
        this.clearSearch = this.root.getByRole('button',{name:'Clear'});
        //this.searchSuggestions = new SearchSuggestions(this.page.locator('#search-suggestions-content'));
    }

}