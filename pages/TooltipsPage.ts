import { Page } from 'playwright';

export class TooltipsPage {
  constructor(private page: Page) {}

  async hoverAndCheckTooltip(selector: string, expectedText: string) {
    await this.page.hover(selector);
    const tooltip = await this.page.locator('.tooltip-inner').textContent();
    return tooltip === expectedText;
  }
}
