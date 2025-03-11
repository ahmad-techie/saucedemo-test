import { test, expect } from '@playwright/test';

test('Login and verify Products page', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.saucedemo.com/');

    // Enter username and password
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click login
    await page.click('#login-button');

    // Verify that the current URL is changed to Products page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Verify that the Products title exists/is visible on the page
    const productTitle = page.locator('.title');
    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText('Products');

    await page.waitForTimeout(5000);
});