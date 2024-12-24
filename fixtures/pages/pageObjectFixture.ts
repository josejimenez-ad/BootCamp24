import {mergeTests} from "@playwright/test";
import {test as homePageTest} from './homepageFixture';
import {test as accountPageTest} from './accountPageFixture';
import {test as checkoutPageTest} from './checkoutPageFixture';

export const test = mergeTests(
    homePageTest,
    accountPageTest,
    checkoutPageTest,
);

