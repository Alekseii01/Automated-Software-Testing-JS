import { Page } from 'playwright';

export class SliderPage {
  constructor(private page: Page) {}

  async moveSliderToValue(targetValue: number) {
    const slider = await this.page.$('#sliderContainer input.range-slider');
    if (!slider) throw new Error('Slider not found');
    
    const sliderBoundingBox = await slider.boundingBox();
    if (!sliderBoundingBox) throw new Error('Could not get slider bounding box');
    
    const currentValueStr = await slider.getAttribute('value') || '0';
    const minStr = await slider.getAttribute('min') || '0';
    const maxStr = await slider.getAttribute('max') || '100';
    
    const currentValue = parseFloat(currentValueStr);
    const min = parseFloat(minStr);
    const max = parseFloat(maxStr);
    
    const percentage = (targetValue - min) / (max - min);
    const targetX = sliderBoundingBox.x + sliderBoundingBox.width * percentage;
    
    await this.page.mouse.move(
      sliderBoundingBox.x + sliderBoundingBox.width * (currentValue - min) / (max - min), 
      sliderBoundingBox.y + sliderBoundingBox.height / 2
    );
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, sliderBoundingBox.y + sliderBoundingBox.height / 2);
    await this.page.mouse.up();
  }

  async getSliderValue() {
    const slider = await this.page.$('#sliderContainer input.range-slider');
    if (!slider) throw new Error('Slider not found');
    
    const value = await slider.getAttribute('value') || '0';
    return parseFloat(value);
  }
} 