const arnsComponentMock = {
  getRiskData: jest.fn().mockReturnValue({
    assessments: [
      {
        completedDateTime: '01 January 2025 at 15:21',
        outputVersion: '2',
        allReoffendingPredictor: {
          name: 'All Reoffending Predictor',
          band: 'LOW',
          staticOrDynamic: 'Static',
          score: 1.23,
          completedDate: '01 January 2025',
        },
        violentReoffendingPredictor: {
          name: 'Violent Reoffending Predictor',
          band: 'LOW',
          staticOrDynamic: 'Static',
          score: 1.23,
          completedDate: '01 January 2025',
        },
        seriousViolentReoffendingPredictor: {
          name: 'Serious Violent Reoffending Predictor',
          band: 'MEDIUM',
          staticOrDynamic: 'Static',
          score: 1.23,
          completedDate: '01 January 2025',
        },
        directContactSexualReoffendingPredictor: {
          name: 'Direct Contact - Sexual Reoffending Predictor',
          band: 'VERY HIGH',
          staticOrDynamic: null,
          score: 2.81,
          completedDate: '01 January 2025',
        },
        indirectImageContactSexualReoffendingPredictor: {
          name: 'Images and Indirect Contact – Sexual Reoffending Predictor',
          band: 'HIGH',
          staticOrDynamic: null,
          score: 1.07,
          completedDate: '01 January 2025',
        },
        combinedSeriousReoffendingPredictor: {
          name: 'Combined Serious Reoffending Predictor',
          band: 'HIGH',
          staticOrDynamic: 'Static',
          score: 1.23,
          completedDate: '01 January 2025',
        },
      },
      {
        outputVersion: '1',
        completedDateTime: '02 January 2024 at 18:23',
        ogrs3: {
          name: 'OGRS',
          band: 'LOW',
          staticOrDynamic: null,
          score: 5,
          completedDate: '02 January 2024',
        },
        ovp: {
          name: 'OVP',
          band: 'LOW',
          staticOrDynamic: null,
          score: 7,
          completedDate: '02 January 2024',
        },
        ogp: {
          name: 'OGP',
          band: 'MEDIUM',
          staticOrDynamic: null,
          score: 8,
          completedDate: '02 January 2024',
        },
        ospdc: {
          name: 'OSP-DC',
          band: 'VERY HIGH',
          staticOrDynamic: null,
          score: 1.07,
          completedDate: '02 January 2024',
        },
        ospiic: {
          name: 'OSP-IIC',
          band: 'HIGH',
          staticOrDynamic: null,
          score: 2.81,
          completedDate: '02 January 2024',
        },
        rsr: {
          name: 'RSR',
          band: 'HIGH',
          staticOrDynamic: 'Dynamic',
          score: 50.1234,
          completedDate: '02 January 2024',
        },
      },
    ],
  }),
}

export default arnsComponentMock
