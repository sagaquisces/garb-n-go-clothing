import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length > 0

          ?
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))

          :

          <EmptyMessage>No items to show. <Link to="/shop">Grab some booty!</Link></EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown