(function (window) {
  'use strict'
  // prototype pattern

  var Template = function () {
    // public template properties
    this.appContent = null
    this.autofillButton = null
    this.commentsInput = null
    this.daySelect = null
    this.firstNameInput = null
    this.form = null
    this.interactionSection = null
    this.introductionSection = null
    this.lastNameInput = null
    this.monthSelect = null
    this.nextButtons = null
    this.previousButtons = null
    this.repeatButton = null
    this.resultsSection = null
    this.submitButton = null
    this.summaryText = null
    this.tabBlockMap = []
    this.tabButtons = null
    this.timeDisplaySection = null
    this.timer = null
    this.timeOfDayRadios = null
    this.weekdayCheckboxes = null
    this.yearSelect = null
    this.renderDOM()
    this.renderSelectOptions()
  }
  // public template methods
  Template.prototype = {
    renderDOM: function () {
      if (document.getElementById('app') !== null) {
        console.log('JUST DO IT!')
      }
      // TODO: create entire DOM from vanilla JavaScript
    },
    renderSelectOptions: function () {
      var createSelectOptions = function (dropdownElement, startIndex, endIndex) {
        for (var i = startIndex; i <= endIndex; i++) {
          var optionElement = document.createElement('option')
          optionElement.innerHTML = i
          optionElement.value = i
          dropdownElement.appendChild(optionElement)
        }
      }
      createSelectOptions(document.getElementById('month'), 1, 12)
      createSelectOptions(document.getElementById('day'), 1, 31)
      createSelectOptions(document.getElementById('year'), 2000, 2017)
    },
    set: function () {
      this.appContent = document.getElementById('app')
      this.autofillButton = document.getElementById('autofillButton')
      this.commentsInput = document.getElementById('comments')
      this.daySelect = document.getElementById('day')
      this.firstNameInput = document.getElementById('firstName')
      this.form = document.getElementsByTagName('form')
      this.interactionSection = document.getElementById('interaction')
      this.introductionSection = document.getElementById('introduction')
      this.lastNameInput = document.getElementById('lastName')
      this.monthSelect = document.getElementById('month')
      this.nextButtons = document.getElementsByClassName('previous')
      this.previousButtons = document.getElementsByClassName('next')
      this.repeatButton = document.getElementById('repeatButton')
      this.resultsSection = document.getElementById('results')
      this.submitButton = document.getElementById('submitButton')
      this.summaryText = document.getElementById('userSummary')
      this.tabButtons = document.getElementsByClassName('nav--tab')
      this.tabContentMap = [
        {
          master: document.getElementById('checkboxTab'),
          slave: document.getElementById('checkboxContent')
        }, {
          master: document.getElementById('selectTab'),
          slave: document.getElementById('selectContent')
        }, {
          master: document.getElementById('radioTab'),
          slave: document.getElementById('radioContent')
        }, {
          master: document.getElementById('textareaTab'),
          slave: document.getElementById('textareaContent')
        }
      ]
      this.timeDisplaySection = document.getElementById('time-display')
      this.timer = document.getElementById('timer')
      this.timeOfDayRadios = document.getElementsByName('timeOfDay')
      this.weekdayCheckboxes = document.getElementsByName('weekday')
      this.yearSelect = document.getElementById('year')
    }
  }
  window.app = window.app || {}
  window.app.Template = Template
})(window)
