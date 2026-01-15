import { test } from '@playwright/test'
import LandingPage from '../pages/landingPage'
import { login } from '../testUtils'

test('User logs in and checks all pages are working', async ({ page }) => {
  const landingPage = new LandingPage(page)

  await login(page, { name: 'A Test User' })

  // Check you have landed on the homepage
  await landingPage.checkIntroduction()
  await landingPage.checkPageHeader()

  // Click Mappa widget link and check page loads
  await landingPage.clickMappaWidgetLink()
  await landingPage.checkMappaWidgetHeader()
  await landingPage.checkExamplesHeader()

  // Click Risk Flag link and check page
  await landingPage.clickRiskFlagWidgetLink()
  await landingPage.checkRiskFlagHeader()

  // Click ROSH link and check page
  await landingPage.clickROSHWidgetLink()
  await landingPage.checkROSHHeader()

  // Click Predictor badge link and check page
  await landingPage.clickPredictorBadgeLink()
  await landingPage.checkPredictorBadgeHeader()

  // Click Expanded predictor badge link and check page
  await landingPage.clickExpandedPredictorBadgeLink()
  await landingPage.checkExpandedPredictorBadgeHeader()

  // Click predictor scale link and check page
  await landingPage.clickPredictorScaleLink()
  await landingPage.checkPredictorScaleHeader()

  // Click predictor score link and check page
  await landingPage.clickPredictorScoresLink()
  await landingPage.checkPredictorScoresHeader()

  // Click timeline link and check page
  await landingPage.clickPredictorTimelineLink()
  await landingPage.checkPredictorTimelineHeader()
  await landingPage.checkPredictorTimelineFirstRowIsHidden()
  await landingPage.clickPredictorTimelineOpenAllButton()
  await landingPage.checkPredictorTimelineFirstRowIsVisible()
  await landingPage.clickPredictorTimelineFirstCloseButton()
  await landingPage.checkPredictorTimelineFirstRowIsHidden()

  // Click timeline item link and check page
  await landingPage.clickPredictorTimelineItemLink()
  await landingPage.checkPredictorTimelineItemHeader()
})
