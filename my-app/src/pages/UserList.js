import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import User from '../components/User/User'
import TaskList from '../components/Tasks/TaskList'
import NewTask from '../components/Tasks/NewTask';




const UserList = (props) => {
    const [users, setUsers] = useState([]);
    // const [foundUser, setFoundUser] = useState([]);


    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users)
           
          })
        

    },[])
    




function displayUser(userData){
   return userData.map(user =>{
       return <User user={user}  key={user._id}/>
     
       
   })
   
}
 
    
return (
    <div className="container">
            {displayUser(users)}
            {/* <NewTask /> */}
            <TaskList />

          
            
    </div>
    );
}


export default UserList;










