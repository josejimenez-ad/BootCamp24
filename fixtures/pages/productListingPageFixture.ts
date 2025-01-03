import {test as base} from '@playwright/test';
import {ProductsListingPage} from "../../page-objects/productsListingPage";

type ProductListingPageDefinitions = {
    productListingPage : ProductsListingPage;
}

export const test = base.extend<ProductListingPageDefinitions>({
    productListingPage : async({page},use) => {
        await use(new ProductsListingPage(page));
    }
});

