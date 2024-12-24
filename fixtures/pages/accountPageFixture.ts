import {test as base} from '@playwright/test';
import {AccountPage} from "../../page-objects/accountPage";

type AccountPageDefinitions = {
    accountPage : AccountPage;
}

export const test = base.extend<AccountPageDefinitions>({
    accountPage : async({page},use) => {
        await use(new AccountPage(page));
    }
});

