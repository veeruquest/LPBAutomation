import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";

import cifCreationPage from "../../pages/CIFAuth";




import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"
import cifAuthenticationPage from "../../pages/CIFAuth";


const reusableMethods = new ReusableMethods(fixture.page);
let AuthPageloc: cifAuthenticationPage ;



//let loginPageloc: loginPage;


setDefaultTimeout(timeout);


When("User clicks enter query Tab",async function(){
    AuthPageloc = new cifAuthenticationPage(fixture.page);
       fixture.logger.info("clicks on New Query Tab");
    await AuthPageloc.handleClFAFrame();
    await AuthPageloc.clickNewquery();
})

When("User enters customer number {string}", async function (number){
    await AuthPageloc.enterCustno(number);
});

When("User clicks execute query Tab",async function(){
    await AuthPageloc.executequery();
})

When("User clicks on Autherize Tab",async function(){
    await AuthPageloc.authTabclick();
})
When("User accepts Autherize Alert",async function(){
    await AuthPageloc.AutherizeFrame();
})

When("User validates success msg",async function(){
    await AuthPageloc.verifySuccessMessage();
})  
