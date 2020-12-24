import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledButton = styled.button`
  color: ${({ theme, color }) => (color ? theme.colors[color] : "black")};
  background-color: ${({ theme, background }) => (background ? theme.colors[background] : "white")};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  padding: 10px 50px;
  transition: color 0.3s, background 0.3s;
  text-decoration: none;
  display: inline-block;
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme, hovercolor }) => (hovercolor ? theme.colors[hovercolor] : "white")};
    background-color: ${({ theme, hoverbackground }) =>
      hoverbackground ? theme.colors[hoverbackground] : "black"};
  }
`

// Czy używanie rest w takim miejscu jest dobre? Nie tworze prop typsów i przekazuje wszystko niżej
const Button = ({ children, linkTo, ...rest }) => {
  return (
    <StyledButton as={linkTo && Link} to={linkTo && linkTo} {...rest}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string,
}

Button.defaultProps = {
  linkTo: undefined,
}

export default Button
