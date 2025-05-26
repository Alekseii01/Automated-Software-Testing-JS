const { devices } = require('@playwright/test');

const browser = process.env.BROWSER || 'chromium';
const resolution = process.env.RESOLUTION || '1280x720';
const [width, height] = resolution.split('x').map(Number);
const headless = process.env.HEADLESS !== 'false';
const workers = process.env.WORKERS ? 4 : undefined;

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    // @ts-ignore
    browserName: browser,
    viewport: { width, height },
    headless,
  },
  workers,
};

module.exports = config;