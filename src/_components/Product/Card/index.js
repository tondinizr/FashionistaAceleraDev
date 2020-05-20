import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './card.scss'
import { slugify } from '../../../_helpers'
import { productActions } from '../../../_actions'

const CardProduct = ({ product, dispatch }) => {
  const productPath = `produto/${slugify(product.name, '-')}`

  const setProductDetails = () => dispatch(productActions.setProductDetails(product))

  return (
    <div className='w-full flex flex-column h-full card__product'>
      <div className='card__image flex-1 w-full h-full'>
        <Link 
          onClick={setProductDetails}
          to={`${productPath}`} className='w-full h-full flex justify-center items-center'>
          {product.image ?
            <img 
              src={product.image} 
              alt={product.name}
              title={product.name}/>
          : <span className='no__image'>Imagem indisponível</span> }
        </Link>
      </div>
	
      <div className='card__body flex justify-center flex-column'>
        <Link 
          onClick={setProductDetails}
          to={`${productPath}`}>
					{product.name}
        </Link>
				
        <div className='card__info flex justify-center items-center'>
	        { product.on_sale && <span className='product__price'>
            {product.regular_price}
	        </span> }

	        <span className='sale__price'>
            {product.actual_price}
	        </span>
        </div>
      </div>

      {product.on_sale && <span className='discount__percentage'>-{product.discount_percentage}</span> }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {    
  }
}

export default connect(mapStateToProps)(CardProduct)
