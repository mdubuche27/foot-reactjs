import React from 'react'
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Login from '../screens/login'
import Club from '../screens/club'
import Home from '../screens/home'
import Country from '../screens/country'
import PrivateRoute from '../utils/privateroute'
import League from '../screens/league'
import Leagues from '../screens/leagues'
import ClubCal from '../screens/clubcal'
import LeagueCal from '../screens/leaguecal'
import Header from '../layout/header'
import FavoriteClub from '../screens/favoriteclub'
import FavoriteLeague from '../screens/favoriteleague'

const Routes = () => {
    return(
        <Router>
            <Header></Header>
            <Font>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <PrivateRoute exact path="/league/:id" component={League}></PrivateRoute>
                    <PrivateRoute exact path="/leagues/:id" component={Leagues}></PrivateRoute>
                    <PrivateRoute exact path="/club/:id/:key" component={Club}></PrivateRoute>
                    <PrivateRoute exact path="/clubcal/:id/:name" component={ClubCal}></PrivateRoute>
                    <PrivateRoute exact path="/leaguecal/:id" component={LeagueCal}></PrivateRoute>
                    <PrivateRoute exact path="/country" component={Country}></PrivateRoute>
                    <PrivateRoute exact path="/favclub" component={FavoriteClub}></PrivateRoute>
                    <PrivateRoute exact path="/favleague" component={FavoriteLeague}></PrivateRoute>
                    <Redirect to="/"></Redirect>
                </Switch>
            </Font>
        </Router>
    )
}

const Font = styled.div`
    background-color: green;
    padding-bottom: 500px;
`
export default Routes