import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledButton = styled.button`
  color: blue;
`

const Button = ({ children }) => {
  return <StyledButton type="button">{children}</StyledButton>
}

Button.propTypes = { children: PropTypes.node.isRequired }

export default Button
