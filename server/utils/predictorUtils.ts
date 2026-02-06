export type Level = 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH'

export const convertScoreToScalePosition = (score: number, thresholds: number[]) => {
  if (thresholds.length < 2) {
    throw new Error('Thresholds must contain at least two values')
  } else if (thresholds[0] !== 0) {
    throw new Error('The lowest threshold must be 0')
  }

  const numSegments = thresholds.length - 1
  const segmentWeight = 100 / numSegments

  for (let i = 0; i < numSegments; i += 1) {
    const lower = thresholds[i]
    const upper = thresholds[i + 1]

    if (score >= lower && score <= upper) {
      const progressInSegment = (score - lower) / (upper - lower)
      const totalPercentage = i * segmentWeight + progressInSegment * segmentWeight

      return totalPercentage.toFixed(2)
    }
  }

  return 100
}

export const convertBandToScalePosition = (level: Level, includeVeryHigh: boolean): number => {
  if (!includeVeryHigh && level === 'VERY_HIGH') {
    throw new Error('Level cannot be set to VERY_HIGH if includeVeryHigh=false')
  }

  switch (level) {
    case 'LOW':
      return includeVeryHigh ? 13 : 17
    case 'MEDIUM':
      return includeVeryHigh ? 38 : 50
    case 'HIGH':
      return includeVeryHigh ? 63 : 83
    case 'VERY_HIGH':
      return 88
    default:
      throw new Error(`Unexpected level ${level}`)
  }
}
