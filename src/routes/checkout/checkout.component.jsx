import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const columnNames = ['Products', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {
          columnNames.map(name => {
            return ( 
              <div key={name} className='header-block'>
                <span>{name}</span>
              </div>
            )
          })
        }
      </div>
      {
        cartItems.map((cartItem) => {
          return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        })
      }

      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout