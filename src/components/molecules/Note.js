import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledNote = styled.article``

const StyledContentWrapper = styled.div``

const StyledDateWrapper = styled.div``

const Note = ({ children, date }) => {
  const createProperDate = (unixTime) => new Date(unixTime * 1000).toLocaleString()

  return (
    <StyledNote>
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <StyledDateWrapper>{createProperDate(date)}</StyledDateWrapper>
    </StyledNote>
  )
}

Note.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.number.isRequired,
}

export default Note
