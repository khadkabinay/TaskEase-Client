import React from 'react'
import {Link} from 'react-router-dom'
import { useState , useEffect} from "react";
import UserModel from '../../models/UserModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList';
import NewTask from '../../components/Tasks/NewTask';
import TaskDetail from '../TaskDetail/TaskDetail'





const UserShow = (props) => {
    const [user, setUser] = useState([]);
    
   


    useEffect(function(){
        UserModel.show(props.match.params.id).then((data) => {
           setUser(data.user)
    
          })

    },[user])


 
    function displayOneTask(user){
        return user.tasks.map( (task , idx) => {
            return <TaskDetail  task={task}  key={idx}/>
            
        })
    }




   

    return (
    <div >
     <User user={user}/>
      <h1>Hello i am from the single user page </h1>
      <NewTask/>
      {/* { user.tasks.length <= 1 ? <h>No Task is Assigned yet</h> : displayOneTask(user)} */}
     
     
    
    
    </div>
    );
}



export default UserShow;
