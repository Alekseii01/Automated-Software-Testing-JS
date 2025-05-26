const { test, expect } = require('@playwright/test');
const { SelectMenuPage } = require('../pages/SelectMenuPage');
const { blockAds } = require('../utils/ad-blocker');

test('Select dropdown options', async ({ page }) => {
  await blockAds(page);
  const selectMenuPage = new SelectMenuPage(page);

  await page.goto('https://demoqa.com/select-menu', { waitUntil: 'load' });
  await page.waitForLoadState('domcontentloaded');

  await selectMenuPage.selectFromSelectValue('Group 2, option 1');
  const selectValue = await selectMenuPage.getSelectedSelectValue();
  expect(selectValue?.trim()).toBe('Group 2, option 1');

  await selectMenuPage.selectFromSelectOne('Other');
  const selectOneValue = await selectMenuPage.getSelectedSelectOneValue();
  expect(selectOneValue?.trim()).toBe('Other');

  await selectMenuPage.selectFromOldSelectMenuByText('Green');
  const oldSelectValue = await selectMenuPage.getSelectedOldSelectMenuValue();
  expect(oldSelectValue?.trim()).toBe('Green');

  await selectMenuPage.selectFromMultiSelectDropDown(['Green', 'Blue']);
  const multiSelected = await selectMenuPage.getSelectedMultiSelectDropDownValues();
  expect(multiSelected).toEqual(expect.arrayContaining(['Green', 'Blue']));

  await selectMenuPage.selectMultipleCars(['volvo', 'saab']);
  const carsValues = await selectMenuPage.getSelectedCarsValues();
  expect(carsValues).toEqual(expect.arrayContaining(['Volvo', 'Saab']));
});