import { test, expect } from '@playwright/test';

test.describe('Predictor Badge Visual Regression', () => {

  test('should look correct for a LOW risk score', async ({ page }) => {

    await page.goto('http://localhost:3000/predictor-badge');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('predictor-badge-full-page.png', {
      fullPage: true,
    })
  });
});
