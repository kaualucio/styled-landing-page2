import { HeaderContainer, HeaderWrapper, Logo } from './HeaderElements'

import { useState } from 'react'
import { Navbar } from '../Navbar'
import { NavbarMobile } from '../NavbarMobile'

const Header = () => {
  

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo>Logo</Logo>
        <Navbar />
        <NavbarMobile />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export { Header }