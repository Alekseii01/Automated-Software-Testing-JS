class DatePickerPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/date-picker';
    this.dateInput = '#datePickerMonthYearInput';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async getInitialDateValue() {
    return await this.page.locator(this.dateInput).inputValue();
  }

  async selectDate(dateString) {
    await this.page.click(this.dateInput);
    await this.page.locator(this.dateInput).fill('');
    await this.page.keyboard.press('Control+a');
    await this.page.keyboard.press('Delete');
    
    const [year, month, day] = dateString.split('-');
    const formattedDate = `${month}/${day}/${year}`;
    
    await this.page.locator(this.dateInput).fill(formattedDate);
    await this.page.keyboard.press('Enter');
  }

  async getSelectedDate() {
    return await this.page.locator(this.dateInput).inputValue();
  }
}

module.exports = DatePickerPage; 