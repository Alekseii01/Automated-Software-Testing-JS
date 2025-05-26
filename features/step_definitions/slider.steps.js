const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const SliderPage = require('../pages/SliderPage');

Given('I am on the slider page', async function() {
  await blockAds(this.page);
  this.sliderPage = new SliderPage(this.page);
  await this.sliderPage.navigate();
});

When('I check the slider position before moving', async function() {
  this.initialSliderPosition = await this.sliderPage.getSliderPosition();
  expect(this.initialSliderPosition.value).toBeDefined();
  expect(this.initialSliderPosition.position).toBeDefined();
});

When('I move the slider to {int}', async function(value) {
  await this.sliderPage.moveSliderTo(value);
});

When('I check the slider position after moving', async function() {
  this.finalSliderPosition = await this.sliderPage.getSliderPosition();
  expect(this.finalSliderPosition.value).toBeDefined();
  expect(this.finalSliderPosition.position).toBeDefined();
});

Then('the slider value should be {int} with a tolerance of {int}', async function(expectedValue, tolerance) {
  const actualValue = await this.sliderPage.getSliderValue();
  expect(actualValue).toBeGreaterThanOrEqual(expectedValue - tolerance);
  expect(actualValue).toBeLessThanOrEqual(expectedValue + tolerance);
});

Then('the slider position should have changed', async function() {
  expect(this.finalSliderPosition.value).not.toBe(this.initialSliderPosition.value);
  expect(this.finalSliderPosition.position).not.toBe(this.initialSliderPosition.position);
});
