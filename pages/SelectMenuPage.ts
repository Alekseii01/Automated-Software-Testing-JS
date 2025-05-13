import { Page } from 'playwright';

export class SelectMenuPage {
  constructor(private page: Page) {}

  async selectDropdownValues() {
    await this.page.click('#selectOne');
    await this.page.locator('.css-26l3qy-menu').locator('text=Other').click();
    await this.page.selectOption('#oldSelectMenu', 'Green');

    const options = await this.page.locator('#cars option').allTextContents();

    await this.page.waitForSelector('#cars', { state: 'visible' });

    const volvoOption = this.page.locator('#cars option[value="volvo"]');
    const saabOption = this.page.locator('#cars option[value="saab"]');

    await volvoOption.waitFor({ state: 'visible' });
    await saabOption.waitFor({ state: 'visible' });

    await this.page.selectOption('#cars', ['volvo', 'saab']);
  }
}
