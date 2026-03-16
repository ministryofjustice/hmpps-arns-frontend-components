import type { SuperAgentRequest } from 'superagent'
import { stubFor } from './wiremock'

export default {
  stubGetRiskData: (): SuperAgentRequest =>
    stubFor({
      request: {
        method: 'GET',
        urlPattern: '/risks/predictors/all/crn/X123456',
      },
      response: {
        assessments: [
          {
            outputVersion: '2',
            completedDate: '01 March 2026',
            completedDateTime: '01 March 2026 at 10:30',
            assessmentType: 'layer 1',
            allReoffendingPredictor: {
              name: 'All Reoffending Predictor',
              band: 'LOW',
              staticOrDynamic: 'Static',
              score: 12.34,
              completedDate: '01 March 2026',
            },
            violentReoffendingPredictor: {
              name: 'Violent Reoffending Predictor',
              band: 'MEDIUM',
              staticOrDynamic: 'Dynamic',
              score: 34.56,
              completedDate: '01 March 2026',
            },
            seriousViolentReoffendingPredictor: {
              name: 'Serious Violent Reoffending Predictor',
              band: 'HIGH',
              staticOrDynamic: 'Static',
              score: 4.56,
              completedDate: '01 March 2026',
            },
            directContactSexualReoffendingPredictor: {
              name: 'Direct Contact - Sexual Reoffending Predictor',
              band: 'VERY HIGH',
              staticOrDynamic: null,
              score: 83.1,
              completedDate: '01 March 2026',
            },
            indirectImageContactSexualReoffendingPredictor: {
              name: 'Images and Indirect Contact – Sexual Reoffending Predictor',
              band: 'LOW',
              staticOrDynamic: null,
              score: 0.12,
              completedDate: '01 March 2026',
            },
            combinedSeriousReoffendingPredictor: {
              name: 'Combined Serious Reoffending Predictor',
              band: 'LOW',
              staticOrDynamic: 'Dynamic',
              score: 0.89,
              completedDate: '01 March 2026',
            },
          },
          {
            outputVersion: '1',
            completedDate: '01 January 2024',
            completedDateTime: '01 January 2024 at 10:30',
            assessmentType: 'layer 1',
            ogrs3: {
              name: 'OGRS',
              staticOrDynamic: null,
              completedDate: '01 January 2024',
            },
            ovp: {
              name: 'OVP',
              staticOrDynamic: null,
              completedDate: '01 January 2024',
            },
            ogp: {
              name: 'OGP',
              staticOrDynamic: null,
              completedDate: '01 January 2024',
            },
            rsr: {
              name: 'RSR',
              band: 'VERY HIGH',
              staticOrDynamic: 'Dynamic',
              score: 51.23,
              completedDate: '01 January 2024',
            },
            ospdc: {
              name: 'OSP-DC',
              staticOrDynamic: null,
              completedDate: '01 January 2024',
            },
            ospiic: {
              name: 'OSP-IIC',
              staticOrDynamic: null,
              completedDate: '01 January 2024',
            },
          },
          {
            outputVersion: '1',
            completedDate: '01 January 2023',
            completedDateTime: '01 January 2023 at 10:30',
            assessmentType: 'layer 1',
            ogrs3: {
              name: 'OGRS',
              band: 'LOW',
              staticOrDynamic: null,
              score: 5.67,
              completedDate: '01 January 2023',
            },
            ovp: {
              name: 'OVP',
              band: 'MEDIUM',
              staticOrDynamic: null,
              score: 45.67,
              completedDate: '01 January 2023',
            },
            ogp: {
              name: 'OGP',
              band: 'HIGH',
              staticOrDynamic: null,
              score: 78.9,
              completedDate: '01 January 2023',
            },
            rsr: {
              name: 'RSR',
              band: 'HIGH',
              staticOrDynamic: 'Dynamic',
              score: 12.34,
              completedDate: '01 January 2023',
            },
            ospdc: {
              name: 'OSP-DC',
              band: 'VERY HIGH',
              staticOrDynamic: null,
              score: 83.1,
              completedDate: '01 January 2023',
            },
            ospiic: {
              name: 'OSP-IIC',
              band: 'LOW',
              staticOrDynamic: null,
              score: 0.12,
              completedDate: '01 January 2023',
            },
          },
        ],
        httpStatus: 200,
      },
    }),
}
