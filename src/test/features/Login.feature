@login

Feature: Create an Account

        @accCreation1
        Scenario: Valdiate the user is able to create an account
            # Given User navigates to the application
            #  When user enters the username and password
            #   And click on signin button
            #  Then valdiate the home page tite as "Oracle Financial Services - ENG - Transaction Input"
            #  When enters the function name as "STDCIF" and click on search button
             When clicks on EnterQuery Tab
              And User enters AccountNumber "<AccountNumber>"
             When User clicks on ExecuteQuery Tab
             Then validate query results are not displayed











