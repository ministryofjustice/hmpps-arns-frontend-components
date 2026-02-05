const predictorScaleScores = {
  AllPredictor: {
    level: 'LOW',
    score: 8.76,
    type: 'All Reoffending Predictor',
    lastUpdated: '19 December 2024',
    staticOrDynamic: 'DYNAMIC',
    bandPercentages: ['0%', '50%', '75%', '90%', '100%'],
  },
  ViolentPredictor: {
    level: 'MEDIUM',
    score: 35.67,
    type: 'Violent Reoffending Predictor',
    lastUpdated: '19 December 2024',
    staticOrDynamic: 'STATIC',
    bandPercentages: ['0%', '30%', '60%', '80%', '100%'],
  },
  DirectContact: {
    level: 'VERY_HIGH',
    type: 'Direct Contact – Sexual Reoffending Predictor',
    lastUpdated: '19 December 2024',
  },
  IndecentImages: {
    level: 'HIGH',
    type: 'Images and Indirect Contact – Sexual Reoffending Predictor',
    lastUpdated: '19 December 2024',
  },
  SeriousViolencePredictor: {
    level: 'LOW',
    score: 0.67,
    type: 'Serious Violent Reoffending Predictor',
    lastUpdated: '19 December 2024',
    staticOrDynamic: 'DYNAMIC',
  },
  CombinedPredictor: {
    level: 'MEDIUM',
    score: 2.67,
    type: 'Combined Serious Reoffending Predictor',
    lastUpdated: '19 December 2024',
    staticOrDynamic: 'DYNAMIC',
    bandPercentages: ['0%', '1%', '3%', '6.9%', '25%+'],
  },
  OGRS3: {
    level: 'LOW',
    score: 37.67,
    type: 'OGRS3',
    lastUpdated: '19 December 2024',
    bandPercentages: ['0%', '50%', '75%', '90%', '100%'],
  },
  OGP: {
    level: 'HIGH',
    score: 72.67,
    type: 'OGP',
    lastUpdated: '19 December 2024',
    bandPercentages: ['0%', '34%', '67%', '85%', '100%'],
  },
  OVP: {
    level: 'VERY_HIGH',
    score: 82.67,
    type: 'OVP',
    lastUpdated: '19 December 2024',
    bandPercentages: ['0%', '30%', '60%', '80%', '100%'],
  },
  OSPDC: {
    level: 'LOW',
    type: 'OSP-DC',
    lastUpdated: '19 December 2024',
  },
  OSPIIC: {
    level: 'MEDIUM',
    type: 'OSP-IIC',
    lastUpdated: '19 December 2024',
  },
  RSR: {
    level: 'HIGH',
    score: 11.34,
    type: 'RSR',
    lastUpdated: '19 December 2024',
    staticOrDynamic: 'STATIC',
    bandPercentages: ['0%', '3%', '6.9%', '25%+'],
  },
}

export default predictorScaleScores
