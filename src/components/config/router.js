import React from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Login from '../screens/login'
import Clubs from '../screens/clubs'
import Home from '../screens/home'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/clubs" component={Clubs}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes