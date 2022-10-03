import { Link } from "react-scroll"
import styled from "styled-components"

export const HeaderNav = styled.nav`
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 3.5rem;
  justify-content: space-between;

  @media screen and (max-width: 1050px) {
    gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const HeaderNavLink = styled(Link)`
  font-size: 1.1rem;
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