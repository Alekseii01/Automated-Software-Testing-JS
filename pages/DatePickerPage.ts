import { Page } from 'playwright';

export class DatePickerPage {
  constructor(private page: Page) {}

  async selectDate(date: Date) {
    const day = date.getDate().toString();
    const month = date.getMonth(); // 0-11
    const year = date.getFullYear().toString();
    
    const formattedDate = `${(month + 1).toString().padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
    
    await this.page.click('#datePickerMonthYearInput');
    
    await this.page.selectOption('.react-datepicker__month-select', month.toString());
    
    await this.page.selectOption('.react-datepicker__year-select', year);
    
    const daySelector = day.length === 1 
      ? `.react-datepicker__day--00${day}:not(.react-datepicker__day--outside-month)`
      : `.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`;
      
    await this.page.click(daySelector);
    
    return formattedDate;
  }

  async getSelectedDate() {
    return await this.page.inputValue('#datePickerMonthYearInput');
  }
} 