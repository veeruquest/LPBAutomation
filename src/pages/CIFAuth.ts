import { expect, Page, Keyboard } from "@playwright/test";

import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame;
let authframe;
let successframe;

export default class cifAuthenticationPage {
    private base: ReusableMethods;

    constructor(private page: Page) {
        this.base = new ReusableMethods(page);
    }

    private Elements = {
   newquerytab:"//li[@id='EnterQuery']",
   cusno:"//input[@id='BLK_CUSTOMER__CUSTNO']",
    executequerytab:"//li[@id='ExecuteQuery']",
    authTab:"//li[@id='Authorize']/a",
acceptbtn:"#BTN_OK",
    okbtn:"//input[@id='BTN_OK'][@title='Ok']",
    successMsg: "//span[@title='Record Successfully Authorized']"
    }
    async handleClFAFrame() {
        try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle = await this.page.waitForSelector('//iframe[contains(@title, "Customer Maintenance")]', { timeout: 3000 });
             frame = await frameElementHandle.contentFrame();
           // await frame.click(this.Elements.newTab)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
 
    async clickNewquery(){
        await frame.click(this.Elements.newquerytab) 
    }
    async enterCustno(number: string) {
        await frame.locator(this.Elements.cusno).fill(number);
    }
     async executequery(){
        await frame.click(this.Elements.executequerytab) 
    }
    async authTabclick(){
        await frame.click(this.Elements.authTab) 
    }

     async AutherizeFrame(){
   
       try {
            // Wait for the iframe to appear in the DOM
            const frameElementHandle1 = await frame.waitForSelector("//iframe[@id='ifrSubScreen']", { timeout: 3000 });
             authframe= await frameElementHandle1.contentFrame();
             
            await authframe.click(this.Elements.acceptbtn)  
                   
        } catch (message) {
           // console.log("Frame not found");
        }
    }
    async verifySuccessMessage() {
        const frameElementHandle2 = await authframe.waitForSelector("//iframe[contains(@title, 'Information Message')]", { timeout: 3000 });
                 successframe= await frameElementHandle2.contentFrame();
          const message= successframe.locator(this.Elements.successMsg)
        await expect(message).toHaveText('Record Successfully Authorized');
        await successframe.click(this.Elements.okbtn)
    
           
        }
    }
    
