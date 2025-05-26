const { test, expect } = require('@playwright/test');
const { TooltipsPage } = require('../pages/TooltipsPage');
const { blockAds } = require('../utils/ad-blocker');

test('Check tooltip functionality using combined check method', async ({ page }) => {
  await blockAds(page);
  const tooltipsPage = new TooltipsPage(page);
  await page.goto('https://demoqa.com/tool-tips', { waitUntil: 'load' });

  const isButtonTooltipValid = await tooltipsPage.checkTooltipText('#toolTipButton', 'You hovered over the Button');
  expect(isButtonTooltipValid).toBe(true);

  const isTextFieldTooltipValid = await tooltipsPage.checkTooltipText('#toolTipTextField', 'You hovered over the text field');
  expect(isTextFieldTooltipValid).toBe(true);

  const isContraryTooltipValid = await tooltipsPage.checkTooltipText('#texToolTopContainer a:nth-child(1)', 'You hovered over the Contrary');
  expect(isContraryTooltipValid).toBe(true);

  const isSectionTooltipValid = await tooltipsPage.checkTooltipText('#texToolTopContainer a:nth-child(2)', 'You hovered over the 1.10.32');
  expect(isContraryTooltipValid).toBe(true);
});