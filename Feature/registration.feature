Feature: Registration of the new account

    #unhappy pass

    Scenario Outline:entering invalid credentials
        Given I'm on the home page
        When I click on signin
        Then I can see the login page
        When I click on Register your account
        Then I can see customer registration page
        When I enter fullname as "<name>" 
        * I enter the date of birth as "<date>"
        * I enter the address as "<address>"
        * I enter the pincode as "<pin>"
        When I enter the phone number as "<number>" 
        * I enter the email address as "<email>" 
        * I enter the password as "<password>"
        Then I click on register button
        And I can see the message stated as "<msg>"

        Examples:
        |name   |date       |address                                         | pin    |number    | email          | password   |msg                            |
        |nisha  |30-05-2015 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 | nisha@gmail.com|Abcd@123    |Age should exceed 18 years     |
        |nisha  |           |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 | nisha@gmail.com|Abcd@123    |date of birth fields is empty  |
        |nisha  |12-04-2002 |                                                | 343546 |998948988 | nisha@gmail.com|Abcd@123    |address field is empty         |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  |        |998948988 | nisha@gmail.com| Abcd@123   |pincode field is empty         |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 1111   |998948988 | nisha@gmail.com| Abcd@123   |invalid pincode                |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 | nisha@gmail.com| Abcd123    |strong password needed         |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 | nisha@gmail.com|            |password field is empty        |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |          | nisha@gmail.com|  Abcd@123  |phone number field is empty    |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |99894     | nisha@gmail.com| Abcd@123   |invalid phone number           |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 |                | Abcd@123   |email field is empty           |
        |nisha  |12-04-2002 |#123,street1,village,Mangalore,Karnataka,India  | 343546 |998948988 | nisha@gmail    | Abcd@123   |invalid email                  |

        
    
    
     Scenario: Entering all the fields for successfull registration
        Given I'm on the login page
        When I click on new user
        Then I can see customer registration page
        When I enter fullname //
        * I enter the date of birth as "12-04-2002"
        * I enter the address as "#123,street1,village,Mangalore,Karnataka,India"
        * I enter the pincode as "343546"
        When I enter the phone number //
        * I enter the email address  //
        * I enter the password as "Abcd@123"
        Then I click on register button
        And I can see the message stated as "Registration successfull"
        * I'am navigated to the login page


      
        




