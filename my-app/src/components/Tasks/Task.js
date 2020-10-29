
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'


const Task = (props) => {
    const {name, date, _id } = props.task
    
    function deleteTask(){
        TaskModel.destroy(_id)
       }
    


  return (
    <div>
        <h1>{name}</h1>
        <p>{date}</p>
        <Link to={`/tasks/${_id}/edit`} style={{color: 'black', padding: "10px"}}>Edit</Link>
        <Link to={`/`} style={{color: 'black'}}  onClick={deleteTask}>DELETE</Link>
    
    </div>
  );
}


export default Task;