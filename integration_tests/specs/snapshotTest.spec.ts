import { test, expect } from '@playwright/test'
import LandingPage from '../pages/landingPage'

test('Predictor badges', async ({ page }) => {
  const landingPage = new LandingPage(page)

  await page.goto('/')
  // Put in going to new pages for predictor/expanded predictor links
  await landingPage.clickPredictorBadgeLink()
  const LowNoScoreBadge = page
    .locator('div')
    .filter({ hasText: 'IMAGES AND INDIRECT CONTACT – SEXUAL REOFFENDING PREDICTOR LOW' })
    .nth(5)
  const HighStaticScore = page
    .locator('div')
    .filter({ hasText: 'SERIOUS VIOLENT REOFFENDING PREDICTOR HIGH 4.56% Static' })
    .nth(5)
  const NotApplicableExample = page.getByText('DIRECT CONTACT – SEXUAL REOFFENDING PREDICTOR NOT APPLICABLE')
  const UnknownExample = page.getByText('ALL REOFFENDING PREDICTOR UNKNOWN').first()

  await expect(LowNoScoreBadge).toHaveScreenshot('low-no-score-predictor-badge.png')
  await expect(HighStaticScore).toHaveScreenshot('high-static-score-predictor-badge.png')
  await expect(NotApplicableExample).toHaveScreenshot('not-applicable-predictor-badge.png')
  await expect(UnknownExample).toHaveScreenshot('unknown-predictor-badge.png')
})
