import { test } from '@playwright/test'
import LandingPage from '../pages/landingPage'
import arnsApiMock from '../mockApis/arnsApiMock'
import { resetStubs } from '../mockApis/wiremock'

test.describe('page tests', () => {
  test.beforeAll(async () => {
    await arnsApiMock.stubGetRiskData()
  })

  test.afterAll(async () => {
    await resetStubs()
  })

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
    await landingPage.checkPredictorBadgeHeader()
    await landingPage.checkFullHighPredictorBadge()
    await landingPage.checkFullLowPredictorBadge()
    await landingPage.checkPredictorBadgeNotApplicable()
    await landingPage.checkPredictorBadgeMissingScore()

    // Click Expanded predictor badge link and check page
    await landingPage.clickExpandedPredictorBadgeLink()
    await landingPage.checkExpandedPredictorBadgeHeader()
    await landingPage.checkFullHighPredictorBadge()
    await landingPage.checkFullLowPredictorBadge()
    await landingPage.checkPredictorBadgeNotApplicable()
    await landingPage.checkPredictorBadgeMissingScore()

    // Click predictor scale link and check page
    await landingPage.clickPredictorScaleLink()
    await landingPage.checkPredictorScaleHeader()

    // Click timeline link and check page
    await landingPage.clickPredictorTimelineLink()
    await landingPage.checkPredictorTimelineHeader()
    await landingPage.checkPredictorTimelineFirstRowIsHidden()
    await landingPage.clickPredictorTimelineOpenAllButton()
    await landingPage.checkPredictorTimelineFirstRowIsVisible()
    await landingPage.clickPredictorTimelineFirstCloseButton()
    await landingPage.checkPredictorTimelineFirstRowIsHidden()
  })
})
