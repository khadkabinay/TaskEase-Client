import React from 'react';
import {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import UserModel from "../../models/UserModel";
import { useRecoilState } from "recoil"
import { userState } from "../../recoil/atoms";
import './Header.css';




const Header = (props) => {
    const [user, setUser] = useRecoilState(userState)

    
  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.all().then((response) => {
        setUser(response.data)
      })
    }

  }, []);


  function logOut(){
      setUser(null)
      localStorage.clear()
  }

    return (
        <header >
            {user ? (
            <div  >
                 <ul className="header">
                     <li><NavLink to='/users'>Admin Page</NavLink></li>    
                     <li><NavLink to='/' onClick={logOut}>Log Out</NavLink></li>    
                 </ul>
                
            </div>


            ) :(
                <div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <NavLink to={"/login"}>Login</NavLink> 
                     <li><NavLink to='/register'>Sign Up</NavLink></li>
                </div>
            ) }
        
        </header>
    )
}

export default Header;


