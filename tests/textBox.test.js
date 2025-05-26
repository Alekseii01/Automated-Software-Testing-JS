const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../pages/TextBoxPage');
const { blockAds } = require('../utils/ad-blocker');
const { textBoxTestDataSets } = require('../utils/textBoxTestData');

test.describe('Data-Driven Text Box Tests', () => {
  textBoxTestDataSets.forEach((testCase, index) => {
    test(`Test Case ${index + 1}: ${testCase.name}`, async ({ page }) => {
      await blockAds(page);
      const textBoxPage = new TextBoxPage(page);
      await page.goto('https://demoqa.com/text-box', { waitUntil: 'load' });

      await textBoxPage.fillTextBox(testCase.data);
      
      const outputData = await textBoxPage.getOutputText();
      
      expect(outputData.name).toContain(testCase.data.name);
      expect(outputData.email).toContain(testCase.data.email);
      expect(outputData.currentAddress).toContain(testCase.data.address);
      expect(outputData.permanentAddress).toContain(testCase.data.permanentAddress);
    });
  });
});