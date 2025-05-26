const { BasePage } = require('./BasePage');

class TooltipsPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.locators = {
      tooltipButton: '#toolTipButton',
      tooltipTextField: '#toolTipTextField',
      contraryLink: '#texToolTopContainer a:nth-child(1)',
      sectionLink: '#texToolTopContainer a:nth-child(2)'
    };

    this.tooltipSelectors = {
      '#toolTipButton': '#buttonToolTip',
      '#toolTipTextField': '#textFieldToolTip',
      '#texToolTopContainer a:nth-child(1)': '#contraryTexToolTip',
      '#texToolTopContainer a:nth-child(2)': '#sectionToolTip',
    };
  }


  async hoverOverElement(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
    await this.page.hover(selector, { force: true });

    const tooltipId = this.tooltipSelectors[selector];
    const tooltip = this.page.locator(`${tooltipId} .tooltip-inner`);
    await tooltip.waitFor({ state: 'visible', timeout: 15000 });
    
    return tooltip;
  }

  async getTooltipText(selector) {
    const tooltip = await this.hoverOverElement(selector);
    const text = await tooltip.textContent();
    return text?.trim();
  }

  async checkTooltipText(selector, expectedText) {
    const tooltipText = await this.getTooltipText(selector);
    return tooltipText === expectedText;
  }
}

module.exports = { TooltipsPage };