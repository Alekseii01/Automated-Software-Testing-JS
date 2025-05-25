@checkbox
Feature: Checkboxes
  As a user
  I want to be able to select checkboxes
  So that I can choose multiple options

  @select
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

  @multiple @select
  Scenario: Selecting multiple checkboxes
    Given I am on the checkbox page
    When I expand all checkboxes
    And I select the "Desktop" checkbox
    And I select the "Documents" checkbox
    And I select the "Downloads" checkbox
    Then the "desktop" checkbox should be checked
    And the "documents" checkbox should be checked
    And the "downloads" checkbox should be checked
