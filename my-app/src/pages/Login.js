import React, { useState } from "react";
import AuthModel from "../models/AuthModel";
import UserModel from "../models/UserModel";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const setUser = useSetRecoilState(userState);


  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.login({ email, password }).then((response) => {
        if (response.status !== 200) {
            setError(response.message)
          }else{
              localStorage.setItem("uid", response.signedJwt);
              UserModel.all().then((response) => {
                setUser(response.data);
                props.history.push("/users");
              });

            
          }
    });
  }



  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
           
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

        <input type='submit' value='Login' />
      </form>
    </div>
  );
}

export default Login;
