import React, { useEffect } from "react"
import { logOutUser, fetchAllUserNotes, addNote, deleteNote } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"

import NoteForm from "components/organisms/NoteForm"
import Button from "components/atoms/Button"
import UserInfo from "components/organisms/UserInfo"
import Notes from "components/organisms/Notes"

const StyledContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
  padding: 50px 50px 200px;
`

const DashboardPage = ({ logOutUser, user, fetchAllUserNotes, notes, addNote, deleteNote }) => {
  useEffect(() => {
    fetchAllUserNotes(user.uid)
  }, [fetchAllUserNotes, user.uid])

  return (
    <StyledContainer>
      <Button
        color="white"
        background="black"
        hovercolor="black"
        hoverbackground="yellow"
        onClick={logOutUser}
      >
        Wyloguj
      </Button>
      <UserInfo user={user} />
      {notes && <Notes notes={notes} deleteNoteFunc={deleteNote} userId={user.uid} />}
      <NoteForm submitFunc={addNote} userId={user.uid} />
    </StyledContainer>
  )
}

DashboardPage.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchAllUserNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      date: PropTypes.number,
      id: PropTypes.string,
    })
  ),
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
}

DashboardPage.defaultProps = {
  notes: undefined,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notes: state.notes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: (email, password) => dispatch(logOutUser(email, password)),
    fetchAllUserNotes: (userId) => dispatch(fetchAllUserNotes(userId)),
    addNote: (userId, note) => dispatch(addNote(userId, note)),
    deleteNote: (userId, noteId) => dispatch(deleteNote(userId, noteId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
