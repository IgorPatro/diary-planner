import React, { useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { logInUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const LoginPage = ({ logInUser, user }) => {
  const history = useHistory()

  useEffect(() => {
    if (user) {
      history.push("/dashboard")
    }
  }, [history, user])

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    logInUser(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="your email" ref={emailRef} />
      <input type="password" placeholder="your password" ref={passwordRef} />
      <input type="submit" value="Zaloguj się" />
    </form>
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
