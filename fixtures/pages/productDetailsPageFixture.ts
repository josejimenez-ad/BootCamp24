import {test as base} from '@playwright/test';
import {ProductsDetailsPage} from "../../page-objects/productsDetailsPage";

type ProductDetailsPageDefinitions = {
    productDetailsPage : ProductsDetailsPage;
}

export const test = base.extend<ProductDetailsPageDefinitions>({
    productDetailsPage : async({page},use) => {
        await use(new ProductsDetailsPage(page));
    }
});

