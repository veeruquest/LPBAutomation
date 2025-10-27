@CIF_Creation
Feature: Create CIF for a customer



@CIF_Creation_Success
Scenario Outline: Validate the CIF creation process
  Given User navigates to the application
  When user enters the username and password
  And click on signin button
  Then valdiate the home page tite as "<HomePageTitle>"
  When enters the function name as "<FunctionName>" and click on search button
  And User clicks on New Tab
  And User clicks the button P
  And User enters Full Name "<FullName>"
  And User enters Short Name "<ShortName>"
  And User enters Customer Category "<CustomerCategory>"
  And User selects Male radio button
  And User enters Date of Birth "<DateOfBirth>"
  And User enters Nationality "<Nationality>"
  And User enters Address "<Address>"
  And User enters Country "<Country>"
  And User enters Language "<Language>"
  And User clicks on Additional tab
  And User enters Location "<Location>"
  And User enters Media "<Media>"
  And User clicks on Save button
  And User accepts PopUp Alert
  And User accepts accept Alert
  Then User validates success message 

Examples:
  | HomePageTitle                                       | FunctionName | FullName | ShortName | CustomerCategory | DateOfBirth | Nationality | Address          | Country | Language | Location | Media | 
  | Oracle Financial Services - ENG - Transaction Input | STDCIF       | Test2    | UAT02     | INDIVIDUAL       | 2000-03-03  | LS          | Maseru, Lesotho | LS      | ENG      | LRB      | MAIL  | 

   


@CIF_Authorization_Success
Scenario Outline: Validate the CIF authorization process
  Given User navigates to the application
  When user enters the username and password
  And click on signin button
  Then valdiate the home page tite as "<HomePageTitle>"
  When enters the function name as "<FunctionName>" and click on search button
  And User clicks enter query Tab
  And User enters customer number "<CustomerNumber>"
  And User clicks execute query Tab
  And User clicks on Authorize Tab
  And User accepts Authorize Alert
  Then User validates success msg 

Examples:
  | HomePageTitle                                       | FunctionName | CustomerNumber | 
  | Oracle Financial Services - ENG - Transaction Input | STDCIF       | 10369537       | 



