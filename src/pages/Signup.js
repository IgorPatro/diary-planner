import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createNewUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import FormLayout from "layout/FormLayout"
import UserForm from "components/organisms/UserForm"

const SignupPage = ({ createNewUser, user }) => {
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push("/dashboard")
    }
  }, [history, user])

  const handleSubmit = (data) => {
    if (data.password === data.repeatedPassword) {
      createNewUser(data.email, data.password)
    }
  }

  return (
    <FormLayout>
      <UserForm registerForm submitFunc={handleSubmit} />
    </FormLayout>
  )
}

SignupPage.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
}

SignupPage.defaultProps = {
  user: undefined,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (email, password) => dispatch(createNewUser(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
