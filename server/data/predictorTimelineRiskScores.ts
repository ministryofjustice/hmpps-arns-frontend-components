const predictorTimelineRiskScores = {
  historical: [
    {
      date: '23 July 2026 at 12:00',
      scores: {
        allReoffendingPredictor: {
          level: 'LOW',
          score: 11.34,
          type: 'All Reoffending Predictor',
          staticOrDynamic: 'STATIC',
        },
        violentReoffendingPredictor: {
          level: 'MEDIUM',
          score: 38.76,
          type: 'Violent Reoffending Predictor',
          staticOrDynamic: 'DYNAMIC',
        },
        directContactSexualReoffendingPredictor: {
          level: 'MEDIUM',
          type: 'Direct Contact – Sexual Reoffending Predictor',
        },
        indirectImageContactSexualReoffendingPredictor: {
          level: 'HIGH',
          type: 'Images and Indirect Contact – Sexual Reoffending Predictor',
        },
        seriousViolentReoffendingPredictor: {
          level: 'HIGH',
          score: 3.45,
          type: 'Serious Violent Reoffending Predictor',
          staticOrDynamic: 'DYNAMIC',
        },
        combinedSeriousReoffendingPredictor: {
          level: 'VERY_HIGH',
          score: 13.67,
          type: 'Combined Serious Reoffending Predictor',
          staticOrDynamic: 'DYNAMIC',
        },
      },
    },
    {
      date: '14 May 2019 at 12:00',
      scores: {
        RSR: {
          level: 'HIGH',
          score: 10.3,
          type: 'RSR',
        },
        OSPDC: {
          level: 'MEDIUM',
          type: 'OSP-DC',
        },
        OSPIIC: {
          level: 'LOW',
          type: 'OSP-IIC',
        },
      },
    },
    {
      date: '12 September 2018 at 12:00',
      scores: {
        RSR: {
          level: 'MEDIUM',
          score: 5.34,
          type: 'RSR',
        },
        OSPC: {
          level: 'MEDIUM',
          type: 'OSP-DC',
        },
        OSPI: {
          level: 'LOW',
          type: 'OSP-IIC',
        },
      },
    },
  ],
}

export default predictorTimelineRiskScores
