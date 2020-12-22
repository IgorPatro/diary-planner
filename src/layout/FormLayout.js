import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`

const FormLayout = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormLayout
