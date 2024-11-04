import {by, element, expect, waitFor} from 'detox';

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: {
        detoxEnableSynchronization: 0,
      },
    });
    await waitFor(element(by.id('welcome')))
      .toBeVisible()
      .withTimeout(15000);
  });
  it('should render correctly', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
