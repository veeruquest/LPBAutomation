

import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";




export default class HomePage {

    private base: ReusableMethods;

    constructor(private page: Page) {

        this.base = new ReusableMethods(page);

    }

    private Elements = {
        functionID: "//input[@id='fastpath']",
        searchId: "//button[@id='btnGo']",
    }

    async enterFunctionName(funname: string) {
        await this.base.enterValue(this.Elements.functionID, funname);
        await this.base.waitAndClick(this.Elements.searchId);

    }
}