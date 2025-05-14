import { test } from '@playwright/test';
import { SelectMenuPage } from '../pages/SelectMenuPage';
import { blockAds } from '../utils/ad-blocker';

test('Select dropdown options', async ({ page }) => {
  await blockAds(page);
  const selectMenuPage = new SelectMenuPage(page);

  await page.goto('https://demoqa.com/select-menu', { waitUntil: 'load' });

  await page.waitForLoadState('domcontentloaded');

  await selectMenuPage.selectDropdownValues();
});