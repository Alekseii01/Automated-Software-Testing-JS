import { Page } from '@playwright/test';
export class TooltipsPage {
  constructor(private page: Page) {}

  async hoverAndCheckTooltip(selector: string, expectedText: string): Promise<boolean> {
    await this.page.hover(selector);

    const tooltip = this.page.locator('.tooltip-inner');

    await tooltip.waitFor({ timeout: 20000 });

    const text = await tooltip.textContent();
    return text?.trim() === expectedText;
  }
}
