import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import theme from "layout/theme"
import GlobalStyles from "layout/GlobalStyles"
import DashboardPage from "pages/Dashboard"
import HomePage from "pages/Home"
import LoginPage from "pages/Login"
import SignupPage from "pages/Signup"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
