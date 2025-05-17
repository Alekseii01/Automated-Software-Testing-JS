Feature: Drag and Drop
  As a user
  I want to be able to drag and drop elements
  So that I can interact with the UI

  Scenario: Dragging an element to a drop target
    Given I am on the droppable page
    When I drag the element to the drop target
    Then the drop target should display "Dropped" 