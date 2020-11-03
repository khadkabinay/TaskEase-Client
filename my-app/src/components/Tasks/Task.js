
import React from 'react';
import {Link} from 'react-router-dom'
import TaskModel from '../../models/TaskModel'
import './Task.css'


  const Task = (props)=> {
 console.log(props.task)
    const {name,user, date, isCompleted, _id } = props.task
    console.log(isCompleted)
  
    
  

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
           <h1 onClick={(event)=>props.checkTask(_id)} class={isCompleted ? "red": "blue"}>{name} </h1>
          <img src={user.image} style={{borderRadius:"50%" , width :"40px",height: "40px"}}/>
          <p>{user.name}</p> 
          {/* <p>Total Tasks: {user.tasks.length}</p> */}
          {/* <p>CompletedTask : {user.completedTask}</p>
          <p>isCompleted : {props.isCompleted}</p> */}
          <p>{date}</p> 
         
          <Link to={`/tasks/${_id}/edit`} style={{color: 'black', padding: "10px"}} className="far fa-edit">EDIT</Link>
          <Link to={`/users`} style={{color: 'black'}}  onClick={()=>props.deleteTask(_id, user)} className="fas fa-trash">DELETE</Link>
      
      </div>
    );


  }



export default Task;

{/* <i class="far fa-edit"></i>
<i class="fas fa-trash-alt"></i> */}