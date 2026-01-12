import { expect, Locator, Page } from '@playwright/test'
import {VALID_USERNAME,VALID_PASSWORD,LOCAL_URL} from './pages-common'

export default class LoginPage{
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
  private riskFlagWidgetLink: Locator = page.getByRole('link', { name: 'Risk flag widget' }),
  private riskFlagHeader: Locator = page.getByRole('heading', { name: 'Risk flag widget' }),
  private ROSHWidgetLink: Locator = page.getByRole('link', { name: 'ROSH widget' }),
  private ROSHHeader: Locator = page.getByRole('heading', { name: 'ROSH widget' }),
  private predictorBadgeLink: Locator = page.getByRole('link', { name: 'Predictor badge', exact: true }),
  private predictorBadgeHeader: Locator = page.getByRole('heading', { name: 'Predictor badge'}),
  private expandedPredictorBadgeLink: Locator = page.getByRole('link', { name: 'Expanded predictor badge' }),
  private expandedPredictorBadgeHeader: Locator = page.getByRole('heading', { name: 'Expanded predictor badge'}),
  private predictorScaleLink: Locator = page.getByRole('link', { name: 'Predictor scale' }),
  private predictorScaleHeader: Locator = page.getByRole('heading', { name: 'Predictor scale'}),
  private predictorScoresLink: Locator = page.getByRole('link', { name: 'Predictor scores' }),
  private predictorScoresHeader: Locator = page.getByRole('heading', { name: 'Predictor scores'}),
  private predictorTimelineLink: Locator = page.getByRole('link', { name: 'Predictor timeline', exact: true }),
  private predictorTimelineHeader: Locator = page.getByRole('heading', { name: 'Predictor timeline'}),
  private predictorTimelineOpenButton: Locator = page.getByRole('link', { name: 'Open all' }),
  private predictorTimelineFirstCloseButton: Locator = page.getByRole('link', { name: 'Close' }).first(),
  private predictorTimelineFirstRow: Locator = page.getByRole('listitem').filter({ hasText: 'RSR HIGH' }),
  private predictorTimelineItemLink: Locator = page.getByRole('link', { name: 'Predictor timeline item' }),
  private predictorTimelineItemHeader: Locator = page.getByRole('heading', { name: 'Predictor timeline item'})
  ) { }

  async goto() {
    await this.page.goto(LOCAL_URL)
  }

  async fillInUsername() {
    await this.loginUsername.fill(VALID_USERNAME)
  }

  async fillInPassword() {
    await this.loginPassword.fill(VALID_PASSWORD)
  }

  async clickSignIn() {
    await this.signInButton.click()
  }

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

  async clickRiskFlagWidgetLink() {
    await this.riskFlagWidgetLink.click()
  }

  async checkRiskFlagHeader() {
    await expect(this.riskFlagHeader).toBeVisible()
  }

  async clickROSHWidgetLink() {
    await this.ROSHWidgetLink.click()
  }

  async checkROSHHeader() {
    await expect(this.ROSHHeader).toBeVisible()
  }

  async clickPredictorBadgeLink() {
    await this.predictorBadgeLink.click()
  }

  async checkPredictorBadgeHeader() {
    await expect(this.predictorBadgeHeader).toBeVisible()
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
