import React from 'react'
import { useState , useEffect} from "react";
import UserModel from '../models/UserModel'
import User from '../components/User/User'
import TaskList from '../components/Tasks/TaskList'


const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(function(){
        UserModel.all().then((data) => {
           setUsers(data.users)
          })

          

    },[])


    // function deleteUser(event){
    //     event.preventDefault();
    //     UserModel.destroy().then(data =>{
    //         const users = users.filter((user) => {
    //             return user._id !== data._id;
    //           });
              
    //           setUsers(users)
              
    //         }
    //     );
    //   }






function displayUser(userData){
   return userData.map(user =>{
       return <User user={user}  key={user._id}/>
   })
   
}
 
    


return (
    <div className="container">
            {displayUser(users)}
            <TaskList />
          
            
    </div>
    );
}


export default UserList;










