Feature: Slider
  As a user
  I want to be able to move the slider to a specific value
  So that I can adjust settings precisely
#TODO check slider position after and before moving
  Scenario: Moving slider to a specific value
    Given I am on the slider page
    When I move the slider to 75
    Then the slider value should be 75 with a tolerance of 1
