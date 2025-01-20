import {test as base} from '@playwright/test';
import {ProductsListingPage} from "../../page-objects/productsListingPage";

export const test = base.extend<{ productListingPage: ProductsListingPage }>({
    productListingPage: async ({ page }, use) => {
        await use(new ProductsListingPage(page));
    },
});

