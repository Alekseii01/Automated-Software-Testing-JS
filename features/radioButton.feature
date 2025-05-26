@radioButton
Feature: Radio Buttons
  As a user
  I want to be able to select radio buttons
  So that I can choose a single option from a set

  @select
  Scenario Outline: Selecting radio buttons
    Given I navigate to the "radio button" page
    When I select the "<option>" radio button
    Then the text "<expected>" should be displayed in the result

    Examples:
      | option     | expected   |
      | Yes        | Yes        |
      | Impressive | Impressive | 