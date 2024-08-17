import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {Builder, By,until,Key} from "selenium-webdriver"
const { initializeDriver, getDriver } = require('./driver');


let driver;

BeforeAll(async function(){

    driver=await new Builder().forBrowser('chrome').build();

});

Given('I\'m on the home page', async function(){
    await driver.get('https://practicesoftwaretesting.com/');

});

When ('I click on signin', async function(){

    await driver.wait(until.elementLocated(By.css('[data-testid="nav-sign-in"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('I can see the login page', async function(){

    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Login')]")),1000);
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

When("I enter the email as {string}", async function(email){

    await driver.wait(until.elementLocated(By.css('[data-testid="email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

When("I enter the password as {string}", async function(pass){

    await driver.wait(until.elementLocated(By.css('[data-testid="password"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),pass); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

When('I click on the login button', async function(){
    
    await driver.wait(until.elementLocated(By.css('[data-testid="login-submit"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

});

And('I can see the message as {string}', async function(){

    let check = false;
    let counter = 100;
    
    while (counter > 0) {
        let pageSource = await driver.getPageSource();
        check = pageSource.includes(message);
    
        if (check) {
            console.log("checked");
            return "passed";
        } else {
            console.log("else block");
            await new Promise((resolve) => setTimeout(resolve, 300));
            counter--;
        }
    }
    throw new Error("Failed");
});

When('I enter the email',async function(){  // global email from registration 

    await driver.wait(until.elementLocated(By.css('[data-testid="email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),global.sms_email);
    await new Promise(resolve => setTimeout(resolve,1000));

});

When('I click on Forgot your password link',async function(){

    await driver.wait(until.elementLocated(By.linkText('Forgot your Password?')),1000).click();

});

Then('I click on the set new password button',async function(){

    await driver.wait(until.elementLocated(By.css('[data-testid="forgot-password-submit"]'))).click(); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

 When('I enter the new password as {string}',async function(){

    this.newpass=await driver.wait(until.elementLocated(By.css('[data-testid="new-password"]'))).click(); 
    await new Promise(resolve => setTimeout(resolve,1000));

 });

 Then('I click on submit button', async function(){

    await driver.wait(until.elementLocated(By.css('[data-testid="submit"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

 });


When('I enter the password', async function(){

    await driver.wait(until.elementLocated(By.css('[data-testid="password"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),this.newpass); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('I have logged in to the home page', async function(){
    
    driver.wait(until.elementLocated(By.css('img[src="../assets/img/barn-2400x1600.avif"]')),1000);
    await new Promise(resolve => setTimeout(resolve,1000));

});

module.exports = driver;


