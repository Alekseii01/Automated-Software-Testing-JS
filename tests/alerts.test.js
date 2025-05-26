const { test, expect } = require('@playwright/test');
const { AlertsPage } = require('../pages/AlertsPage');
const { blockAds } = require('../utils/ad-blocker');

test.describe('Alerts Page Tests', () => {
  test('Check all alerts', async ({ page }) => {
    await blockAds(page);

    const alertsPage = new AlertsPage(page);
    await page.goto('https://demoqa.com/alerts', { waitUntil: 'load' });

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });
    await alertsPage.clickAlertButton();

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('This alert appeared after 5 seconds');
      await dialog.accept();
    });
    await alertsPage.clickTimerAlertButton();
    await page.waitForTimeout(6000);

    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('confirm');
      expect(dialog.message()).toBe('Do you confirm action?');
      await dialog.accept();
    });
    await alertsPage.clickConfirmButton();
    const confirmResult = await page.locator('#confirmResult').textContent();
    expect(confirmResult).toContain('You selected Ok');

    const testInput = 'Playwright Test';
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toBe('Please enter your name');
      await dialog.accept(testInput);
    });
    await alertsPage.clickPromptButton();
    const promptResult = await page.locator('#promptResult').textContent();
    expect(promptResult).toContain(`You entered ${testInput}`);
  });
});