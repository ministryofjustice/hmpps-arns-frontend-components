/* eslint-disable */
var allHidden = true
var openText = 'Open'
var closeText = 'Close'
var openAllText = 'Open all'
var closeAllText = 'Close all'

function attachListenerForToggleSectionButton(button, section, initiallyHidden) {
  button.setAttribute('data-section-is-hidden', initiallyHidden)

  button.onclick = function(e) {
    e.preventDefault()

    var sectionIsHidden = button.dataset.sectionIsHidden === 'true'

    if (sectionIsHidden) {
      button.innerText = closeText
      this.setAttribute('aria-label', this.getAttribute('aria-label').replace('View', 'Hide'));
      section.classList.remove('predictor-timeline-section--hidden')
    } else {
      button.innerText = openText
      this.setAttribute('aria-label', this.getAttribute('aria-label').replace('Hide', 'View'));
      section.classList.add('predictor-timeline-section--hidden')
    }

    button.setAttribute('data-section-is-hidden', !sectionIsHidden)
  }
}

function attachListenerForToggleAllButton(button, sections, initiallyHidden) {
  button.setAttribute('data-sections-are-hidden', initiallyHidden)

  button.onclick = function(e) {
    e.preventDefault()

    var areHidden = button.getAttribute('data-sections-are-hidden') === 'true';

    if (areHidden) {
      button.innerText = closeAllText
      button.setAttribute('aria-label', 'Close all score history')

      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('predictor-timeline-section--hidden')

        var sectionButtons = sections[i].parentElement.getElementsByClassName('predictor-timeline__toggle-section')

        for (var j = 0; j < sectionButtons.length; j++) {
          sectionButtons[j].setAttribute('data-section-is-hidden', false)
          sectionButtons[j].innerText = closeText
          sectionButtons[j].setAttribute('aria-label', sectionButtons[j].getAttribute('aria-label').replace('View', 'Hide'));
        }
      }

      button.setAttribute('data-sections-are-hidden', 'false');

    } else {
      button.innerText = openAllText
      button.setAttribute('aria-label', 'Open all score history')

      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('predictor-timeline-section--hidden')

        var sectionButtons = sections[i].parentElement.getElementsByClassName('predictor-timeline__toggle-section')

        for (var j = 0; j < sectionButtons.length; j++) {
          sectionButtons[j].setAttribute('data-section-is-hidden', true)
          sectionButtons[j].innerText = openText
          sectionButtons[j].setAttribute('aria-label', sectionButtons[j].getAttribute('aria-label').replace('Hide', 'View'));
        }
      }

      button.setAttribute('data-sections-are-hidden', 'true');
    }
  }
}

function addPredictorTimelineListeners() {
  var openAllButton = document.getElementById('predictor-timeline__toggle-all')
  var sections = document.getElementsByClassName('predictor-timeline-section')

  for (var i = 0; i < sections.length; i++) {
    if (allHidden) {
      sections[i].classList.add('predictor-timeline-section--hidden')
    }

    var openSectionButtons = sections[i].parentElement.getElementsByClassName('predictor-timeline__toggle-section')
    for (var j = 0; j < openSectionButtons.length; j++) {
      attachListenerForToggleSectionButton(openSectionButtons[j], sections[i], allHidden)
    }
  }

  attachListenerForToggleAllButton(openAllButton, sections, allHidden)
}

;(function() {
  addPredictorTimelineListeners()
})()
