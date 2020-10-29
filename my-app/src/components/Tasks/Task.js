
import React from 'react';
import {Link} from 'react-router-dom'


const Task = (props) => {
    const {name, date, _id } = props.task
    


  return (
    <div>
        <h1>{name}</h1>
        <p>{date}</p>
        <Link to={`/tasks/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
        {/* <Link to={`/`} style={{color: 'black'}}  onClick={deleteUser}>DELETE</Link> */}
    
    </div>
  );
}


export default Task;