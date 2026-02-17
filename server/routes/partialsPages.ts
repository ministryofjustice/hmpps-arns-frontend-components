import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'
import predictorScaleScores from '../data/predictorScaleScores'
import widgetData from '../data/widgetData'
import legacyComponentRiskScores from '../data/legacyComponentRiskScores'
import { badgeRiskScores, legacyBadgeRiskScores, badgeErrorStateRiskScores } from '../data/badgeRiskScores'
import predictorScaleNotApplicableScores from '../data/predictorScaleNotApplicableScores'
import predictorTimelineRiskScores from '../data/predictorTimelineRiskScores'
import { Services } from '../services'

export default function componentPageRoutes({ arnsComponents }: Services): Router {
  const router = Router()

  router.get('/predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorBadgePage', {
      badgeRiskScores,
      legacyBadgeRiskScores,
      badgeErrorStateRiskScores,
      navSections,
    })
  })
  router.get('/predictor-badge/new', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    const riskDataErrorStates = await arnsComponents.getRiskData(null, 'crn', 'X000002')
    res.render('pages/predictorBadgeLibraryPage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
      riskDataErrorStates,
    })
  })
  router.get('/expanded-predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/expandedPredictorBadgePage', {
      badgeRiskScores,
      legacyBadgeRiskScores,
      badgeErrorStateRiskScores,
      navSections,
    })
  })
  router.get('/expanded-predictor-badge/new', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    const riskDataErrorStates = await arnsComponents.getRiskData(null, 'crn', 'X000002')
    res.render('pages/expandedPredictorBadgeLibraryPage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
      riskDataErrorStates,
    })
  })
  router.get('/mappa-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/mappaWidgetPage', { widgetData, navSections })
  })
  router.get('/predictor-scores', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScoresPage', { legacyComponentRiskScores, navSections })
  })
  router.get('/predictor-timeline', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorTimelinePage', { predictorTimelineRiskScores, navSections })
  })
  router.get('/legacy-predictor-timeline', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/legacyPredictorTimelinePage', { legacyComponentRiskScores, navSections })
  })
  router.get('/legacy-predictor-timeline-item', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/legacyPredictorTimelineItemPage', { legacyComponentRiskScores, navSections })
  })
  router.get('/risk-flag-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/riskFlagWidgetPage', { widgetData, navSections })
  })
  router.get('/rosh-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/roshWidgetPage', { widgetData, navSections })
  })
  router.get('/predictor-scale', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/predictorScalePage', { predictorScaleScores, predictorScaleNotApplicableScores, navSections })
  })
  router.get('/predictor-scale/new', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    res.render('pages/predictorScaleLibraryPage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
    })
  })
  router.get('/new', async (req, res, next) => {
    const navSections = activateMojNav(rawNavSections, '/new')
    return res.render('pages/newIntroPage', { navSections })
  })

  return router
}
