import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledParagraph = styled.p`
  font-weight: ${({ theme, weight }) => theme.weights[weight]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, size }) => theme.sizes[size]};
`

const Paragraph = ({ children, color, size, weight, className }) => {
  return (
    <StyledParagraph className={className} color={color} size={size} weight={weight}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  className: PropTypes.string.isRequired,
}

Paragraph.defaultProps = {
  color: "white",
  size: "xs",
  weight: "regular",
}

export default Paragraph
