import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './cart.scss'
import { ProductCard } from '../'
import { floatToCurrency, currencyToFloat, groupBy } from '../../_helpers'

const Cart = ({ items }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [groupedItems, setGroupedItems] = useState([])

  const groupBySize = groupBy('selectedSize')
  
  useEffect(() => {
    const total = items.map(item => currencyToFloat(item.actual_price)).reduce((a,b) => a + b, 0)
    setTotalPrice(total)
    
    setGroupedItems(groupBySize(items))    
  }, [items])

  return (
    <div className='cart w-full h-full flex flex-column justify-between'>       
      {totalPrice > 0 ? (
        <div className='cart__items'>
          { Object.keys(groupedItems).map((key) => (
            <div className='cart__item' key={key}>              
              <ProductCard product={groupedItems[key][0]} quantity={groupedItems[key].length}/>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-1 items-center justify-center empty__cart">
          <span>Sua sacola está vazia :\</span>
        </div>
          
      )
      }  	

      <div className='cart__price flex justify-center w-full'>
        <span>Subtotal - {floatToCurrency(totalPrice)}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { cart: { items } } = state
  return {
    items
  }
}

export default connect(mapStateToProps)(Cart)
