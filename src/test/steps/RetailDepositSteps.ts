import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard, Page } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
//import  CreateTellerPage  from "../../pages/CreateTellerPage";
import  RetailDepositPage  from "../../pages/RetailDepositPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"

const reusableMethods = new ReusableMethods(fixture.page);

let DepositPage : RetailDepositPage;
let homePage:HomePage
setDefaultTimeout(timeout);
let newPage;

When(`click on NextGen UI Dashboard`, async function() {
    DepositPage = new RetailDepositPage(fixture.page);
    fixture.logger.info("Click on NextGen UI Dashboard and select Retail Operations");
    await DepositPage.NextGenFun();
    await fixture.page.waitForTimeout(2000)
});
When('user selects BranchName as {string}',async function(BranchName:string){
  DepositPage = new RetailDepositPage(newPage);
  await DepositPage.BranchSelection (BranchName)
})
When('user searches for Screen', async function ()  {
// homePage=new HomePage(fixture.page)
    DepositPage = new RetailDepositPage(newPage);
  await DepositPage.searchScreen();
});
When("user clicks on search for Screen", async function ()  {
// homePage=new HomePage(fixture.page)
    DepositPage = new RetailDepositPage(newPage);
  await DepositPage.searchScreen1();
});
When("user selects pending id",async function(){
  await DepositPage.selectPendingid()
})
When("user accepts approval",async function(){
  await DepositPage.selectsentbackid()
})
When("user approves the pending approval",async function() {
  await DepositPage.approvefun()
})
When("user provides Account Number {string}", async function (accountNumber: string) {
    await DepositPage.enterAccountNumber(accountNumber);
  });

When("user provides Transaction Amount {string}", async function (amount: string) {
    await DepositPage.enterTransactionAmount(amount);
  });

When( "user provides Customer Interview {string}",async function (interview: string) {
    await DepositPage.enterCustomerInterview(interview);
  });

When("user clicks on Save", async function () {
  await DepositPage.clickOnSave();
});

 Then("user validates successful confirmation",async function(){
  await DepositPage.successPop();
 })
 Then("user sends approval for more than limit transaction",async function(){
  await DepositPage.limitCross()
 })
 When('user exits NewGenDepositPage',async function () {
   await DepositPage.NewGenDepositexit()
   
 })
