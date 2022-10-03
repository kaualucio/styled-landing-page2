import { Link } from "react-scroll"
import styled from "styled-components"

interface HeaderNavMobileProps {
  isOpen: boolean
}

export const NavMobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const HeaderNavMobile = styled.nav`
  transition: all .2s ease;
  position: absolute;
  top: ${({ isOpen }: HeaderNavMobileProps) => isOpen ? 0 : '-999px'};
  left: 0;
  width: 100%;
  height: ${({ isOpen }: HeaderNavMobileProps) => isOpen ? '100vh' : 0};
  opacity: ${({ isOpen }: HeaderNavMobileProps) => isOpen ? 1 : 0};
  background: #222222;
  z-index: 5;
`

export const HeaderMobileIcon = styled.div`
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 10;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const HeaderNavMobileLinksContainer = styled.div`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const HeaderNavLinkMobile = styled(Link)`
  font-size: 1.8rem;
  font-weight: medium;
  color: #c4c4c4;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #fff;
    transition: all 0.3s ease;
  }

  &:active {
    color: #fff;
    font-weight: bold;
  }
`