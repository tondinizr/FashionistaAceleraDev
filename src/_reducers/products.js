import { productConstants } from '../_constants'

let product = JSON.parse(localStorage.getItem('product'))
const initialState = {items: [], totalItems: 0, product}

export const products = (state = initialState, action) => {
  switch (action.type) {
  case productConstants.FETCH_PRODUCTS:    
    return {
      ...state,      
      items: action.products,
      totalItems: action.totalItems
    } 
  case productConstants.SET_PRODUCT_DETAILS:
    const { product } = action
    localStorage.setItem('product', JSON.stringify(product))
    return {
      ...state,
      product
    }
  default:
    return state
  }
}
