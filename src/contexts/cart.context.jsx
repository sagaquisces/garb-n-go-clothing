import { useEffect } from 'react'
import { createContext, useState } from 'react'

const zeroOutProduct = (cartItems, productToZeroOut) => {
  return cartItems.filter(cartItem => cartItem.id !== productToZeroOut.id)
}

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems has productToAdd
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  // if found, increment qty, else add cart item with qty 1
  if(existingCartItem) {
    return cartItems.map(
      cartItem => cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
  }

  // return new cart array
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  // find cartItemToRemove in cartItems
  const cartItemToRemove = cartItems.find(cartItem => cartItem.id === productToRemove.id)

  // if found, decrement qty, else add cart item with qty 1
 
  if (cartItemToRemove.quantity > 1) {
    return cartItems.map(
      cartItem => cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
  }
  
  return zeroOutProduct(cartItems, productToRemove)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  updateCartItems: () => {},
  cartCount: 0,
  cartTotal: 0
})

export const CartProvider = ({ children }) => {
  const updateCartItems = (product, action) => {
    if(action === 'increment') {
      setCartItems(addCartItem(cartItems, product))
    } else if(action === 'decrement') { // action is decrement
      setCartItems(removeCartItem(cartItems, product))
    } else {
      setCartItems(zeroOutProduct(cartItems, product))
    }
  }

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])
  
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])
  const value = {isCartOpen, setIsCartOpen, updateCartItems, cartItems, cartCount, cartTotal}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}