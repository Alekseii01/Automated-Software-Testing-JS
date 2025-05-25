const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const CheckboxPage = require('../pages/CheckboxPage');

// TODO The step text "I am on the checkbox page" could be made clearer by explicitly stating that the user is
//  navigating to a specific URL, such as "I log in to the checkbox page at https://demoqa.com/checkbox." Additionally,
//  to improve reusability and maintainability, it is recommended to create a base step definition file
//  (e.g., baseStepDefinition.js) where this step can be generalized to handle navigation to different URLs dynamically.
//  This would allow the same step to be used across multiple pages by simply passing the desired URL as a parameter.
Given('I am on the checkbox page', async function() {
  await blockAds(this.page);
  this.checkboxPage = new CheckboxPage(this.page);
  await this.checkboxPage.navigate();
});

//TODO Remove all locators to the pages.ts files
When('I expand all checkboxes', async function() {
  await this.checkboxPage.expandAllCheckboxes();
});

When('I select the {string} checkbox', async function(checkboxName) {
  await this.checkboxPage.selectCheckbox(checkboxName);
});

Then('the {string} checkbox should be checked', async function(checkboxName) {
  const isChecked = await this.checkboxPage.isCheckboxChecked(checkboxName);
  expect(isChecked).toBeTruthy();
});
