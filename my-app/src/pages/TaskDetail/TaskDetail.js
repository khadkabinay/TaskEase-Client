import React from 'react'




const TaskDetail = (props) => {
    const  {name, date } = props.task
    return (
        <div>
             <p>{name}</p>
             <p>{date}</p>
        </div>
    )
}



export default TaskDetail;