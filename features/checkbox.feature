Feature: Checkboxes
  As a user
  I want to be able to select checkboxes
  So that I can choose multiple options
#TODO add key tag for the every feature file
  Scenario Outline: Selecting a checkbox
    Given I am on the checkbox page
    When I expand all checkboxes
    And I select the "<checkbox>" checkbox
    Then the "<checkbox>" checkbox should be checked

    Examples:
      | checkbox  |
      | Desktop   |
      | Documents |
      | Downloads |
      | Office    |
      | WorkSpace |
