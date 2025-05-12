import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test('Fill text box with random data and check result', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await page.goto('https://demoqa.com/text-box', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });

  await page.waitForSelector('#userName', { timeout: 10000 });

  const randomName = `User${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `user${Date.now()}@test.com`;
  const randomAddress = `Address ${Math.floor(Math.random() * 1000)}`;

  await textBoxPage.fillTextBox({
    name: randomName,
    email: randomEmail,
    address: randomAddress
  });
});
