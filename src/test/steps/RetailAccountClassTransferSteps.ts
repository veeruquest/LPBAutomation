import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import  RetailAccountClassTransferPage  from "../../pages/RetailAccountClassTransferPage";

import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"



const reusableMethods = new ReusableMethods(fixture.page);
let retailPage :  RetailAccountClassTransferPage;

setDefaultTimeout(timeout);

When('user click on New in Account Class', async function () {
         retailPage = new RetailAccountClassTransferPage(fixture.page);
  await retailPage.handleRetailFrame();
  await retailPage.clickNewButton();
});

When('user Enter the Account {string}', async function(account: string) {
  await retailPage.enterAccount(account);
});

When('user Enter the Account Class {string}', async function(accountClass: string) {
  await retailPage.enterAccountClass(accountClass);
});

When('user Click on Default button', async function() {
  await retailPage.clickDefaultButton();
});

When('user Click on Save', async function (){
  await retailPage.clickSaveButton();
});

Then('validate the Error message', async function () {
  await retailPage.validateErrorMessage();
});
Then('validate the Success message', async function () {
  await retailPage.validateSuccessMessage();
});
When('user Click on Exit button', async function () {
  await retailPage.clickExitButton();
});
When('user Click on MIS Tab', async function () {
  await retailPage.clickMISTab();
});
When("select {string} from drop down", async function (status: string) {
    retailPage = new RetailAccountClassTransferPage(fixture.page);
  fixture.logger.info("Handling Journal Frame");
  await retailPage.handleRetailFrame();

  fixture.logger.info(`Selecting ${status} from drop down`);
  await retailPage.selectAuthorizationStatus(status);
});
When("user Clicks on Search button", async function(){
  await retailPage.Searchfunction()
})
When("user doubleclick on record", async function () {
  fixture.logger.info("Double clicking on the record");
  await retailPage.doubleclicksrecord() 
});
When("Click on Authorize Button", async function () {
  fixture.logger.info("Clicking on Authorize Button");
  await retailPage.clickAuthorizeButton();
});
Then("validate the Authsuccess message",async function(){
  await retailPage.AuthSuccessFun();
})