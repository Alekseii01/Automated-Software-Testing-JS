import { Page } from 'playwright';

export class CheckboxPage {
  constructor(private page: Page) {}

  async expandAll() {
    await this.page.click('button[title="Expand all"]');
  }

  async selectCheckbox(name: string) {
    const checkboxSelector = `//span[contains(text(), "${name}")]/ancestor::label`;
    await this.page.click(checkboxSelector);
  }

  async isCheckboxSelected(name: string) {
    const resultSelector = `.display-result:has-text("${name}")`;
    return await this.page.isVisible(resultSelector);
  }

  async getSelectedItems() {
    const result = await this.page.textContent('#result');
    return result;
  }
} 