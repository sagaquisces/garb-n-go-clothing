import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { updateCartItems } = useContext(CartContext)

  const addItemHandler = () => updateCartItems(cartItem, 'increment')
  const removeItemHandler = () => updateCartItems(cartItem, 'decrement')
  const zeroOutProductHandler = () => updateCartItems(cartItem, 'zero')

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>
        {price}
      </span>
      <div className='remove-button' onClick={zeroOutProductHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem

