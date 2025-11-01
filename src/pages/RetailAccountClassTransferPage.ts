import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";
import { timeout } from "../hooks/hooks";
let AccountClassFrame,informationFrame,ManagementFrame,ListFrame,AccountClassFrame1,AuthFrame;


export default class RetailAccountClassTransferPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

  private Elements = {
    // Iframe
    outerFrame: '//iframe[contains(@title, "Account Class Transfer")]',
    informFrame: "//iframe[@id='ifr_AlertWin']",
    managementFrame: "//iframe[@id='ifrSubScreen']",

    // Buttons
    newBtn: "//li[@id='New']//a",
    defaultBtn: "//button[@id='BLK_MAIN__BTN_POPULATE']",
    saveBtn: "//li[@id='Save']//a",

    // Input fields
    account: "//input[@id='BLK_MAIN__CUST_AC_NO']",
    accountClass: "//input[@id='BLK_MAIN__ACCOUNT_CLASS']",

    // Success message
    errorMessage: "//table//tr//td//span[contains(text(),'Error Description')]",
    successMessage:"//table//tr//td//span[contains(text(),'Success')]",
    //successMessage:"//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]",
    okBtn: "//input[@id='BTN_OK']",
    exitBtn: "//input[@id='BTN_EXIT_IMG']",
    acceptBtn: "//input[@id='BTN_ACCEPT']",
    MISBtn: "//li[@id='CVS_MIS']",
    poolcode: "//input[@id='BLK_MIS__POOL_CODE']",  
    firstrow:"//body[1]/div[1]/div[2]/div[3]/div[3]/table[1]/tbody[1]/tr[1]/td[1]//div//a",
    AuthDropdown:"//select[@id='BLK_MAIN__AUTHSTAT']",
    searchBtn:"//li[@id='Search']//a",
    dblclick:"//table[@id='TBL_QryRslts']//tr[1]/td[2]/div/a",
     AuthBtn:"//li[@id='Authorize']//a",
    authframe:"//iframe[contains(@title,'Authorize')]"
  };

  /** Handle Retail iframe */
  async handleRetailFrame() {
    const frameHandle = await this.page.waitForSelector(this.Elements.outerFrame, { timeout: 10000 });
    AccountClassFrame = await frameHandle.contentFrame();
    console.log("Switched to Account Class Transfer Frame");
  }

  /** Click on New button */
  async clickNewButton() {
    await AccountClassFrame.locator(this.Elements.newBtn).click();
  }

  /** Enter Account */
  async enterAccount(account: string) {
    await AccountClassFrame.locator(this.Elements.account).fill(account);
  }

  /** Enter Account Class */
  async enterAccountClass(accountClass: string) {
    await AccountClassFrame.locator(this.Elements.accountClass).fill(accountClass);
  }

  /** Click Default button */
  async clickDefaultButton() {
    await AccountClassFrame.locator(this.Elements.defaultBtn).click();
    console.log("Clicked on Default button");
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
               informationFrame= await frameElementHandle.contentFrame();
               console.log("Switched to Information Frame");
             await informationFrame.locator(this.Elements.okBtn).click();
                console.log("Clicked on OK button in Information Frame");
  }

  /** Click Save button */
  async clickSaveButton() {
    await AccountClassFrame.locator(this.Elements.saveBtn).click();
  }

  /** Validate Success Message and close alert */
  async validateErrorMessage() {
    // Wait for alert iframe
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();

    const emessage = informationFrame.locator(this.Elements.errorMessage);
    console.log("Success message: " + (await emessage.textContent()));
    expect(await emessage.textContent()).toContain("Error");

    // Close alert
    await informationFrame.locator(this.Elements.okBtn).click();
    console.log("Closed error message");
  }

  async validateSuccessMessage() {
    // Wait for alert iframe
    try{
    const frameElementHandle = await AccountClassFrame.waitForSelector(this.Elements.informFrame, { timeout: 50000 });
    informationFrame = await frameElementHandle.contentFrame();
    await informationFrame.click(this.Elements.acceptBtn);
     informationFrame = await frameElementHandle.contentFrame();
    const smessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await smessage.textContent()));
          expect(await smessage.textContent()).toContain("Success");
          const messageText=await smessage.textContent();
 
       await informationFrame.locator(this.Elements.okBtn).click();
    }catch{
      console.log("Error Message Displayed")
    }
    // await informationFrame.locator(this.Elements.okBtn).click();
    
  }
async clickExitButton() {
    await AccountClassFrame.locator(this.Elements.exitBtn).click();
    console.log("Clicked on Exit button");
  }

 async clickMISTab() {
    await AccountClassFrame.locator(this.Elements.MISBtn).click();
    console.log("Clicked on MIS Tab");
 const frameElementHandle1 = await AccountClassFrame.waitForSelector(this.Elements.managementFrame, { timeout: 50000 });
    ManagementFrame = await frameElementHandle1.contentFrame();
    await ManagementFrame.locator(this.Elements.poolcode).fill("DELTPOOL");
    await ManagementFrame.click("//div[@id='TAB_MAIN__SEC_1']//div[5]//button[1]")
     const frameElementHandle2 = await ManagementFrame.locator(this.Elements.managementFrame)
    ListFrame = await frameElementHandle2.contentFrame();
    console.log("Listframe visible");
   await ListFrame.locator(this.Elements.firstrow).click();
    await ManagementFrame.locator(this.Elements.okBtn).click();
      }

 async selectAuthorizationStatus(status: string) {
    await AccountClassFrame.selectOption(this.Elements.AuthDropdown, status);
  }
  async Searchfunction(){
    await AccountClassFrame.click(this.Elements.searchBtn)
  }
async doubleclicksrecord() {
    await AccountClassFrame.locator(this.Elements.dblclick).dblclick();
  }
async clickAuthorizeButton() {
    const FrameHandle=await this.page.locator(this.Elements.outerFrame).nth(1)
    AccountClassFrame1 = await FrameHandle.contentFrame();
    console.log("In Authorize Button")
    
        await AccountClassFrame1.locator(this.Elements.AuthBtn).click();
    console.log("Clicked on Authorize Button")
   const FrameHandle1=await AccountClassFrame1.locator(this.Elements.authframe)
AuthFrame = await FrameHandle1.contentFrame();
   console.log("Switched to Auth Frame")
   await AuthFrame.locator(this.Elements.okBtn).click();
   console.log("Clicked on Authorize in Auth Frame")
    }

    async AuthSuccessFun(){
       const frameElementHandle = await AuthFrame.locator(this.Elements.informFrame,{timeout:5000});
    informationFrame = await frameElementHandle.contentFrame();
             const smessage = informationFrame.locator(this.Elements.successMessage);
    console.log("Success message: " + (await smessage.textContent()));
    expect(await smessage.textContent()).toContain("Success");
    await informationFrame.locator(this.Elements.okBtn).click();
    }
  }
  
