import { convertBandToScalePosition, convertScoreToScalePosition, Level } from './predictorUtils'

describe('predictorUtils', () => {
  describe('convertScoreToScalePosition', () => {
    it.each([
      [13, [], 'Thresholds must contain at least two values'],
      [78, [0], 'Thresholds must contain at least two values'],
      [9, [17, 51, 100], 'The lowest threshold must be 0'],
    ])('Error cases - convertScoreToScalePosition(%s, %s) - %s', (score, thresholds, errorMessage) => {
      expect(() => {
        convertScoreToScalePosition(score, thresholds)
      }).toThrow(Error(errorMessage))
    })

    it.each([
      [0, [0, 100], 0],
      [73, [0, 100], 73],
      [0, [0, 25, 50, 75, 100], 0],
      [10, [0, 25, 50, 75, 100], 10],
      [10.72, [0, 25, 50, 75, 100], 11],
      [25, [0, 25, 50, 75, 100], 25],
      [33.376, [0, 25, 50, 75, 100], 33],
      [50, [0, 25, 50, 75, 100], 50],
      [50.1, [0, 25, 50, 75, 100], 50],
      [75, [0, 25, 50, 75, 100], 75],
      [88.12, [0, 25, 50, 75, 100], 88],
      [100, [0, 25, 50, 75, 100], 100],
      [134, [0, 25, 50, 75, 100], 100],
      [0, [0, 10, 20, 81, 100], 0],
      [10, [0, 10, 20, 81, 100], 25],
      [10.72, [0, 10, 20, 81, 100], 27],
      [25, [0, 10, 20, 81, 100], 52],
      [33.376, [0, 10, 20, 81, 100], 55],
      [50, [0, 10, 20, 81, 100], 62],
      [50.1, [0, 10, 20, 81, 100], 62],
      [75, [0, 10, 20, 81, 100], 73],
      [88.12, [0, 10, 20, 81, 100], 84],
      [100, [0, 10, 20, 81, 100], 100],
      [134, [0, 10, 20, 81, 100], 100],
      [0, [0, 33, 66, 100], 0],
      [10, [0, 33, 66, 100], 10],
      [10.72, [0, 33, 66, 100], 11],
      [25, [0, 33, 66, 100], 25],
      [33.376, [0, 33, 66, 100], 34],
      [50, [0, 33, 66, 100], 51],
      [50.1, [0, 33, 66, 100], 51],
      [75, [0, 33, 66, 100], 75],
      [88.12, [0, 33, 66, 1000], 67],
      [100, [0, 33, 66, 100], 100],
      [134, [0, 33, 66, 100], 100],
      [0, [0, 10, 25, 80], 0],
      [10, [0, 10, 25, 80], 33],
      [10.72, [0, 10, 25, 80], 35],
      [25, [0, 10, 25, 80], 67],
      [33.376, [0, 10, 25, 80], 72],
      [50, [0, 10, 25, 80], 82],
      [50.1, [0, 10, 25, 80], 82],
      [75, [0, 10, 25, 80], 97],
      [88.12, [0, 10, 25, 80], 100],
      [100, [0, 10, 25, 80], 100],
      [134, [0, 10, 25, 80], 100],
    ])('Happy path cases - convertScoreToScalePosition(%s, %s) -> %s', (score, thresholds, expectedPosition) => {
      expect(convertScoreToScalePosition(score, thresholds)).toBe(expectedPosition)
      // Uncomment the below to see a visualisation of the calculated position
      // visualiseTestResult(score, thresholds, expectedPosition)
    })
  })
  describe('convertBandToScalePosition', () => {
    it.each([['VERY_HIGH', false, 'Level cannot be set to VERY_HIGH if includeVeryHigh=false']])(
      'Error cases - convertBandToScalePosition(%s, %s) - %s',
      (level, includeVeryHigh, errorMessage) => {
        expect(() => {
          convertBandToScalePosition(level as Level, includeVeryHigh)
        }).toThrow(Error(errorMessage))
      },
    )

    it.each([
      ['LOW', false, 17],
      ['LOW', true, 13],
      ['MEDIUM', false, 50],
      ['MEDIUM', true, 38],
      ['HIGH', false, 83],
      ['HIGH', true, 63],
      ['VERY_HIGH', true, 88],
    ])('Happy path cases - convertBandToScalePosition(%s, %s) -> %s', (level, includeVeryHigh, expectedPosition) => {
      expect(convertBandToScalePosition(level as Level, includeVeryHigh)).toBe(expectedPosition)
      // Uncomment the below to see a visualisation of the calculated position
      // visualiseTestResult(0, includeVeryHigh ? [0, 25, 50, 75, 100] : [0, 33, 67, 100], expectedPosition)
    })
  })
})

// const visualiseTestResult = (score: number, thresholds: number[], expectedPosition: number) => {
//   const width = 120
//   const numSegments = thresholds.length - 1
//   const segmentWeight = 100 / numSegments
//
//   const pointer = Array(width + 1).fill(' ')
//   const track = Array(width + 1).fill('-')
//   const labelRow = Array(width + 10).fill(' ')
//
//   thresholds.forEach((val, i) => {
//     const milestonePct = i * segmentWeight
//     const pos = Math.round((milestonePct / 100) * width)
//     track[pos] = '|'
//
//     const label = val.toString()
//     let labelStart = pos - Math.floor(label.length / 2)
//
//     if (labelStart < 0) labelStart = 0
//     if (labelStart + label.length > width + 1) {
//       labelStart = width + 1 - label.length
//     }
//
//     for (let charI = 0; charI < label.length; charI += 1) {
//       labelRow[labelStart + charI] = label[charI]
//     }
//   })
//
//   const scorePos = Math.round((expectedPosition / 100) * width)
//   pointer[scorePos] = '↓'
//
//   console.log(
//     `Score: ${score}\nProgress: ${expectedPosition}%\n ${pointer.join('')}\n ${track.join('')}\n ${labelRow.join('')}`,
//   )
// }
