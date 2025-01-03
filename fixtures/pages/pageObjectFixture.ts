import {mergeTests} from "@playwright/test";
import {test as homePageTest} from './homepageFixture';
import {test as accountPageTest} from './accountPageFixture';
import {test as checkoutPageTest} from './checkoutPageFixture';
import {test as productListingTest} from './productListingPageFixture';
import {test as productDetailsTest} from './productDetailsPageFixture';

export const test = mergeTests(
    homePageTest,
    accountPageTest,
    checkoutPageTest,
    productListingTest,
    productDetailsTest,
);

