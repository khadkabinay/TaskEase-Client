
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'
import './Task.css'


  const Task = (props)=> {
    const {name,user, date, isCompleted, _id } = props.task
    
  
    
  

    // function deleteTask(){
    //   TaskModel.destroy(_id)
    //  }
  
  
    

       
  //   handleChange = (event) => {
  //     if(event.target.type !== 'text') {
  //         this.setState(prevState => ({
  //             iscompleted: !prevState.iscompleted
  //         }))
  //     } else {   
  //         this.setState({
  //             [event.target.name]: event.target.value
  //         })
  //     }
  // }
    
    //  function displayLimitUser(user){
    //    if(user.role ==='admin'){
    //      return <div>
    //   <h1>{name}</h1>
    
    //   <img src={user.image} style={{borderRadius:"50%" , width :"100px"}}/>
    // <p>{user.name}</p>
    // <p>Total Tasks: {user.tasks.length}</p>
    // <p>CompletedTask : {user.completedTask}</p>
    // <p>{date}</p>

    //    </div>
    //    }else{
    //      return "no admin"
    //    }
    //  }
      
    
    

  
    
   
      
    return (
      <div>
         <div className="card mb-2 task-box">
            <div className='card-body'>
                 <h5 onClick={(event)=>props.checkTask(_id)} class={isCompleted ? "red": "blue"} className="task-name" >{name} </h5>
                  <p>Due date:&nbsp;{date}</p> 
                <div>
                  <img src={user.image} style={{borderRadius:"50%" , width :"40px",height: "40px"}}/>
                  <p>{user.name}</p> 
                </div>
                   <span className="edit-button" ><Link to={`/tasks/${_id}/edit`} className="far fa-edit" ></Link></span>
                   <span className="delete-button" > <Link to={`/users`} style={{color: 'black'}}  onClick={()=>props.deleteTask(_id, user)} className="fas fa-trash-alt" ></Link></span>

            </div>

         </div>
      
      </div>
    );
    
    
  }
  
  
  
  export default Task;
  



  {/* <i class="far fa-edit"></i>
<i class="fas fa-trash-alt"></i> */}
  {/* <p>Total Tasks: {user.tasks.length}</p> */}
  {/* <p>CompletedTask : {user.completedTask}</p>
  <p>isCompleted : {props.isCompleted}</p> */}