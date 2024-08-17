import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {Builder,By,until,Key} from "selenium-webdriver"


let driver;

BeforeAll(async function(){

    driver=await new Builder().forBrowser('chrome').build();

});

When('I search a product {string}', async function(product){
    const pdt = await driver.wait(until.elementLocated(By.css('[data-testid="search-query"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),product); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

And('I can see a message as {string}', async function(){

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

Then('I click on a particular item',async function(){

    const pdt = await driver.wait(until.elementLocated(By.css('[data-testid="product1"]'))).click(); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('I enter the number of product needed as {string}', async function(){
    

});