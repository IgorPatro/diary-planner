import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { logInUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import FormLayout from "layout/FormLayout"
import UserForm from "components/organisms/UserForm"

const LoginPage = ({ logInUser, user }) => {
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
      <UserForm submitFunc={handleSubmit} />
    </FormLayout>
  )
}

LoginPage.propTypes = {
  logInUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
}

LoginPage.defaultProps = {
  user: undefined,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (email, password) => dispatch(logInUser(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
