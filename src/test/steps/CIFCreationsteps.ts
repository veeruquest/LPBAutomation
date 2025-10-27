import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import cifCreationPage from "../../pages/CIFCreationPage";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"


const reusableMethods = new ReusableMethods(fixture.page);
let CifPageloc: cifCreationPage;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);



When("User clicks on New Tab",async function(){
    CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on New Tab");
       
    await CifPageloc.handleClFFrame();
    await CifPageloc.clickNewTab();
})

When("User clicks the button P", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on button P");
    await CifPageloc.clickButtonP();
});

When("User enters Full Name {string}", async function (FullName){
    await CifPageloc.enterFullName(FullName);
});


When("User enters Short Name {string}", async function (shortName){
    await CifPageloc.enterShortName(shortName);
});

When("User enters Customer Category {string}", async function (category) {
    
    await CifPageloc.enterCustomerCategory(category);
});
 When("User selects Male radio button",async function(){

    await CifPageloc.selectgender();
 })

 When("User enters Date of Birth {string}", async function (dob: string) {
    await CifPageloc.enterDOB(dob);
});

When("User enters Nationality {string}", async function (nationality: string) {
    await CifPageloc.enterNationality(nationality);
});

When("User enters Address {string}", async function (address: string) {
    await CifPageloc.enterAddress(address);
});

When("User enters Country {string}", async function (country: string) {
    await CifPageloc.enterCountry(country);
});

When("User enters Language {string}", async function (language: string) {
    await CifPageloc.enterLanguage(language);
});

When("User clicks on Additional tab", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on Additional tab");
    await CifPageloc.clickAdditionalTab();
});

When("User enters Location {string}", async function (location: string) {
    await CifPageloc.enterLocation(location);
});

When("User enters Media {string}", async function (media: string) {
    await CifPageloc.enterMedia(media);
});

When("User clicks on Save button", async function () {
     CifPageloc = new cifCreationPage(fixture.page);
       fixture.logger.info("clicks on Save button");
    await CifPageloc.clickSaveButton();
    
    
});




When("User accepts PopUp Alert",async function(){
    await CifPageloc.remarksFrame()
})

When("User accepts accept Alert",async function(){
    await CifPageloc.overrideFrame();
})

Then("User validates success message", async function () {
     await CifPageloc.verifySuccessMessage();
   
});

