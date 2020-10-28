
import React from 'react';
import './User.css'

const User = (props) => {
    const {name, image, email} = props.user

  return (
    <div>
        <h1>{name}</h1>
        <img src={image}  className="img"/>
        <p>{email}</p>
    </div>
  );
}

export default User;