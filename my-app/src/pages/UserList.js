import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import User from '../components/User/User'

const UserList = () => {
    const [users, setUsers] = useState([]);



    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users)
          })

    },[users])

function displayUser(userData){
   return userData.map(user =>{
       return <User user={user}  key={user._id}/>
   })
   
}
    

    return (
    <div className="container">
            {displayUser(users)}
            
    </div>
    );
}



export default UserList;



