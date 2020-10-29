
import React from 'react';
import { Link} from 'react-router-dom';
import UserModel from '../../models/UserModel'
import UserList from '../../pages/UserList'
import './User.css'

const User = (props) => {
    const {name, image, email,_id } = props.user
    
    function deleteUser(){
     UserModel.destroy(_id)
    }

  return (
    <div>
        <h1>{name}</h1>
        <img src={image}  className="img"/>
        <p>{email}</p>
        <Link to={`/users/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
        <Link to={`/`} style={{color: 'black'}}  onClick={deleteUser}>DELETE</Link>
    </div>
  );
}



export default User;