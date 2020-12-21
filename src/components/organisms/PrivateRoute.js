import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
}

PrivateRoute.defaultProps = {
  user: undefined,
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)
