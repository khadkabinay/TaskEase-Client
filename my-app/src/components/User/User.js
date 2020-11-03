
import React from 'react';
import { Link} from 'react-router-dom';
import UserModel from '../../models/UserModel'
import './User.css'
import NewTask from '../NewTask/NewTask'

const User = (props) => {
  //  console.log(props.user)
  //  console.log(props.deleteUser)
    const { name, image, email, _id, tasks } = props.user
    
   
  
    // function deleteUser(){
    //  UserModel.destroy(_id)
    // }
    
       



    

  return (
    <div className="card m-1" style ={{width:"20em"}}>
        <img src={image} className="card-img-top"  style ={{width:"20em", height:"10em", padding:'5px' }}/>
        <h3 className="card-title">{name}</h3>
         <div className="card-text">Assigned Tasks: { tasks === undefined || tasks.length == 0 ? <h>No Task</h> :<span>{tasks.length}</span>} </div>
          <p>{email}</p>

         <div>
          <Link to={`/users/${_id}/edit`} style={{color: 'black', padding:"10px"}}>Edit</Link>
          <Link to={`/users`} style={{color: 'black'}} onClick={()=>props.deleteUser(_id, tasks)}>DELETE</Link>
         </div>
           <button>
             <Link to={`/users/${_id}`} style={{color: 'black', padding:"10px"}}>More Detail</Link>

           </button>
    </div>
  );
}



export default User;

// onClick={deleteUser}