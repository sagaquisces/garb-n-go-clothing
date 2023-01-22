import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import CartItem from '../cart-item/cart-item.category'
import Button from '../button/button.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.length > 0

          ?
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))

          :

          <p>No items to show. <Link to="/shop">Grab some booty!</Link></p>
        }
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown