import { Router } from 'express'
import { activateMojNav } from '../utils/navHelper'
import rawNavSections from '../data/navData'
import widgetData from '../data/widgetData'
import { Services } from '../services'

export default function componentPageRoutes({ arnsComponents }: Services): Router {
  const router = Router()

  router.get('/predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    const riskDataErrorStates = await arnsComponents.getRiskData(null, 'crn', 'X000002')
    res.render('pages/predictorBadgePage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
      riskDataErrorStates,
    })
  })
  router.get('/expanded-predictor-badge', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    const riskDataErrorStates = await arnsComponents.getRiskData(null, 'crn', 'X000002')
    res.render('pages/expandedPredictorBadgePage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
      riskDataErrorStates,
    })
  })
  router.get('/predictor-scale', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    const riskDataLegacy = await arnsComponents.getRiskData(null, 'crn', 'X654321')
    const riskDataNotApplicable = await arnsComponents.getRiskData(null, 'crn', 'X000001')
    const riskDataErrorStates = await arnsComponents.getRiskData(null, 'crn', 'X000002')
    res.render('pages/predictorScalePage', {
      navSections,
      riskData,
      riskDataLegacy,
      riskDataNotApplicable,
      riskDataErrorStates,
    })
  })
  router.get('/predictor-timeline', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    res.render('pages/predictorTimelinePage', { riskData, navSections })
  })
  router.get('/risk-predictor-scores-content', async (req, res, next) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    return res.render('pages/riskPredictorScoresContentPage', {
      navSections,
      riskData,
    })
  })
  router.get('/risk-predictor-scores-content/example', async (req, res, next) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    const riskData = await arnsComponents.getRiskData(null, 'crn', 'X123456')
    return res.render('pages/riskPredictorScoresContentExamplePage', {
      navSections,
      riskData,
    })
  })
  router.get('/mappa-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/mappaWidgetPage', { widgetData, navSections })
  })
  router.get('/risk-flag-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/riskFlagWidgetPage', { widgetData, navSections })
  })
  router.get('/rosh-widget', async (req, res) => {
    const navSections = activateMojNav(rawNavSections, req.path)
    res.render('pages/roshWidgetPage', { widgetData, navSections })
  })

  return router
}
