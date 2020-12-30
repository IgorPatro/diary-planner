import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  font-size: 1.8rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FormLayout = ({ children }) => {
  return (
    <StyledContainer>
      <StyledLink to="/">back to home</StyledLink>
      {children}
    </StyledContainer>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormLayout
