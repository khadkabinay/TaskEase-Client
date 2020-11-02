
import React from 'react';
import { Link} from 'react-router-dom';
import UserModel from '../../models/UserModel'
import './User.css'
import NewTask from '../../components/Tasks/NewTask'

const User = (props) => {
    const { name, image, email, _id, tasks } = props.user
   
  
    function deleteUser(){
     UserModel.destroy(_id)
    }

    

  return (
    <div>
      <Link to={`/users/${_id}`} style={{color: 'black', padding:"10px"}}>
        <h1>{name}</h1>
      </Link>
        <img src={image}  className="img"/>
        <p>{email}</p>

        {/* <p>Assigned Tasks : {tasks.length}</p> */}
        <Link to={`/users/${_id}/edit`} style={{color: 'black', padding:"10px"}}>Edit</Link>
        <Link to={`/`} style={{color: 'black'}}  onClick={deleteUser}>DELETE</Link>
    </div>
  );
}



export default User;