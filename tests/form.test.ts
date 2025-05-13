import { test } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test('Fill form and check result', async ({ page }) => {
  const formPage = new FormPage(page);
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });

  const randomName = `User${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `user${Date.now()}@test.com`;
  const randomAddress = `Address ${Math.floor(Math.random() * 1000)}`;

  await formPage.fillForm(randomName, randomEmail, randomAddress);
});