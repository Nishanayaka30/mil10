import {Given,When,Then,BeforeAll,AfterAll} from "@cucumber/cucumber"
import {Builder,By,until,Key} from "selenium-webdriver"


let driver;

BeforeAll(async function(){

    driver=await new Builder().forBrowser('chrome').build();

});

When('I search a product {string}', async function(product){
    //await driver.get('https://ecommerce-site.com/home/user');
    const pdt = await driver.wait(until.elementLocated(By.css('[data-testid="search-query"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),product); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

And('I should see a message {string}', async function(){

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
    
    await driver.wait(until.elementLocated(By.css('[data-testid="product1"]'))).click(); 
    await new Promise(resolve => setTimeout(resolve,1000));

});

Then('I enter the number of product needed as {string}', async function(number){
    
    const qty = await driver.wait(until.elementLocated(By.css('[data-testid="quantity-input"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),number);
    await new Promise(resolve => setTimeout(resolve,1000));

});
Then("I click on the cart button", async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="cart"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
});



When("I click on the cart icon",async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="nav-cart"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
    
});

Then("I should see the items on the cart", async function(){
    const cartitem = await driver.wait(until.elementsLocated(By.css('.inserted_item')), 1000); 
    expect(cartitem.length).to.be.above(0, "no item found! Add the items to the cart");

});

Then('I remove the item from the cart', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="delete_item"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
    
});

Then('I click on proceed to checkout button', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="proceed-1"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));

});



 When('I enter the contact number as {string}', async function(phone){
    await driver.wait(until.elementLocated(By.css('[data-testid="contact_number"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),address);
    await new Promise(resolve => setTimeout(resolve,1000));
 });

 When('I enter the billing address as {string}', async function(address){
    await driver.wait(until.elementLocated(By.css('[data-testid="address"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),address);
    await new Promise(resolve => setTimeout(resolve,1000)); 

 });

When('I click on the shipping method as {string}', async function(pay_method){
    const dropdown = await driver.findElement(By.id('dropdown-id')).click(); 
    const selectitem = await driver.findElement(By.xpath(`//option[text()='${pay_method}']`)).click();
});


Then('I click on confirm button', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="confirm_send"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
});

Then('I\'m on the review page', async function(){
   // await driver.navigate().to('https://ecommerce-site.com/review');
    const pageTitle = await driver.getTitle();
    expect(pageTitle).to.include('Review'); 
});

Then('I should see the shipping and billing details',async function(){
    const orderitem = await driver.wait(until.elementsLocated(By.css('.shipping_item')), 10000); 
    expect(orderitem.length).to.be.above(0, 'No items found in the cart');

});

When('I click on the coupon button',async function(){
        await driver.wait(until.elementLocated(By.css('[data-testid="coupon_send"]'))).click();
        await new Promise(resolve => setTimeout(resolve,1000));
});

Then('I enter the coupon code as {string}', async function(code){
    await driver.wait(until.elementLocated(By.css('[data-testid="code_text"]'))).sendKeys(Key.chord(CONTROL,'a',Key.DELETE),code);
    await new Promise(resolve => setTimeout(resolve,1000));
});

Then('I remove the product from the cart', async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="remove_item"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
});
And("I again go to the address page", async function(){
    await driver.get('https://ecommerce-site.com/home/checkout');                                 
 
});



Then("I can see the review page with discount on the placed item",async function(){
    const placed_item = await driver.wait(until.elementsLocated(By.css('.placed_item')), 10000); 
    expect(placed_item.length).to.be.above(0, 'No items found in the cart');

});


Then("I click on place order button", async function(){
    await driver.wait(until.elementLocated(By.css('[data-testid="placed_order"]'))).click();
    await new Promise(resolve => setTimeout(resolve,1000));
});