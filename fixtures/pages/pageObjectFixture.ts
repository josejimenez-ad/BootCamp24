import {mergeTests} from "@playwright/test";
import {test as homePageTest} from './homepageFixture';

export const test = mergeTests(
    homePageTest,
);

