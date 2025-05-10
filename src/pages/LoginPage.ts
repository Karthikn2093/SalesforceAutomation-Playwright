import { Page } from "@playwright/test";
import HomePage from "./HomePage";


export default class LoginPage{

    private readonly usernameInputSelector = '#username';
    private readonly passwordInputSelector = '#password';
    private readonly loginButtonSelector = '#Login';

    constructor(private page: Page){
        //this.page = page;
        //this.usernameInputSelector = page.locator('#username');
    }

    async navigateToLoginPage(){
        await this.page.goto('/');
    }

    async fillUsername(username: string){
        //await this.usernameInputSelector.fill(username)
        await this.page.locator(this.usernameInputSelector).fill(username);
    }

    async fillPassword(password: string){
        await this.page.locator(this.passwordInputSelector).fill(password);
    }

    async clickLoginButton(){
        await this.page.locator(this.loginButtonSelector).click()
        .catch((error) => {
            console.error(`Error clicking login: ${error}`);
            throw error;
        })

        const homePage = new HomePage(this.page);
        return homePage;
    }
}