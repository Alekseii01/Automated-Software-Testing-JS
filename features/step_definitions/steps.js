const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('I am on the date picker page', async function() {
  await this.page.goto('https://demoqa.com/date-picker', { waitUntil: 'load' });
});

When('I select the date {string}', async function(dateString) {
  const targetDate = new Date(dateString);
  const day = targetDate.getDate().toString();
  const month = targetDate.getMonth(); // 0-11
  const year = targetDate.getFullYear().toString();
  
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

Given('I am on the slider page', async function() {
  await this.page.goto('https://demoqa.com/slider', { waitUntil: 'load' });
});

When('I move the slider to {int}', async function(targetValue) {
  const slider = await this.page.$('#sliderContainer input.range-slider');
  if (!slider) throw new Error('Slider not found');
  
  const sliderBoundingBox = await slider.boundingBox();
  if (!sliderBoundingBox) throw new Error('Could not get slider bounding box');
  
  const currentValueStr = await slider.getAttribute('value') || '0';
  const minStr = await slider.getAttribute('min') || '0';
  const maxStr = await slider.getAttribute('max') || '100';
  
  const currentValue = parseFloat(currentValueStr);
  const min = parseFloat(minStr);
  const max = parseFloat(maxStr);
  
  const percentage = (targetValue - min) / (max - min);
  const targetX = sliderBoundingBox.x + sliderBoundingBox.width * percentage;
  
  await this.page.mouse.move(
    sliderBoundingBox.x + sliderBoundingBox.width * (currentValue - min) / (max - min), 
    sliderBoundingBox.y + sliderBoundingBox.height / 2
  );
  await this.page.mouse.down();
  await this.page.mouse.move(targetX, sliderBoundingBox.y + sliderBoundingBox.height / 2);
  await this.page.mouse.up();
});

Then('the slider value should be {int} with a tolerance of {int}', async function(expectedValue, tolerance) {
  const slider = await this.page.$('#sliderContainer input.range-slider');
  if (!slider) throw new Error('Slider not found');
  
  const value = await slider.getAttribute('value') || '0';
  const actualValue = parseFloat(value);
  expect(Math.abs(actualValue - expectedValue)).toBeLessThanOrEqual(tolerance);
});

Given('I am on the checkbox page', async function() {
  await this.page.goto('https://demoqa.com/checkbox', { waitUntil: 'load' });
});

When('I expand all checkboxes', async function() {
  await this.page.click('button[title="Expand all"]');
});

When('I select the {string} checkbox', async function(checkboxName) {
  const checkboxSelector = `//span[contains(text(), "${checkboxName}")]/ancestor::label`;
  await this.page.click(checkboxSelector);
});

Then('the {string} checkbox should be checked', async function(checkboxName) {
  const result = await this.page.textContent('#result');
  expect(result?.toLowerCase()).toContain(checkboxName.toLowerCase());
});

Given('I am on the radio button page', async function() {
  await this.page.goto('https://demoqa.com/radio-button', { waitUntil: 'load' });
});

When('I select the {string} radio button', async function(option) {
  const selector = `//label[text()="${option}"]`;
  await this.page.click(selector);
});

Then('the text {string} should be displayed in the result', async function(expected) {
  const text = await this.page.textContent('.text-success');
  expect(text).toBe(expected);
});

Given('I am on the droppable page', async function() {
  await this.page.goto('https://demoqa.com/droppable', { waitUntil: 'load' });
});

When('I drag the element to the drop target', async function() {
  const sourceElement = await this.page.$('#draggable');
  if (!sourceElement) throw new Error('Source element not found');
  
  const targetElement = await this.page.$('#droppable');
  if (!targetElement) throw new Error('Target element not found');
  
  const sourceBoundingBox = await sourceElement.boundingBox();
  if (!sourceBoundingBox) throw new Error('Could not get source bounding box');
  
  const targetBoundingBox = await targetElement.boundingBox();
  if (!targetBoundingBox) throw new Error('Could not get target bounding box');

  await this.page.mouse.move(
    sourceBoundingBox.x + sourceBoundingBox.width / 2,
    sourceBoundingBox.y + sourceBoundingBox.height / 2
  );
  await this.page.mouse.down();
  await this.page.mouse.move(
    targetBoundingBox.x + targetBoundingBox.width / 2,
    targetBoundingBox.y + targetBoundingBox.height / 2
  );
  await this.page.mouse.up();
});

Then('the drop target should display {string}', async function(expectedText) {
  const text = await this.page.textContent('#droppable');
  expect(text).toContain(expectedText);
}); 