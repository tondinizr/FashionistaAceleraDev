import { cartConstants } from '../_constants'

const addItem = (item) => ({ type: cartConstants.ADD_ITEM, item })
const removeItem = (item) => ({ type: cartConstants.REMOVE_ITEM, item })
const removeProduct = (size) => ({type: cartConstants.REMOVE_PRODUCT, size})

export const cartActions = {
  addItem,
  removeItem,
  removeProduct
}