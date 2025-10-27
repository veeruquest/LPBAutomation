// import { expect, Page, Keyboard } from "@playwright/test";
// import ReusableMethods from "../helper/wrapper/reusableMethods";
// let frame;
// export default class WholesalePage {
//   private base: ReusableMethods;

//   constructor(private page: Page) {
//     this.base = new ReusableMethods(page);
//   }

//  private Elements = {
//     Newtab: "",
//     Custnum: "",
//     Accclass: "",
//     Pbutton: "",
//     Okbutton: "",
//     TDCurrency: "",
//     InitDeposit: "",
//     PopupOkbutton: "",
//     addRowbutton: "",
//     TDPayIn: "",
// //     NewButton: "//li[@id='New']",
// //     BatchNumber: "//input[@id='BLK_DEVWS_BATCH_MASTER__BATCH_NO' and @title='Batch Number']",
// //     Description: "//input[@id='BLK_DEVWS_BATCH_MASTER__DESCRIPTION']",
// //     Debit: "//input[@id='BLK_DEVWS_BATCH_MASTER__DR_CHK_TOTALI']",
// //     Credit: "//input[@id='BLK_DEVWS_BATCH_MASTER__CR_CHK_TOTALI']",
// //     OkButton: "//div[@id='DIVFooter']//input[@id='BTN_OK']",
// //     PopupOk: "//iframe[contains(@title,'Information Message')]//input[@id='BTN_OK']",
// //     AddRowBtn: "//button[@id='cmdAddRow_BLK_DETBS_JRNL_TXN_DETAIL']",
// //     DrCr1: "//select[@id='BLK_DETBS_JRNL_TXN_DETAIL__DR_CR']",
// //     BranchCode1:"//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODE']",
// //     Acnnumber1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NO']",
// //     Currency1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__CCY']",
// //     Amount1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTI']",
// //     TxnCode1: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODE']",
// //     DrCr2:"//select[@id='BLK_DETBS_JRNL_TXN_DETAIL__DR_CRRC1']",
// //     BranchCode2:"//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__BRANCH_CODERC1']",
// //     Acnnumber2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__UI_AC_GL_NORC1']",
// //     Currency2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__CCYRC1']",
// //     Amount2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__AMOUNTIRC1']",
// //     TxnCode2: "//input[@id='BLK_DETBS_JRNL_TXN_DETAIL__TXN_CODERC1']",
// //     ComputeBtn: "//button[@id='BLK_DETBS_BATCH_MASTER__BTN_COMPUTE']",
// //     oKafterCompute:"//input[@id='BTN_OK']",
// //     Savetab:"//li[@id='Save']",
// //     Okaftersave:"//input[@id='BTN_OK']",
// //     BatchClose:"//button[@id='BLK_DETBS_JRNL_TXN_MASTER__BTN_CLOSE_BATCH']",
// //     OKafterbatchclose:"//input[@id='BTN_OK']",
// //     ExitBtn:"//input[@id='BTN_EXIT_IMG']",
// //     selectBtn:"(//label[@class='LBLmenustd'])[6]",
// //     OkBtn :"//input[@id='BTN_OK']",
// //     AuthorizationStatus1:"//select[@id='BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT']",
                                        
// //     Search1:"//li[@id='Search']",
// //     authorizeBatchNumber1: "//input[@id='BLK_DETBS_JRNL_TXN_MASTER__BATCH_NO']",
// //     authorizefirstrow1 : "//table[@id='TBL_QryRslts']//tr[contains(@class,'TBLoneTR')][1]",
// //     authorizebutton1:"//div[@id='toolbar' and (contains(@style,'display:none'))]//li[@id='Authorize']",
// //     authorizebutton2:"//button[@id='BLK_DETB_JRNL_TXN_MASTER__AUTH__BTN_AUTHORIZE']",
                      
// //     OkBtn1 :"//input[@id='BTN_OK']",
// //     ExitBtn1 : "//input[@id='BTN_EXIT_IMG']",
// //    acceptBtn1:"//input[@value='Accept']",
// //     okafterAccept1:"//input[@value='Accept']",
// //     authormsg1: "//input[@id='BLK_DETBS_JRNL_TXN_MASTER__AUTHSTAT']",

// //     EnterQuery: "//li[@id='EnterQuery']",
// //     AccountNumber: "//input[@id='BLK_QUERY_DETAILS__ACCNO' and contains(@class, 'TXTstd')]",
    
// //     ExecuteQuery: "//li[@id='ExecuteQuery']",
// //     Errormsg:"//span[@title='No records for the above selection']",
// //     Btnokk:"//input[@id='BTN_OK']",
// //     Cancel:"//input[@id='BTN_EXIT_IMG']",
// //     ok1:"//input[@id='BTN_OK']",
// //     ExitBtn2:"//input[@id='BTN_EXIT_IMG']",
// //     accountLOVsearch1:"//button[@title='List of Values']",
// //     AccountNumber1:"//input[@id='1']",
// //     Fetch1:"//label[@for='Fetch']",

// }

// //Create
//     async clickNewtab() {
//     frame = await this.handleCATQFrame();
//     await frame.waitForSelector(this.Elements.Newtab, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.Newtab);
// }

//     async enterCustnum(custnum){
//     frame = await this.handleCATQFrame();
//     const element = await frame.waitForSelector(this.Elements.Custnum, { state: 'visible', timeout: 15000 });
//     await element.clear();
//     await element.fill(this.Elements.Custnum, custnum);
// }

//     async enterAccclass(accclass){
//     frame = await this.handleCATQFrame();
//     const element = await frame.waitForSelector(this.Elements.Accclass, { state: 'visible', timeout: 15000 });
//     await element.clear();
//     await element.fill(this.Elements.Accclass, accclass);
// }

//     async enterTDCurrency(TDCurr){
//     frame = await this.handleCATQFrame();
//     const element = await frame.waitForSelector(this.Elements.TDCurrency, { state: 'visible', timeout: 15000 });
//     await element.clear();
//     await element.fill(this.Elements.TDCurrency, TDCurr);    
// }

//     async clickonPbutton(){
//     frame = await this.handleCATQFrame();
//     await frame.waitForSelector(this.Elements.Pbutton, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.Pbutton);
// }

//     async clickonOkbutton(){
//     frame = await this.handleCATQFrame();
//     await frame.waitForSelector(this.Elements.Okbutton, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.Okbutton);    
// }

//     async enterInitialDeposit(initdeposit){
//     frame = await this.handleCATQFrame();
//     const element = await frame.waitForSelector(this.Elements.InitDeposit, { state: 'visible', timeout: 15000 });
//     await element.clear();
//     await element.fill(this.Elements.InitDeposit, initdeposit); 
// }

//     async clickpopupOkbtn(){
//     frame = await this.handleCATQFrame();
//     await frame.waitForSelector(this.Elements.PppupOkbutton, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.PopupOkbutton);  
// }

//     async clickaddRowbutton(){
//     frame = await this.handleCATQFrame();
//     await frame.waitForSelector(this.Elements.addRowbutton, { state: 'visible', timeout: 15000 });
//     await frame.click(this.Elements.addRowbutton);      
// }

//     async SelectTDPayInDropdown(tdpayin){
//     frame = await this.handleAMFrame();
//     await frame.waitForSelector(this.Elements.TDPayIn, { state: 'visible', timeout: 15000 });
//     await frame.selectOption(this.Elements.TDPayIn, { label: tdpayin });
// }

        
// }












// }