const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { blockAds } = require('../../utils/ad-blocker.js');

Given('I am on the slider page', async function() {
  await blockAds(this.page);
  await this.page.goto('https://demoqa.com/slider', { waitUntil: 'load' });
});

When('I move the slider to {int}', async function(targetValue) {
  const slider = await this.page.locator('.range-slider');
  const sliderBoundingBox = await slider.boundingBox();
  
  // Получаем текущие значения слайдера
  const min = parseInt(await slider.getAttribute('min') || '0');
  const max = parseInt(await slider.getAttribute('max') || '100');
  
  // Вычисляем соответствующую позицию на слайдере
  const percentage = (targetValue - min) / (max - min);
  const xPosition = sliderBoundingBox.x + sliderBoundingBox.width * percentage;
  
  // Кликаем в соответствующую позицию на слайдере
  await this.page.mouse.move(sliderBoundingBox.x + sliderBoundingBox.width / 2, sliderBoundingBox.y + sliderBoundingBox.height / 2);
  await this.page.mouse.down();
  await this.page.mouse.move(xPosition, sliderBoundingBox.y + sliderBoundingBox.height / 2);
  await this.page.mouse.up();
});

Then('the slider value should be {int} with a tolerance of {int}', async function(expectedValue, tolerance) {
  // Проверяем значение слайдера
  const sliderValue = await this.page.locator('#sliderValue').inputValue();
  const actualValue = parseInt(sliderValue);
  
  // Проверяем, что фактическое значение находится в пределах допустимой погрешности
  expect(Math.abs(actualValue - expectedValue)).toBeLessThanOrEqual(tolerance);
}); 