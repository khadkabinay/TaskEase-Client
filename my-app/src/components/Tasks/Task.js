
import React from 'react';
import {Link} from 'react-router-dom'


const Task = (props) => {
    const {name, date } = props.task
    


  return (
    <div>
        <h1>{name}</h1>
        <p>{date}</p>
        {/* <Link to={`/`} style={{color: 'black'}}  onClick={deleteUser}>DELETE</Link> */}
    
    </div>
  );
}


export default Task;