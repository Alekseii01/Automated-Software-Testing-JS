const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld extends World {
  constructor(options) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({
      headless: false
    });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld); 