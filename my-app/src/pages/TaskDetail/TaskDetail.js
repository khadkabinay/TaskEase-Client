import React from 'react'
import {Link} from 'react-router-dom'
import './TaskDetail.css'




const TaskDetail = (props) => {
    const  {name, date , _id } = props.task

   
    return (
        <div >
             <div  className="task-detail-bg">
                 <div className="task-detail-box" >
                    <h3 onClick={(event)=>props.checkTask(_id)}  style={{ textDecoration:props.isCompleted ? 'line-through' : 'none' }} className="one-task">{name}</h3>
                    <p>Due Date:&nbsp;{date}</p>

                 </div>
             </div>
             {/* <Link to={`/users/${_id}`}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
        </div>
    )
}






export default TaskDetail;






