const properCase = (word: string): string =>
  word.length >= 1 ? word[0].toUpperCase() + word.toLowerCase().slice(1) : word

const isBlank = (str: string): boolean => !str || /^\s*$/.test(str)

/**
 * Converts a name (first name, last name, middle name, etc.) to proper case equivalent, handling double-barreled names
 * correctly (i.e. each part in a double-barreled is converted to proper case).
 * @param name name to be converted.
 * @returns name converted to proper case.
 */
const properCaseName = (name: string): string => (isBlank(name) ? '' : name.split('-').map(properCase).join('-'))

export const convertToTitleCase = (sentence: string): string =>
  isBlank(sentence) ? '' : sentence.split(' ').map(properCaseName).join(' ')

export const initialiseName = (fullName?: string): string | null => {
  // this check is for the authError page
  if (!fullName) return null

  const array = fullName.split(' ')
  return `${array[0][0]}. ${array.reverse()[0]}`
}

export const outdent = (str: string) => {
  const lines = str?.split('\n')

  if (lines) {
    const minIndent = lines
      .filter(l => l.trim())
      .reduce((min, l) => {
        const match = l.match(/^[ \t]*/)
        return match ? Math.min(min, match[0].length) : min
      }, Infinity)

    return lines
      .map(l => l.slice(minIndent))
      .join('\n')
      .trim()
  }

  return null
}

export const baseMacroOptions = [
  [
    {
      text: 'data',
    },
    {
      text: 'object',
    },
    {
      html: '<strong>Required.</strong> Data from ARNS API - use service from library to obtain this (see <a href="/new">Introduction</a> for more information)',
    },
  ],
  [
    {
      text: 'predictor',
    },
    {
      text: 'string',
    },
    {
      html: `<strong>Required.</strong> Predictor to render. One of
        <p class = "govuk-!-margin-top-4" > <strong>Legacy(OGRS3 - gen) predictors</strong></p>
        <ul>
          <li><strong>ogrs3</strong> - Offender Group Reconviction Scale v3 (OGRS3)</li>
          <li><strong>ovp</strong> - OASys Violence Predictor (OVP)</li>
          <li><strong>ogp</strong> - OASys General Predictor (OGP)</li>
          <li><strong>rsr</strong> - Risk of Serious Reicidivism (RSR)</li>
          <li><strong>ospdc</strong> - OASys Sexual Predictor – Direct Contact (OSP-DC)</li>
          <li><strong>ospiic</strong> - OASys Sexual Predictor – Images and Indirect Contact (OSP-IIC)</li>
        </ul>
        <p><strong>Current (OGRS4-gen) predictors</strong></p>
        <ul>
          <li><strong>allReoffendingPredictor</strong> - All reoffending predictor</li>
          <li><strong>violentReoffendingPredictor</strong> - Violent reoffending predictor</li>
          <li><strong>seriousViolentReoffendingPredictor</strong> - Serious violent reoffending predictor</li>
          <li><strong>directContactSexualReoffendingPredictor</strong> - Direct contact - Sexual reoffending predictor</li>
          <li><strong>indirectImageContactSexualReoffendingPredictor</strong> - Indirect image contact - Sexual reoffending predictor</li>
          <li><strong>combinedSeriousReoffendingPredictor</strong> - Combined serious reoffending predictor</li>
        </ul>`,
    },
  ],
]
