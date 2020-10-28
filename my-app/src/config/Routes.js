import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AdminHome from '../pages/AdminIndex'
import AdminIndex from '../pages/AdminIndex'


const Routes = (props) => {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  path='/admin' component={ AdminIndex } />
      </Switch>
    )
  }
  
  export default Routes;

