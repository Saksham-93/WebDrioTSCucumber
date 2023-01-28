import { Given,When,Then } from "@wdio/cucumber-framework";

import demopage from "../../src/pages/demo.page";

Given(/^I am on the Account Page url (.+)$/, async function (homepageurl:string) {
     
    await browser.url(homepageurl);
    await browser.maximizeWindow();

  });

When(/^I enter firstname (.+) and lastname (.+)$/, async function (firstname:string, lastname:string) {

    await demopage.enterFirstName(firstname);

    await demopage.enterLastName(lastname);

  });

When(/^I select country (.+) and state (.+)$/, async function (country:string, state:string) {


    await demopage.selectcountry(country);
    await browser.pause(5000)
    await demopage.selectstate(state);

  });

When(/^I click continue$/, async ()=> {
    
    await demopage.clickcontinueButton();
    await browser.pause(5000);

  });

Then(/^I verify the header message (.+)$/, async function (headertext:string) {

    
    expect(await demopage.getHeaderText()).toContain(headertext);

  });

Then(/^I verify text (.+) is present$/, async function (validationtext:string) {

   

    expect(await demopage.getErrorText()).toContain(validationtext);

  });