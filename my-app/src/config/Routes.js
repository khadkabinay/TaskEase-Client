import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import AdminHome from '../pages/AdminHome'


const Routes = (props) => {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  path='/admin' component={ AdminHome } />
      </Switch>
    )
  }
  
  export default Routes;

