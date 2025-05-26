@dragAndDrop
Feature: Drag and Drop
  As a user
  I want to be able to drag and drop elements
  So that I can interact with the UI

  @drag
  Scenario: Dragging an element to a drop target
    Given I navigate to the "droppable" page
    When I check the element position before dragging
    And I drag the element to the drop target
    Then the drop target should display "Dropped!"
    And the element position should have changed
