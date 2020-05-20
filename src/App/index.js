import React, { useEffect } from 'react'
import {
  BrowserRouter as Router  
} from 'react-router-dom'
import { connect } from 'react-redux'

import {Navbar} from '../_components'
import { Sidebar } from '../_components'

import './app.scss'
import Routes from '../_routes'
import { productActions } from '../_actions'

function App({ dispatch }) {

  useEffect(() => {        
    dispatch(productActions.getProducts())    
  }, [])

  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
        <main className='main w-full'>
          <div className='container'>
            <div className='row'>
              <Routes/>
            </div>
          </div>
        </main>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  return {    
  }
}

export default connect(mapStateToProps)(App)
