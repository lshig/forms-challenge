(function(window) {
  'use strict'
  // module pattern

  var View = function(template) {

    // save private copy of template data
    var DOMData = template
    DOMData.set()

    // utility DOM addEventListener function
    var addClickListener = function(target, controllerCallback) {
      if (target.length) {
        // add event to node list
        for (var n = 0; n < target.length; n++) {
          target[n].addEventListener('click', controllerCallback)
        }
      } else {
        // add event to single node
        target.addEventListener('click', controllerCallback)
      }
    }
    // utility DOM attribute function
    var setAttributeFromModel = function(DOMNodeList, attributeName, modelData) {
      if (Array.isArray(modelData)) {
        // case: apply data array to individual checkboxes
        for (var c = 0; c < DOMNodeList.length; c++) {
          if (modelData.indexOf(DOMNodeList[c].value) > -1) {
            DOMNodeList[c][attributeName] = true
          } else {
            DOMNodeList[c][attributeName] = false
          }
        }
      } else if (typeof modelData === 'string') {
        // case: find string in select options node list
        if (attributeName === 'selected') {
          for (var s = 0; s < DOMNodeList.options.length; s++) {
            if (DOMNodeList.options[s].value === modelData) {
              DOMNodeList.options[s][attributeName] = true
            } else {
              DOMNodeList.options[s][attributeName] = false
            }
          }
        } else if (attributeName === 'checked') {
          // case: find string in radios node list
          for (var r = 0; r < DOMNodeList.length; r++) {
            if (DOMNodeList[r].value === modelData) {
              DOMNodeList[r][attributeName] = true
            } else {
              DOMNodeList[r][attributeName] = false
            }
          }
        } else {
          // case: add data to textareas
          DOMNodeList[attributeName] = modelData
        }
      }
    }

    // handle when tab selected for form content navigation
    var addClickToTabBlock = function(selectedTab) {
      var allNavTabs = DOMData.tabButtons
      var allFormContents = DOMData.form[0].children
      if (allNavTabs.length === allFormContents.length) {
        var tabContentMap = DOMData.tabContentMap
        var selectedContent = null
        // use selected master node to find slave node
        for (var m = 0; m < tabContentMap.length; m++) {
          if (tabContentMap[m].master === selectedTab) {
            selectedContent = tabContentMap[m].slave
            break;
          }
        }
        // hide all master and slave nodes
        for (var t = 0; t < allNavTabs.length; t++) {
          allNavTabs[t].className = 'nav--tab'
          allFormContents[t].className = 'content__hide'
        }
        // show selected master and slave nodes
        selectedContent.className = ''
        selectedTab.className = 'nav--tab nav--tab__selected'
      }
    }
    // handle when direction buttons selected for form content navigation
    var addClickToDirectionBlock = function(directionButton) {
      var tabContentMap = DOMData.tabContentMap
      // find parent node to direction button (aka tab content map's slave node)
      var directionButtonContentParent = directionButton.parentNode.parentNode
      // find tab content map's slave sibling node
      var directionButtonContentParentSibling = (directionButton.className === 'previous')
        ? directionButtonContentParent.previousElementSibling
        : directionButtonContentParent.nextElementSibling
      var selectedTab = null
      // find master to tab content map's slave sibling node
      for (var d = 0; d < tabContentMap.length; d++) {
        if (tabContentMap[d].slave === directionButtonContentParentSibling) {
          selectedTab = tabContentMap[d].master
          break
        }
      }
      addClickToTabBlock(selectedTab)
    }

    var restartRender = function() {
      addClickToTabBlock(DOMData.tabContentMap[0].master);
      setAttributeFromModel(DOMData.interactionSection, 'className', '');
      setAttributeFromModel(DOMData.resultsSection, 'className', 'content__hide');
    };

    // initialize view's navigation buttons
    var setNavigation = function() {
      var targetMap = DOMData.tabContentMap
      if (Array.isArray(targetMap)) {
        // create click event listeners for all tabs and content
        for (var v = 0; v < targetMap.length; v++) {
          addClickListener(targetMap[v].master, function() {
            addClickToTabBlock(this)
          })
        }
        // create click event listeners for direction buttons
        addClickListener(DOMData.previousButtons, function() {
          addClickToDirectionBlock(this)
        })
        addClickListener(DOMData.nextButtons, function() {
          addClickToDirectionBlock(this)
        })
      }
    }
    setNavigation()

    // return public connected model + view methods
    return {
      fillInputsRender: function(modelData) {
        setAttributeFromModel(DOMData.firstNameInput, 'value', modelData.firstName)
        setAttributeFromModel(DOMData.lastNameInput, 'value', modelData.lastName)
        setAttributeFromModel(DOMData.commentsInput, 'value', modelData.comments)
        setAttributeFromModel(DOMData.weekdayCheckboxes, 'checked', modelData.weekday)
        setAttributeFromModel(DOMData.timeOfDayRadios, 'checked', modelData.timeOfDay)
        setAttributeFromModel(DOMData.monthSelect, 'selected', modelData.month)
        setAttributeFromModel(DOMData.daySelect, 'selected', modelData.day)
        setAttributeFromModel(DOMData.yearSelect, 'selected', modelData.year)
      },
      bind: function(event, handler) {
        switch (event) {
          case 'autofillForm':
            addClickListener(DOMData.autofillButton, handler);
            break;
          case 'submitForm':
            addClickListener(DOMData.submitButton, function() {
              handler('Thanks for your submission!')
            });
            break;
          case 'repeatForm':
            addClickListener(DOMData.repeatButton, function() {
              restartRender();
              handler();
            });
            break;
          case 'updateCheckBoxesContent':
            addClickListener(DOMData.weekdayCheckboxes, function() {
              var filterResult = [];
              for (var f = 0; f < DOMData.weekdayCheckboxes.length; f++) {
                if (DOMData.weekdayCheckboxes[f].checked) {
                  filterResult.push(DOMData.weekdayCheckboxes[f].value);
                }
              }
              handler('weekday', filterResult);
            });
            break;
          case 'updateSelectContent':
            DOMData.monthSelect.onchange = function() {
              handler('month', this.value);
            };
            DOMData.daySelect.onchange = function() {
              handler('day', this.value);
            };
            DOMData.yearSelect.onchange = function() {
              handler('year', this.value);
            };
            break;
          case 'updateRadiosContent':
            addClickListener(DOMData.timeOfDayRadios, function() {
              handler('timeOfDay', this.value);
            });
            break;
          case 'updateTextareaContent':
            DOMData.firstNameInput.onchange = function() {
              handler('firstName', this.value)
            };
            DOMData.lastNameInput.onchange = function() {
              handler('lastName', this.value)
            };
            DOMData.commentsInput.onchange = function() {
              handler('comments', this.value)
            };
            break;
          default:
            break;
        }
      },
      summaryRender: function(modelData) {
        // DOMData.interactionSection.remove();
        setAttributeFromModel(DOMData.interactionSection, 'className', 'content__hide');
        setAttributeFromModel(DOMData.resultsSection, 'className', '');
        setAttributeFromModel(DOMData.summaryText, 'innerHTML', JSON.stringify(modelData))
      },
      timeRender: function(timerString) {
        setAttributeFromModel(DOMData.timer, 'innerHTML', timerString)
      }
    }
  }
  window.app = window.app || {}
  window.app.View = View
})(window)
