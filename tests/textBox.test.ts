import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import { blockAds } from '../utils/ad-blocker';
//TODO Checks missed
test('Fill text box with random data and check result', async ({ page }) => {
  await blockAds(page);
  const textBoxPage = new TextBoxPage(page);
  await page.goto('https://demoqa.com/text-box', { waitUntil: 'load' });

  const randomName = `User${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `user${Date.now()}@test.com`;
  const randomAddress = `Address ${Math.floor(Math.random() * 1000)}`;

  await textBoxPage.fillTextBox({
    name: randomName,
    email: randomEmail,
    address: randomAddress
  });
});
