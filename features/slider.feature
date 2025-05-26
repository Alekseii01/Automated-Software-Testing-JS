@slider
Feature: Slider
  As a user
  I want to be able to move the slider to a specific value
  So that I can adjust settings precisely
#TODO check slider position after and before moving

  @move
  Scenario Outline: Moving slider to a specific value
    Given I navigate to the "slider" page
    When I move the slider to <value>
    Then the slider value should be <value> with a tolerance of <tolerance>

    Examples:
      | value | tolerance |
      | 25    | 1         |
      | 50    | 1         |
      | 75    | 1         |
      | 100   | 1         |
