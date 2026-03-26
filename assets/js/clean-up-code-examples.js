document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.govuk-tabs code')

  for (const code of codeBlocks) {
    code.textContent = code.textContent.replace(/^ {4}/gm, '')
  }
})
