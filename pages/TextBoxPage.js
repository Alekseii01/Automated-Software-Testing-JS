const { BasePage } = require('./BasePage');

class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.locators = {
      userName: '#userName',
      userEmail: '#userEmail',
      currentAddress: '#currentAddress',
      permanentAddress: '#permanentAddress',
      submitButton: '#submit',
      outputName: '#output #name',
      outputEmail: '#output #email',
      outputCurrentAddress: '#output #currentAddress',
      outputPermanentAddress: '#output #permanentAddress'
    };
  }

  async fillTextBox(data) {
    await this.fillInput(this.locators.userName, data.name);
    await this.fillInput(this.locators.userEmail, data.email);
    await this.fillInput(this.locators.currentAddress, data.address);
    
    if (data.permanentAddress) {
      await this.fillInput(this.locators.permanentAddress, data.permanentAddress);
    }
    
    await this.clickButton(this.locators.submitButton);
  }
  
  async getOutputName() {
    return this.getText(this.locators.outputName);
  }
  
  async getOutputEmail() {
    return this.getText(this.locators.outputEmail);
  }
  
  async getOutputCurrentAddress() {
    return this.getText(this.locators.outputCurrentAddress);
  }
  
  async getOutputPermanentAddress() {
    return this.getText(this.locators.outputPermanentAddress);
  }
  
  async getOutputText() {
    return {
      name: await this.getOutputName(),
      email: await this.getOutputEmail(),
      currentAddress: await this.getOutputCurrentAddress(),
      permanentAddress: await this.getOutputPermanentAddress()
    };
  }
}

module.exports = { TextBoxPage };