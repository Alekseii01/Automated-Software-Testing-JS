import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonPage';
import { blockAds } from '../utils/ad-blocker';

test.describe('Radio Button functionality', () => {
  const testCases = [
    { option: 'Yes', expected: 'Yes' },
    { option: 'Impressive', expected: 'Impressive' }
  ] as const;

  for (const { option, expected } of testCases) {
    test(`Select ${option} radio button and verify result`, async ({ page }) => {
      await blockAds(page);
      const radioButtonPage = new RadioButtonPage(page);
      await page.goto('https://demoqa.com/radio-button', { waitUntil: 'load' });
      
      await radioButtonPage.selectRadioButton(option);
      
      const result = await radioButtonPage.getSelectedRadioText();
      expect(result).toBe(expected);
    });
  }
}); 