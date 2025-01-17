import {test as base} from '@playwright/test';
import {ProductsDetailsPage} from "../../page-objects/productsDetailsPage";

export const test = base.extend<{ productDetailsPage: ProductsDetailsPage }>({
    productDetailsPage: async ({ page }, use) => {
        await use(new ProductsDetailsPage(page));
    },
});

