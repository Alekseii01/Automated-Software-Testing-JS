import { defineConfig } from '@playwright/test';

export default defineConfig({
    projects: [
        { name: 'Chrome@1920x1080', use: { browserName: 'chromium', viewport: { width: 1920, height: 1080 } } },
        { name: 'Chrome@1366x768', use: { browserName: 'chromium', viewport: { width: 1366, height: 768 } } },
        { name: 'Firefox@1920x1080', use: { browserName: 'firefox', viewport: { width: 1920, height: 1080 } } },
        { name: 'Firefox@1366x768', use: { browserName: 'firefox', viewport: { width: 1366, height: 768 } } },
    ],
    retries: 2,
    workers: 4,
    use: {
      screenshot: 'only-on-failure',
    },
  reporter: [['html', { outputFolder: 'reports' }]],
});
