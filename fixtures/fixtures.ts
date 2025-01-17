import { test as baseTest, mergeTests, expect as baseExpect } from '@playwright/test';
import { test as pageObjectsTest } from '../fixtures/pages/pageObjectFixture';

export const test = mergeTests(
    baseTest,
    pageObjectsTest
);
export const expect = baseExpect;
