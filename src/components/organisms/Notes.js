import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Note from "components/molecules/Note"
import Header from "components/atoms/Header"

const StyledContainer = styled.div`
  margin: 40px 0;
`

const StyledNotesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1000px;
  grid-gap: 15px;
  margin: 15px 0 0;
`

const Notes = ({ notes, deleteNoteFunc, userId }) => {
  return (
    <StyledContainer>
      <Header level={2} color="black" size="m">
        Twoje notatki:
      </Header>
      <StyledNotesWrapper>
        {notes.map((note) => (
          <Note
            date={note.date}
            key={note.id}
            noteId={note.id}
            deleteNoteFunc={deleteNoteFunc}
            userId={userId}
          >
            {note.content}
          </Note>
        ))}
      </StyledNotesWrapper>
    </StyledContainer>
  )
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      date: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
  deleteNoteFunc: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

export default Notes
