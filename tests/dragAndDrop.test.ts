import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragAndDropPage';
import { blockAds } from '../utils/ad-blocker';

test('Perform drag and drop operation and verify result', async ({ page }) => {
  await blockAds(page);
  const dragAndDropPage = new DragAndDropPage(page);
  await page.goto('https://demoqa.com/droppable', { waitUntil: 'load' });

  await dragAndDropPage.dragAndDrop();
  
  const isDropped = await dragAndDropPage.isElementDropped();
  expect(isDropped).toBe(true);
}); 