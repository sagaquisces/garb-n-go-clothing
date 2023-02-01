import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

const columnNames = ['Products', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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