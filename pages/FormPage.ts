import { Page } from 'playwright';

export class FormPage {
  constructor(private page: Page) {}
//TODO move locators into the constructor.
  async fillForm(name: string, email: string, address: string) {
    await this.page.fill('#firstName', name);
    await this.page.fill('#userEmail', email);
    await this.page.fill('#currentAddress', address);
    await this.page.click('#submit');
  }
}
