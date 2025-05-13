import { test } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('Alerts Page Tests', () => {
  test('Check all alerts', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await page.goto('https://demoqa.com/alerts', { waitUntil: 'load' });

    await alertsPage.clickAlertButton();
    await alertsPage.clickTimerAlertButton();
    await alertsPage.clickConfirmButton();
    await alertsPage.clickPromptButton();
  });
});