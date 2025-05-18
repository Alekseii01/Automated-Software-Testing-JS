import { Page } from 'playwright';

export class SelectMenuPage {
  constructor(private page: Page) {}
  private get selectValueDropdown() { return this.page.locator('#withOptGroup'); }
  private get selectValueMenu() { return this.page.locator('.css-26l3qy-menu'); }
  private get selectOneDropdown() { return this.page.locator('#selectOne'); }
  private get selectOneMenu() { return this.page.locator('.css-26l3qy-menu'); }
  private get oldSelectMenuDropdown() { return this.page.locator('#oldSelectMenu'); }
  private get carsDropdown() { return this.page.locator('#cars'); }
  private get multiSelectInput() { return this.page.locator('#react-select-4-input'); }
  private get multiSelectMenu() { return this.page.locator('.css-26l3qy-menu'); }
  private get multiSelectValues() { return this.page.locator('.css-1rhbuit-multiValue .css-12jo7m5'); }

  async selectFromSelectValue(optionText: string) {
    await this.selectValueDropdown.click();
    await this.selectValueMenu.locator(`text=${optionText}`).click();
  }
  async getSelectedSelectValue() {
    return this.selectValueDropdown.locator('[class*="singleValue"]').textContent();
  }

  async selectFromSelectOne(optionText: string) {
    await this.selectOneDropdown.click();
    await this.selectOneMenu.locator(`text=${optionText}`).click();
  }
  async getSelectedSelectOneValue() {
    return this.selectOneDropdown.locator('[class*="singleValue"]').textContent();
  }

  async selectFromOldSelectMenuByText(optionText: string) {
    const value = await this.oldSelectMenuDropdown.locator('option', { hasText: optionText }).evaluate(
      (option: Element | null) => (option as HTMLOptionElement)?.value
    );
    if (!value) throw new Error(`Option with text "${optionText}" not found`);
    await this.oldSelectMenuDropdown.selectOption(value);
  }
  async getSelectedOldSelectMenuValue() {
    return this.oldSelectMenuDropdown.locator('option:checked').textContent();
  }

  async selectFromMultiSelectDropDown(options: string[]) {
    for (const option of options) {
      await this.multiSelectInput.fill(option);
      await this.multiSelectMenu.locator(`text=${option}`).click();
    }
  }
  async getSelectedMultiSelectDropDownValues() {
    return this.multiSelectValues.allTextContents();
  }

  async selectMultipleCars(options: string[]) {
    await this.carsDropdown.waitFor({ state: 'visible' });
    for (const option of options) {
      await this.carsDropdown.locator(`option[value="${option}"]`).waitFor({ state: 'visible' });
    }
    await this.carsDropdown.selectOption(options);
  }
  async getSelectedCarsValues() {
    return this.carsDropdown.locator('option:checked').allTextContents();
  }
}
