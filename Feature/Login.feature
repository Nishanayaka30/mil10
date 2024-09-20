
Feature: Loging in to the website

Scenario Outline: Unsuccessfull login with incorrect credentials
    Given I'm on the home page
    When I click on signin
    Then I should see the login page
    When I enter the email as "<email>"
    * I enter the password as "<pass>"
    * I click on the login button
    And I should see the message "<msg>"

    Examples:
    |email           |pass      | msg                      |
    |                |          | empty email or password  |
    |                |Abcd@123  | email is required        |
    |abcd@gmail.com  |          | password required        |
    |abcd@g.com      |Abcd@123  | invalid email or password|
    |abcd@gmail.com  |abcd@123  | invalid email or password|
    |                |          | empty email and password |

 
@api
Scenario: Requesting a reset password link
    Given I'm on the home page
    When I click on signin
    Then I should see the login page
    * I click on forgot password
    And I enter the email address as "nisha@gmail.com"
    Then I click on the "Set New Password" button
    And I should see the message "Password reset link has been sent to your email."


Scenario: successfully resetting the account password
    When I navigate to the set new password page
    When I enter the new password as "Abc@987"
    Then I click on the Submit button
    And I should see the message "resetting the password is successfull"
    Then I should see the login page

Scenario: Successfull login with valid credentials
    Given I'm on the home page
    When I click on signin
    Then I should see the login page
    When I enter the email as "nisha@gmail.com" 
    * I enter the password as "abc@987"
    * I click on the login button
    And I should see the home page









