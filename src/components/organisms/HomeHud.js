import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import logo from "assets/icons/logo.svg"
import user from "assets/icons/user.svg"
import HamburgerMenu from "components/atoms/HamburgerMenu"
import SocialMedia from "components/molecules/SocialMedia"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  width: 100%;
  height: 100%;
`

const StyledPart = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  max-height: 20px;
`

const StyledUserIcon = styled(Link)`
  width: 22px;
  background: ${({ background }) => `url(${background})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const HomeHud = () => {
  return (
    <StyledWrapper>
      <StyledPart>
        <StyledLogo src={logo} alt="logo of our app" />
        <HamburgerMenu />
      </StyledPart>
      <StyledPart>
        <SocialMedia />
        <StyledUserIcon background={user} to="/dashboard" />
      </StyledPart>
    </StyledWrapper>
  )
}

export default HomeHud
