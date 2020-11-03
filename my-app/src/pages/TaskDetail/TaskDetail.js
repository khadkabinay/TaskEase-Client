import React from 'react'
import {Link} from 'react-router-dom'
import './TaskDetail.css'





const TaskDetail = (props) => {
    const  {name, date , _id } = props.task
    return (
        <div >
             <div  className="task-detail-bg">
                 <div className="task-detail-box">
                    <p>{name}</p>
                    <p>Due Date:&nbsp;{date}</p>

                 </div>
             </div>
             {/* <Link to={`/users/${_id}`}  onClick={()=>props.deleteTask(_id, name)}>DELETE</Link> */}
        </div>
    )
}



export default TaskDetail;