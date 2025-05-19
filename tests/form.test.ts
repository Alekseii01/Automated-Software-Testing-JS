import { test } from '@playwright/test';
import { FormPage } from '../pages/FormPage';
import { blockAds } from '../utils/ad-blocker';

//TODO The test case "Check all alerts" is missing assertions to verify the expected behavior after interacting with
// the alert buttons. Without validations, the test only performs actions without confirming whether the application
// behaves correctly.
test('Fill form and check result', async ({ page }) => {
  await blockAds(page);

  const formPage = new FormPage(page);
  await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'load' });

  const randomName = `User${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `user${Date.now()}@test.com`;
  const randomAddress = `Address ${Math.floor(Math.random() * 1000)}`;

  await formPage.fillForm(randomName, randomEmail, randomAddress);
});
