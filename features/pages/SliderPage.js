class SliderPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/slider';
    this.slider = '.range-slider';
    this.sliderValue = '#sliderValue';
  }

  async navigate() {
    await this.page.goto(this.url, { waitUntil: 'load' });
  }

  async moveSliderTo(value) {
    const slider = await this.page.locator(this.slider);
    const sliderBoundingBox = await slider.boundingBox();
    
    const sliderWidth = sliderBoundingBox.width;
    const targetX = (sliderWidth * value) / 100;
    
    await this.page.mouse.move(
      sliderBoundingBox.x + sliderBoundingBox.width / 2,
      sliderBoundingBox.y + sliderBoundingBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.mouse.move(
      sliderBoundingBox.x + targetX,
      sliderBoundingBox.y + sliderBoundingBox.height / 2
    );
    await this.page.mouse.up();
    
    await this.page.waitForTimeout(500);
  }

  async getSliderValue() {
    return parseInt(await this.page.locator(this.sliderValue).inputValue(), 10);
  }
}

module.exports = SliderPage; 