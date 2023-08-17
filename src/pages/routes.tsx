import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import  Home from "./index"
import Details from "./details"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route> exact path="/" element=<j/></Route>

        <Route></Route>
      </Switch>
    </Router>
  )
}

export default Routes
