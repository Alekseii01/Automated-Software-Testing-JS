const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
//TODO remove locator to the page object
Given('I am on the droppable page', async function() {
  await blockAds(this.page);
  await this.page.goto('https://demoqa.com/droppable', { waitUntil: 'load' });
});

When('I drag the element to the drop target', async function() {
  await this.page.waitForSelector('#draggable');
  await this.page.waitForSelector('#simpleDropContainer #droppable');

  const sourceElement = this.page.locator('#draggable');
  const targetElement = this.page.locator('#simpleDropContainer #droppable');

  const sourceBound = await sourceElement.boundingBox();
  const targetBound = await targetElement.boundingBox();

  await this.page.mouse.move(
    sourceBound.x + sourceBound.width / 2,
    sourceBound.y + sourceBound.height / 2
  );
  await this.page.mouse.down();
  await this.page.mouse.move(
    targetBound.x + targetBound.width / 2,
    targetBound.y + targetBound.height / 2
  );
  await this.page.mouse.up();
});

Then('the drop target should display {string}', async function(expectedText) {
  const dropTargetText = await this.page.locator('#simpleDropContainer #droppable > p').innerText();
  expect(dropTargetText.startsWith(expectedText)).toBeTruthy();
});
