@password_reset @api @ui
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

Scenario: entering invalid password
    Given I'm on the home page
    When I click on signin
    Then I can see the login page
    When I enter the email as "nisha@gmail.com"
    * I enter the password as "abc@"
    * I click on the login button
    And I can see the message stated as "invalid email or password"


@password_reset @api @ui
Scenario: Creating a new password
    * I click on forgot password
    And I enter the email address as "nisha@gmail.com"
    Then I click on the "Set New Password" button
    And I validate the message "Password reset link has been sent to your email."

#api request

#@api
When the system sends a GET request with the email address "nisha@gmail.com" to the password reset API
And I receive a token "877bjf647cgcdgcsk" from the API

#navigating to set new password

#@interface_interaction
When I navigate to the set new password page at "https://localhost:3000?token=877bjf647cgcdgcsk"
When I enter the new password as "Abc@987"
Then I click on the "Submit" button
Then I should be navigated to the login page
And I can see the login page



Scenario: Successfull login with valid credentials
    Given I'm on the home page
    When I click on signin
    Then I can see the login page
    When I enter the email as "nisha@gmail.com"
    * I enter the password as "abc@"
    * I click on the login button
    And I have logged in to the home page









