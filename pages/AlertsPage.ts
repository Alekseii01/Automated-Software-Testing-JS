import { Page } from 'playwright';

export class AlertsPage {
  constructor(private page: Page) {}
//TODO move locators into the constructor and create a universal click function that accepts a locator as a  parameter.
// For example create BasePage.ts with function
//  async clickButton(buttonLocator: string) {
//     await this.page.click(buttonLocator);
//   }

  async clickAlertButton() {
    await this.page.click('#alertButton');
  }

  async clickTimerAlertButton() {
    await this.page.click('#timerAlertButton');
  }

  async clickConfirmButton() {
    await this.page.click('#confirmButton');
  }

  async clickPromptButton() {
    await this.page.click('#promtButton');
  }
}
