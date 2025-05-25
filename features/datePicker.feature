@datePicker
Feature: Date Picker
  As a user
  I want to be able to select a date using the date picker
  So that I can input dates easily
#TODO Check field value before editing

  @select
  Scenario Outline: Selecting a specific date
    Given I am on the date picker page
    When I select the date "<date>"
    Then the selected date should be displayed as "<expected>"

    Examples:
      | date       | expected    |
      | 2025-03-15 | 03/15/2025  |
      | 2024-12-25 | 12/25/2024  |
      | 2026-01-01 | 01/01/2026  |
