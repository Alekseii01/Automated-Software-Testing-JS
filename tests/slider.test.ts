import { test, expect } from '@playwright/test';
import { SliderPage } from '../pages/SliderPage';
import { blockAds } from '../utils/ad-blocker';

test('Move the slider to a specific value and verify the result', async ({ page }) => {
  await blockAds(page);
  const sliderPage = new SliderPage(page);
  await page.goto('https://demoqa.com/slider', { waitUntil: 'load' });
  
  const targetValue = 75;
  await sliderPage.moveSliderToValue(targetValue);
  
  const actualValue = await sliderPage.getSliderValue();
  
  expect(Math.abs(actualValue - targetValue)).toBeLessThanOrEqual(1);
}); 