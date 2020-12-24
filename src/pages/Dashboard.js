import React, { useEffect } from "react"
import { logOutUser, fetchAllUserNotes } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"

import UserInfo from "components/organisms/UserInfo"
import Notes from "components/organisms/Notes"

const StyledContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  padding: 30px;
`

const DashboardPage = ({ logOutUser, user, fetchAllUserNotes, notes }) => {
  useEffect(() => {
    fetchAllUserNotes(user.uid)
  }, [fetchAllUserNotes, user.uid])

  return (
    <StyledContainer>
      <button type="button" onClick={logOutUser}>
        Wyloguj
      </button>
      <UserInfo user={user} />
      {notes && <Notes notes={notes} />}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
