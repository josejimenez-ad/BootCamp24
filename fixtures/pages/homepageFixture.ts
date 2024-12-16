import {test as base} from '@playwright/test';
import {HomePage} from "../../page-objects/homePage";

type HomePageDefinitions = {
    homePage : HomePage;
}

export const test = base.extend<HomePageDefinitions>({
    homePage : async({page},use) => {
        await use(new HomePage(page));
    }
});

