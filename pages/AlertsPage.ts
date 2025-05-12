import { Page } from 'playwright';

export class AlertsPage {
  constructor(private page: Page) {}

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
