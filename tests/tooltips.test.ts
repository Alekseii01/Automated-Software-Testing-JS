import { test, expect } from '@playwright/test';
import { TooltipsPage } from '../pages/TooltipsPage';

test('Check all tooltips', async ({ page }) => {
  const tooltipsPage = new TooltipsPage(page);

  await page.goto('https://demoqa.com/tool-tips', {
    timeout: 60000,
    waitUntil: 'domcontentloaded',
  });

  await page.waitForSelector('#toolTipButton', { timeout: 10000 });

  const isValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipButton', 'You hovered over the Button');
  expect(isValid).toBe(true);
});
