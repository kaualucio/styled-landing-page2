import React from 'react'
import { HeaderNav, HeaderNavLink } from './NavbarElements'

const Navbar = () => {
  return (
    <HeaderNav>
      <HeaderNavLink to="home">Home</HeaderNavLink>
      <HeaderNavLink to="services">Serviços</HeaderNavLink>
      <HeaderNavLink to="findATeam">Ache um Time</HeaderNavLink>
      <HeaderNavLink to="about">Sobre Nós</HeaderNavLink>
      <HeaderNavLink to="articles">Artigos</HeaderNavLink>
      <HeaderNavLink to="portfolio">Portfolio</HeaderNavLink>
      <HeaderNavLink to="contact">Contato</HeaderNavLink>
    </HeaderNav>
  )
}

export { Navbar }