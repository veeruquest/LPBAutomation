

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
        clickOnBranch: "//li[@id='Branch_Menu']",
        clickOnSelectBranch: "//li[@id='select_branch']",
        moveToBranchFrame: "//iframe[@id='ifrSubScreen']",
        enterBranchId:"//input[@id='1']",
        clickOnFetchBtn:"//button[contains(text(),'Fetch')]",
        selectBranchNum:"//table[@id='TableLov']//tr//td//a[1]",
        validateBranchNum:"//li[@id='Branch_Menu']//label[1]",
        msgframe: "//iframe[@id='ifr_AlertWin']",
        okbtn:"//table//tr//td//input[@id='BTN_OK']"
    }

    async enterFunctionName(funname: string) {
        await this.base.enterValue(this.Elements.functionID, funname);
        await this.base.waitAndClick(this.Elements.searchId);

    }


    async changeBranchNumber(branchId: string){
        await this.base.ClickWait(this.Elements.clickOnBranch);
        await this.page.waitForTimeout(1000);
        await this.base.jsClick(this.Elements.clickOnSelectBranch);
        await this.handleBranchFrame(branchId);
    }
 
async handleBranchFrame(branchId) {
        try {
            const frameElementHandle = await this.page.waitForSelector(this.Elements.moveToBranchFrame, { timeout: 1000 });
             const branchframe = await frameElementHandle.contentFrame();
            await branchframe.fill(this.Elements.enterBranchId,branchId);
            await branchframe.click(this.Elements.clickOnFetchBtn);
            await branchframe.click(this.Elements.selectBranchNum);
            await this.page.waitForTimeout(1000);
            await this.moveToConfMsgFrame();
            await this.page.waitForTimeout(1000);
            let branchNumber = await this.page.textContent(this.Elements.validateBranchNum);
            branchNumber=branchNumber.replace(/\s+/g, ' ').trim();
            branchId="Branch :"+" "+ branchId;
            console.log("Selected Branch Number is: "+branchNumber);
            await expect(branchNumber).toBe(branchId);  
        } catch (message) {
           console.log("Frame not found");
        }
     }

     async moveToConfMsgFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector(this.Elements.msgframe, { timeout: 30000 });
            const frame = await frameElementHandle.contentFrame();
            await this.page.waitForTimeout(2000);
            await frame.click(this.Elements.okbtn);
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
}
