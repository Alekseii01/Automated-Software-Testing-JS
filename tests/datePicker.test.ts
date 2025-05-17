import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../pages/DatePickerPage';
import { blockAds } from '../utils/ad-blocker';

test('Select a specific date and verify it is displayed correctly', async ({ page }) => {
  await blockAds(page);
  const datePickerPage = new DatePickerPage(page);
  await page.goto('https://demoqa.com/date-picker', { waitUntil: 'load' });
  
  const targetDate = new Date('2025-03-15');
  const expectedFormattedDate = await datePickerPage.selectDate(targetDate);
  
  const actualDate = await datePickerPage.getSelectedDate();
  expect(actualDate).toBe(expectedFormattedDate);
}); 