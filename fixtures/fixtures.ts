import { test as pBase, mergeTests, expect as baseExpect } from '@playwright/test';
import { test as pageObjectsTest } from '../fixtures/pages/pageObjectFixture';

export const test = mergeTests(
    pBase,
    pageObjectsTest
);
export const expect = baseExpect;
