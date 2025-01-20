import { test, expect } from '../../fixtures/fixtures';


test.describe('Requested purchase flow',()=> {
    test('Navbar Components are present', {
            tag: ['@smoke', '@navbar'],
            annotation: [
                {type: '', description: ''},
            ],
        },
        async ({homePage, page, isMobile}) => {
            await page.goto('/');
            await expect(homePage.navBar.logo).toBeVisible();
            await expect(homePage.navBar.openSearch).toBeVisible();
            // Checking the different options to navigate
            if (isMobile) {
                await homePage.navBar.mobileBurgerMenu.click();
            }
            await expect(homePage.navBar.bathAndFeelGood).toBeVisible();
            await expect(homePage.navBar.beauty).toBeVisible();
            await expect(homePage.navBar.skinCare).toBeVisible();
            await expect(homePage.navBar.fashion).toBeVisible();
            await expect(homePage.navBar.beautyGifts).toBeVisible();
            // Checking the user quick-access
            await expect(homePage.navBar.cartIcon).toBeVisible();
            await expect(homePage.navBar.favoritesIcon).toBeVisible();
            await expect(homePage.navBar.accountIcon).toBeVisible();
        })


})