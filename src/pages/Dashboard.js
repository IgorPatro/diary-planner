import React from "react"
import { logOutUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const DashboardPage = ({ logOutUser, user }) => {
  return (
    <div>
      <button type="button" onClick={logOutUser}>
        Wyloguj
      </button>
      <br />
      Dane usera:
      <br />
      email:
      {` ${user.email}`}
    </div>
  )
}

DashboardPage.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: (email, password) => dispatch(logOutUser(email, password)),
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
