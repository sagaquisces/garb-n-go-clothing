import { useEffect } from 'react'
import { createContext, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems has productToAdd
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  // if found, increment qty
  if(existingCartItem) {
    return cartItems.map(
      cartItem => cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
  }

  // otherwise add item to cart with quantity 1

  // return new cart array
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  updateCartItems: () => {},
  cartCount: 0
})

export const CartProvider = ({ children }) => {
  const updateCartItems = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])
  

  const value = {isCartOpen, setIsCartOpen, updateCartItems, cartItems, cartCount}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}