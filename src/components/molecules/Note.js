import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { blackOrWhite, randomColor, createProperDate } from "layout/utils"

import bin from "assets/icons/bin.svg"
import Paragraph from "components/atoms/Paragraph"

const StyledNote = styled.article`
  padding: 15px 35px 15px 15px;
  border-radius: 10px;
  background-color: ${({ background }) => background};
  color: ${({ background }) => blackOrWhite(background)};
  border: 2px solid black;
  position: relative;
  height: 250px;
`

const StyledParagraph = styled(Paragraph)`
  color: inherit;
`

const StyledContentWrapper = styled.div`
  max-height: 90%;
  overflow: hidden;
`

const StyledDateWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  font-size: 1.2rem;
`

const StyledBinIcon = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  cursor: pointer;
`

const Note = ({ children, date, noteId, deleteNoteFunc, userId }) => {
  const handleClick = () => {
    deleteNoteFunc(userId, noteId)
  }

  return (
    <StyledNote background={randomColor()}>
      <StyledContentWrapper>
        <StyledParagraph size="xs">{children}</StyledParagraph>
      </StyledContentWrapper>
      <StyledDateWrapper>{createProperDate(date)}</StyledDateWrapper>
      <StyledBinIcon src={bin} onClick={handleClick} />
    </StyledNote>
  )
}

Note.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.number.isRequired,
  noteId: PropTypes.string.isRequired,
  deleteNoteFunc: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

export default Note
