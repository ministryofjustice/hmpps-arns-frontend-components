import nunjucks from 'nunjucks'

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('server/views/partials/predictor-badge/', { noCache: true }),
)

const normalize = (html: string) => html.replace(/\s+/g, ' ').trim()

describe('Predictor Badge Nunjucks Template Unit Tests', () => {
  test('should render low band predictorBadge with score & staticOrDynamic', () => {
    const predictor = {
      level: 'LOW',
      score: 12.34,
      type: 'All Reoffending Predictor',
      staticOrDynamic: 'static',
      completedDate: '25 October 2025',
    }
    const showScore = true

    const njkCall = `
      {% from "macro.njk" import predictorBadge %}
      {{ predictorBadge(predictor, showScore) }}
    `

    const actualOutput: string = env.renderString(njkCall, { predictor, showScore })

    const expectedOutput = `<div class="predictor-badge--low"> <span class="predictor-badge__type_and_level">ALL REOFFENDING PREDICTOR <strong>LOW</strong></span> <span class="predictor-badge__score">12.34%</span> <span class="predictor-badge__static_or_dynamic">Static</span> </div>`

    expect(normalize(actualOutput)).toMatch(expectedOutput)
  })

  test('should render medium band predictorBadge ', () => {
    const predictor = {
      level: 'MEDIUM',
      score: 12.34,
      type: 'All Reoffending Predictor',
      staticOrDynamic: 'STATIC',
      completedDate: '25 October 2025',
    }
    const showScore = true

    const njkCall = `
      {% from "macro.njk" import predictorBadge %}
      {{ predictorBadge(predictor, showScore) }}
    `

    const actualOutput: string = env.renderString(njkCall, { predictor, showScore })

    expect(actualOutput).toContain('predictor-badge--medium')
  })

  // Should render HIGH - check class
  // Should render VERY_HIGH - check class & that band containing '_' replaced with ' ' within badge
  // Should render without score when score is null & showScore is true
  // Should render without score when showScore is false
  // Should render without staticOrDynamic when staticOrDynamic is null
})
