import React, { useState } from "react";
import UserModel from "../models/UserModel";


function NewUser(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumer] = useState("")
  const [role, setRole] = useState("");


  function handleSubmit(event) {
    event.preventDefault();

    UserModel.create({ name, username, email,image,password,phoneNumber,role }).then(
      (data) => {
        props.history.push("/users");
      }
    );
  }

  return (
    <div>
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div >
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div >
          <label htmlFor='image'>Image</label>
          <input
            type='text'
            name='image'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div >
          <label htmlFor='phoneNumber'>phoneNumber</label>
          <input
            type='text'
            name='phoneNumber'
            onChange={(e) => setPhoneNumer(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div >
          <label htmlFor='role'>Role</label>
          <input
            type='text'
            name='role'
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
        </div>

        <input type='submit' value="Create An Account" />
      </form>
    </div>
  );
}

export default NewUser;