import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
import { exit } from "node:process";
import { TIMEOUT } from "node:dns";
import { timeout } from "../hooks/hooks";
let pagePromise, loginId, UserName, value1;
let newPage;
export default class ReatailDepositPage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }
  private elements = {
    NextGenFrame: '//iframe[contains(@title, "Next Gen UI Dashboard")]',
    maintab: "//span[normalize-space()='Teller']",
    screenBtn: "//span[normalize-space()='Cash Deposit']",
    screenBtn2:"//span[normalize-space()='Electronic Journal']",
    dropdown:"//a[@aria-label='expand']",
    pendingapproval:"//ul[@role='listbox']//li[6]//div",
    Sentbank:"//ul[@role='listbox']//li[3]//div",
    approveBtn:"//oj-button[@id='approveBtn']//button[@class='oj-button-button']",
    accountNumber: "//input[@id='txnAcc|input']",
    //transactionAmount: "(//input[@id='_oj105-input-text|input'])[1]",
    transactionAmount: "(//div[@class='oj-text-field-middle']//input)[23]",
    InformationBtn: "(//a[contains(@role,'button')])[23]",
    customerInformation: "//input[@name='UDF_Customer']",
    submitButton: "(//span[normalize-space()='Submit'])[1]",
    successmsg: "(//div[@class='oj-message-summary oj-message-title'])[1]",
    okButton: "(//span[text()='Ok'])[1]",
    confirmBtn:"(//button[@class='oj-button-button'])[1]",
    submitforApprove:"(//button[@class='oj-button-button'])[1]",
    adviceconf: "(//span[@data-bind='text: labels.no'][normalize-space()='No'])[1]",
    NoBtn: "(//span[@id='_oj82|text'])[1]"
  };

  async NextGenFun() {
    await this.base.jsClick("//a[@id='DBoardNextGenUI']");
    console.log("Clicked on NextGen UI Dashboard");

    try {
      const frameElementHandle = await this.page.waitForSelector(this.elements.NextGenFrame, { timeout: 40000 });
      const nextgenframe = await frameElementHandle.contentFrame();
      console.log("Switched to NextGen UI Dashboard Frame");
      pagePromise = this.page.context().waitForEvent('page');
      await nextgenframe.getByText("Retail Operations").click();
      console.log("Clicked on Retail Operations");
    } catch (error) {
      console.log("Frame not found:", error.message);
      throw error;
    }
    newPage = await pagePromise;
   // await newPage.waitForLoadState('domcontentloaded');
    try {
    //  await newPage.locator("#ssoAlreadyLoggedInUser", { timeout: 25000 })
    //   console.log("sso dialog detected");
      // await newPage.waitForSelector("//button[text()='Proceed']",{timeout:2000})
      await newPage.getByRole('button', { name: 'Proceed' }).click();
      console.log("Clicked on Proceed button");
      await newPage.waitForTimeout(5000)
    } catch (error) {
      console.log("Save dialog interaction failed:");

    }
    await newPage.locator("//div[@class='branch-container']//span[@id='branch-name']").click({ timeout: 150000 });
    console.log("Clicked on branch name in new page");
    await newPage.fill("(//input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input'])[1]", "100");
    console.log("Entered Branch code")
    await newPage.waitForTimeout(2000)
    await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
    console.log("clicked on Fetch Button")
    // await newPage.locator("(//table[@role='application']//tr[@class='oj-table-body-row']//td)[1]").click();
    await newPage.getByText("100").click()
    console.log("clicked on Branch Code")
    try {

      await newPage.waitForSelector("#alertDialogId_oj11", { timeout: 5000 });
      console.log("Alert dialog detected");
      const proceedButton = newPage.locator("oj-button[on-click='[[confirmBtn]]']");
      console.log("Button detected")
      await proceedButton.click();
      console.log("Clicked on Proceed button in alert dialog");
      await newPage.waitForSelector("#alertDialogId_oj11", { state: 'hidden', timeout: 5000 });
      console.log("Alert dialog closed");
    } catch (error) {
      console.log("No alert dialog found or already dismissed");
    }
    await newPage.goto("https://lpbprodobmasvr01.lpb.co.ls:8006/app-shell/")
  }
  async BranchSelection(BranchName: string) {

    await newPage.locator("//div[@class='branch-container']//span[@id='branch-name']").click({ timeout: 150000 });
    console.log("Clicked on branch name in new page");
    await newPage.fill("(//input[@id='_oj34-lov-dialog-body-filter-label-branchCode|input'])[1]", BranchName);
    console.log("Entered Branch code")
    await newPage.click("(//span[@data-bind='text: labels.fsgbuobcmnfdlov.fetchBtnLbl'][normalize-space()='Fetch'])[1]");
    console.log("clicked on Fetch Button")
    // await newPage.locator("(//table[@role='application']//tr[@class='oj-table-body-row']//td)[1]").click();
    await newPage.getByText(BranchName).click()
    console.log("clicked on Branch Code")
    try {

      await newPage.waitForSelector("#alertDialogId_oj11", { timeout: 5000 });
      console.log("Alert dialog detected");
      const proceedButton = newPage.locator("oj-button[on-click='[[confirmBtn]]']");
      console.log("Button detected")
      await proceedButton.click();
      console.log("Clicked on Proceed button in alert dialog");
      await newPage.waitForSelector("#alertDialogId_oj11", { state: 'hidden', timeout: 5000 });
      console.log("Alert dialog closed");
    } catch (error) {
      console.log("No alert dialog found or already dismissed");
    }
  }



  async searchScreen() {

    await newPage.locator(this.elements.maintab).click();
    await newPage.locator(this.elements.screenBtn).click();
  }
   async searchScreen1() {

    await newPage.locator(this.elements.maintab).click();
    await newPage.locator(this.elements.screenBtn2).click();
  }
  async selectPendingid(){
    await newPage.locator(this.elements.dropdown).click();
    console.log('clicked on dropdown')
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.elements.pendingapproval).click()
    console.log('clicked on pending approval')
    await newPage.locator("(//button[@class='oj-button-button'])[12]").click();
  }
  async selectsentbackid(){
    await newPage.locator(this.elements.dropdown).click();
    console.log('clicked on dropdown')
    await newPage.waitForTimeout(2000)
    await newPage.locator(this.elements.Sentbank).click()
    console.log('clicked on pending approval')
    await newPage.locator("(//button)[29]").click();
    await newPage.getByRole('button', { name: 'Confirm' }).click();
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
  }

  async approvefun(){
    await newPage.locator(this.elements.approveBtn).click()
     await newPage.getByRole('button', { name: 'Ok' }).click();
     await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
  }
  
  async enterAccountNumber(accountNumber: string) {
    await newPage.locator(this.elements.accountNumber).fill(accountNumber);
    console.log("Entered Account Number:", accountNumber);
  }

  async enterTransactionAmount(amount: string) {
    await newPage.locator(this.elements.transactionAmount).fill(amount);
    console.log("Entered Transaction Amount:", amount);
  }

  async enterCustomerInterview(interview: string) {
    await newPage.locator(this.elements.InformationBtn).click();
    await newPage.locator(this.elements.customerInformation).fill(interview);
    console.log("Entered Customer Interview:", interview);
  }

  async clickOnSave() {
    await newPage.locator(this.elements.submitButton).click();
    console.log("Clicked on Save");
    
  }

  async limitCross(){
        //await newPage.locator("#_oj133assign_auto",{timeout:5000})
   // await newPage.locator(this.elements.confirmBtn).click()
   await newPage.getByRole('button', { name: 'Confirm' }).click();
   await newPage.getByRole('button', { name: 'Submit For Approval' }).click();
   console.log('clicked on button1')
   await newPage.waitForTimeout(2000)
  //    //await newPage.locator("#_oj133assign_auto_tellerRemark",{timeout:5000})
  //   await newPage.locator(this.elements.submitforApprove).click()
  //    console.log('clicked on button2')
  //  await newPage.waitForTimeout(2000)
     await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Approval')
    console.log('sent for Approval')
    await newPage.locator(this.elements.okButton).click()
    //await newPage.locator(this.elements.adviceconf).click()
    try {
      await newPage.locator("#closeScreenDialog_oj65", { timeout: 5000 });
      console.log("close dialog detected");

      await newPage.locator(this.elements.NoBtn).click()
      console.log("Clicked on Proceed button");
      await newPage.waitForTimeout(5000)
      console.log("close dialog closed");
    } catch (error) {
      console.log("close dialog not found");

      //await newPage.locator(this.elements.NoBtn).click()
    }
  }
  async successPop() {
    await expect(await newPage.locator(this.elements.successmsg).textContent()).toContain('Success')
    console.log('Successfully Saved')
    await newPage.locator(this.elements.okButton).click()
    await newPage.locator(this.elements.adviceconf).click()
    try {
      await newPage.locator("#closeScreenDialog_oj65", { timeout: 5000 });
      console.log("close dialog detected");

      await newPage.locator(this.elements.NoBtn).click()
      console.log("Clicked on Proceed button");
      await newPage.waitForTimeout(5000)
      console.log("close dialog closed");
    } catch (error) {
      console.log("close dialog not found");

      //await newPage.locator(this.elements.NoBtn).click()
    }
  }
  async NewGenDepositexit() {
    await newPage.click("//div[@class='oj-flex-item']//span[@id='user-info-name']");
    //await newPage.click("//div[@id='user-info-menu-logout']//span");
    await newPage.getByText("Log Out").click()
  }
}