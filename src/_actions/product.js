import { productConstants } from '../_constants'
import { ProductService } from '../_services'

const getProducts = () => {
  return async dispatch => {    
    const { data } = await ProductService.getProducts()
    const totalItems = data.length
    dispatch({ type: productConstants.FETCH_PRODUCTS, products: data, totalItems })
  }  
}

const setProductDetails = (product) => ({ type: productConstants.SET_PRODUCT_DETAILS, product })

export const productActions = {
  getProducts,
  setProductDetails
}