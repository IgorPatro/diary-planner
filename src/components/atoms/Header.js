import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledHeader = styled.h1`
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.sizes[size]};
`

const Header = ({ children, level, color, size }) => {
  return (
    <StyledHeader as={`h${level}`} color={color} size={size}>
      {children}
    </StyledHeader>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
}

Header.defaultProps = {
  level: 1,
  color: "white",
  size: "xs",
}

export default Header
