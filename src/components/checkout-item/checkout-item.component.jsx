import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  CheckoutItemContainer, 
  ImageContainer, 
  BaseSpan, 
  Quantity, 
  Arrow,
  Value,
  Price,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { updateCartItems } = useContext(CartContext)

  const addItemHandler = () => updateCartItems(cartItem, 'increment')
  const removeItemHandler = () => updateCartItems(cartItem, 'decrement')
  const zeroOutProductHandler = () => updateCartItems(cartItem, 'zero')

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={zeroOutProductHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem

