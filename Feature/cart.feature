Feature: placing the order

Scenario: Browsing a unknown product 
    When I search a product "xyz"
    And I should see a message "product not found"

Scenario Outline: Adding high quantity of a item to the cart that exceeds the availability
    When I search a product "bottle"
    Then I click on a particular item
    * I enter the number of product needed as "<items>"
    * I click on the "cart" button
    And I should see a message "<msg>"

    Examples:
    |items      |msg                      |
    |99999999999| limited availabilty! item cannot be added  |

Scenario: Checking out with the empty cart
    When I search a product "bottle"
    Then I click on a particular item
    Then I enter the number of product needed as "1"
    * I click on the cart button
    And I should see a message "product added to the shopping cart"
    When I click on the cart icon
    Then I should see the items on the cart
    * I remove the item from the cart
    And I should see a message "item successfully removed from the cart" 
    Then I should see a message "no item found! Add the items to the cart"
   

Scenario: Invalid shipping information
    When I search a product "bottle"
    Then I click on a particular item
    * I enter the number of product needed as "5"
    * I click on the "cart" button
    And I should see a message "product added to the shopping cart"
    Then I click on the cart icon
    * I should see the items on the cart
    * I click on proceed to checkout button
    When I enter the contact number as "9987878766"
    * I enter the billing address as " "
    Then I click on the proceed to checkout button
    And I should see a message "Address fields empty"


Scenario: Invalid coupon code information
    When I enter the billing address as "#456,street2,village1 Mangalore Karnataka India-343546"
    Then I click on proceed to checkout button
    Then I click on shipping method as "cash on delivery"
    * I click on confirm button
    And I'm on the review page
    Then I should see the shipping and billing details
    When I click on the coupon button
    Then I enter the coupon code as "dhgewgdg3425"
    When I click on confirm button
    * I should see a message "invalid coupon code" 

Scenario: placing a order with different address
    Given I'm on the home page
    When I search a product "bottle" 
    Then I click on a particular item
    * I enter the number of product needed as "3"
    * I click on the "cart" button
    And I should see a message "product added to the shopping cart"
    Then I click on the cart icon
    Then I should see the items on the cart
    * I click on proceed to checkout button
    When I enter the contact number as "9987878766"
    When I enter the billing address as "#456,street2,village1 Mangalore Karnataka India-343546"
    Then I click on proceed to checkout button
    * I click on shipping method as "cash on delivery"
    * I click on confirm button
    Then I'm on the review page
    * I should see the shipping and billing details
    And I again go to the address page
    When I enter the contact number as "9987878766"
    When I enter the billing address as "#456,street1,village2 Bangalore Karnataka India-343546" 
    Then I click on proceed to checkout button
    * I click on shipping method as "cash on delivery"
    * I click on confirm button
    Then I'm on the review page
    * I should see the shipping and billing details
    When I click on confirm button
    And I should see the review page with discount on the placed item
    Then I click on place order button
    And I should see a message "Item placed successfully"
    



    







    
    


    



