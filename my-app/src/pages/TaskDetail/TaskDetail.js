import React from 'react'
import {Link} from 'react-router-dom'
import './TaskDetail.css'




const TaskDetail = (props) => {
    // console.log(props)
 
    const  {name, date , _id } = props.task
    // console.log(isCompleted)
    // console.log(completedTask)
    return (
        <div >
             <div  className="task-detail-bg">
                 <div className="task-detail-box" >
                    <h4 onClick={(event)=>props.checkTask(_id)}  style={{ textDecoration:props.isCompleted ? 'line-through' : 'none' }}>{name}</h4>
                    <p>Due Date:&nbsp;{date}</p>

                 </div>
             </div>
             {/* <Link to={`/users/${_id}`}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
        </div>
    )
}






export default TaskDetail;






