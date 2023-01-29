import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

const columnNames = ['Products', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {
          columnNames.map(name => {
            return ( 
              <HeaderBlock key={name}>
                <span>{name}</span>
              </HeaderBlock>
            )
          })
        }
      </CheckoutHeader>
      {
        cartItems.map((cartItem) => {
          return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          )
        })
      }

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout