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

describe('GET /', () => {
  it('should render index page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Introduction</title>')
      })
  })
})

describe('GET /mappa-widget', () => {
  it('should render MAPPA widget page', () => {
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

describe('GET /risk-flag-widget', () => {
  it('should render risk flag widget page', () => {
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
  it('should render ROSH widget page', () => {
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

describe('GET /predictor-badge', () => {
  it('should render Predictor badge page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/predictor-badge')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Predictor badge</title>')
      })
  })
})

describe('GET /expanded-predictor-badge', () => {
  it('should render Expanded predictor badge page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/expanded-predictor-badge')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Expanded predictor badge</title>')
      })
  })
})

describe('GET /predictor-scale', () => {
  it('should render Predictor scale page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/predictor-scale')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Predictor scale</title>')
      })
  })
})

describe('GET /predictor-timeline', () => {
  it('should render Predictor timeline page', () => {
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

describe('GET /detailed-risk-predictor-scores', () => {
  it('should render Risk predictor scores content page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/detailed-risk-predictor-scores')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Detailed risk predictor scores</title>')
      })
  })
})

describe('GET /detailed-risk-predictor-scores/example', () => {
  it('should render Risk predictor scores content example page', () => {
    auditService.logPageView.mockResolvedValue(null)

    return request(app)
      .get('/detailed-risk-predictor-scores/example')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Risk predictor scores</title>')
      })
  })
})

describe('GET /nonexistent-route', () => {
  it('should return 404 Not Found', async () => {
    await request(app).get('/nonexistent-route').expect(404)
  })
})
