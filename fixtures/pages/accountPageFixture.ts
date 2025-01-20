import {test as base} from '@playwright/test';
import {AccountPage} from "../../page-objects/accountPage";

export const test = base.extend<{ accountPage: AccountPage }>({
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },
});

