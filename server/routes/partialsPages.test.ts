import type { Express } from 'express'
import request from 'supertest'
import { ArnsComponents } from '@ministryofjustice/hmpps-arns-frontend-components-lib'
import { appWithAllRoutes } from './testutils/appSetup'
import AuditService from '../services/auditService'
import config from '../config'
import logger from '../../logger'

jest.mock('../services/auditService')

const auditService = new AuditService(null) as jest.Mocked<AuditService>
const arnsComponetMock = new ArnsComponents(null, config.apis.arnsApi, logger)

let app: Express

beforeEach(() => {
  app = appWithAllRoutes({
    services: { arnsComponents: arnsComponetMock },
  })
  arnsComponetMock.getRiskData = jest.fn()
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('GET /mappa-widget', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/mappa-widget')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Mappa widget</title>')
      })
  })
})

describe('GET /predictor-scores', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/predictor-scores')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Predictor scores</title>')
      })
  })
})

describe('GET /predictor-timeline', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)
    return request(app)
      .get('/predictor-timeline')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Predictor timeline</title>')
      })
  })
})

describe('GET /risk-flag-widget', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/risk-flag-widget')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Risk flag widget</title>')
      })
  })
})

describe('GET /rosh-widget', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/rosh-widget')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>ROSH widget</title>')
      })
  })
})

describe('GET /nonexistent-route', () => {
  it('should return 404 Not Found', async () => {
    await request(app).get('/nonexistent-route').expect(404)
  })
})

describe('GET /legacy-predictor-timeline', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/legacy-predictor-timeline')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Legacy predictor timeline</title>')
      })
  })
})

describe('GET /legacy-predictor-timeline-item', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/legacy-predictor-timeline-item')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Legacy predictor timeline item</title>')
      })
  })
})
