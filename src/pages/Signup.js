import React, { useRef } from "react"
import { createNewUser } from "store/actions"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const SignupPage = ({ createNewUser }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const repeatedPasswordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (passwordRef.current.value === repeatedPasswordRef.current.value) {
      createNewUser(emailRef.current.value, passwordRef.current.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="your email" ref={emailRef} />
      <input type="password" placeholder="your password" ref={passwordRef} />
      <input type="password" placeholder="repeat your password" ref={repeatedPasswordRef} />
      <input type="submit" value="Zarejestruj się" />
    </form>
  )
}

SignupPage.propTypes = {
  createNewUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (email, password) => dispatch(createNewUser(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(SignupPage)
