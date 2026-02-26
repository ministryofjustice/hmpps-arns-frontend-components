import { test } from '@playwright/test'
import LandingPage from '../pages/landingPage'

test('Checks all pages are working', async ({ page }) => {
  const landingPage = new LandingPage(page)

  await page.goto('/')

  // Check you have landed on the homepage
  await landingPage.checkIntroduction()
  await landingPage.checkPageHeader()

  // Click Mappa widget link and check page loads
  await landingPage.clickMappaWidgetLink()
  await landingPage.checkMappaWidgetHeader()
  await landingPage.checkExamplesHeader()
  await landingPage.checkMappaWidget()
  await landingPage.checkMappaWidgetNoData()
  await landingPage.checkMappaWidgetUnknown()

  // Click Risk Flag link and check page
  await landingPage.clickRiskFlagWidgetLink()
  await landingPage.checkRiskFlagHeader()
  await landingPage.checkRiskFlagWidget()
  await landingPage.checkRiskFlagWidgetNoData()
  await landingPage.checkRiskFlagWidgetUnknown()

  // Click ROSH link and check page
  await landingPage.clickROSHWidgetLink()
  await landingPage.checkROSHHeader()
  await landingPage.checkROSHWidgetFull()
  await landingPage.checkROSHWidgetCommunity()
  await landingPage.checkROSHWidgetCustody()
  await landingPage.checkROSHWidgetNoData()
  await landingPage.checkROSHWidgetUnknown()

  // Click Predictor badge link and check page
  await landingPage.clickPredictorBadgeLink()
  // await page.goto('http://localhost:3007/predictor-badge/new')
  await landingPage.checkPredictorBadgeHeader()
  await landingPage.checkFullHighPredictorBadge()
  await landingPage.checkFullLowPredictorBadge()
  await landingPage.checkPredictorBadgeNotApplicable()
  // await landingPage.checkPredictorBadgeMissingScore()
  // await landingPage.checkPredictorBadgeMissingBand()

  // Click Expanded predictor badge link and check page
  await landingPage.clickExpandedPredictorBadgeLink()
  // await page.goto('http://localhost:3007/expanded-predictor-badge/new')
  await landingPage.checkExpandedPredictorBadgeHeader()
  await landingPage.checkFullHighPredictorBadge()
  await landingPage.checkFullLowPredictorBadge()
  await landingPage.checkPredictorBadgeNotApplicable()
  // await landingPage.checkPredictorBadgeMissingScore()
  // await landingPage.checkPredictorBadgeMissingBand()

  // Click predictor scale link and check page
  await landingPage.clickPredictorScaleLink()
  // await page.goto('http://localhost:3007/predictor-scale/new')
  await landingPage.checkPredictorScaleHeader()
  // await landingPage.checkPredictorBadgeNotApplicable()

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
