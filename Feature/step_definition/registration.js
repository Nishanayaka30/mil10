import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {builder, By,until,Key} from "selenium-webdriver"
//import assert from "chai"
import { faker } from '@faker-js/faker';

let driver;
global.fname=faker.person.fullname();

BeforeAll(async function(){
    driver=await new builder().forBrowser('chrome').build();

});

Given('I\'m on the home page', async function(){
    await driver.get('https://practicesoftwaretesting.com/');

});

When ('I click on signin', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="nav-sign-in"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));


});

Then('I can see the login page', async function(){

    driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Login')]")),1000);
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

When("I click on Register your account", async function(){

    await driver.wait(until.elementLocated(By.linkText('Register your account')),1000).click();
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

Then("I can see customer registration page", async function(){
    driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Customer registration')]")),1000);
   
});

When('I enter fullname',async function(){
    const name=faker.person.fullName();
    const fullname=await driver.wait(until.elementLocated(By.css('[data-testid="first_name"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),name); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the invalid date of birth as {string}', async function(date){
    
    const dateofbirth = await driver.wait(until.elementLocated(By.css('[data-testid="dob"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),date); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

Then('I see the message stated as {string}',async function(message){

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


 When('I leave fullname field empty as {string}', async function(uname){
    await driver.wait(until.elementLocated(By.css('[data-testid="first_name"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),uname); 
    await new Promise(resolve => setTimeout(resolve,1000));

 });

When('I enter the date of birth as {string}', async function(dob){
    global.dob=await driver.wait(until.elementLocated(By.css('[data-testid="dob"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),dob);

 });
 
When('I enter the address as {string}', async function(adr){
    global.address=await driver.wait(until.elementLocated(By.css('[data-testid="address"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),adr); 

});

When('I enter the city as {string}', async function(city){
   
    await driver.wait(until.elementLocated(By.css('[data-testid="city"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),city); 

});

When('I enter the state as {string}', async function(state){
  
    await driver.wait(until.elementLocated(By.css('[data-testid="state"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),state); 
});


When('I enter the country as {string}', async function(ctry){
    
   await driver.wait(until.elementLocated(By.xpath("//select[@id='country']"))).click();
   global.country= await driver.wait(until.elementLocated(By.xpath("//select/option[@value='IN']"))).click();

});

When('I enter the pincode as {string}', async function(pin){

    global.postcode=await driver.wait(until.elementLocated(By.css('[data-testid="postcode"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),pin); 

});

When('I enter the phone number as {string}', async function(phone){


        await driver.wait(until.elementLocated(By.css('[data-testid="phone"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),phone); 
});

When('I enter the emailaddress as ',async function(email){
    global.sms_email=await driver.wait(until.elementLocated(By.css('[data-testid="email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email); 
     await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the password as {string}', async function(pass){
    await driver.wait(until.elementLocated(By.css('[data-testid="password"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),pass); 
    await new Promise(resolve => setTimeout(resolve,1000));
 });

Then('I click on register button', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="register-submit"]'))).click(); 
    await new Promise(resolve => setTimeout(resolve,1000));
    
 });





