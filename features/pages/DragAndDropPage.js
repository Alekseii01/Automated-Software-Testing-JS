class DragAndDropPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/droppable';
    this.draggableElement = '#draggable';
    this.dropTarget = '#droppable';
    this.dropTargetText = '#simpleDropContainer #droppable p';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async dragElementToTarget() {
    await this.page.dragAndDrop(this.draggableElement, this.dropTarget);
  }

  async getDropTargetText() {
    return await this.page.locator(this.dropTargetText).innerText();
  }
}

module.exports = DragAndDropPage; 