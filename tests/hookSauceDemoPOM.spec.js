//@ts-check

import {test, expect} from '@playwright/test';
import { LoginPageSauceDemo } from './POMClassLogin';
import { InventoryPageSauceDemo } from './POMClassInventory';

//Navigate to SauceDemo, login with valid credentials, validate the text 'Products' in Inventory Page, validate the list of products in Products page
test.describe("My Positive Tests", () =>
{
        /** @type {LoginPageSauceDemo} */
        let newLoginPageSauceDemo;
        /** @type {InventoryPageSauceDemo} */
        let newInventoryPageSauceDemo;

        test.beforeEach(async({page}) =>
        {
        newLoginPageSauceDemo = new LoginPageSauceDemo(page);
        newInventoryPageSauceDemo = new InventoryPageSauceDemo(page);
        await newLoginPageSauceDemo.navigate('https://saucedemo.com');
        await newLoginPageSauceDemo.loginCredSubmission('standard_user', 'secret_sauce');
        });

        test('First Positive POM Test', async() =>
        {
        await newInventoryPageSauceDemo.inventoryPageTextValidation();
        });

        test('Second Positive POM Test', async() =>
        {
        await newInventoryPageSauceDemo.validateInventoryPageTitle();
        });
        test('Third Positive POM Test', async() => 
        {
        await newInventoryPageSauceDemo.validateInventoryPageProducts();
        });
});

test.describe("My Negative Tests", () =>
{
        /** @type {LoginPageSauceDemo} */
        let newLoginPageSauceDemo;

        test.beforeEach(async({page}) =>
        {
        newLoginPageSauceDemo = new LoginPageSauceDemo(page);
        await newLoginPageSauceDemo.navigate('https://saucedemo.com');
        await newLoginPageSauceDemo.loginCredSubmission('locked_out_user', 'secret_sauce');
        });

        test("First Negative POM Test", async () =>
        {
        await newLoginPageSauceDemo.validateLockedOutMsg();
        });
});