const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');

Given('I am on the checkbox page', async function() {
  await blockAds(this.page);
  await this.page.goto('https://demoqa.com/checkbox', { waitUntil: 'load' });
});

When('I expand all checkboxes', async function() {
  // Клик на кнопку раскрытия всего дерева
  await this.page.click('.rct-option-expand-all');
});

When('I select the {string} checkbox', async function(checkboxName) {
  // Поиск и клик на нужный чекбокс по тексту лейбла
  const checkboxSelector = `//span[text()="${checkboxName}"]/ancestor::label//span[@class="rct-checkbox"]`;
  await this.page.locator(checkboxSelector).click();
});

Then('the {string} checkbox should be checked', async function(checkboxName) {
  // Проверка, что чекбокс отмечен (через текст в результате)
  const resultSelector = '.display-result';
  await this.page.waitForSelector(resultSelector);
  
  const resultText = await this.page.locator(resultSelector).innerText();
  expect(resultText.toLowerCase()).toContain(checkboxName.toLowerCase());
}); 