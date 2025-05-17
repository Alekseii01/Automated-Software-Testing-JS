import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';
import { blockAds } from '../utils/ad-blocker';

const checkboxesToTest = ['Desktop', 'Documents', 'Downloads', 'Office', 'WorkSpace'];

for (const checkbox of checkboxesToTest) {
  test(`Select ${checkbox} checkbox and verify it is checked`, async ({ page }) => {
    await blockAds(page);
    const checkboxPage = new CheckboxPage(page);
    await page.goto('https://demoqa.com/checkbox', { waitUntil: 'load' });
    
    await checkboxPage.expandAll();
    
    await checkboxPage.selectCheckbox(checkbox);
    
    const result = await checkboxPage.getSelectedItems();
    expect(result?.toLowerCase()).toContain(checkbox.toLowerCase());
  });
} 