
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'
import './Task.css'


  const Task = (props)=> {

    const {name,user, date, iscompleted, _id } = props.task
  
    
  

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
           <h1 onClick={(event)=>props.checkTask()} className = {props.isCompleted ? "check-task": "blue"}>{name} </h1>
          <img src={user.image} style={{borderRadius:"50%" , width :"40px",height: "40px"}}/>
          <p>{user.name}</p> 
          {/* <p>Total Tasks: {user.tasks.length}</p> */}
          {/* <p>CompletedTask : {user.completedTask}</p>
          <p>isCompleted : {props.isCompleted}</p> */}
          <p>{date}</p> 
         
          <Link to={`/tasks/${_id}/edit`} style={{color: 'black', padding: "10px"}}>Edit</Link>
          <Link to={`/users`} style={{color: 'black'}}  onClick={()=>props.deleteTask(_id, user)}>DELETE</Link>
      
      </div>
    );


  }



export default Task;