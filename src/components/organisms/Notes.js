import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Note from "components/molecules/Note"

const Notes = ({ notes }) => {
  return notes.map((note) => (
    <Note date={note.date} key={note.id}>
      {note.content}
    </Note>
  ))
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      date: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
}

export default Notes
