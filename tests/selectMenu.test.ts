import { test } from '@playwright/test';
import { SelectMenuPage } from '../pages/SelectMenuPage';

test('Select dropdown options', async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  await page.goto('https://demoqa.com/select-menu', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  await page.waitForSelector('#selectMenuContainer', { timeout: 15000 });

  await selectMenuPage.selectDropdownValues();
});
