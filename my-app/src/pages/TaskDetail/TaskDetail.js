import React from 'react'
import {Link} from 'react-router-dom'





const TaskDetail = (props) => {
    const  {name, date , _id } = props.task
    return (
        <div>
             <p>{name}</p>
             <p>{date}</p>
             {/* <Link to={`/users/${_id}`} style={{color: 'black'}}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
        </div>
    )
}



export default TaskDetail;