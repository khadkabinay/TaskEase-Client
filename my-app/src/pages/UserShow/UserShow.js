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
    

    useEffect(function(){
        UserModel.show(props.match.params.id).then((data) => {
        setUser(data.user)
    
        })

    },[user])



    useEffect(function(){
            fetchTasks()
        },[tasks])



    function displayOneTask(tasks, user){
        return user.tasks.map( (task , idx) => {
            return <TaskDetail  task={task}  key={idx}  />
            
        })
    }



    function fetchTasks(){
        TaskModel.all()
            .then(json => {
            setTasks(json.tasks)
            
        })

    }




    return (
    <div >
    <div className="container" className="user-show">
            <div className="row p-2">
                <User user={user}/>
                <div className="col-9">
                    <h1 className="task-list-title">Assigned Task Lists</h1>
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
