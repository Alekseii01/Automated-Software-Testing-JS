const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const SliderPage = require('../pages/SliderPage');

Given('I am on the slider page', async function() {
  await blockAds(this.page);
  this.sliderPage = new SliderPage(this.page);
  await this.sliderPage.navigate();
});

When('I move the slider to {int}', async function(value) {
  await this.sliderPage.moveSliderTo(value);
});

Then('the slider value should be {int} with a tolerance of {int}', async function(expectedValue, tolerance) {
  const actualValue = await this.sliderPage.getSliderValue();
  expect(actualValue).toBeGreaterThanOrEqual(expectedValue - tolerance);
  expect(actualValue).toBeLessThanOrEqual(expectedValue + tolerance);
});
