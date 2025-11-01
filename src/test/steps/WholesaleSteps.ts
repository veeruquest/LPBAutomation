import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import WholesalePage from "../../pages/WholesalePage"; 
let WSPage: WholesalePage;

When("clicks on New", async function () {
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickNewtab();
});

When("enters the Customer Number {string}", async function (custnum : string){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.enterCustnum(custnum);
});

When("enters the Account Class {string}", async function(accclass : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterAccclass(accclass);  
});

When("enters the Term Deposit Currency {string}", async function(TDCurr : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterTDCurrency(TDCurr);  
});

When("clicks on P button", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickonPbutton();
});

When("clicks Ok on the override screen", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickonOkbutton();
});

When("enters the Initial Deposit Amount {string}", async function(initdeposit : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterInitialDeposit(initdeposit);
});

When("clicks on AddRow + in the Pay In Details section", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickPayinaddRowbutton();
});

When("selects the Term Deposit Pay In Option from the dropdown {string}", async function(tdpayin : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.SelectTDPayInDropdown(tdpayin);
});

When("enters the Percentage {string}", async function(percent : string){
     WSPage = await new WholesalePage(fixture.page);
     await WSPage.enterPercentage(percent);
});

When("enters the Offset Account {string}", async function(offsetac : string){
     WSPage = await new WholesalePage(fixture.page);
     await WSPage.enterOffsetAccount(offsetac);
});

When("check the Auto Payment TakeDown Option", async function(){
 WSPage = await new WholesalePage(fixture.page);
     await WSPage.checkAutoPayment();
});
When("enters Payment Branch in Recurring Deposit {string}", async function(paybr  : string){        
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterPaymentBranch(paybr);
});

When("enters Payment Account in Recurring Deposit {string}", async function(paymentacc : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterPaymentaccount(paymentacc);
});

When('enters Installment amount in Recurring Deposit {string}', async function (amount: string) {
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterInstallmentamount(amount);
});

 When("checks Recurring Deposit Accoun checkbox", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.checkRecurringDeposit();
 });

When("clicks on AddRow + in the Pay Out Details section", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickPayoutaddRowbutton();
});

When("selects the Payout Type Option from the dropdown {string}", async function(payouttype : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.SelectPayoutTypeDropdown(payouttype);
});

When("enters the PayoutPercentage {string}", async function(payoutpercent : string){
     WSPage = await new WholesalePage(fixture.page);
     await WSPage.enterPayoutPercentage(payoutpercent);
});

When("enters the Payout Offset Account {string}", async function(payoutoffsetac : string){
     WSPage = await new WholesalePage(fixture.page);
     await WSPage.enterPayoutOffsetAccount(payoutoffsetac);
});

When("selects the Payout Component from the dropdown {string}", async function(payoutcmp : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.SelectPayoutcmptDropdown(payoutcmp);
});

When("enters the Location {string}", async function(Loc : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterLocation(Loc);
});

When("enters the Media {string}", async function(media : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterMedia(media);
});

When("clicks on MIS tab", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickonMIStab();
});

When("enters the Pool Code in the MIS tab {string}", async function(plcode : string){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.enterPoolCode(plcode);
});

When("clicks on ok in MIS tab", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickonokinMIStab();    
});

When("clicks on the Interest tab", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickonInteresttab();
});

When("clicks on UDE Default", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickonUDEDefault();
});

When("clicks on Ok after UDEDefault", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickokafterUDEDefault();   
});

When("check Cascade Month-End Maturity Date", async function(){
WSPage = await new WholesalePage(fixture.page);
    await WSPage.checkCascade();   
});
When("clicks on Compute in the Main tab", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickoncompute();
});

When("clicks on Save", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickonsave();
}); 

When("confirms with Ok after save", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickokaftersave();
});

When("the user accepts the overrides", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickaccept();
});

When("clicks on Ok after accept", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickokafteraccept();
}); 
Then("System should save the record successfully and status should be Unauthorized", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.verifyAuthorizationStatusforwholesale();
});

//Authorize

When("set Authorization Status to Unauthorized for STSCUSTD", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.selectAuthorizationStatusforwholesale();
 });

 When("enters the TDAccount Number for authorization for STSCUSTD", async function(){
  WSPage = await new WholesalePage(fixture.page);
  await WSPage.enterTDAccNumberforwholesale();
});

When("enters the Customer Number for authorization for STSCUSTD", async function(){
  WSPage = await new WholesalePage(fixture.page);
  await WSPage.enterCustNumberforwholesale();
});

 When("click on search for STSCUSTD", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickSearchbuttonforwholesale();
 });

 When("Open the first unauthorized record from results for STSCUSTD", async function(){
   WSPage = await new WholesalePage(fixture.page);
  await WSPage.clickFirstRecordforwholesale();
 });

 When("Click on Authorize for STSCUSTD", async function(){
    WSPage = await new WholesalePage(fixture.page);
    await WSPage.clickAuthorizeforwholesale();
 });

 When("Click on Accept button for STSCUSTD", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickAcceptforwholesale();
 });

 When("Click on Ok after Accept for STSCUSTD", async function(){
   WSPage = await new WholesalePage(fixture.page);
   await WSPage.clickokafterAcceptforwholesale(); 
});

 Then("System should authorize the record successfully and record status should be Authorized for STSCUSTD", async function(){
       WSPage = await new WholesalePage(fixture.page);
      await WSPage.verifyAuthorizationStatusforwholesale1();
 });