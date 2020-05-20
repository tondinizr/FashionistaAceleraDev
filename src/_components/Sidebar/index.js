import React from 'react'
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'

import './sidebar.scss'

import { Search, Cart } from '../' 

import { sidebarActions } from '../../_actions'

const Sidebar = ({ sidebar: { activeSidebar = null }, cartItems, dispatch }) => {
	
  return (
  	<div className={`sidebar ${activeSidebar ? 'sidebar--open' : 'sidebar--close'} h-full flex`}>
  		<div className='sidebar__body-overlay'
				 onClick={() => dispatch(sidebarActions.hideSideBar())}
  		></div>
	    <div className='sidebar__content-wrapper h-full flex flex-column'>
	      <header className='sidebar__header flex'>
	        <button className='sidebar__button'
	          onClick={() => dispatch(sidebarActions.hideSideBar())}
	        >
	          <Icon path={mdiArrowLeft}
			        size={1}
			        horizontal
			        vertical
			        rotate={180}
			       />
	        </button>
	        <div className='sidebar__title flex'>
            { activeSidebar === 'cart' ? `Sacola (${cartItems})` : 'Buscar Produtos'}
	        </div>
	      </header>
	      <div className='sidebar__content w-full h-full'>
	        { activeSidebar === 'cart' ? <Cart/> : <Search/>  }
	      </div>
	    </div>
  	</div>
  )
}


const mapStateToProps = (state) => { 
  const { sidebar, cart: { count } } = state
  return {
    sidebar,
		cartItems: count
  }
}

export default connect(mapStateToProps)(Sidebar) 