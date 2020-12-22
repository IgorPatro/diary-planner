import React, { useContext } from "react"
import styled from "styled-components"
import { MenuOpenmetContext } from "layout/MainLayout"

const StyledHamburger = styled.button`
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
`

const StyledHamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const StyledHamburgerInner = styled.span`
  width: 100%;
  height: 4px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    width: 100%;
    height: inherit;
    background-color: white;
    position: absolute;
    content: "";
    right: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
    width: 70%;
  }

  &.active {
    background-color: transparent;

    &::before {
      transform: translateY(10px) rotate(45deg);
    }

    &::after {
      width: 100%;
      transform: translateY(-10px) rotate(-45deg);
    }
  }
`

const HamburgerMenu = () => {
  const { isMenuOpen, setMenuOpenmet } = useContext(MenuOpenmetContext)

  return (
    <StyledHamburger onClick={() => setMenuOpenmet(!isMenuOpen)}>
      <StyledHamburgerBox>
        <StyledHamburgerInner className={isMenuOpen && "active"} />
      </StyledHamburgerBox>
    </StyledHamburger>
  )
}

export default HamburgerMenu
