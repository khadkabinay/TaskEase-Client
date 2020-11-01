import React from 'react'
import { Switch, Route} from 'react-router-dom'


import Home from '../pages/Home'
import UserList from '../pages/UserList'
import UserShow from '../pages/UserShow'
import NewUser from "../pages/NewUser"
import EditUser from "../pages/EditUser"
// import NewTask from '../components/Tasks/NewTask'
import EditTask from '../components/Tasks/EditTask'
import Login from '../pages/Login'



const Routes = (props) => {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  path='/register' component={ NewUser } />
        <Route  path='/login' component={Login } />
        <Route  path='/users/:id/edit' component={ EditUser } />
        <Route  path='/users/:id' component={ UserShow } />
        <Route  path='/users' component={ UserList } />
        {/* <Route  path='/tasks/new' component={ NewTask } /> */}
        <Route  path='/tasks/:id/edit' component={ EditTask } />
      </Switch>
    )
  }
  
  export default Routes;

