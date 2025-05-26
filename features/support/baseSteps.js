const { Given } = require('@cucumber/cucumber');
const { blockAds } = require('../../utils/ad-blocker.js');
const CheckboxPage = require('../pages/CheckboxPage');
const RadioButtonPage = require('../pages/RadioButtonPage');
const DatePickerPage = require('../pages/DatePickerPage');
const SliderPage = require('../pages/SliderPage');
const DragAndDropPage = require('../pages/DragAndDropPage');

Given('I navigate to the {string} page', async function(pageName) {
  await blockAds(this.page);
  
  switch(pageName.toLowerCase()) {
    case 'checkbox':
      this.checkboxPage = new CheckboxPage(this.page);
      await this.checkboxPage.navigate();
      break;
    case 'radiobutton':
    case 'radio button':
      this.radioButtonPage = new RadioButtonPage(this.page);
      await this.radioButtonPage.navigate();
      break;
    case 'datepicker':
    case 'date picker':
      this.datePickerPage = new DatePickerPage(this.page);
      await this.datePickerPage.navigate();
      break;
    case 'slider':
      this.sliderPage = new SliderPage(this.page);
      await this.sliderPage.navigate();
      break;
    case 'droppable':
    case 'drag and drop':
      this.dragAndDropPage = new DragAndDropPage(this.page);
      await this.dragAndDropPage.navigate();
      break;
    default:
      throw new Error(`Unsupported page: ${pageName}`);
  }
}); 