import { sidebarConstants } from '../_constants'

export const sidebar = (state = {}, action) => {
  switch (action.type) {
  case sidebarConstants.SHOW_SIDEBAR_CART:
    return {
      type: 'show-sidebar-cart',
      activeSidebar: action.sidebar
    }
  case sidebarConstants.SHOW_SIDEBAR_SEARCH:
    return {
      type: 'show-sidebar-search',
      activeSidebar: action.sidebar
    }
  case sidebarConstants.HIDE_SIDEBAR:
    return {}
  default:
    return state
  }
}
