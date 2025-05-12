import { test } from '@playwright/test';
import { SelectMenuPage } from '../pages/SelectMenuPage';

test('Select dropdown options', async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  await page.goto('https://demoqa.com/select-menu');
  await page.waitForLoadState('domcontentloaded');

  await selectMenuPage.selectDropdownValues();
});