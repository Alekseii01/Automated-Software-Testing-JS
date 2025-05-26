const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/FormPage');
const { blockAds } = require('../utils/ad-blocker');
const { formTestDataSets } = require('../utils/formTestData');

test.describe.serial('Data-Driven Form Tests', () => {
  formTestDataSets.forEach((testCase, index) => {
    test(`Form Test Case ${index + 1}: ${testCase.name}`, async ({ page }) => {
      await blockAds(page);
      const formPage = new FormPage(page);
      await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'networkidle' });

      await formPage.fillCompleteForm(testCase.data);
      
      await expect(page.locator('.modal-title')).toBeVisible({ timeout: 10000 });
      await expect(page.locator('.modal-title')).toHaveText('Thanks for submitting the form');

      const modalBodyText = await formPage.getModalBodyText();
      expect(modalBodyText).toContain(testCase.data.name);
      expect(modalBodyText).toContain(testCase.data.lastName);
      expect(modalBodyText).toContain(testCase.data.email);
      expect(modalBodyText).toContain(testCase.data.mobileNumber);
      expect(modalBodyText).toContain(testCase.data.gender);
      expect(modalBodyText).toContain(testCase.data.currentAddress);
      
      await page.locator('#closeLargeModal').click();
      
      await page.waitForSelector('.modal', { state: 'detached', timeout: 5000 });
    });
  });
});