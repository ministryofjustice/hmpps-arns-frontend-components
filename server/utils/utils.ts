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
