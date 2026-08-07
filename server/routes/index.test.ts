import type { Express } from 'express'
import request from 'supertest'
import { appWithAllRoutes } from './testutils/appSetup'

jest.mock('../services/auditService')

let app: Express

beforeEach(() => {
  app = appWithAllRoutes({
    services: {},
  })
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('GET /', () => {
  it('should render index page', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(res => {
        expect(res.text).toContain('<title>Introduction</title>')
      })
  })
})

describe('GET /nonexistent-route', () => {
  it('should return 404 Not Found', () => {
    return request(app).get('/nonexistent-route').expect(404)
  })
})
