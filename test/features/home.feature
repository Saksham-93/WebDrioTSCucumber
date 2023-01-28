Feature: The Internet Website homepage

  Scenario Outline: As a user, I can open internet website

    Given I am open the page and load the url <homepageurl>
    Then I should see a header message with text <headertext>

    Examples:
      | homepageurl | headertext| 
      | http://the-internet.herokuapp.com/ | Welcome to the-internet |
      
