import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {builder, By,until,Key} from "selenium-webdriver"
import { faker } from '@faker-js/faker';

let driver;


BeforeAll(async function(){
    driver=await new builder().forBrowser('chrome').build();

});

Given('I\'m on the home page', async function(){
    await driver.get('https://ecommerce-site.com/home');

});

When ('I click on signin', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="nav-sign-in"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));


});

Then('I should see the login page', async function(){

    driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Login')]")),1000);
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

When("I click on Register your account", async function(){

    await driver.wait(until.elementLocated(By.linkText('Register your account')),1000).click();
    await new Promise(resolve => setTimeout(resolve,1000));
   
});

Then("I should see customer registration page", async function(){
    driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Customer registration')]")),1000);
   
});

When('I enter fullname as {string}',async function(name){

    const fullname=await driver.wait(until.elementLocated(By.css('[data-testid="first_name"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),name); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the date of birth as {string}', async function(date){
    
    const dateofbirth = await driver.wait(until.elementLocated(By.css('[data-testid="dob"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),date); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the address as {string}', async function(adr){
    const address=await driver.wait(until.elementLocated(By.css('[data-testid="address"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),adr); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the pincode as {string}', async function(pin){

    const postcode=await driver.wait(until.elementLocated(By.css('[data-testid="postcode"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),pin); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the phone number as {string}', async function(phone){

    await driver.wait(until.elementLocated(By.css('[data-testid="phone"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),phone); 
    await new Promise(resolve => setTimeout(resolve,1000));
});

When('I enter the emailaddress as ',async function(email){
    await driver.wait(until.elementLocated(By.css('[data-testid="email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email); 
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


When("I enter fullname", async function(){
    const fname=faker.person.fullname();
    const fullname=await driver.wait(until.elementLocated(By.css('[data-testid="first_name"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),fname); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

When("I enter the phone number", async function(){
    const fnumber=faker.phone.number();
    await driver.wait(until.elementLocated(By.css('[data-testid="phone"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),fnumber); 
    await new Promise(resolve => setTimeout(resolve,1000));

});
 
When('I enter the email address', async function(){
    const email = faker.internet.email();
    await driver.wait(until.elementLocated(By.css('[data-testid="email"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),email); 
    await new Promise(resolve => setTimeout(resolve,1000));


});

Then("I'm navigated to the login page", async function(){

    driver.wait(until.elementLocated(By.xpath("//h3[contains(text(),'Login')]")),1000);
    await new Promise(resolve => setTimeout(resolve,1000));

});


