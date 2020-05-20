import React from 'react'
import {  
  Switch,
  Route  
} from 'react-router-dom'

import Home from '../Home'
import ProductDetails from '../Product/Details'

const Routes = () => {  
  return (    
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/produto/:id' component={ProductDetails}/>
    </Switch>    
  )
}
export default Routes