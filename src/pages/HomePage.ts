import { Page, expect } from "@playwright/test";

export default class HomePage{

    private readonly serviceTitleLocator = 'Home | Salesforce';

    constructor(private page: Page){

    }

    async verifyPageTitle(){
        expect(await this.page.title()).toBe('Home | Salesforce')
       // await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout: 15000});
    }
}