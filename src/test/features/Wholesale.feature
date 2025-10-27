#  @Wholesale
#  Feature: Create and Authorize Term Deposit Account in STDCUSTD screen
  
#  @TermDepositCreation
#   Scenario Outline: Maker creates a Term Deposit Account
#   Given User navigates to the application
#     When user enters the username and password
#         And click on signin button
#     # Then validate the home page title as "<HomePageTitle>"
#         And enter the Branch number as "<BranchNumber>"
#     When enters the function name as "<FunctionName>" and click on search button
#         And clicks on "New"
#         And enters the Customer Number "<CustomerNumber>"
#         And enters the Account Class "<AccountClass>"
#         And enters the Term Deposit Currency "<TDCurrency">
#         And clicks on P button
#         And clicks Ok on the override screen
#         And enters the Initial Deposit Amount "<InitialDepositAmount>"
#         And confirms the Pop Window by clicking Ok
#         And clicks on AddRow + in the Pay In Details section
#         And selects the Term Deposit Pay In Option from the dropdown "<TDPayIn>"
#         And enters the Percentage
#         And enters the Offset Account
#         And clicks on "Add Row (+)" in the Pay Out Details section
#         And selects the Payout Type Option from the dropdown
#         And enters the Percentage
#         And enters the Offset Account
#         And selects the Payout Component from the dropdown
#         And enters the Location
#         And enters the Media
#         And enters the Pool Code in the MIS tab
#         And clicks on the "Interest" tab
#         And clicks on "UDE Default"
#         And clicks on "Ok"
#         And clicks on "Compute" in the Main tab
#         And clicks on "Ok"
#         And clicks on "Save" and confirms with "Ok"
#     Then the system should display the override message
#         And the user accepts the overrides
#         And clicks on "Ok"
    
#      Examples:
# #     | BranchNumber  | FunctionName | CustomerNumber | AccountClass | TDCurrency | InitialDepositAmount |  TDPayIn |
#       | 100           | STDCUSTD     | 


#   @TermDepositAuthorization
#   Scenario Outline: Checker authorizes the Term Deposit Account
#     Given User navigates to the application
#     When user enters the username and password
#       And click on signin button
#     # Then validate the home page title as "<HomePageTitle>"
#       And enter the Branch number as "<BranchNumber>"
#     When enters the function name as "<FunctionName>" and click on search button
#         And searches by setting Authorization Status to "Unauthorized"
#         And opens the unauthorized record
#         And clicks on "Authorize"
#         And clicks on "Ok"
#     Then the record should be authorized successfully

#   @TermDepositRecreation
#   Scenario Outline: Maker recreates a Term Deposit Account
#     Given User navigates to the application
#     When user enters the username and password
#       And click on signin button
#     # Then validate the home page title as "<HomePageTitle>"
#       And enter the Branch number as "<BranchNumber>"
#     When enters the function name as "<FunctionName>" and click on search button
#         And clicks on "New"
#         And enters the Customer Number
#         And enters the Account Class
#         And enters the Term Deposit Currency
#         And clicks on "P"
#         And clicks "Ok" on the override screen
#         And enters the Initial Deposit Amount
#         And confirms the Pop Window by clicking "Ok"
#         And clicks on "Add Row (+)" in the Pay In Details section
#         And selects the Term Deposit Pay In Option from the dropdown
#         And enters the Percentage
#         And enters the Offset Account
#         And clicks on "Add Row (+)" in the Pay Out Details section

    