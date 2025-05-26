@slider
Feature: Slider
  As a user
  I want to be able to move the slider to a specific value
  So that I can adjust settings precisely

  @move
  Scenario Outline: Moving slider to a specific value
    Given I navigate to the "slider" page
    When I check the slider position before moving
    And I move the slider to <value>
    And I check the slider position after moving
    Then the slider value should be <value> with a tolerance of <tolerance>
    And the slider position should have changed

    Examples:
      | value | tolerance |
      | 25    | 1         |
      | 50    | 1         |
      | 75    | 1         |
      | 100   | 1         |
