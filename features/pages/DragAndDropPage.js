class DragAndDropPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/droppable';
    this.draggableElement = '#simpleDropContainer #draggable';
    this.dropTarget = '#simpleDropContainer #droppable';
    this.dropTargetText = '#simpleDropContainer #droppable p';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async getElementPosition(selector) {
    const element = await this.page.locator(selector);
    const boundingBox = await element.boundingBox();
    return {
      x: boundingBox.x,
      y: boundingBox.y
    };
  }

  async getDraggableElementPosition() {
    return await this.getElementPosition(this.draggableElement);
  }

  async getDropTargetPosition() {
    return await this.getElementPosition(this.dropTarget);
  }

  async dragElementToTarget() {
    await this.page.dragAndDrop(this.draggableElement, this.dropTarget);
  }

  async getDropTargetText() {
    return await this.page.locator(this.dropTargetText).innerText();
  }
}

module.exports = DragAndDropPage; 