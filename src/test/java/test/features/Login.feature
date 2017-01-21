Feature: Login Action
    Background:
      Given I open the application
    @Run
    Scenario: Successful Login with Valid Credentials
        Given User is on Home Page
        When User Navigate to LogIn Page
        And User enters Credentials to LogIn
            | testuser_1 | Test@153 |
        Then Message displayed Login Successfully
    @Run
    Scenario: Successful LogOut
        When User LogOut from the Application
        Then Message displayed LogOut Successfully

    @Run
    Scenario Outline: Create Login

        Given I open the application
        When I enter username"<username>"
        And I enter password"<password>"
        Then I enter title"<title>"
        And press submit
        Given I open the application
        Examples:
            | username | password | title |
            | Rob      | xyz1      | title1 |
            | Bob      | xyz1      | title2 |
            | Rob      | xyz1      | title1 |
            | Bob      | xyz1      | title2 |

