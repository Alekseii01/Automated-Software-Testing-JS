import { Page } from 'playwright';

export class RadioButtonPage {
  constructor(private page: Page) {}

  async selectRadioButton(option: 'Yes' | 'Impressive' | 'No') {
    const selector = `//label[text()="${option}"]`;
    await this.page.click(selector);
  }

  async getSelectedRadioText() {
    const text = await this.page.textContent('.text-success');
    return text;
  }
} 