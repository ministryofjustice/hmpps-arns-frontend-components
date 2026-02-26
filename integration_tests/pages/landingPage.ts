import { expect, Locator, Page } from '@playwright/test'

export default class LandingPage {
  constructor(
    private page: Page,
    private loginUsername: Locator = page.getByRole('textbox', { name: 'Username' }),
    private loginPassword: Locator = page.getByRole('textbox', { name: 'Password' }),
    private signInButton: Locator = page.getByRole('button', { name: 'Sign in' }),
    private intro: Locator = page.getByRole('heading', { name: 'Introduction' }),
    private pageHeader: Locator = page.getByRole('link', { name: 'ARNS Frontend Components' }),
    private examplesHeader: Locator = page.getByRole('heading', { name: 'Examples' }),
    private mappaWidgetLink: Locator = page.getByRole('link', { name: 'MAPPA widget' }),
    private mappaWidgetHeader: Locator = page.getByRole('heading', { name: 'Mappa widget' }),
    private mappaWidgetExample: Locator = page.locator('#mappa-widget'),
    private mappaWidgetNoData: Locator = page.locator('#mappa-widget-no-matching-data'),
    private mappaWidgetUnknown: Locator = page.locator('#mappa-widget-null-data'),
    private riskFlagWidgetLink: Locator = page.getByRole('link', { name: 'Risk flag widget' }),
    private riskFlagHeader: Locator = page.getByRole('heading', { name: 'Risk flag widget' }),
    private riskFlagWidgetExample: Locator = page.locator('#risk-flag-widget'),
    private riskFlagWidgetNoData: Locator = page.locator('#risk-flag-widget-no-matching-data'),
    private riskFlagWidgetUnknown: Locator = page.locator('#risk-flag-widget-null-data'),
    private ROSHWidgetLink: Locator = page.getByRole('link', { name: 'ROSH widget' }),
    private ROSHHeader: Locator = page.getByRole('heading', { name: 'ROSH widget' }),
    private ROSHWidgetFullExample: Locator = page.locator('#rosh-widget-both-inner'),
    private ROSHWidgetCommunityExample: Locator = page.locator('#rosh-widget-community-inner'),
    private ROSHWidgetCustodyExample: Locator = page.locator('#rosh-widget-custody-inner'),
    private ROSHWidgetNoData: Locator = page.locator('#rosh-widget-no-matching-data'),
    private ROSHWidgetUnknown: Locator = page.locator('#rosh-widget-null-data'),
    private predictorBadgeLink: Locator = page.getByRole('link', { name: 'Predictor badge', exact: true }),
    private predictorBadgeHeader: Locator = page.getByRole('heading', { name: 'Predictor badge' }),
    private fullHighPredictorBadge: Locator = page
      .locator('div')
      .filter({ hasText: 'SERIOUS VIOLENT REOFFENDING' })
      .nth(5),
    private fullLowPredictorBadge: Locator = page
      .locator('div')
      .filter({ hasText: 'COMBINED SERIOUS REOFFENDING' })
      .nth(5),
    private predictorBadgeNotApplicable: Locator = page.getByText('DIRECT CONTACT – SEXUAL REOFFENDING PREDICTOR NOT APPLICABLE'),
    private predictorBadgeMissingScore: Locator = page.getByText('ALL REOFFENDING PREDICTOR UNKNOWN'),
    private predictorBadgeMissingBand: Locator = page.getByText('VIOLENT REOFFENDING PREDICTOR UNKNOWN'),
    private expandedPredictorBadgeLink: Locator = page.getByRole('link', {
      name: 'Expanded predictor badge',
      exact: true,
    }),
    private expandedPredictorBadgeHeader: Locator = page.getByRole('heading', { name: 'Expanded predictor badge' }),
    private predictorScaleLink: Locator = page.getByRole('link', { name: 'Predictor scale' }),
    private predictorScaleHeader: Locator = page.getByRole('heading', { name: 'Predictor scale' }),
    private predictorScoresLink: Locator = page.getByRole('link', { name: 'Predictor scores' }),
    private predictorScoresHeader: Locator = page.getByRole('heading', { name: 'Predictor scores' }),
    private predictorTimelineLink: Locator = page.getByRole('link', { name: 'Predictor timeline', exact: true }),
    private predictorTimelineHeader: Locator = page.getByRole('heading', { name: 'Predictor timeline' }),
    private predictorTimelineOpenButton: Locator = page.getByRole('link', { name: 'Open all' }),
    private predictorTimelineFirstCloseButton: Locator = page.getByRole('link', { name: 'Close' }).first(),
    private predictorTimelineFirstRow: Locator = page.getByRole('listitem').filter({ hasText: 'RSR HIGH' }),
    private predictorTimelineItemLink: Locator = page.getByRole('link', { name: 'Predictor timeline item' }),
    private predictorTimelineItemHeader: Locator = page.getByRole('heading', { name: 'Predictor timeline item' }),
  ) {}

  async checkIntroduction() {
    await expect(this.intro).toBeVisible()
  }

  async checkPageHeader() {
    await expect(this.pageHeader).toBeVisible()
  }

  async checkExamplesHeader() {
    await expect(this.examplesHeader).toBeVisible()
  }

  async clickMappaWidgetLink() {
    await this.mappaWidgetLink.click()
  }

  async checkMappaWidgetHeader() {
    await expect(this.mappaWidgetHeader).toBeVisible()
  }

  async checkMappaWidget() {
    await expect(this.mappaWidgetExample).toBeVisible()
  }

  async checkMappaWidgetNoData() {
    await expect(this.mappaWidgetNoData).toBeVisible()
  }

  async checkMappaWidgetUnknown() {
    await expect(this.mappaWidgetUnknown).toBeVisible()
  }

  async clickRiskFlagWidgetLink() {
    await this.riskFlagWidgetLink.click()
  }

  async checkRiskFlagHeader() {
    await expect(this.riskFlagHeader).toBeVisible()
  }

  async checkRiskFlagWidget() {
    await expect(this.riskFlagWidgetExample).toBeVisible()
  }

  async checkRiskFlagWidgetNoData() {
    await expect(this.riskFlagWidgetNoData).toBeVisible()
  }

  async checkRiskFlagWidgetUnknown() {
    await expect(this.riskFlagWidgetUnknown).toBeVisible()
  }

  async clickROSHWidgetLink() {
    await this.ROSHWidgetLink.click()
  }

  async checkROSHHeader() {
    await expect(this.ROSHHeader).toBeVisible()
  }

  async checkROSHWidgetFull() {
    await expect(this.ROSHWidgetFullExample).toBeVisible()
  }

  async checkROSHWidgetCommunity() {
    await expect(this.ROSHWidgetCommunityExample).toBeVisible()
  }

  async checkROSHWidgetCustody() {
    await expect(this.ROSHWidgetCustodyExample).toBeVisible()
  }

  async checkROSHWidgetNoData() {
    await expect(this.ROSHWidgetNoData).toBeVisible()
  }

  async checkROSHWidgetUnknown() {
    await expect(this.ROSHWidgetUnknown).toBeVisible()
  }

  async clickPredictorBadgeLink() {
    await this.predictorBadgeLink.click()
  }

  async checkPredictorBadgeHeader() {
    await expect(this.predictorBadgeHeader).toBeVisible()
  }

  async checkFullHighPredictorBadge() {
    await expect(this.fullHighPredictorBadge).toBeVisible()
  }

  async checkFullLowPredictorBadge() {
    await expect(this.fullLowPredictorBadge).toBeVisible()
  }

  async checkPredictorBadgeNotApplicable() {
    await expect(this.predictorBadgeNotApplicable).toBeVisible()
  }

  async checkPredictorBadgeMissingScore() {
    await expect(this.predictorBadgeMissingScore).toBeVisible()
  }

  async checkPredictorBadgeMissingBand() {
    await expect(this.predictorBadgeMissingBand).toBeVisible()
  }

  async clickExpandedPredictorBadgeLink() {
    await this.expandedPredictorBadgeLink.click()
  }

  async checkExpandedPredictorBadgeHeader() {
    await expect(this.expandedPredictorBadgeHeader).toBeVisible()
  }

  async clickPredictorScaleLink() {
    await this.predictorScaleLink.click()
  }

  async checkPredictorScaleHeader() {
    await expect(this.predictorScaleHeader).toBeVisible()
  }

  async clickPredictorScoresLink() {
    await this.predictorScoresLink.click()
  }

  async checkPredictorScoresHeader() {
    await expect(this.predictorScoresHeader).toBeVisible()
  }

  async clickPredictorTimelineLink() {
    await this.predictorTimelineLink.click()
  }

  async checkPredictorTimelineHeader() {
    await expect(this.predictorTimelineHeader).toBeVisible()
  }

  async clickPredictorTimelineOpenAllButton() {
    await this.predictorTimelineOpenButton.click()
  }

  async clickPredictorTimelineFirstCloseButton() {
    await this.predictorTimelineFirstCloseButton.click()
  }

  async checkPredictorTimelineFirstRowIsVisible() {
    await expect(this.predictorTimelineFirstRow).toBeVisible()
  }

  async checkPredictorTimelineFirstRowIsHidden() {
    await expect(this.predictorTimelineFirstRow).toBeHidden()
  }

  async clickPredictorTimelineItemLink() {
    await this.predictorTimelineItemLink.click()
  }

  async checkPredictorTimelineItemHeader() {
    await expect(this.predictorTimelineItemHeader).toBeVisible()
  }
}
