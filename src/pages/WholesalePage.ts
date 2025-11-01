import { expect, Page, Keyboard } from "@playwright/test";
import ReusableMethods from "../helper/wrapper/reusableMethods";
let frame;
let WSTDACNumvar,WSCustNumvar;
export default class WholesalePage {
  private base: ReusableMethods;

  constructor(private page: Page) {
    this.base = new ReusableMethods(page);
  }

 private Elements = {
     Newtab: "//li[@id='New']",
     Custnum: "//input[@id='BLK_CUST_ACCOUNT__CUSTNO']",
     Accclass: "//input[@id='BLK_CUST_ACCOUNT__ACCLS']",
     TDCurrency:"//input[@id='BLK_CUST_ACCOUNT__CCY']",
     Pbutton: "//button[@id='BLK_CUST_ACCOUNT__BTN_ACCPKP']",
     TDACNo: "//input[@id='BLK_CUST_ACCOUNT__ACC']",
     Okbutton: "//input[@id='BTN_OK']",
     InitDeposit: "//input[@id='BLK_TDDETAILS__TDAMTI']",
     PayinaddRowbutton: "//button[@id='cmdAddRow_BLK_TDPAYINDETAILS']",
     TDPayIn: "//select[@id='BLK_TDPAYINDETAILS__MMPAYOPT']",
     Percentage:"//input[@id='BLK_TDPAYINDETAILS__MMPERCENTAGEI']", 
     offsetaccount: "//input[@id='BLK_TDPAYINDETAILS__MMOFFSETACC']",
     PayoutaddRowbutton: "//button[@id='cmdAddRow_BLK_TDPAYOUTDETAILS']",
     PayoutType: "//select[@id='BLK_TDPAYOUTDETAILS__PAYOUTTYPE']",
     PayoutPercentage: "//input[@id='BLK_TDPAYOUTDETAILS__PERCENTAGEI']",
     Payoutoffsetaccount: "//input[@id='BLK_TDPAYOUTDETAILS__OFFACC']",
     PayoutCmpt: "//select[@id='BLK_TDPAYOUTDETAILS__PAYOUTCOMP']",
     Location: "//input[@id='BLK_CUST_ACCOUNT__LOC']",
     Media:"//input[@id='BLK_CUST_ACCOUNT__MEDIA']",
     MIStab: "//li[@id='MICACCTM']",
     PoolCode: "//input[@id='BLK_MISDETAILS__POOLCD']",
     Subsysbtn: "//button[@id='BtnSubSysNav']",    
     Interesttab: "//li[@id='CVS_INTEREST']",
     UDEDefault: "//button[@id='BLK_INTPRODMAP__BTN_UDE_POPULATE']",
     computebtn: "//button[@id='BLK_TDDETAILS__BTNTDCOMPUTE']",
     savebtn: "//li[@id='Save']",
     Acceptbtn: "//input[@id='BTN_ACCEPT']",
     unauthormsg:"//input[@id='BLK_CUST_ACCOUNT__AUTHSTATI']",
     okafterAccept: "",
     WSAuthorizationStatus: "//select[@id='BLK_ICVW_TD_CUST__AUTHSTAT']",
     WSAuthorizeTDACnum:"//input[@id='BLK_ICVW_TD_CUST__ACC']",
     WSAuthorizeCustnum:"//input[@id='BLK_ICVW_TD_CUST__CUST_NO']",
     WSSearch:"//li[@id='Search']",
     WSauthorizefirstrow:  "//table[@id='TBL_QryRslts']//tr[contains(@class,'TBLoneTR')][1]",
     WSauthorizebutton:"//div[@id='toolbar' and not(contains(@style,'display:none'))]//li[@id='Authorize']",
     WSauthormsg: "//input[@id='BLK_CUST_ACCOUNT__AUTHSTATI']",
     Cascade:"//input[@id='BLK_TDDETAILS__CASCADE_MONTH']",
     Autopayment: "//input[@id='BLK_TDDETAILS__AUTOPAY']",
     // 1) add this in Elements (right under Autopayment)
    AutopayLabel: 'label[for="BLK_TDDETAILS__AUTOPAY"]',

     PaymentBrnch:"//input[@id='BLK_TDDETAILS__PAYBRN']",
     RecurPaymentAc:"//input[@id='BLK_TDDETAILS__PAYACC']",
     Installment:"//input[@id='BLK_TDDETAILS__RDAMTI']",
     RecurringDeposit:"//input[@id='BLK_TDDETAILS__RDACC']",
}


//Deposit Account Booking 
async handleDABFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Deposit Account Booking")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleDABFrame() failed:", message);
    }
  }

  //Account Number Generation Frame
async handleANGFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "iframe[title*='Deposit Account Booking']:not([title*='Summary'])",
  { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Account Number Generation"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleANGFrame failed:", err);
    throw err;
  }
}

//Management Information System 
async handleMISFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "iframe[title*='Deposit Account Booking']:not([title*='Summary'])",
  { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Management Information System"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleANGFrame failed:", err);
    throw err;
  }
}

//Information Message Frame
async handleIMFrame() {
  try {
        const outerFrameHandle1 = await this.page.waitForSelector(
          "iframe[title*='Deposit Account Booking']", {timeout : 30000}
        );
        
        const outerFrame1 = await outerFrameHandle1.contentFrame();
        const outerFrameHandle = await outerFrame1.waitForSelector(
  "iframe[title*='IC Special Conditions Maintenance']",
  { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Information Message"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleIMFrame failed:", err);
    throw err;
  }
}

//IC Special Conditions Maintenance
async handleICSCMFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  'iframe[title*="Deposit Account Booking"]', { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="IC Special Conditions Maintenance"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleICSMFFrame failed:", err);
    throw err;
  }
}

//ifrSubScreen
async handleIFRFrame() {
  try {
        const outerFrameHandle1 = await this.page.waitForSelector(
          "iframe[title*='Deposit Account Booking']", {timeout : 30000}
        );
        const outerFrame1 = await outerFrameHandle1.contentFrame();
        const outerFrameHandle = await outerFrame1.waitForSelector(
  "iframe[title*='Override Message']", { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[@id="ifrSubScreen"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleAIFR->OVERRIDE->DABFrame failed:", err);
    throw err;
  }
}

//IFRsubscreen->DAB
async handleIFR1Frame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  'iframe[title*="Deposit Account Booking"]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe[id="ifrSubScreen"]', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleIFR1Frame failed:", err);
    throw err;
  }
}


//Override Message
async handleOverrideFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  'iframe[title*="Deposit Account Booking"]',{ timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector('iframe#ifr_AlertWin', { timeout: 50000 });
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleOverrideFrame failed:", err);
    throw err;
  }
}

async handleInformationMessageFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "iframe[title*='Deposit Account Booking']", { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Information Message"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleInformationMessageFrame failed:", err);
    throw err;
  }
}

//Deposit Account Summary 
async handleDASFrame() {
    try {
      // Wait for the iframe to appear in the DOM
      const frameElementHandle = await this.page.waitForSelector(
        '//iframe[contains(@title, "Deposit Account Summary")]',
        { timeout: 45000 }
      );
    const frame = await frameElementHandle.contentFrame();
   return frame;
    } catch (message) {
     console.log("handleDABFrame() failed:", message);
    }
  }

  //Authorize Frame
  async handleAuthorizeFrame() {
  try {
        const outerFrameHandle = await this.page.waitForSelector(
  "iframe[title*='Deposit Account Booking']", { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[title*="Authorize"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleIAuthorizeFrame failed:", err);
    throw err;
  }
}   

//Information Message
async handleIFRFrameforAuthorize() {
  try {
        const outerFrameHandle1 = await this.page.waitForSelector(
          "iframe[title*='Deposit Account Booking']", {timeout : 30000}
        );
        const outerFrame1 = await outerFrameHandle1.contentFrame();
        const outerFrameHandle = await outerFrame1.waitForSelector(
  "iframe[title*='Authorize']", { timeout: 30000 }
);
    const outerFrame = await outerFrameHandle.contentFrame();
    const innerFrameHandle = await outerFrame.waitForSelector(
      'iframe[id="ifrSubScreen"]', { timeout: 50000 }
    );
    const innerFrame = await innerFrameHandle.contentFrame();
    return innerFrame;
  } catch (err) {
    console.log("handleAIFR->AUTHORIZE->DABFrame failed:", err);
    throw err;
  }
}

      async clickNewtab() {
      const frame = await this.handleDABFrame();
      await frame.waitForSelector(this.Elements.Newtab, { state: 'visible', timeout: 15000 });
      await frame.click(this.Elements.Newtab);
  }

    async enterCustnum(custnum){
    const frame = await this.handleDABFrame();
    WSCustNumvar = custnum;
    await frame.waitForSelector(this.Elements.Custnum, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Custnum).clear();
    await frame.locator(this.Elements.Custnum).fill(custnum);
}

    async enterAccclass(accclass){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Accclass, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Accclass).clear();
    await frame.locator(this.Elements.Accclass).fill(accclass);
}

    async enterTDCurrency(TDCurr){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.TDCurrency, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.TDCurrency).clear();
    await frame.locator(this.Elements.TDCurrency).fill(TDCurr);
}

    async clickonPbutton(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Pbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Pbutton).click();
}

    async clickonOkbutton(){
    const frame = await this.handleANGFrame();
    await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Okbutton).click();
}

    async enterInitialDeposit(initdeposit){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.TDACNo,{state:'visible',timeout:15000});
    WSTDACNumvar = await frame.locator(this.Elements.TDACNo).inputValue(); 
    await frame.waitForSelector(this.Elements.InitDeposit,{state:'visible',timeout:15000});
    await frame.locator(this.Elements.InitDeposit).clear();
    await frame.locator(this.Elements.InitDeposit).fill(initdeposit);
}

    async clickPayinaddRowbutton(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.PayinaddRowbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.PayinaddRowbutton).click();      
}

    async SelectTDPayInDropdown(tdpayin){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.TDPayIn, { state: 'visible', timeout: 15000 });
    await frame.selectOption(this.Elements.TDPayIn, { label: tdpayin });
}

    async enterPercentage(percent){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Percentage, { state: 'visible', timeout: 35000 });
    await frame.locator(this.Elements.Percentage).clear();
    await frame.locator(this.Elements.Percentage).fill(percent);
}

    async enterOffsetAccount(offsetac){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.offsetaccount, { state: 'visible', timeout: 35000 });
    await frame.locator(this.Elements.offsetaccount).clear();
    await frame.locator(this.Elements.offsetaccount).fill(offsetac);
}

  async checkAutoPayment() {
  const frame = await this.handleDABFrame();
  await frame.waitForSelector(this.Elements.AutopayLabel, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.AutopayLabel).click();
  const cb = frame.locator(this.Elements.Autopayment);
  if (!(await cb.isChecked())) {
    await cb.setChecked(true, { force: true });
  }
}

    async enterPaymentBranch(paybr){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.PaymentBrnch,  {state: 'visible', timeout: 15000});
    await frame.locator(this.Elements.PaymentBrnch).clear();
    await frame.locator(this.Elements.PaymentBrnch).fill(paybr)
}

async enterPaymentaccount(payacc){
  const frame = await this.handleDABFrame();

  // wait → clear → fill
  await frame.waitForSelector(this.Elements.RecurPaymentAc, { state: 'visible', timeout: 15000 });

  const input = frame.locator(this.Elements.RecurPaymentAc);
  await input.click();
  try {
    await input.clear();         
  } catch {
    await input.fill('');        
  }
  await input.fill(payacc);

}

async enterInstallmentamount(instAmt: string) {
  const frame = await this.handleDABFrame();
  await frame.waitForSelector(this.Elements.Installment, { state: 'visible', timeout: 15000 });
  const input = frame.locator(this.Elements.Installment);
  await input.click();
  try {
    await input.clear();          
  } catch {
    await input.fill('');        
  }
  await input.fill(instAmt);
}

    async checkRecurringDeposit(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.RecurringDeposit, {state : 'visible', timeout : 15000});
    if(await frame.locator(this.Elements.RecurringDeposit).uncheck)
    {
      await frame.locator(this.Elements.RecurringDeposit).check();
    }
}

    async clickPayoutaddRowbutton(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.TDACNo,{state:'visible',timeout:15000});
    WSTDACNumvar = await frame.locator(this.Elements.TDACNo).inputValue(); 
    await frame.waitForSelector(this.Elements.PayoutaddRowbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.PayoutaddRowbutton).click();
}

    async SelectPayoutTypeDropdown(payouttype){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.PayoutType, { state: 'visible', timeout: 15000 });
    await frame.selectOption(this.Elements.PayoutType, { label: payouttype });
}

    async enterPayoutPercentage(payoutpercent){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.PayoutPercentage, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.PayoutPercentage).clear();
    await frame.locator(this.Elements.PayoutPercentage).fill(payoutpercent);
}

    async enterPayoutOffsetAccount(payoutoffsetac){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Payoutoffsetaccount, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Payoutoffsetaccount).clear();
    await frame.locator(this.Elements.Payoutoffsetaccount).fill(payoutoffsetac);
}

    async SelectPayoutcmptDropdown(payoutcmp){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.PayoutCmpt, { state: 'visible', timeout: 15000 });
    await frame.selectOption(this.Elements.PayoutCmpt, { label: payoutcmp });
}

    async enterLocation(Loc){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Location, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Location).clear();
    await frame.locator(this.Elements.Location).fill(Loc);
}

    async enterMedia(media){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Media, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Media).clear();
    await frame.locator(this.Elements.Media).fill(media);
}

    async clickonMIStab(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.MIStab, { state: 'visible', timeout: 15000 });
    await frame.click(this.Elements.MIStab);
}

    async enterPoolCode(plcode){
    const frame = await this.handleMISFrame();
    await frame.waitForSelector(this.Elements.PoolCode, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.PoolCode).clear();
    await frame.locator(this.Elements.PoolCode).fill(plcode);
}

    async clickonokinMIStab(){
    const frame = await this.handleMISFrame();
    await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Okbutton).click();    
}

    async clickonInteresttab(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.Interesttab, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Interesttab).click();
    const frame1 = await this.handleIMFrame();
    await frame1.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame1.locator(this.Elements.Okbutton).click();
}


    async clickonUDEDefault(){
    const frame1 = await this.handleICSCMFrame();
    await frame1.waitForSelector(this.Elements.UDEDefault, { state: 'visible', timeout: 15000 });
    await frame1.locator(this.Elements.UDEDefault).click();
}

    async clickokafterUDEDefault(){
    frame = await this.handleIMFrame();
    await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame.locator(this.Elements.Okbutton).click(); 
    const frame1 = await this.handleICSCMFrame();
    await frame1.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame1.locator(this.Elements.Okbutton).click(); 
}

  async checkCascade() {
  const frame = await this.handleDABFrame();
  const cb = frame.getByLabel('Cascade Month-End Maturity Date', { exact: true });

  await cb.waitFor({ state: 'attached', timeout: 15000 }); // don’t wait for "visible" (it might not be)
  await cb.scrollIntoViewIfNeeded();
  await cb.setChecked(true, { force: true }); // input may be overlapped; setChecked handles it
  await expect(cb).toBeChecked();
}

  async clickoncompute() {
  const frame = await this.handleDABFrame();   // re-enter correct frame
  await frame.waitForSelector(this.Elements.computebtn, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.computebtn);
}

    async clickonsave(){
    const frame = await this.handleDABFrame();
    await frame.waitForSelector(this.Elements.savebtn, { state: 'visible', timeout: 15000 });
    await frame.click(this.Elements.savebtn);
}

  async clickokaftersave(){
  const frame = await this.handleIFR1Frame();
  await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
  await frame.click(this.Elements.Okbutton);
}

    async clickaccept(){
    const frame = await this.handleOverrideFrame();
    await frame.click(this.Elements.Acceptbtn); // e.g., 'input#BTN_ACCEPT'
}

    async clickokafteraccept(){
    const frame = await this.handleInformationMessageFrame();
    await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
    await frame.click(this.Elements.Okbutton);
}

  async verifyAuthorizationStatusforwholesale(){
  const frame = await this.handleDABFrame();
  const status = await frame.inputValue(this.Elements.unauthormsg);
  expect(status.trim()).toBe('Unauthorized');
}

//Authorize

async selectAuthorizationStatusforwholesale() {
   const frame = await this.handleDASFrame();
   await frame.waitForSelector(this.Elements.WSAuthorizationStatus), { state: 'visible', timeout: 15000 };
   await frame.selectOption(this.Elements.WSAuthorizationStatus, { label: 'Unauthorized'});
  }

  async enterTDAccNumberforwholesale() {
  const frame = await this.handleDASFrame();
  await frame.waitForSelector(this.Elements.WSAuthorizeTDACnum, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.WSAuthorizeTDACnum).clear;
  await frame.locator(this.Elements.WSAuthorizeTDACnum).fill(WSTDACNumvar);
 
}  

  async enterCustNumberforwholesale() {
  const frame = await this.handleDASFrame();
  await frame.waitForSelector(this.Elements.WSAuthorizeCustnum, { state: 'visible', timeout: 15000 });
  await frame.locator(this.Elements.WSAuthorizeCustnum).clear;
  await frame.locator(this.Elements.WSAuthorizeCustnum).fill(WSCustNumvar);
}  

async clickSearchbuttonforwholesale(){
const frame = await this.handleDASFrame();
await frame.waitForSelector(this.Elements.WSSearch,{state: 'visible', timeout : 15000});
await frame.click(this.Elements.WSSearch);
}

async clickFirstRecordforwholesale(){
const frame = await this.handleDASFrame();
await frame.waitForSelector(this.Elements.WSauthorizefirstrow,{state: 'visible', timeout : 55000});
await frame.locator(this.Elements.WSauthorizefirstrow).dblclick();
await frame.waitForTimeout(10000)
}

  async clickAuthorizeforwholesale(){
  const frame = await this.handleDABFrame();
  await frame.waitForSelector(this.Elements.WSauthorizebutton,{state: 'visible', timeout : 55000} );
  await frame.locator(this.Elements.WSauthorizebutton).click();
  await this.page.waitForTimeout(85000);
}

async clickAcceptforwholesale(){
const frame = await this.handleAuthorizeFrame();
await frame.waitForSelector(this.Elements.Okbutton,{state: 'visible', timeout : 85000});
await frame.locator(this.Elements.Okbutton).click();
}

  async clickokafterAcceptforwholesale() {
  const outer1 = await this.page.waitForSelector("iframe[title*='Deposit Account Booking']", { timeout: 30000 });
  const frame1 = await outer1.contentFrame();
  const outer2 = await frame1.waitForSelector("iframe[title*='Authorize']", { timeout: 30000 });
  const frame2 = await outer2.contentFrame();
  const alertHandle = await frame2.waitForSelector("iframe[id='ifr_AlertWin']", { timeout: 50000 });
  const alertFrame = await alertHandle.contentFrame();
  await alertFrame.locator("input[id='BTN_OK']").click();
}

async verifyAuthorizationStatusforwholesale1() {
const frame = await this.handleDABFrame();
const status = await frame.inputValue(this.Elements.unauthormsg);
expect(status.trim()).toBe('Authorized');
}

}