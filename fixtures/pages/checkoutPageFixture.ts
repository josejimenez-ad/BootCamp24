import {test as base} from '@playwright/test';
import {CheckoutPage} from "../../page-objects/checkoutPage";

type CheckoutPageDefinitions = {
    checkoutPage : CheckoutPage;
}

export const test = base.extend<CheckoutPageDefinitions>({
    checkoutPage : async({page},use) => {
        await use(new CheckoutPage(page));
    }
});

