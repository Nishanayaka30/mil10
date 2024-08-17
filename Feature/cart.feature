Feature: placing the order

Scenario: Browsing a unknown product 
    When I search a product "xyz"
    And I can see a message stated as "product not found"

Scenario Outline: Adding negative and high quantity of a item to the cart that exceeds the availability
    When I search a product "bottle"
    Then I click on a particular item
    * I enter the number of product needed as "<items>"
    * I add the product to the cart
    And I see a message stated as "<msg>"

    Examples:
    |items      |msg                      |
    |0          | No item is added        |
    |99999999999| limited availabilty! item cannot be added  |

Scenario: Checking out with the empty cart
    Then I enter the number of product needed as "1"
    * I add the product to the cart
    And I see a message stated as "product added to the shopping cart"
    When I click on the cart icon
    Then I can see the items on the cart
    * I remove the item from the cart
    And I see a message stated as "item successfully removed from the cart" 
    Then I click on the proceed to checkout button
    And I see the message stated as "No item is added to the cart"

Scenario: Invalid shipping information
    Given I'm on the home page
    When I search a product "bottle"
    Then I click on a particular item
    * I enter the number of product needed as "5"
    * I add the product to the cart
    And I see a message stated as "product added to the shopping cart"
    Then I click on the cart icon
    * I can see the items on the cart
    * I click on the proceed to checkout button
    When I enter the billing address with empty fields as " "
    Then I click on the proceed to checkout button
    And I see the message stated as "Address fields empty"

Scenario Outline: Entering bank transfer shipping method details with invalid credentials
    When I enter the billing address
    Then I click on the proceed to checkout button
    * I click on the shipping method as "bank transfer"
    When I enter the bank name as "<bank_name>" and "<branch>"
    * I enter the Account holder name "<account_name>"
    * I enter the Account number as "<holder_number>"
    Then I click on confirm button
    And I see the message stated as "<msg>"

    Examples:
    |bank_name           |branch    |account_name|account_number|msg|
    |STATE BANK          |MANGALORE | Akshara    |90898987656   |invalid bank name|
    |STATE BANK OF INDIA |MANGALORE |  Aksh      |90898987656   |invalid name|
    |STATE BANK OF INDIA |MANGALORE |  Akshara   |23234444444   |invalid account number|

Scenario: Invalid coupon code information
    Then I click on shipping method as "cash on delivery"
    * I click on confirm button
    Then I'm on the review page
    * I can see the shipping and billing details
    When I click on the coupon button
    Then I enter the coupon code as "dhgewgdg3425"
    When I click on confirm button
    * I see a message stated as "invalid coupon code" 

Scenario: placing a order with all valid credentials
    Given I'm on the home page
    When I search a product "bottle" 
    Then I click on a particular item
    * I enter the number of product needed as "5"
    * I add the product to the cart
    And I see a message stated as "product added to the shopping cart"
    Then I click on the cart icon
    * I click on proceed to checkout button
    * I see a message stated as "item out-of-stock"
    * I remove the product from the cart
    * I go to the home page
    * I select a available item
    * add available item to the cart
    And I see a message stated as "product added to the shopping cart"
    Then I click on the cart icon
    * I can see the products added to the cart
    * I click on proceed to checkout button
    When I enter the billing address
    Then I click on proceed to checkout button
    * I click on shipping method as "cash on delivery"
    * I click on confirm button
    Then I'm on the review page
    * I can see the shipping and billing details
    When I click on the coupon button
    Then I enter the coupon code as "abc453cdf"
    When I click on confirm button
    And I can see the review page with discount on the placed item
    Then I click on place order button
    And I see the message stated as "Item placed successfully "

    







    
    


    



