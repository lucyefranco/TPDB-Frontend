import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import SearchResults from '../pages/SearchResults'
import AttractionShow from '../pages/Show-Attraction'
import CreativeShow from '../pages/Show-Creative'
import ThemeParkShow from '../pages/Show-ThemePark'
import AdminDashboard from '../pages/Admin-Dashboard'
import ViewThemeParks from '../pages/ViewThemeParks'
import ViewAttractions from '../pages/ViewAttractions'
import ViewCreatives from '../pages/ViewCreatives'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem('id')
  return  <Route { ...rest } render={ props => {
            return currentUser ? <Component { ...rest } { ...props } /> : <Redirect to="/login" />
          }} 
  />
}

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/results' component={ SearchResults } />
    <Route path='/attractions/:id' component={ AttractionShow } />
    <Route path='/creatives/:id' component={ CreativeShow } />
    <Route path='/themeparks/:id' component={ ThemeParkShow } />
    <Route path='/dashboard' component={ AdminDashboard } />
    <Route path='/themeparks/' component={ ViewThemeParks } />
    <Route path='/attractions/' component={ ViewAttractions } />
    <Route path='/creatives' component={ ViewCreatives } />
    <Route path='/register' component={ Register } />
    <Route path='/login' render={ (routeComponentProps) => {
      return  <Login 
                {...routeComponentProps}
                // more props to come here
                currentUser={ props.currentUser }
                storeUser={ props.storeUser }
              />
    } } />
    <PrivateRoute path='/profile' component={ Profile } currentUser={ props.currentUser } />
  </Switch>
)

export default Routes;