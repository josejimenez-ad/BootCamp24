import { test, expect } from '../../fixtures/fixtures';

test.describe('NavBar validations',()=>{
    test('Navbar Components are present',{
        tag: ['@smoke','@navbar'],
        annotation: [
            { type: '', description: '' },
        ],
    },
        async({homePage,page,isMobile})=>{
            await page.goto('/');
            await expect (homePage.navBar.logo).toBeVisible();
            await expect(homePage.navBar.openSearch).toBeVisible();
            // Checking the different options to navigate
            if(isMobile){
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
    test('Navbar components are clickable and redirect the user to the desired page',{
        tag: ['@smoke','@navbar'],
        annotation: [
            { type: '', description: '' },
        ],
    },
        async ({homePage,page,baseURL})=> {
            await page.goto('/');
            await expect (homePage.navBar.logo).toBeVisible();
            await homePage.navBar.confirmTheRedirections(homePage.navBar.logo,page);
            await homePage.navBar.confirmTheRedirections(homePage.navBar.bathAndFeelGood,page);
            await homePage.navBar.confirmTheRedirections(homePage.navBar.beauty,page);
            await homePage.navBar.confirmTheRedirections(homePage.navBar.skinCare,page);
            await homePage.navBar.confirmTheRedirections(homePage.navBar.fashion,page);
            await homePage.navBar.confirmTheRedirections(homePage.navBar.beautyGifts,page);
    })

})
