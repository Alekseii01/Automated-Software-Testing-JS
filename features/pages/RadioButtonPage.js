class RadioButtonPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/radio-button';
    this.resultSelector = '.text-success';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async selectRadioButton(option) {
    const radioSelector = `//label[text()="${option}"]`;
    await this.page.locator(radioSelector).click();
  }

  async getResultText() {
    await this.page.waitForSelector(this.resultSelector);
    return await this.page.locator(this.resultSelector).innerText();
  }
}

module.exports = RadioButtonPage; 