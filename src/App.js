import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import DashboardPage from "pages/Dashboard"
import HomePage from "pages/Home"
import LoginPage from "pages/Login"
import SignupPage from "pages/Signup"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
