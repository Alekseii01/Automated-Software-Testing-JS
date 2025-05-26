const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const DragAndDropPage = require('../pages/DragAndDropPage');

Given('I am on the droppable page', async function() {
  await blockAds(this.page);
  this.dragAndDropPage = new DragAndDropPage(this.page);
  await this.dragAndDropPage.navigate();
});

When('I check the element position before dragging', async function() {
  this.initialDraggablePosition = await this.dragAndDropPage.getDraggableElementPosition();
  this.initialDropTargetPosition = await this.dragAndDropPage.getDropTargetPosition();
  
  expect(this.initialDraggablePosition.x).toBeDefined();
  expect(this.initialDraggablePosition.y).toBeDefined();
  expect(this.initialDropTargetPosition.x).toBeDefined();
  expect(this.initialDropTargetPosition.y).toBeDefined();
});

When('I drag the element to the drop target', async function() {
  await this.dragAndDropPage.dragElementToTarget();
});

Then('the drop target should display {string}', async function(expectedText) {
  const actualText = await this.dragAndDropPage.getDropTargetText();
  expect(actualText).toBe(expectedText);
});

Then('the element position should have changed', async function() {
  const currentPosition = await this.dragAndDropPage.getDraggableElementPosition();
  
  expect(currentPosition.x).not.toBe(this.initialDraggablePosition.x);
  expect(currentPosition.y).not.toBe(this.initialDraggablePosition.y);
});
