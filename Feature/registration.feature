Feature: Registration of the new account

    #unhappy pass
    Scenario: Entering invalid date of birth 
        Given I'm on the home page
        When I click on signin
        Then I can see the login page
        When I click on Register your account
        Then I can see Customer registration page
        When I enter fullname
        * I enter the invalid date of birth as "12-08-2015"
        Then I see a message stated as "User should exceed 18 years"

    Scenario: with fullname field empty
        Given I'm on the home page
        When I click on signin
        Then I can see the login page
        When I click on Register your account
        Then I can see customer registration page
        When I leave fullname field empty as " "
        * I enter the date of birth as "30-08-2003"
        * I enter the address as "#123,street1,village1 "
        * I enter the city as "Mangalore"
        * I enter the state as "Karnataka"
        * I enter the country as "India"
        * I enter the pincode as "343546"
        When I enter the phone number "6765897654"
        * I enter the emailaddress as "abcd@gmail.com"
        * I enter the password as "Abcd@123"
        Then I click on register button
        And can see the message stated as "fullname is required"

    
    Scenario Outline: with streetaddress, pincode and password fields empty
        Given I'm on the home page
        When I click on signin
        Then I can see the login page
        When I click on Register your account
        Then I can see customer registration page
        When I enter fullname
        * I enter the date of birth as "30-08-2003"
        * I enter the address as "<srt_address>"
        * I enter the city as "Mangalore"
        * I enter the state as "Karnataka"
        * I enter the country as "India"
        * I enter the pincode as "<pin>"
        When I enter the phone number "6765897654"
        * I enter the emailaddress as "abcd@gmail.com"
        * I enter the password as "abcd@123"
        Then I click on register button
        And can see the message stated as "<msg>"

        Examples:
        | srt_address           | pin     |  msg|
        |                       | 343546  | street name is required  |
        |#456,street2,village1  |         | pincode is required      |
        |#342,street1,village2  | 343546  | password is required     |
        
     Scenario:Phone ,email and password with wrong and empty fields
        Given I'm on the home page
        When I click on signin
        Then I can see the login page
        When I click on Register your account
        Then I can see customer registration page
        When I enter fullname
        * I enter the date of birth as "30-08-2003"
        * I enter the address as "#657,street4,village7 "
        * I enter the city as "Mangalore"
        * I enter the state as "Karnataka"
        * I enter the country as "India"
        * I enter the pincode as "343444"
        When I enter the phone number "<phone>"
        * I enter the emailaddress as "<email>" 
        * I enter the password as "<pass>"
        Then I click on register button
        And can see the message stated as "<msg>"

        Examples:
        |phone      |email         |pass    |msg|
        |           |abcd@gmail.com|abcd@123|phone is required   |
        |6576       |abcd@gmail.com|abcd@123|invalid phone       |
        |9989098789 |              |abcd@123|email is required   |
        |9989098789 |adcgmail.com  |abcd@123|invalid email       |
        |9989098789 |abcd@gmail.com|        |password is reqiured|
        |9989098789 |abcd@gmail.com|abcd    |special character is needed in password|


    
     Scenario: Entering all the fields for successfull registration
        Given I'm on the login page
        When I click on new user
        Then I see customer registration page
        When I enter fullname 
        * I enter the date of birth as "30-08-2003"
        * I enter the address as "#123,street1,village1"
        * I enter the city as "Mangalore"
        * I enter the state as "Karnataka"
        * I enter the country  as "India"
        * I enter the pincode as "343546"
        When I enter the phone number "6765897654"
        Then I enter the emailaddress as "abcd@gmail.com"
        * I enter the password as "Abcd@123"
        Then I click on register button
        And I can see the login page 

      
        




