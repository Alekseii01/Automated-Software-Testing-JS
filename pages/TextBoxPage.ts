import { Page } from 'playwright';

export class TextBoxPage {
  constructor(private page: Page) {}

  async fillTextBox(data: { name: string; email: string; address: string }) {
    await this.page.fill('#userName', data.name);
    await this.page.fill('#userEmail', data.email);
    await this.page.fill('#currentAddress', data.address);
    await this.page.click('#submit');
  }
}
