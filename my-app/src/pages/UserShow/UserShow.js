import React from 'react'
import {Link} from 'react-router-dom'
import { useState , useEffect} from "react";
import UserModel from '../../models/UserModel'
import TaskModel from '../../models/TaskModel'
import User from '../../components/User/User'
import TaskList from '../../components/Tasks/TaskList';
import NewTask from '../../components/NewTask/NewTask';
import TaskDetail from '../TaskDetail/TaskDetail'
import Task from '../../components/Tasks/Task'
import './UserShow.css'




const UserShow = (props) => {
    const [user, setUser] = useState([]);
    const [tasks,setTasks] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)
    
    
    

    useEffect(function(){
        UserModel.show(props.match.params.id).then((data) => {
            // console.log(data.user, "from show page user data")
           setUser(data.user)
    
          })

    },[user])



  useEffect(function(){
            fetchTasks()
            
    },[])




   function checkTask(id){
       console.log(user, "user Data")
       console.log(isCompleted, "from the userShow page")
        setIsCompleted(!isCompleted)


        }




 
    function displayOneTask(tasks, user){
        return tasks.map( (task , idx) => {
            return <TaskDetail  task={task}  key={idx} checkTask={checkTask} isCompleted={isCompleted}/>
            
        })
    }



    function fetchTasks(){
    
        TaskModel.all()
        .then(json => {
            console.log("data from showpage task data ", json)
            setTasks(user.tasks)
            
        })

     }




    return (
    <div >
       <div className="container" className="user-show">
            <div className="row p-2">
                 <User user={user}/>
                 <div className="col-9">
                     <h1>Assigned Task Lists</h1>
                 <div >{ user.tasks === undefined || user.tasks.length == 0 ? <h>No Task is Assigned yet</h> :<div>{displayOneTask(user.tasks, user)}</div>} </div>
                 </div>
               
            </div>
            <div className="row p-3">
                <div className="col-7">
                <NewTask fetchTasks={fetchTasks} />
                </div>
            </div>
          

       </div>
     
     
    
    
    </div>
    );
}



export default UserShow;
