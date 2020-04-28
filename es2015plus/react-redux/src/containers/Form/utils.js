export const tabContentMap = [
  {
    tabId: 'checkboxTab',
    contentId: 'checkboxContent',
    tabText: 'Checkboxes'
  },
  {
    tabId: 'selectTab',
    contentId: 'selectContent',
    tabText: 'Selects'
  },
  {
    tabId: 'radioTab',
    contentId: 'radioContent',
    tabText: 'Radios'
  },
  {
    tabId: 'textareaTab',
    contentId: 'textareaContent',
    tabText: 'Textareas'
  }
];
export const getContentId = (tabId) => {
  const result = tabContentMap.filter((tab) => {
    return tab.tabId === tabId;
  });
  return result[0].contentId;
};
export const matchContentToTab = (contentId, previousFlag) => {
  for (let t = 0; t < tabContentMap.length; t++) {
    if (tabContentMap[t].contentId === contentId) {
      if (previousFlag && t > 0) {
        return tabContentMap[t - 1];
      } else if (!previousFlag && t < tabContentMap.length - 1) {
        return tabContentMap[t + 1];
      }
    }
  }
  return {};
};

export const setAttributeFromModel = (
  DOMNodeList,
  attributeName,
  modelData
) => {
  if (Array.isArray(modelData)) {
    // case: apply data array to individual checkboxes
    for (let c = 0; c < DOMNodeList.length; c++) {
      if (modelData.indexOf(DOMNodeList[c].value) > -1) {
        DOMNodeList[c][attributeName] = true;
      } else {
        DOMNodeList[c][attributeName] = false;
      }
    }
  } else if (typeof modelData === 'string') {
    // case: find string in select options node list
    if (attributeName === 'selected') {
      for (let s = 0; s < DOMNodeList.options.length; s++) {
        if (DOMNodeList.options[s].value === modelData) {
          DOMNodeList.options[s][attributeName] = true;
        } else {
          DOMNodeList.options[s][attributeName] = false;
        }
      }
    } else if (attributeName === 'checked') {
      // case: find string in radios node list
      for (let r = 0; r < DOMNodeList.length; r++) {
        if (DOMNodeList[r].value === modelData) {
          DOMNodeList[r][attributeName] = true;
        } else {
          DOMNodeList[r][attributeName] = false;
        }
      }
    } else {
      // case: add data to textareas
      DOMNodeList[attributeName] = modelData;
    }
  }
};

export const setView = (modelData) => {
  const commentsInput = document.getElementById('comments');
  const daySelect = document.getElementById('day');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const monthSelect = document.getElementById('month');
  const timeOfDayRadios = document.getElementsByName('timeOfDay');
  const weekdayCheckboxes = document.getElementsByName('weekday');
  const yearSelect = document.getElementById('year');
  setAttributeFromModel(firstNameInput, 'value', modelData.firstName);
  setAttributeFromModel(lastNameInput, 'value', modelData.lastName);
  setAttributeFromModel(commentsInput, 'value', modelData.comments);
  setAttributeFromModel(weekdayCheckboxes, 'checked', modelData.weekday);
  setAttributeFromModel(timeOfDayRadios, 'checked', modelData.timeOfDay);
  setAttributeFromModel(monthSelect, 'selected', modelData.month);
  setAttributeFromModel(daySelect, 'selected', modelData.day);
  setAttributeFromModel(yearSelect, 'selected', modelData.year);
};

export const transformData = (modelData) => {
  const results = {};
  for (const key in modelData) {
    if (
      key !== 'activeTabId' &&
      key !== 'activeContentId' &&
      key !== 'activeTime' &&
      key !== 'timerStatus' &&
      key !== 'timeCounter' &&
      key !== 'intervalId'
    ) {
      results[key] = modelData[key];
    }
  }
  return results;
};
