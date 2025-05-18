Feature: Date Picker
  As a user
  I want to be able to select a date using the date picker
  So that I can input dates easily

  Scenario: Selecting a specific date
    Given I am on the date picker page
    When I select the date "2025-03-15"
    Then the selected date should be displayed as "03/15/2025"
