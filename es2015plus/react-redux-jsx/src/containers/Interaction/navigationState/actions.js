import {
  RESET_NAVIGATION,
  SHOW_DIRECTED_CONTENT,
  SHOW_TAB_CONTENT
} from './constants'

export function resetNavigation () {
  return { type: RESET_NAVIGATION }
}
export function showDirectedContent (tabId, previousFlag) {
  return { type: SHOW_DIRECTED_CONTENT, tabId, previousFlag }
}
export function showTabContent (tabId) {
  return { type: SHOW_TAB_CONTENT, tabId }
}
