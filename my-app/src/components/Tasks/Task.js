
import React from 'react';


const Task = (props) => {
    const {name, date } = props.task
    


  return (
    <div>
        <h1>{name}</h1>
        <p>{date}</p>
    
    </div>
  );
}


export default Task;