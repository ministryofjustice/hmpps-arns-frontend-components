import type { Express } from 'express'
import request from 'supertest'
import { ArnsComponents } from '@ministryofjustice/hmpps-arns-frontend-components-lib'
import { appWithAllRoutes } from '../../routes/testutils/appSetup'
import arnsComponentMock from './arnsComponentMock'

let app: Express

beforeAll(() => {
  app = appWithAllRoutes({
    services: {
      arnsComponents: arnsComponentMock as unknown as ArnsComponents,
    },
  })
})

describe('View Snapshot Tests: All Pages', () => {
  it('should match snapshot for the Intro page (/)', async () => {
    const response = await request(app).get('/').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the mappa widget page (/mappa-widget)', async () => {
    const response = await request(app).get('/mappa-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor scores page (/predictor-scores)', async () => {
    const response = await request(app).get('/predictor-scores').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor timeline page (/predictor-timeline)', async () => {
    const response = await request(app).get('/predictor-timeline').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the risk flag widget page (/risk-flag-widget)', async () => {
    const response = await request(app).get('/risk-flag-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the rosh widget page (/rosh-widget)', async () => {
    const response = await request(app).get('/rosh-widget').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor badge page (/predictor-badge)', async () => {
    const response = await request(app).get('/predictor-badge').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor badge page (/predictor-badge/new)', async () => {
    const response = await request(app).get('/predictor-badge/new').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the expanded predictor badge page (/expanded-predictor-badge)', async () => {
    const response = await request(app).get('/expanded-predictor-badge').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the predictor scale page (/predictor-scale)', async () => {
    const response = await request(app).get('/predictor-scale').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the legacy predictor timeline page (/legacy-predictor-timeline)', async () => {
    const response = await request(app).get('/legacy-predictor-timeline').expect(200)
    expect(response.text).toMatchSnapshot()
  })

  it('should match snapshot for the legacy predictor timeline item page (/legacy-predictor-timeline-item)', async () => {
    const response = await request(app).get('/legacy-predictor-timeline-item').expect(200)
    expect(response.text).toMatchSnapshot()
  })
})
