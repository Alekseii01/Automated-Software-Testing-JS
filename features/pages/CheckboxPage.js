class CheckboxPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/checkbox';
    this.expandAllButton = '.rct-option-expand-all';
    this.resultSelector = '.display-result';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async expandAllCheckboxes() {
    await this.page.click(this.expandAllButton);
  }

  async selectCheckbox(checkboxName) {
    const checkboxSelector = `//span[text()="${checkboxName}"]/ancestor::label//span[@class="rct-checkbox"]`;
    await this.page.locator(checkboxSelector).click();
  }

  async getResultText() {
    await this.page.waitForSelector(this.resultSelector);
    return await this.page.locator(this.resultSelector).innerText();
  }

  async isCheckboxChecked(checkboxName) {
    const resultText = await this.getResultText();
    return resultText.toLowerCase().includes(checkboxName.toLowerCase());
  }
}

module.exports = CheckboxPage; 