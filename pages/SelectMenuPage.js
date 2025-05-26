const { BasePage } = require('./BasePage');

class SelectMenuPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.locators = {
      selectValueDropdown: '#withOptGroup',
      selectValueMenu: '.css-26l3qy-menu',
      selectOneDropdown: '#selectOne',
      selectOneMenu: '.css-26l3qy-menu',
      oldSelectMenuDropdown: '#oldSelectMenu',
      carsDropdown: '#cars',
      multiSelectInput: '#react-select-4-input',
      multiSelectMenu: '.css-26l3qy-menu',
      multiSelectValues: '.css-1rhbuit-multiValue .css-12jo7m5'
    };
  }

  async selectFromSelectValue(optionText) {
    await this.page.locator(this.locators.selectValueDropdown).click();
    await this.page.locator(this.locators.selectValueMenu).locator(`text=${optionText}`).click();
  }
  
  async getSelectedSelectValue() {
    return this.page.locator(this.locators.selectValueDropdown).locator('[class*="singleValue"]').textContent();
  }

  async selectFromSelectOne(optionText) {
    await this.page.locator(this.locators.selectOneDropdown).click();
    await this.page.locator(this.locators.selectOneMenu).locator(`text=${optionText}`).click();
  }
  
  async getSelectedSelectOneValue() {
    return this.page.locator(this.locators.selectOneDropdown).locator('[class*="singleValue"]').textContent();
  }
  
  async selectFromOldSelectMenuByText(optionText) {
    const value = await this.page.locator(this.locators.oldSelectMenuDropdown)
      .locator('option', { hasText: optionText })
      .evaluate(option => option?.value);
      
    if (!value) throw new Error(`Option with text "${optionText}" not found`);
    await this.page.locator(this.locators.oldSelectMenuDropdown).selectOption(value);
  }
  
  async getSelectedOldSelectMenuValue() {
    return this.page.locator(this.locators.oldSelectMenuDropdown).locator('option:checked').textContent();
  }

  async selectFromMultiSelectDropDown(options) {
    for (const option of options) {
      await this.page.locator(this.locators.multiSelectInput).fill(option);
      await this.page.locator(this.locators.multiSelectMenu).locator(`text=${option}`).click();
    }
  }
  
  async getSelectedMultiSelectDropDownValues() {
    return this.page.locator(this.locators.multiSelectValues).allTextContents();
  }

  async selectMultipleCars(options) {
    await this.page.locator(this.locators.carsDropdown).waitFor({ state: 'visible' });
    for (const option of options) {
      await this.page.locator(this.locators.carsDropdown)
        .locator(`option[value="${option}"]`)
        .waitFor({ state: 'visible' });
    }
    await this.page.locator(this.locators.carsDropdown).selectOption(options);
  }
  
  async getSelectedCarsValues() {
    return this.page.locator(this.locators.carsDropdown).locator('option:checked').allTextContents();
  }
}

module.exports = { SelectMenuPage };