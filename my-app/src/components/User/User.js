
import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = (props) => {
    const {name, image, email,_id} = props.user

  return (
    <div>
        <h1>{name}</h1>
        <img src={image}  className="img"/>
        <p>{email}</p>
        <Link to={`/users/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
    </div>
  );
}

export default User;