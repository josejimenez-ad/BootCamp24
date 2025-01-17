import {test as base} from '@playwright/test';
import {CheckoutPage} from "../../page-objects/checkoutPage";

export const test = base.extend<{ checkoutPage: CheckoutPage }>({
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});

