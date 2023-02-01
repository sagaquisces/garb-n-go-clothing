import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

  return zeroOutProduct(cartItems, cartItemToRemove)
}

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const newCartItems = addCartItem(cartItems, cartItemToAdd)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = zeroOutProduct(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}