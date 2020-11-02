import React from 'react'
import {Link} from 'react-router-dom'
import { useState , useEffect} from "react";
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList';
import NewTask from '../../components/Tasks/NewTask';
import TaskDetail from '../TaskDetail/TaskDetail'
import Task from '../../components/Tasks/Task'





const UserShow = (props) => {
    const [user, setUser] = useState([]);
    const [tasks,setTasks] = useState([])
    
   


    useEffect(function(){
        UserModel.show(props.match.params.id).then((data) => {
           setUser(data.user)
    
          })

    },[user])

 

    useEffect(function(){
         fetchTasks()
    },[])


 
    function displayOneTask(user){
        return user.tasks.map( (task , idx) => {
            return <TaskDetail  task={task}  key={idx}/>
            
        })
    }



    function fetchTasks(){
    
        TaskModel.all()
        .then(json => {
            console.log("data from showpage ", json)
            setTasks(json.tasks)
           
        })

     }






 

    return (
    <div >
     <User user={user}/>
      <h1>Hello i am from the single user page </h1>
      <NewTask fetchTasks={fetchTasks}/>
       { user.tasks === undefined || user.tasks.length == 0 ? <h>No Task is Assigned yet</h> :<div>{displayOneTask(user)}</div>}  
     
     
    
    
    </div>
    );
}



export default UserShow;
