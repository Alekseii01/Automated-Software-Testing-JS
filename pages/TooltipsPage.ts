import { Page } from '@playwright/test';

export class TooltipsPage {
  constructor(private page: Page) {}

  async hoverAndCheckTooltip(selector: string, expectedText: string): Promise<boolean> {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
    await this.page.hover(selector, { force: true });

    const tooltipMap: Record<string, string> = {
      '#toolTipButton': '#buttonToolTip',
      '#toolTipTextField': '#textFieldToolTip',
      '#texToolTopContainer a:nth-child(1)': '#contraryTexToolTip',
      '#texToolTopContainer a:nth-child(2)': '#sectionToolTip',
    };

    const tooltipId = tooltipMap[selector];
    const tooltip = this.page.locator(`${tooltipId} .tooltip-inner`);

    await tooltip.waitFor({ state: 'visible', timeout: 15000 });

    const text = await tooltip.textContent();
    return text?.trim() === expectedText;
  }
}
