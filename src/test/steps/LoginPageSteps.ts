import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect, Keyboard } from "@playwright/test";

import { fixture } from "../../hooks/pageFixture";

import loginPage from "../../pages/LoginPage";


import ReusableMethods from "../../helper/wrapper/reusableMethods";

import { context, timeout } from "../../hooks/hooks"


const reusableMethods = new ReusableMethods(fixture.page);

let loginPageloc: loginPage;


setDefaultTimeout(timeout);


Given("User navigates to the application", async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Navigated to the application");
    await fixture.page.goto(process.env.BASEURL);
    let title = await fixture.page.title();
    console.log("Title is " + title)

});

When(`user enters the username and password`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Enter the user name and Password");
    await loginPageloc.enterUserName(process.env.UserName);
    await fixture.page.waitForTimeout(2000)
    await loginPageloc.enterPassword(process.env.Password);
});

When(`click on signin button`, async function () {
    loginPageloc = new loginPage(fixture.page);
    fixture.logger.info("Click on Login Button");
    await fixture.page.waitForTimeout(1000)
    await loginPageloc.loginBtn(process.env.Password);

    

});

Then(`valdiate the home page tite as {string}`, async function (msg) {
    await loginPageloc.handleFrame();
   await loginPageloc.validateHomePageTitle(msg)
});

