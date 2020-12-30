import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createNewUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import FormLayout from "layout/FormLayout"
import UserForm from "components/organisms/UserForm"

const SignupPage = ({ createNewUser, user, signupErrorMessage }) => {
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push("/dashboard")
    }
  }, [history, user])

  const handleSubmit = (data) => {
    createNewUser(data.email, data.password)
  }

  return (
    <FormLayout>
      <UserForm registerForm submitFunc={handleSubmit} errorMessage={signupErrorMessage} />
    </FormLayout>
  )
}

SignupPage.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
  signupErrorMessage: PropTypes.string,
}

SignupPage.defaultProps = {
  user: undefined,
  signupErrorMessage: null,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    signupErrorMessage: state.signupErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (email, password) => dispatch(createNewUser(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
