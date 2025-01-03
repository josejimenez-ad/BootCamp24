import {Locator} from "@playwright/test";
import {Page} from "@playwright/test";
import {Navbar} from "./commonSections/navBar";
import {SearchBox} from "./commonSections/searchBox";
import {Footer} from "./commonSections/footer";
import {ProductCardInListing} from "./commonSections/productCardListing";


export class ProductsListingPage{
    // Defining the locators
    readonly page: Page;
    readonly navBar: Navbar;
    readonly pageFooter: Footer;
    readonly searchBox: SearchBox;
    readonly categoryTitle: Locator;
    readonly filterButton: Locator;
    readonly sortByDropDown: Locator;
    readonly sortByOptions: Locator;
    readonly sortingOption: Locator;
    readonly productsGrid: Locator;
    readonly productCard: ProductCardInListing;

    // constructor
    constructor(page:Page) {
        this.page = page;
        this.navBar = new Navbar(this.page.locator('.page-container').first());
        this.searchBox = new SearchBox(this.page.locator('.page-container.bg-background'));
        this.pageFooter = new Footer(this.page.locator('#footer'));
        this.categoryTitle = this.page.locator('.items-start');
        this.filterButton = this.page.getByRole('button',{name:'Filter'});
        this.sortByDropDown = this.page.getByTestId('sort-button');
        this.sortByOptions = this.sortByDropDown.locator('[data-dropdown-target="menu"]');
        this.sortingOption = this.sortByOptions.locator('.text-sm');
        this.productsGrid = this.page.locator('#products');
        this.productCard = new ProductCardInListing(this.productsGrid.locator('.product-card'));
    }

    // functions


}