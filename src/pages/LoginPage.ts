

import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";


export default class LoginPage {

    private base: ReusableMethods;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        userName: "//input[@name='USERID']",
        password: "//input[@name='user_pwd']",
        loginBtn: "//input[@name='submit']",
        okBtn: "(//input[@id='BTN_OK'])[1]",
        newPassword: "//input[@id='newpwd']"
    }

    async enterUserName(user: string) {
        await this.base.enterValue(this.Elements.userName, user);
        let title = await this.page.title();
        console.log("Title is " + title)
    }

    async enterPassword(Password: string) {
        await this.base.enterValue(this.Elements.password, Password);
    }

    async loginBtn(password: string) {
        try {
            await this.page.locator(this.Elements.loginBtn).click();
            await this.page.waitForTimeout(1000);
            const frame = await this.page.frame({ name: 'ifr_AlertWin' });
            await frame.click("//table//tr//td//input[@id='BTN_OK']");
            await frame.fill(this.Elements.newPassword, password);
            await frame.click("//input[@id='BTN_SAVE']");
        } catch (message) {
           // console.log("An error occurred during login and password reset flow:", message);
        }
    }

    async handleFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('#ifr_AlertWin', { timeout: 30000 });
            const frame = await frameElementHandle.contentFrame();
            await frame.click("//table//tr//td//input[@id='BTN_OK']");
        } catch (message) {
           // console.log("Frame not found");
        }
    }

    async validateHomePageTitle(msg){
       const title= await this.page.title()
       console.log("title is "+title)
       expect(title).toContain(msg);
    }

}


