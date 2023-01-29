import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as GngLogo } from '../../assets/gng.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLinkSpan,
  NavLinkDiv
} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  
  return (
    <>
      <NavigationContainer>
        <LogoContainer to ='/'>
          <GngLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLinkDiv to='/shop'>
            SHOP
          </NavLinkDiv>
          {
            currentUser ? (
              <NavLinkSpan className="nav-link" onClick={signOutUser}>SIGN OUT</NavLinkSpan>
            ) : (
              <NavLinkDiv to='/auth'>
                SIGN IN
              </NavLinkDiv>
            )
          }
          <CartIcon />
        </NavLinks>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation