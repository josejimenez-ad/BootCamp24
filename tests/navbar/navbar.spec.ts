import { test, expect } from '../../fixtures/fixtures';

test.describe('NavBar validations',()=>{
    test('Navbar Components are present',{
        tag: ['@smoke','@navbar'],
        annotation: [
            { type: '', description: '' },
        ],
    },
        async({homePage,page,baseURL})=>{
            await page.goto('https://demo.spreecommerce.org');
            await expect (homePage.navBar.logo).toBeVisible();
            await expect(homePage.navBar.openSearch).toBeVisible();
            // Checking the different options to navigate
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
    test('Navbar components are clickable and redirect the user to the desired page',{
        tag: ['@smoke','@navbar'],
        annotation: [
            { type: '', description: '' },
        ],
    },
        async ({homePage,page,baseURL})=> {
            await page.goto('https://demo.spreecommerce.org');
            await expect (homePage.navBar.logo).toBeVisible();
            await homePage.navBar.logo.click();
            await homePage.navBar.openSearch.click();
            await expect(homePage.searchBox.searchInput).toBeVisible();

    })

})
