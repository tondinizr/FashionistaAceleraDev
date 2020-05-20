import { combineReducers } from 'redux'

import { sidebar } from './sidebar'
import { products } from './products'
import { cart } from './cart'

const rootReducer = combineReducers({  
  products,
  cart,  
  sidebar
})

export default rootReducer
