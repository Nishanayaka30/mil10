import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {Builder, By,until,Key} from "selenium-webdriver"
const { initializeDriver, getDriver } = require('./driver');


let driver;

BeforeAll(async function(){

    driver=await new Builder().forBrowser('chrome').build();

});

Given('I\'m on the home page', async function(){
    await driver.get('https://ecommerce-site.com/home');

});

When ('I click on signin', async function(){

    await driver.wait(until.elementLocated(By.css('[data-testid="nav-sign-in"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('I should see the login page', async function(){

    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Login')]")),1000);
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

When("I enter the email as {string}", async function(email){

    await driver.wait(until.elementLocated(By.css('[data-testid="login_email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

When("I enter the password as {string}", async function(pass){

    await driver.wait(until.elementLocated(By.css('[data-testid="login_password"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),pass); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

When('I click on the login button', async function(){
    
    await driver.wait(until.elementLocated(By.css('[data-testid="login-submit"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

});

And('I should see the message {string}', async function(){

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


When('I click on Forgot password ',async function(){

    await driver.wait(until.elementLocated(By.linkText('Forgot your Password?')),1000).click();

});

When('I enter the email address as {string}',async function(email){  // global email from registration 

    await driver.wait(until.elementLocated(By.css('[data-testid="login_email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email);
    await new Promise(resolve => setTimeout(resolve,1000));

});



Then('I click on the {string} button',async function(reset){

    await driver.wait(until.elementLocated(By.css('[data-testid="forgot-password-submit"]'))).click(reset); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('the system sends a GET request with the email address {string} to the password reset API', async function (email) {

    try {
      const response = await axios.get(`https://resetapi.com/request-reset?email=${email}`);
      global.resetToken = response.data.token; 
  
      if (!global.resetToken) {
        throw new Error('Password reset token was not received.');
      }
    } catch (error) {
      throw new Error(`Failed to request password reset token: ${error.message}`);
    }
  });

  When('I navigate to the set new password page with the token', async function () {
    if (!global.resetToken) {
      throw new Error('Token not available to navigate to the set new password page.');
    }
  
    const url = `https://localhost:3000?token=${global.resetToken}`;
    await driver.get(url);
  });
  
  

 When('I enter the new password as {string}',async function(newpass){

    await driver.wait(until.elementLocated(By.css('[data-testid="new-password"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),newpass); 
    await new Promise(resolve => setTimeout(resolve,1000));

 });

 Then('I click on the Submit button', async function(){
    
    await driver.wait(until.elementLocated(By.css('[data-testid="submit"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

 });

 After('@api', async function () {
    try {
      await axios.post('https://resetapi.com/reset-password', {
        token: global.resetToken,
        newPassword: 'Abc@987',
      });
      console.log('Cleanup: Password reset to the original state.');
    } catch (error) {
      console.error(`Cleanup failed: ${error.message}`);
    }
  
    if (driver) {
      await driver.quit();
    }
  });

Then('I should see the home page', async function(){
    
    driver.wait(until.elementLocated(By.css('img[src="../assets/img/barn-2400x1600.avif"]')),1000);
    await new Promise(resolve => setTimeout(resolve,1000));

});



