import { test } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test('Fill form and check result', async ({ page }) => {
  const formPage = new FormPage(page);

  await page.goto('https://demoqa.com/automation-practice-form', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });

  await page.waitForSelector('#firstName', { timeout: 10000 });

  const randomName = `User${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `user${Date.now()}@test.com`;
  const randomAddress = `Address ${Math.floor(Math.random() * 1000)}`;

  await formPage.fillForm(randomName, randomEmail, randomAddress);
});
