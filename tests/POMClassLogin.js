import {expect} from '@playwright/test';
export class LoginPageSauceDemo
{
 /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page)
    {
        this.page=page;
        this.userNameInput=page.getByPlaceholder(/username/i);
        this.passwordInput=page.getByPlaceholder(/password/i);
        this.loginSubmit=page.getByRole('button', {name: /login/i});
        this.lockedOutError=page.locator('[data-test="error"]');
    };
    async navigate(URL)
    {
        await this.page.goto(URL);
    };
    async loginCredSubmission(USERNAME,PASSWORD)
    {
        await this.userNameInput.fill(USERNAME);
        await this.passwordInput.fill(PASSWORD);
        await this.loginSubmit.click();
    };
    async validateLockedOutMsg()
    {
        await expect(this.lockedOutError).toBeVisible();
        await expect(this.lockedOutError).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    };
};