import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { MenuOpenmetContext } from "layout/MainLayout"

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  background-color: black;
  z-index: ${({ theme }) => theme.zIndex(1)};
  transition: transform 0.5s;

  ${({ isMenuOpen }) =>
    !isMenuOpen &&
    css`
      transform: translateX(100%);
    `}
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Menu = () => {
  const { isMenuOpen } = useContext(MenuOpenmetContext)

  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/login">login</StyledLink>
      <StyledLink to="/signup">signup</StyledLink>
      <StyledLink to="/dashboard">dashboard</StyledLink>
    </StyledMenu>
  )
}

export default Menu
