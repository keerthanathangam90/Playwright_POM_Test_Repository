import {expect} from '@playwright/test';

export class InventoryPageSauceDemo
{
 /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page)
    {
        this.page=page;
        this.inventoryPageText=page.getByText(/Products/i);
        this.inventoryPageProductsList=page.locator(".inventory_item_name");
    };
    async inventoryPageTextValidation()
    {
        await expect(this.inventoryPageText).toBeVisible();
    };
    async validateInventoryPageTitle()
    {
        await expect(this.page).toHaveTitle(/swag/i);
    };
    async validateInventoryPageProducts()
    {
        await expect(this.inventoryPageProductsList).toHaveText([/Sauce Labs Backpack/i, /Sauce Labs Bike Light/i, /Sauce Labs Bolt T-Shirt/i, /Sauce Labs Fleece Jacket/i, /Sauce Labs Onesie/i, /Test\.allTheThings\(\) T-Shirt \(Red\)/i]);
    };
};