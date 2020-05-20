/* eslint-disable no-case-declarations */
import { cartConstants } from '../_constants'

let initialState = localStorage.getItem('cart')

if (initialState) {
  initialState = JSON.parse(initialState)
} else {
  initialState = {
    items: [],
    count: 0
  }
}

const setCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart))

export const cart = (state = initialState, action) => {
  let { items } = state
  let count = items.length
  let updatedState = null

  switch (action.type) {
  case cartConstants.ADD_ITEM: 
    updatedState = {
      items: [...items, action.item],
      count: count + 1
    }    
    setCart(updatedState)
    return updatedState
  case cartConstants.REMOVE_ITEM: 
    const index = items.findIndex(item => item.selectedSize === action.item.selectedSize)
    if (index >= 0) {
      items = items.slice(0, index).concat(items.slice(index + 1, count))
      count = items.length
    }

    updatedState = {
      items,
      count
    }
    setCart(updatedState)
    return updatedState
  case cartConstants.REMOVE_PRODUCT: 
    items = items.filter(item => item.selectedSize !== action.size)
    count = items.length
    
    updatedState = {
      items,
      count
    }
    setCart(updatedState)
    return updatedState
  default:
    return state
  }
}
