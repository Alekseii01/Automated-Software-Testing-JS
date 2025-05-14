import { Page } from '@playwright/test';

const blockedResources = [
  'googlesyndication.com',
  'adservice.google.com',
  'doubleclick.net',
  'adroll.com',
  'adnxs.com',
  'adsrvr.org',
  'amazon-adsystem.com',
  'adform.net',
  'yieldmo.com',
  'adsafeprotected.com',
  'openx.net',
  'rubiconproject.com',
  'pubmatic.com',
  'casalemedia.com',
  'outbrain.com',
  'taboola.com',
];

export async function blockAds(page: Page) {

  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (blockedResources.some(resource => url.includes(resource))) {
      route.abort();
    } else {
      route.continue();
    }
  });
}
