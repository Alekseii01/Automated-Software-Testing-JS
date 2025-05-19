const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');
//TODO remove locator to the page object
Given('I am on the date picker page', async function() {
  await blockAds(this.page);
  await this.page.goto('https://demoqa.com/date-picker', { waitUntil: 'load' });
});

When('I select the date {string}', async function(dateString) {
  const targetDate = new Date(dateString);
  const day = targetDate.getDate().toString();
  const month = targetDate.getMonth(); // 0-11
  const year = targetDate.getFullYear().toString();
//TODO create function fillDataAnd remove to the pageObject
  await this.page.click('#datePickerMonthYearInput');
  await this.page.selectOption('.react-datepicker__month-select', month.toString());
  await this.page.selectOption('.react-datepicker__year-select', year);

  const daySelector = day.length === 1
    ? `.react-datepicker__day--00${day}:not(.react-datepicker__day--outside-month)`
    : `.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`;

  await this.page.click(daySelector);
});

Then('the selected date should be displayed as {string}', async function(expectedDisplay) {
  const actualDate = await this.page.inputValue('#datePickerMonthYearInput');
  expect(actualDate).toBe(expectedDisplay);
});
