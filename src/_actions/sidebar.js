import { sidebarConstants } from '../_constants'

const showSidebarCart = (sidebar) => ({ type: sidebarConstants.SHOW_SIDEBAR_CART, sidebar})
const showSidebarSearch = (sidebar) => ({ type: sidebarConstants.SHOW_SIDEBAR_SEARCH, sidebar})
const hideSideBar = () => ({ type: sidebarConstants.HIDE_SIDEBAR})

export const sidebarActions = {
  showSidebarCart,
  showSidebarSearch,
  hideSideBar
}