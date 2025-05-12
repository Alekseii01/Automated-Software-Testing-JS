import { test, expect } from '@playwright/test';
import { TooltipsPage } from '../pages/TooltipsPage';

test('Check all tooltips', async ({ page }) => {
  const tooltipsPage = new TooltipsPage(page);
  await page.goto('https://demoqa.com/tool-tips');

  const isValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipButton', 'You hovered over the Button');
  expect(isValid).toBe(true);
});