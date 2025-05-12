import { test } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Alerts Page Tests', () => {
  test('Check all alerts', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await page.goto('https://demoqa.com/alerts', {
      timeout: 60000,
      waitUntil: 'domcontentloaded',
    });

    await page.waitForSelector('#alertButton', { timeout: 20000 });
    await alertsPage.clickAlertButton();

    await page.waitForSelector('#timerAlertButton', { timeout: 20000 });
    await alertsPage.clickTimerAlertButton();

    await page.waitForSelector('#confirmButton', { timeout: 20000 });
    await alertsPage.clickConfirmButton();

    await page.waitForSelector('#promtButton', { timeout: 20000 });
    await alertsPage.clickPromptButton();
  });
});
