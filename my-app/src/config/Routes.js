import React from 'react'
import {useState} from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import UserList from '../pages/UserList'
import UserShow from '../pages/UserShow'
import NewUser from "../pages/NewUser"
import EditUser from "../pages/EditUser"
import Footer from '../components/Footer/Footer'
// import NewTask from '../components/Tasks/NewTask'
import EditTask from '../components/Tasks/EditTask'
import UserModel from '../models/UserModel'
import Login from '../pages/Login/Login'
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";
import { userState } from '../recoil/atoms'





const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [role, setRole] = useState(false)
  

  function findAdmin(){
   
   UserModel.all().then(user =>{
     user.users.forEach((user) => {
       if(user.role === "admin"){
        setRole(true)
          
       }
     })
    
  })


     

  }


  console.log(findAdmin())
  console.log(role)
 


    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  exact path='/register' component={ NewUser } />
        <Route exact path='/login' component={Login } />
        {loggedIn && (
          <Switch>
          <Route  path='/users/:id/edit' component={ EditUser } />
          <Route  path='/users/:id' component={ UserShow } />
          <Route  path='/users' component={ UserList } />
          {/* <Route  path='/tasks/new' component={ NewTask } /> */}
          <Route  path='/tasks/:id/edit' component={ EditTask } />
          </Switch>
        )}
        <Route path='*' render={() => <h3 style={{color: "red"}}>"Sorry ! Page Is Not Found"</h3>} />
      </Switch>
    )
  }
  
  export default Routes;

