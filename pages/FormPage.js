const { BasePage } = require('./BasePage');

class FormPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.locators = {
      firstName: '#firstName',
      lastName: '#lastName',
      userEmail: '#userEmail',
      currentAddress: '#currentAddress',
      submitButton: '#submit',
      genderMale: 'label[for="gender-radio-1"]',
      genderFemale: 'label[for="gender-radio-2"]',
      genderOther: 'label[for="gender-radio-3"]',
      mobileNumber: '#userNumber',
      dateOfBirthInput: '#dateOfBirthInput',
      subjectsInput: '#subjectsInput',
      hobbySports: 'label[for="hobbies-checkbox-1"]',
      hobbyReading: 'label[for="hobbies-checkbox-2"]',
      hobbyMusic: 'label[for="hobbies-checkbox-3"]',
      stateDropdown: '#state',
      cityDropdown: '#city',
      modalTitle: '.modal-title',
      modalClose: '.modal-header button[aria-label="Close"]',
      modalBody: '.modal-body'
    };
  }

  async fillForm(name, email, address) {
    await this.fillInput(this.locators.firstName, name);
    await this.fillInput(this.locators.userEmail, email);
    await this.fillInput(this.locators.currentAddress, address);
    
    await this.clickButton(this.locators.genderMale);
    await this.fillInput(this.locators.mobileNumber, '1234567890');
    
    await this.clickButton(this.locators.submitButton);
  }
  
  async fillCompleteForm(formData) {
    await this.fillInput(this.locators.firstName, formData.name);
    await this.fillInput(this.locators.lastName, formData.lastName);
    await this.fillInput(this.locators.userEmail, formData.email);
    
    if (formData.gender === 'Male') {
      await this.clickButton(this.locators.genderMale);
    } else if (formData.gender === 'Female') {
      await this.clickButton(this.locators.genderFemale);
    } else {
      await this.clickButton(this.locators.genderOther);
    }
    
    await this.fillInput(this.locators.mobileNumber, formData.mobileNumber);
    await this.fillInput(this.locators.currentAddress, formData.currentAddress);
    
    await this.clickButton(this.locators.submitButton);
  }

  async isModalVisible() {
    return this.isElementVisible(this.locators.modalTitle);
  }

  async closeModalIfOpen() {
    if (await this.isModalVisible()) {
      await this.clickButton(this.locators.modalClose);
    }
  }

  async getModalTitle() {
    return this.getText(this.locators.modalTitle);
  }

  async getModalBodyText() {
    return this.getText(this.locators.modalBody);
  }
}

module.exports = { FormPage };