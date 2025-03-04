import {test, expect} from '@playwright/test'

test.describe('Login Page Test', ()=>{
  test('Should login successfully with valid credintials', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toContainText('Logout');
  });

  test('Title should be Swag Labs', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs')
  })
})
