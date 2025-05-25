const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const DragAndDropPage = require('../pages/DragAndDropPage');

Given('I am on the droppable page', async function() {
  await blockAds(this.page);
  this.dragAndDropPage = new DragAndDropPage(this.page);
  await this.dragAndDropPage.navigate();
});

When('I drag the element to the drop target', async function() {
  await this.dragAndDropPage.dragElementToTarget();
});

Then('the drop target should display {string}', async function(expectedText) {
  const actualText = await this.dragAndDropPage.getDropTargetText();
  expect(actualText).toBe(expectedText);
});
