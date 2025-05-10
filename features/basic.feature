Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: Login successful
    Given I have a defined step
    When I click on login button
    When I fill email
    When I fill password
    When I click on Login button
    Then The home page should be displayed
