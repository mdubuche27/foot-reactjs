import React from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Login from '../screens/login'
import Clubs from '../screens/clubs'
import Home from '../screens/home'
import PrivateRoute from '../utils/privateroute'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/" component={Home}></Route>
                <PrivateRoute exact path="/clubs" component={Clubs}></PrivateRoute>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes