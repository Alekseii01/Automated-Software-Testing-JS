import { test, expect } from '@playwright/test';
import { TooltipsPage } from '../pages/TooltipsPage';

test('Check all tooltips', async ({ page }) => {
  const tooltipsPage = new TooltipsPage(page);
  await page.goto('https://demoqa.com/tool-tips', { waitUntil: 'load' });

  const isButtonTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipButton', 'You hovered over the Button');
  expect(isButtonTooltipValid).toBe(true);

  const isTextFieldTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipTextField', 'You hovered over the text field');
  expect(isTextFieldTooltipValid).toBe(true);
});