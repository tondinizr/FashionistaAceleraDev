import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'

import './product-card.scss'
import { slugify } from '../../../_helpers'
import { cartActions, productActions } from '../../../_actions'

const ProductCard = ({ product, quantity = 0, sidebar: { activeSidebar = null }, dispatch }) => {	
  const productPath = `/produto/${slugify(product.name, '-')}`
  const setProductDetails = () => dispatch(productActions.setProductDetails(product))

  const showProductImage = () => {
    return activeSidebar === 'cart' ? (
      <div className='w-full h-full flex justify-center items-center'>        
        { product.image ? <img 
          className='w-full h-full' 
          src={product.image} 
          alt={product.name}
          title={product.name}/>
          : <span className='no__image'>Imagem indisponível</span>
        }
      </div>
    ) : (
      <Link
        onClick={setProductDetails} 
        to={productPath}
        className='w-full h-full flex justify-center items-center'>        
        { product.image ? <img 
          className='w-full h-full' 
          src={product.image} 
          alt={product.name}
          title={product.name}/>
          : <span className='no__image'>Imagem indisponível</span>
        }
      </Link>
    )
  }

  const showProductName = () => {
    return activeSidebar === 'cart' ? (
      <div className='w-full'> 
        <h4>{product.name}</h4>
      </div>
    ) : (
      <Link
       onClick={setProductDetails}
        to={productPath}
        className='w-full'> 
        <h4>{product.name}</h4>
      </Link>
    )
  }

  const handleRemove = () => quantity > 1 ? dispatch(cartActions.removeItem(product)) : null

  return (
    <div className='product w-full h-full flex'>
      <div className='product__image h-full'>
        {showProductImage()}       

        { activeSidebar === 'cart' && 
          <button 
            onClick={() => dispatch(cartActions.removeProduct(product.selectedSize))}
            className='product__remove-btn'>
						Remover item
	        </button>
      	}
      </div>

      <div className='product__details flex'>      
        <div className='product__description flex flex-column'>
          {showProductName()}

          { activeSidebar === 'cart' && 
            <span className='produc-size'>
              Tam: {product.sizes.find(size => size.sku === product.selectedSize).size }
            </span> 
          }

          { activeSidebar === 'cart' && 
	          <div className='product__actions flex items-center'>
	            <button 
	              onClick={handleRemove}
	              disabled={quantity < 2}
	              className='product__action flex items-center'>
	              <Icon path={mdiMinus}
					        size={.6}
					        horizontal
					        vertical
					        rotate={180}
				       	/>
	            </button>
	            <span className='product__quantity'>{quantity}</span>
	            <button 
	              onClick={() => dispatch(cartActions.addItem(product))}
	              className='product__action flex items-center'>
	              <Icon path={mdiPlus}
					        size={.6}
					        horizontal
					        vertical
					        rotate={180}
				       	/>
	            </button>
	          </div>
	        }
        </div>

        <div className='product__cost flex flex-column'>
          <span className='product__price'>{product.actual_price}</span>
          {product.installments && <span className='product__parcels'>{product.installments}</span> }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => { 
  const { sidebar } = state
  return {
    sidebar
  }
}

export default connect(mapStateToProps)(ProductCard) 
