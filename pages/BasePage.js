class BasePage {
  constructor(page) {
    this.page = page;
  }

  async clickButton(buttonLocator, options = { force: false }) {
    await this.page.click(buttonLocator, { force: options.force });
  }
  
  async fillInput(inputLocator, value) {
    await this.page.fill(inputLocator, value);
  }
  
  async isElementVisible(selector) {
    return this.page.locator(selector).isVisible();
  }
  
  async getText(elementLocator) {
    return this.page.locator(elementLocator).textContent();
  }
  
  async hover(selector, options = {}) {
    await this.page.hover(selector, options);
  }
  
  async closeModal(closeButtonSelector) {
    if (await this.isElementVisible(closeButtonSelector)) {
      await this.clickButton(closeButtonSelector);
    }
  }
}

module.exports = { BasePage };