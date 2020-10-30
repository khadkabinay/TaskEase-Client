
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'


const Task = (props) => {
   
    const {name,user, date, _id } = props.task
    
    function deleteTask(){
        TaskModel.destroy(_id)
       }
    
     function displayLimitUser(user){
       if(user.role ==='admin'){
         return <div>
      <h1>{name}</h1>
    
      <img src={user.image} />
    <p>{user.name}</p>
    <p>Total Tasks: {user.tasks.length}</p>
    <p>CompletedTask : {user.completedTask}</p>
    <p>{date}</p>

       </div>
       }else{
         return "no admin"
       }
     }


  return (
    <div>
       {displayLimitUser(user)}
     
        {/* <h1>{name}</h1>
    
        <img src={user.image} />
        <p>{user.name}</p>
        <p>Total Tasks: {user.tasks.length}</p>
        <p>CompletedTask : {user.completedTask}</p>
        <p>{date}</p> */}
       
        <Link to={`/tasks/${_id}/edit`} style={{color: 'black', padding: "10px"}}>Edit</Link>
        <Link to={`/`} style={{color: 'black'}}  onClick={deleteTask}>DELETE</Link>
    
    </div>
  );
}


export default Task;