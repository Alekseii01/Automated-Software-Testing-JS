const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
const DatePickerPage = require('../pages/DatePickerPage');

Given('I am on the date picker page', async function() {
  await blockAds(this.page);
  this.datePickerPage = new DatePickerPage(this.page);
  await this.datePickerPage.navigate();
});

When('I check the date field value before editing', async function() {
  this.initialDateValue = await this.datePickerPage.getInitialDateValue();
  expect(this.initialDateValue).toBeDefined();
  expect(this.initialDateValue.length).toBeGreaterThan(0);
});

When('I select the date {string}', async function(dateString) {
  await this.datePickerPage.selectDate(dateString);
});

Then('the selected date should be displayed as {string}', async function(expectedDateString) {
  const selectedDate = await this.datePickerPage.getSelectedDate();
  expect(selectedDate).toBe(expectedDateString);
});

Then('the date field value should have changed', async function() {
  const currentDateValue = await this.datePickerPage.getSelectedDate();
  expect(currentDateValue).not.toBe(this.initialDateValue);
});
