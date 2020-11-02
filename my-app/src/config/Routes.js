import React from 'react'
import {useState} from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import UserList from '../pages/UserList'
import UserShow from '../pages/UserShow'
import NewUser from "../pages/NewUser"
import EditUser from "../pages/EditUser"
// import NewTask from '../components/Tasks/NewTask'
import EditTask from '../components/Tasks/EditTask'
import NormalUser from '../pages/NormalUser/NormalUser'
import UserModel from '../models/UserModel'
import Login from '../pages/Login/Login'
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";
import { userState } from '../recoil/atoms'









const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const [role, setRole] = useState('')
  

  function findAdmin(){
   
   UserModel.all().then(user =>{
     if(loggedIn){
       user.users.forEach((user) => {

         if(user.role === "admin" && user.name === "Binay"){
          setRole(user.role)
            
         }
       })
     }else{
       return 
     }
    })

     


     

  }


  console.log(findAdmin())
  console.log(role)
 


    return (
      
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route  exact path='/register' component={ NewUser } />
        <Route exact path='/login' component={Login } />
        {(loggedIn && role === "admin") ? 
           <Switch>
           <Route  path='/users/:id/edit' component={ EditUser } />
           <Route  path='/users/:id' component={ UserShow } />
           <Route  path='/users' component={ UserList } />
           {/* <Route  path='/tasks/new' component={ NewTask } /> */}
           <Route  path='/tasks/:id/edit' component={ EditTask } />
          </Switch>: <Route  path='/normalUser' component={ NormalUser } />
        }

      
    
      
        <Route path='*' render={() => <h3 style={{color: "red"}}>"Sorry ! Page Is Not Found"</h3>} />
      </Switch>
    )
  }
  
  export default Routes;

