import { test } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';
import { blockAds } from '../utils/ad-blocker';

test.describe('Alerts Page Tests', () => {
  test('Check all alerts', async ({ page }) => {
    await blockAds(page);
    
    const alertsPage = new AlertsPage(page);
    await page.goto('https://demoqa.com/alerts', { waitUntil: 'load' });

    await alertsPage.clickAlertButton();
    await alertsPage.clickTimerAlertButton();
    await alertsPage.clickConfirmButton();
    await alertsPage.clickPromptButton();
  });
});