import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const StyledMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const StyledLink = styled(Link)`
  color: white;
`

const StyledSpan = styled.span`
  color: white;
  font-size: 0.7rem;
`

const MainLayout = ({ children }) => {
  return (
    <main>
      <StyledMenu>
        <StyledSpan>Robocze menu</StyledSpan>
        <StyledLink to="/">home</StyledLink>
        <StyledLink to="/login">login</StyledLink>
        <StyledLink to="/signup">signup</StyledLink>
        <StyledLink to="/dashboard">dashboard</StyledLink>
      </StyledMenu>
      {children}
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
