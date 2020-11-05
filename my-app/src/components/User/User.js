
import React from 'react';
import { Link} from 'react-router-dom';
import UserModel from '../../models/UserModel'
import NewTask from '../NewTask/NewTask'
import "./User.css"


const User = (props) => {
  
  const { name, image, email, _id, tasks } = props.user
   
  
  
  return (
    <div className="card m-1" style ={{width:"20em"}}>
        <img src={image} className="card-img-top"  style ={{width:"20em", height:"10em", padding:'5px' }}/>
        <h3 className="card-title">{name}</h3>
         <div className="card-text">Assigned Tasks: { tasks === undefined || tasks.length == 0 ? <h>No Task</h> :<span>{tasks.length}</span>} </div>
          <p>{email}</p>

         <div >
           <button className="btn-bg-light p-1 m-2 text-light border-0"><Link to={`/users/${_id}/edit`} className="fas fa-user-edit">EDIT</Link></button>
            <button className="btn-danger p-1 border-0 round"><Link to={`/users`}   onClick={()=>props.deleteUser(_id, tasks)} className="fas fa-trash">DELETE</Link></button>
         </div>
          
             <Link to={`/users/${_id}`} className="user-link" >More Detail</Link>

        
    </div>
  );
}



export default User;


