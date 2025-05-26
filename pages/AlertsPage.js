const { BasePage } = require('./BasePage');

class AlertsPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.locators = {
      alertButton: '#alertButton',
      timerAlertButton: '#timerAlertButton',
      confirmButton: '#confirmButton',
      promptButton: '#promtButton'
    };
  }

  async clickAlertButton() {
    await this.clickButton(this.locators.alertButton);
  }

  async clickTimerAlertButton() {
    await this.clickButton(this.locators.timerAlertButton);
  }

  async clickConfirmButton() {
    await this.clickButton(this.locators.confirmButton);
  }

  async clickPromptButton() {
    await this.clickButton(this.locators.promptButton);
  }
}

module.exports = { AlertsPage };