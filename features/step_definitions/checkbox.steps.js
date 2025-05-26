const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const CheckboxPage = require('../pages/CheckboxPage');

Given('I am on the checkbox page', async function() {
  await blockAds(this.page);
  this.checkboxPage = new CheckboxPage(this.page);
  await this.checkboxPage.navigate();
});

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
