const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const RadioButtonPage = require('../pages/RadioButtonPage');

Given('I am on the radio button page', async function() {
  await blockAds(this.page);
  this.radioButtonPage = new RadioButtonPage(this.page);
  await this.radioButtonPage.navigate();
});

When('I select the {string} radio button', async function(option) {
  await this.radioButtonPage.selectRadioButton(option);
});

Then('the text {string} should be displayed in the result', async function(expected) {
  const resultText = await this.radioButtonPage.getResultText();
  expect(resultText).toBe(expected);
}); 