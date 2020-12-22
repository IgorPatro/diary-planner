import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import Firebase from "store/firebase"
import theme from "layout/theme"
import { USER_AUTH_SUCCESS, USER_LOGOUT_SUCCESS } from "store/actions"
import PropTypes from "prop-types"
import PrivateRoute from "components/organisms/PrivateRoute"

import MainLayout from "layout/MainLayout"
import GlobalStyles from "layout/GlobalStyles"
import DashboardPage from "pages/Dashboard"
import HomePage from "pages/Home"
import LoginPage from "pages/Login"
import SignupPage from "pages/Signup"

const App = ({ loggedIn, loggedOut }) => {
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        loggedIn(user)
      } else {
        loggedOut()
      }
    })
  }, [loggedIn, loggedOut])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

App.propTypes = {
  loggedIn: PropTypes.func.isRequired,
  loggedOut: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (user) => dispatch({ type: USER_AUTH_SUCCESS, user }),
    loggedOut: () => dispatch({ type: USER_LOGOUT_SUCCESS }),
  }
}

export default connect(null, mapDispatchToProps)(App)
