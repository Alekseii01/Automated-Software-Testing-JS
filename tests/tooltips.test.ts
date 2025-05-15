import { test, expect } from '@playwright/test';
import { TooltipsPage } from '../pages/TooltipsPage';
import { blockAds } from '../utils/ad-blocker';

test('Check all tooltips', async ({ page }) => {
  await blockAds(page);
  const tooltipsPage = new TooltipsPage(page);
  await page.goto('https://demoqa.com/tool-tips', { waitUntil: 'load' });

  const isButtonTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipButton', 'You hovered over the Button');
  expect(isButtonTooltipValid).toBe(true);

  const isTextFieldTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#toolTipTextField', 'You hovered over the text field');
  expect(isTextFieldTooltipValid).toBe(true);

  const isContraryTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#texToolTopContainer a:nth-child(1)', 'You hovered over the Contrary');
  expect(isContraryTooltipValid).toBe(true);

  const isSectionTooltipValid = await tooltipsPage.hoverAndCheckTooltip('#texToolTopContainer a:nth-child(2)', 'You hovered over the 1.10.32');
  expect(isSectionTooltipValid).toBe(true);
});
