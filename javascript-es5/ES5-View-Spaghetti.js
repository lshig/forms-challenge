document.addEventListener('DOMContentLoaded', function () {
  'use strict'
  // functional spaghetti anti-pattern
  // inside of a lazy initialization/loading pattern

  console.log('JUST DO IT!')

  var autofillData = {
    comments: 'Hello, World!',
    firstName: 'Jane',
    lastName: 'Doe',
    dateTime: '',
    day: '14',
    month: '3',
    sessionDuration: '',
    timeOfDay: 'Late Night',
    weekday: [
      'Sunday', 'Thursday', 'Friday', 'Saturday'
    ],
    year: '2015'
  }

  var userData = {
    comments: '',
    firstName: '',
    lastName: '',
    dateTime: '',
    day: '',
    month: '',
    sessionDuration: '',
    timeOfDay: '',
    weekday: [],
    year: ''
  }

  var setValueFromData = function (DOMNodeList, attributeName, modelData) {
    if (Array.isArray(modelData)) {
      for (var c = 0; c < DOMNodeList.length; c++) {
        if (modelData.indexOf(DOMNodeList[c].value) > -1) {
          DOMNodeList[c][attributeName] = true
        } else {
          DOMNodeList[c][attributeName] = false
        }
      }
    } else if (typeof modelData === 'string') {
      if (attributeName === 'selected') {
        for (var s = 0; s < DOMNodeList.options.length; s++) {
          if (DOMNodeList.options[s].value === modelData) {
            DOMNodeList.options[s][attributeName] = true
          } else {
            DOMNodeList.options[s][attributeName] = false
          }
        }
      } else if (attributeName === 'checked') {
        for (var r = 0; r < DOMNodeList.length; r++) {
          if (DOMNodeList[r].value === modelData) {
            DOMNodeList[r][attributeName] = true
          } else {
            DOMNodeList[r][attributeName] = false
          }
        }
      } else {
        DOMNodeList[attributeName] = modelData
      }
    }
  }

  var renderTabContentNavigation = function (selectedNavTabElement, selectedContentElement) {
    var allNavTabElements = document.getElementsByClassName('nav--tab')
    var allContentElements = document.getElementsByTagName('form')[0].children
    if (allNavTabElements.length === allContentElements.length) {
      for (var t = 0; t < allNavTabElements.length; t++) {
        allNavTabElements[t].className = 'nav--tab'
        allContentElements[t].className = 'content__hide'
      }
      selectedContentElement.className = ''
      selectedNavTabElement.className = 'nav--tab nav--tab__selected'
    }
  }

  var findTabContentObject = function (selectedContentId, tabContentMap) {
    for (var i = 0; i < tabContentMap.length; i++) {
      if (selectedContentId === tabContentMap[i].slave) {
        return tabContentMap[i]
      }
    }
    return {}
  }

  var fillUserData = function (replacementData) {
    userData = replacementData
    setValueFromData(document.getElementById('firstName'), 'value', userData.firstName)
    setValueFromData(document.getElementById('lastName'), 'value', userData.lastName)
    setValueFromData(document.getElementById('comments'), 'value', userData.comments)
    setValueFromData(document.getElementsByName('weekday'), 'checked', userData.weekday)
    setValueFromData(document.getElementsByName('timeOfDay'), 'checked', userData.timeOfDay)
    setValueFromData(document.getElementById('month'), 'selected', userData.month)
    setValueFromData(document.getElementById('day'), 'selected', userData.day)
    setValueFromData(document.getElementById('year'), 'selected', userData.year)
  }

  var addAutofillClickEvent = function () {
    document.getElementById('autofillButton').addEventListener('click', function () {
      fillUserData(autofillData)
    })
  }

  var addTabClickEvent = function (selectedNavTabElement, selectedContentElement) {
    selectedNavTabElement.addEventListener('click', function () {
      renderTabContentNavigation(selectedNavTabElement, selectedContentElement)
    })
  }

  var addDirectionButtonEvents = function (buttonElements, tabContentMap) {
    for (var b = 0; b < buttonElements.length; b++) {
      buttonElements[b].addEventListener('click', function () {
        var selectedContentParentElement = this.parentNode.parentNode
        var selectedContentParentSiblingElement = (this.className === 'previous')
          ? selectedContentParentElement.previousElementSibling
          : selectedContentParentElement.nextElementSibling
        var selectedTabContentObject = findTabContentObject(selectedContentParentSiblingElement.id, tabContentMap)
        renderTabContentNavigation(document.getElementById(selectedTabContentObject.master), document.getElementById(selectedTabContentObject.slave))
      })
    }
  }

  var addInputEvents = function () {
    var timeOfDayList = document.getElementsByName('timeOfDay')
    for (var t = 0; t < timeOfDayList.length; t++) {
      timeOfDayList[t].addEventListener('click', function () {
        userData.timeOfDay = this.value
      })
    }
    var weekdayList = document.getElementsByName('weekday')
    for (var w = 0; w < weekdayList.length; w++) {
      weekdayList[w].addEventListener('click', function () {
        var filterResult = []
        for (var f = 0; f < weekdayList.length; f++) {
          if (weekdayList[f].checked) {
            filterResult.push(weekdayList[f].value)
          }
        }
        userData.weekday = filterResult
      })
    }

    document.getElementById('month').onchange = function () {
      userData.month = this.value
    }
    document.getElementById('day').onchange = function () {
      userData.day = this.value
    }
    document.getElementById('year').onchange = function () {
      userData.year = this.value
    }
    document.getElementById('firstName').onchange = function () {
      userData.firstName = this.value
    }
    document.getElementById('lastName').onchange = function () {
      userData.lastName = this.value
    }
    document.getElementById('comments').onchange = function () {
      userData.comments = this.value
    }
  }

  var addRepeatFormEvent = function () {
    document.getElementById('repeatButton').addEventListener('click', function () {
      var defaultData = {
        comments: '',
        firstName: '',
        lastName: '',
        dateTime: '',
        day: '',
        month: '',
        sessionDuration: '',
        timeOfDay: '',
        weekday: [],
        year: ''
      }
      fillUserData(defaultData)
      setValueFromData(document.getElementById('timer'), 'innerHTML', 'Another One!')
      setValueFromData(document.getElementById('results'), 'className', 'content__hide')
      setValueFromData(document.getElementById('interaction'), 'className', '')
      renderTabContentNavigation(document.getElementById('checkboxTab'), document.getElementById('checkboxContent'))
      timer = duration
      loadedTimer = setInterval(renderTimer, 1000)
    })
  }

  var addSubmitFormEvent = function () {
    document.getElementById('submitButton').addEventListener('click', function () {
      clearInterval(loadedTimer)
      setValueFromData(document.getElementById('timer'), 'innerHTML', 'Thanks for your submission!')
      renderSummary()
    })
  }

  var createDropdownOptions = function (dropdownElement, startIndex, endIndex) {
    for (var i = startIndex; i <= endIndex; i++) {
      var optionElement = document.createElement('option')
      optionElement.innerHTML = i
      optionElement.value = i
      dropdownElement.appendChild(optionElement)
    }
  }

  var renderButtons = function () {
    var tabContentMap = [
      {
        master: 'checkboxTab',
        slave: 'checkboxContent'
      }, {
        master: 'selectTab',
        slave: 'selectContent'
      }, {
        master: 'radioTab',
        slave: 'radioContent'
      }, {
        master: 'textareaTab',
        slave: 'textareaContent'
      }
    ]
    for (var c = 0; c < tabContentMap.length; c++) {
      addTabClickEvent(document.getElementById(tabContentMap[c].master), document.getElementById(tabContentMap[c].slave))
    }
    addDirectionButtonEvents(document.getElementsByClassName('previous'), tabContentMap)
    addDirectionButtonEvents(document.getElementsByClassName('next'), tabContentMap)
    addAutofillClickEvent()
    addSubmitFormEvent()
    addRepeatFormEvent()
    addInputEvents()
  }

  var renderDropdownOptions = function () {
    createDropdownOptions(document.getElementById('month'), 1, 12)
    createDropdownOptions(document.getElementById('day'), 1, 31)
    createDropdownOptions(document.getElementById('year'), 2000, 2017)
  }

  var renderSummary = function () {
    setTimeData()
    setValueFromData(document.getElementById('interaction'), 'className', 'content__hide')
    setValueFromData(document.getElementById('results'), 'className', '')
    setValueFromData(document.getElementById('userSummary'), 'innerHTML', JSON.stringify(userData))
  }

  var setTimeData = function () {
    userData.sessionDuration = (duration - timer - 1).toString()
    userData.dateTime = new Date().toISOString()
  }

  var duration = 20
  var timer = duration
  var renderTimer = function () {
    if (timer >= 0) {
      var minutes = parseInt(timer / 60, 10)
      var seconds = parseInt(timer % 60, 10)
      minutes = minutes < 10
        ? '0' + minutes
        : minutes
      seconds = seconds < 10
        ? '0' + seconds
        : seconds
      setValueFromData(document.getElementById('timer'), 'innerHTML', minutes + ':' + seconds)
      timer--
    } else {
      setValueFromData(document.getElementById('timer'), 'innerHTML', 'Time\'s up!')
      clearInterval(loadedTimer)
      renderSummary()
    }
  }
  var loadedTimer = setInterval(renderTimer, 1000)

  renderButtons()
  renderDropdownOptions()
  renderTimer()
}, false)
