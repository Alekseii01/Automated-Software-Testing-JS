import { Page } from 'playwright';

export class DragAndDropPage {
  constructor(private page: Page) {}

  async dragAndDrop() {
    const sourceElement = await this.page.$('#draggable');
    if (!sourceElement) throw new Error('Source element not found');
    
    const targetElement = await this.page.$('#droppable');
    if (!targetElement) throw new Error('Target element not found');
    
    const sourceBoundingBox = await sourceElement.boundingBox();
    if (!sourceBoundingBox) throw new Error('Could not get source bounding box');
    
    const targetBoundingBox = await targetElement.boundingBox();
    if (!targetBoundingBox) throw new Error('Could not get target bounding box');

    await this.page.mouse.move(
      sourceBoundingBox.x + sourceBoundingBox.width / 2,
      sourceBoundingBox.y + sourceBoundingBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.mouse.move(
      targetBoundingBox.x + targetBoundingBox.width / 2,
      targetBoundingBox.y + targetBoundingBox.height / 2
    );
    await this.page.mouse.up();
  }

  async isElementDropped() {
    const text = await this.page.textContent('#droppable');
    return text ? text.includes('Dropped') : false;
  }
} 