Feature: Loging in to the website

Scenario Outline: Unsuccessfull login with incorrect credentials
    Given I'm on the home page
    When I click on signin
    Then I can see the login page
    When I enter the email as "<email>"
    * I enter the password as "<pass>"
    * I click on the login button
    And I can see the message as "<msg>"
    Examples:
    |email           |pass      | msg                      |
    |                |Abcd@123  | email is required        |
    |abcd@gmail.com  |          | password required        |
    |abcd@g.com      |Abcd@123  | invalid email or password|
    |abcd@gmail.com  |abcd@123  | invalid email or password|

Scenario: creating new password
    Given I'm on the home page
    When I click on signin
    Then I can see the login page
    When I enter the email      #here the global variable is used from reg
    * I enter the password as "abc@"
    * I click on the login button
    And I can see the message stated as "invalid email or password"
    * I click on Forgot your password link
    When I enter the email 
    Then I click on the set new password button
    When I enter the new password as "Abc@123"   # use this 
    Then I click on submit button
    * I can see the login page


Scenario: Successfull login with valid credentials
    Given I'm on the home page
    When I click on signin
    Then I can see the login page
    When I enter the email      #here the global variable is used from reg
    * I enter the password      #take the value from this variable new password
    * I click on the login button
    And I have logged in to the home page









