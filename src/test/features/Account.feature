@CreateAccount
 
Feature: Create an Account
 
        @accCreation2
        Scenario: Valdiate the user is able to create an account
            Given User navigates to the application
             When user enters the username and password
              And click on signin button
            Then valdiate the home page tite as "Oracle Financial Services - ENG - Transaction Input"
             When enters the function name as "STDCUSAC" and click on search button
             When Clicks on the New button
             When Enters Customer Number as '10369485'
             When Enters Currency as 'LSL'
             When Enters Account Class as '120'
             When Clicks on the Fetch button
             When  Clicks on the OK button
             When Enters the Location as '100'
             When Enters the Media as 'RTGS'
             When Clicks on the MIS Tab
             When Enters the Pool Code as 'DELTPOOL'