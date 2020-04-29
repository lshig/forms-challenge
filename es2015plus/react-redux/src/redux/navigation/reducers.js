import { getContentId, matchContentToTab } from '../../utils';
import {
  RESET_NAVIGATION,
  SHOW_DIRECTED_CONTENT,
  SHOW_TAB_CONTENT
} from './constants';

const initialTabContentState = {
  activeTabId: 'checkboxTab',
  activeContentId: 'checkboxContent'
};

const navigation = (state = initialTabContentState, action) => {
  switch (action.type) {
    case RESET_NAVIGATION:
      return {
        activeTabId: 'checkboxTab',
        activeContentId: 'checkboxContent'
      };
    case SHOW_DIRECTED_CONTENT: {
      const tabContentObj = matchContentToTab(
        action.tabId,
        action.previousFlag
      );
      return {
        activeTabId: tabContentObj.tabId,
        activeContentId: tabContentObj.contentId
      };
    }
    case SHOW_TAB_CONTENT:
      return {
        activeTabId: action.tabId,
        activeContentId: getContentId(action.tabId)
      };
    default:
      return state;
  }
};

export default navigation;
