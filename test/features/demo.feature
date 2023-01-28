Feature: The Create Account Page Demo

  Scenario Outline: Test Create Account Form

    Given I am on the Account Page url <homepageurl>
    Then I verify the header message <headertext>
    When I enter firstname <firstname> and lastname <lastname>
    When I select country <country> and state <state>
    When I click continue
    Then I verify text <validationText> is present


    Examples:
      | homepageurl | headertext| firstname| lastname| country|state|validationText|
      | https://automationteststore.com/index.php?rt=account/create | CREATE ACCOUNT |Saksham|Sahani|India|Uttar Pradesh|Error: You must agree to the Privacy Policy!|