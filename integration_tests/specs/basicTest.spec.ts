import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('User logs in and checks all pages are working', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.goto();

  // Check page is correct and you can log in
  await loginPage.fillInUsername();
  await loginPage.fillInPassword();
  await loginPage.clickSignIn();

  // Check you have logged in and landed on the homepage
  await loginPage.checkIntroduction();
  await loginPage.checkPageHeader();

  // Click Mappa widget link and check page loads
  await loginPage.clickMappaWidgetLink();
  await loginPage.checkMappaWidgetHeader();
  await loginPage.checkExamplesHeader();

  // Click Risk Flag link and check page
  await loginPage.clickRiskFlagWidgetLink();
  await loginPage.checkRiskFlagHeader();

  // Click ROSH link and check page
  await loginPage.clickROSHWidgetLink();
  await loginPage.checkROSHHeader();

  // Click Predictor badge link and check page
  await loginPage.clickPredictorBadgeLink();
  await loginPage.checkPredictorBadgeHeader();

  // Click Expanded predictor badge link and check page
  await loginPage.clickExpandedPredictorBadgeLink();
  await loginPage.checkExpandedPredictorBadgeHeader();

  // Click predictor scale link and check page
  await loginPage.clickPredictorScaleLink();
  await loginPage.checkPredictorScaleHeader();

  // Click predictor score link and check page
  await loginPage.clickPredictorScoresLink();
  await loginPage.checkPredictorScoresHeader();

  // Click timeline link and check page
  await loginPage.clickPredictorTimelineLink();
  await loginPage.checkPredictorTimelineHeader();
  await loginPage.checkPredictorTimelineFirstRowIsHidden();
  await loginPage.clickPredictorTimelineOpenAllButton();
  await loginPage.checkPredictorTimelineFirstRowIsVisible();
  await loginPage.clickPredictorTimelineFirstCloseButton();
  await loginPage.checkPredictorTimelineFirstRowIsHidden();

  // Click timeline item link and check page
  await loginPage.clickPredictorTimelineItemLink();
  await loginPage.checkPredictorTimelineItemHeader();

  // Could add a final step to click sign out and check you're signed out here

  console.log('Frontend components pages are working as expected');
});
