import { useState } from 'react'
import { HeaderMobileIcon, HeaderNavLinkMobile, HeaderNavMobile, HeaderNavMobileLinksContainer, NavMobileContainer } from './NavbarMobileElements'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavbarMobile = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <NavMobileContainer>
      <HeaderMobileIcon onClick={handleOpenMobileMenu}>
        { !openMobileMenu ? <FaBars /> : <FaTimes /> }
      </HeaderMobileIcon>
        <HeaderNavMobile isOpen={openMobileMenu}>
          <HeaderNavMobileLinksContainer>
            <HeaderNavLinkMobile to="home">Home</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">Services</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">Find a Team</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">About Us</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">Articles</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">Portfolio</HeaderNavLinkMobile>
            <HeaderNavLinkMobile to="home">Contact Us</HeaderNavLinkMobile>
          </HeaderNavMobileLinksContainer>
        </HeaderNavMobile>
    </NavMobileContainer>
  )
}

export { NavbarMobile }