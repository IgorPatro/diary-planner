import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { logInUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import FormLayout from "layout/FormLayout"
import UserForm from "components/organisms/UserForm"

const LoginPage = ({ logInUser, user, loginErrorMessage }) => {
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push("/dashboard")
    }
  }, [history, user])

  const handleSubmit = (data) => {
    logInUser(data.email, data.password)
  }

  return (
    <FormLayout>
      <UserForm submitFunc={handleSubmit} errorMessage={loginErrorMessage} />
    </FormLayout>
  )
}

LoginPage.propTypes = {
  logInUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
  loginErrorMessage: PropTypes.string,
}

LoginPage.defaultProps = {
  user: undefined,
  loginErrorMessage: null,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loginErrorMessage: state.loginErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (email, password) => dispatch(logInUser(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
